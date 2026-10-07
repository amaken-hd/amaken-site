import { useState, useEffect } from "react";

export interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

/**
 * Robust date parser for ERPNext formats (handles cases like 9:5:1.123 and YYYY-MM-DD)
 */
export const getTargetDate = (dateStr: string) => {
    if (!dateStr) return null;
    try {
        // If it's already a clean ISO string, use it
        if (dateStr.includes('T') && dateStr.split('T')[1].split(':').every(part => part.length >= 2)) {
            return new Date(dateStr);
        }

        // Otherwise, normalize (e.g. 2026-05-03T9:0:0 -> 2026-05-03T09:00:00)
        const [datePart, timePart] = dateStr.trim().split('T');
        if (!timePart) return new Date(datePart.trim());

        const timeComponents = timePart.trim().split(':');
        const normalizedTime = timeComponents.map((comp, i) => {
            const cleaned = comp.trim();
            if (i === 2) { // Seconds + Millis
                const [s, m] = cleaned.split('.');
                return `${(s || '00').padStart(2, '0')}${m ? '.' + m : ''}`;
            }
            return (cleaned || '00').padStart(2, '0');
        }).join(':');

        const isoStr = `${datePart.trim()}T${normalizedTime}`;
        const finalDate = new Date(isoStr);
        return finalDate;
    } catch (e) {
        console.error("Date parsing error:", e);
        return new Date(dateStr);
    }
};

export function useCountdown(targetDateInput?: string | Date | null, status?: string) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

    useEffect(() => {
        const isEnded = status?.toLowerCase().includes("ended") || status?.toLowerCase().includes("منتهي");

        if (isEnded || !targetDateInput) {
            setTimeLeft(null);
            return;
        }

        const calculateTimeLeft = () => {
            const tDate = targetDateInput instanceof Date ? targetDateInput : getTargetDate(targetDateInput);
            if (!tDate || isNaN(tDate.getTime())) return null;

            const difference = +tDate - +new Date();

            if (difference <= 0) {
                return null;
            }

            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            const tl = calculateTimeLeft();
            setTimeLeft(tl);
            if (!tl) {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDateInput, status]);

    return timeLeft;
}

