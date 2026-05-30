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
    setTimeout(() => recentIPs.delete(ip), 3_600_000);

    const userAgent = req.headers.get("user-agent") || "Unknown";

    const uaFullVersionList = req.headers.get("sec-ch-ua");
    const uaPlatform        = req.headers.get("sec-ch-ua-platform")?.replace(/"/g, "");
    const uaPlatformVersion = req.headers.get("sec-ch-ua-platform-version")?.replace(/"/g, "");
    const uaMobile          = req.headers.get("sec-ch-ua-mobile");
    const uaModel           = req.headers.get("sec-ch-ua-model")?.replace(/"/g, "");
    const uaArch            = req.headers.get("sec-ch-ua-arch")?.replace(/"/g, "");

    const parser = new UAParser({
      "user-agent": userAgent,
      ...(uaFullVersionList && { "sec-ch-ua": uaFullVersionList }),
      ...(uaPlatform        && { "sec-ch-ua-platform": uaPlatform }),
      ...(uaPlatformVersion && { "sec-ch-ua-platform-version": uaPlatformVersion }),
      ...(uaMobile          && { "sec-ch-ua-mobile": uaMobile }),
      ...(uaModel           && { "sec-ch-ua-model": uaModel }),
      ...(uaArch            && { "sec-ch-ua-arch": uaArch }),
    });

    const result = parser.getResult();

    const osName    = uaPlatform || result.os.name    || "Unknown";
    const osVersion = uaPlatformVersion || result.os.version || "";
    const fullOS    = `${osName} ${osVersion}`.trim();

    const fullBrowser = `${result.browser.name || "Unknown"} ${result.browser.version || ""}`.trim();

    const deviceType   = result.device.type   || (uaMobile === "?1" ? "mobile" : "desktop");
    const deviceVendor = result.device.vendor || "Unknown";
    const deviceModel  = uaModel || result.device.model || "Unknown";
    const fullDevice   =
      deviceType === "desktop"
        ? `Desktop${uaArch ? ` (${uaArch})` : ""}`
        : `${deviceVendor} ${deviceModel} (${deviceType})`.trim();

    const engineName    = result.engine.name    || "Unknown";
    const engineVersion = result.engine.version || "";
    const cpuArch       = uaArch || result.cpu.architecture || "Unknown";

    const country  = req.headers.get("x-vercel-ip-country")         || req.headers.get("cf-ipcountry") || "Unknown";
    const region   = req.headers.get("x-vercel-ip-country-region")  || "Unknown";
    const city     = req.headers.get("x-vercel-ip-city")            || req.headers.get("cf-ipcity")    || "Unknown";
    const timezone = req.headers.get("x-vercel-ip-timezone")        || "Unknown";
    const latitude = req.headers.get("x-vercel-ip-latitude")        || "";
    const longitude= req.headers.get("x-vercel-ip-longitude")       || "";
    const coords   = latitude && longitude ? `${latitude}, ${longitude}` : "Unknown";
    const isp      = req.headers.get("x-vercel-ip-autonomous-system-org")    || "Unknown";
    const asn      = req.headers.get("x-vercel-ip-autonomous-system-number") || "Unknown";

    const referer  = req.headers.get("referer")         || "Direct / PDF Link";
    const language = req.headers.get("accept-language")?.split(",")[0] || "Unknown";
    const scheme   = req.headers.get("x-forwarded-proto") || "https";

    const now   = new Date();
    const year  = now.getFullYear().toString();
    const month = (now.getMonth() + 1).toString();
    const day   = now.getDate().toString();

    const formData = new URLSearchParams({
      "entry.1513450065": fullBrowser,
      "entry.1754130576": ip,
      "entry.2006041419": fullOS,
      "entry.4814144":    fullDevice,
      "entry.1298403173": userAgent,
      "entry.1203675912": referer,
      "entry.504539741":  country,
      "entry.1469150982": city,
      "entry.1106029588": timezone,
      "entry.1611318520": coords,
      "entry.319064860":  isp,
      "entry.1528114509": asn,
      "entry.632418518":  language,
      "entry.564506859":  `${engineName} ${engineVersion}`.trim(),
      "entry.598690502":  cpuArch,
      "entry.1457731238": scheme,
      "entry.44228844_year":  year,
      "entry.44228844_month": month,
      "entry.44228844_day":   day,
    });

    await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    });

    return NextResponse.json({ message: "OK" });
  } catch (error) {
    console.error("Failed to log visit:", error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}