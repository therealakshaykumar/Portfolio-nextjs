import { NextRequest, NextResponse } from "next/server";
import { UAParser } from "ua-parser-js";

const recentIPs = new Set<string>();

const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfaJW0xnbCRYu8UVgvYrSAm5MMJUUeY-BXrCVuc1_LogU0qKQ/formResponse";

export async function POST(req: NextRequest) {
  try {
    const ip = 
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
      req.headers.get("cf-connecting-ip") || 
      "Unknown";
    
    if (recentIPs.has(ip)) {
      return NextResponse.json({ message: "Already logged" });
    }

    recentIPs.add(ip);
    setTimeout(() => recentIPs.delete(ip), 3600000);

    const userAgent = req.headers.get("user-agent") || "Unknown";
    const referer = req.headers.get("referer") || "Direct / PDF Link";

    const country = req.headers.get("x-vercel-ip-country") || req.headers.get("cf-ipcountry") || "Unknown";
    const city = req.headers.get("x-vercel-ip-city") || "Unknown";
    
    const parser = new UAParser(userAgent);
    
    const osName = parser.getOS().name || "Unknown";
    const osVersion = parser.getOS().version || "";
    const fullOS = `${osName} ${osVersion}`.trim();

    const browserName = parser.getBrowser().name || "Unknown";
    const browserVersion = parser.getBrowser().version || "";
    const fullBrowser = `${browserName} ${browserVersion}`.trim();

    const deviceDetails = parser.getDevice();
    const deviceVendor = deviceDetails.vendor || "Generic";
    const deviceModel = deviceDetails.model || "Unknown Model";
    const deviceType = deviceDetails.type || "Desktop";

    const fullDeviceHardware = deviceType === "Desktop" 
      ? "Desktop PC" 
      : `${deviceVendor} ${deviceModel} (${deviceType})`;

    const now = new Date();
    const year = now.getFullYear().toString();
    const month = (now.getMonth() + 1).toString(); 
    const day = now.getDate().toString();

    const formData = new URLSearchParams({
      "entry.1754130576": ip,                    
      "entry.2006041419": fullOS,                    
      "entry.4814144": fullDeviceHardware,                   
      "entry.1298403173": userAgent,             
      "entry.1513450065": fullBrowser,
      "entry.1203675912": referer,
      "entry.504539741": country,
      "entry.1469150982": city,
      "entry.44228844_year": year,               
      "entry.44228844_month": month,             
      "entry.44228844_day": day,   
    });

    const response = await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    console.log(`Portfolio visit logged successfully! Status: ${response.status}`);

    return NextResponse.json({ message: "OK" });
  } catch (error) {
    console.error("Failed to log visit data securely:", error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}