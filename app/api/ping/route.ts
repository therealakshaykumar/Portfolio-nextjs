// app/api/ping/route.ts
import { NextRequest, NextResponse } from "next/server";
import { UAParser } from "ua-parser-js";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfaJW0xnbCRYu8UVgvYrSAm5MMJUUeY-BXrCVuc1_LogU0qKQ/formResponse";
const recentIPs = new Set<string>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("cf-connecting-ip") || "Unknown";
    
    if (recentIPs.has(ip)) {
      return NextResponse.json({ message: "Already logged" });
    }

    recentIPs.add(ip);
    setTimeout(() => recentIPs.delete(ip), 3600000);
    const userAgent = req.headers.get("user-agent") || "Unknown";
    // const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "Unknown";

    const parser = new UAParser(userAgent);
    const os = parser.getOS().name || "Unknown";
    const device = parser.getDevice().model || parser.getDevice().type || "Desktop";
    
    
    const now = new Date();
    const year = now.getFullYear().toString();
    const month = (now.getMonth() + 1).toString(); 
    const day = now.getDate().toString();

    
    const formData = new URLSearchParams({
      "entry.1754130576": ip,                    
      "entry.2006041419": os,                    
      "entry.4814144": device,                   
      "entry.1298403173": userAgent,             
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

    console.log(`Visit logged: IP=${ip}, OS=${os}, Device=${device}, Status=${response.status}`);

    return NextResponse.json({ message: "OK" });
  } catch (error) {
    console.error("Failed to log visit:", error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}