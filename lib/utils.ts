import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a time string (HH:mm:ss) into a local 12-hour format with AM/PM.
 */
export function formatAuctionTime(timeStr: string, locale: string) {
  if (!timeStr) return "";

  // ERPNext time format is usually HH:mm:ss
  const [hoursStr, minutesStr] = timeStr.split(':');
  if (!hoursStr || !minutesStr) return timeStr;

  let hours = parseInt(hoursStr, 10);
  const minutes = minutesStr.padStart(2, '0');

  const isPM = hours >= 12;
  const hours12 = hours % 12 || 12;

  if (locale === 'ar') {
    const amPm = isPM ? "مساءً" : "صباحاً";
    return `${hours12}:${minutes} ${amPm}`;
  } else {
    const amPm = isPM ? "PM" : "AM";
    return `${hours12}:${minutes} ${amPm}`;
  }
}

/**
 * Normalizes date and time strings into a reliable Date object.
 */
export function parseAuctionDateTime(dateStr?: string, timeStr?: string, defaultEndOfDay = false): Date | null {
  if (!dateStr) return null;

  try {
    const cleanDate = dateStr.trim().split('T')[0];
    let cleanTime = timeStr ? timeStr.trim() : (defaultEndOfDay ? "23:59:59" : "00:00:00");

    // Normalize time components: e.g. "9:0:0" -> "09:00:00"
    const parts = cleanTime.split(':');
    const h = (parts[0] || "00").padStart(2, '0');
    const m = (parts[1] || "00").padStart(2, '0');
    let s = parts[2] || "00";
    if (s.includes('.')) {
      const [sec, ms] = s.split('.');
      s = `${sec.padStart(2, '0')}.${ms}`;
    } else {
      s = s.padStart(2, '0');
    }

    const isoString = `${cleanDate}T${h}:${m}:${s}`;
    const dateObj = new Date(isoString);
    return isNaN(dateObj.getTime()) ? null : dateObj;
  } catch {
    return null;
  }
}

export type AuctionDynamicStatus = "upcoming" | "current" | "ended";

/**
 * Dynamically computes auction status and countdown target based on current real time.
 */
export function getAuctionDynamicStatus(auction: {
  expected_start_date?: string;
  custom_expected_start_time?: string;
  expected_end_date?: string;
  custom_expected_end_time?: string;
  status?: string;
}): {
  status: AuctionDynamicStatus;
  targetDate: Date | null;
  startDate: Date | null;
  endDate: Date | null;
} {
  const now = new Date();

  const startDate = parseAuctionDateTime(auction.expected_start_date, auction.custom_expected_start_time, false);
  const endDate = parseAuctionDateTime(
    auction.expected_end_date || auction.expected_start_date,
    auction.custom_expected_end_time || (auction.expected_end_date ? "23:59:59" : auction.custom_expected_start_time),
    true
  );

  // If explicit status in ERPNext indicates closed/ended
  const rawStatus = (auction.status || "").toLowerCase();
  if (rawStatus.includes("ended") || rawStatus.includes("منتهي") || rawStatus.includes("closed") || rawStatus.includes("cancelled")) {
    return { status: "ended", targetDate: null, startDate, endDate };
  }

  if (endDate && now > endDate) {
    return { status: "ended", targetDate: null, startDate, endDate };
  }

  if (startDate && now < startDate) {
    return { status: "upcoming", targetDate: startDate, startDate, endDate };
  }

  if (startDate) {
    // Current / Ongoing: target is the end date
    return { status: "current", targetDate: endDate, startDate, endDate };
  }

  // Fallback to ERPNext status string if no valid dates
  if (rawStatus.includes("open") || rawStatus.includes("active") || rawStatus.includes("جاري")) {
    return { status: "current", targetDate: endDate, startDate, endDate };
  }

  return { status: "upcoming", targetDate: startDate, startDate, endDate };
}

