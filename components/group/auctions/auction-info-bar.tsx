"use client";

import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { Copy, MapPin } from "lucide-react";

interface AuctionInfoBarProps {
    title: string;
    date: string;
    time: string;
    days: number;
    productsCount: number;
}

export function AuctionInfoBar({ title, date, time, days, productsCount }: AuctionInfoBarProps) {
    const { t, locale } = useI18n();
    const isRTL = locale !== "en"; // Default to RTL layout for Arabic

    return (
        <div className="w-full bg-white mb-8" dir={isRTL ? "rtl" : "ltr"}>
            <div className="container mx-auto px-4 lg:px-8">



                {/* Stats Bar */}
                <div className="bg-[#fafafa] border border-gray-200 rounded-md mt-5 p-5 flex flex-col md:flex-row items-center justify-between shadow-sm">

                    {/* Text Details */}
                    <div className="flex flex-col text-sm text-gray-500 gap-2 mb-4 md:mb-0">
                        <div className="flex items-center gap-4">
                            <span className="w-20">أيام المزاد :</span>
                            <span className="font-semibold">{days}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="font-semibold">{date}</span>
                            <span className="font-semibold">{time}</span>
                        </div>

                    </div>

                    {/* Products Count */}
                    <div className="flex flex-col items-center justify-center p-3 px-6 bg-[#f4f4f4] border border-gray-200 rounded-md min-w-[120px] mb-4 md:mb-0">
                        <span className="text-xs text-gray-500 mb-1">عدد المنتجات</span>
                        <span className="text-xl font-bold text-[#A28B67]">{productsCount}</span>
                    </div>

                    {/* Countdown Timer */}
                    <div className="flex flex-col items-center mb-4 md:mb-0">
                        <span className="text-xs font-semibold text-gray-800 mb-2">يبدأ بعد</span>
                        <div className="flex gap-3 text-center" dir="ltr">
                            {/* Days */}
                            <div className="flex flex-col items-center">
                                <div className="flex gap-1 mb-1">
                                    <span className="bg-[#e9ecef] text-gray-800 font-bold px-1.5 py-0.5 rounded text-sm min-w-[20px] text-center">1</span>
                                    <span className="bg-[#e9ecef] text-gray-800 font-bold px-1.5 py-0.5 rounded text-sm min-w-[20px] text-center">0</span>
                                </div>
                                <span className="text-[10px] text-gray-500">يوم</span>
                            </div>

                            {/* Hours */}
                            <div className="flex flex-col items-center">
                                <div className="flex gap-1 mb-1">
                                    <span className="bg-[#e9ecef] text-gray-800 font-bold px-1.5 py-0.5 rounded text-sm min-w-[20px] text-center">1</span>
                                    <span className="bg-[#e9ecef] text-gray-800 font-bold px-1.5 py-0.5 rounded text-sm min-w-[20px] text-center">9</span>
                                </div>
                                <span className="text-[10px] text-gray-500">ساعة</span>
                            </div>

                            {/* Minutes */}
                            <div className="flex flex-col items-center">
                                <div className="flex gap-1 mb-1">
                                    <span className="bg-[#e9ecef] text-gray-800 font-bold px-1.5 py-0.5 rounded text-sm min-w-[20px] text-center">5</span>
                                    <span className="bg-[#e9ecef] text-gray-800 font-bold px-1.5 py-0.5 rounded text-sm min-w-[20px] text-center">6</span>
                                </div>
                                <span className="text-[10px] text-gray-500">دقيقة</span>
                            </div>

                            {/* Seconds */}
                            <div className="flex flex-col items-center">
                                <div className="flex gap-1 mb-1">
                                    <span className="bg-[#e9ecef] text-gray-800 font-bold px-1.5 py-0.5 rounded text-sm min-w-[20px] text-center">4</span>
                                    <span className="bg-[#e9ecef] text-gray-800 font-bold px-1.5 py-0.5 rounded text-sm min-w-[20px] text-center">9</span>
                                </div>
                                <span className="text-[10px] text-gray-500">ثانية</span>
                            </div>
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="flex gap-3 pb-3">
                        <Button className="bg-[#A28B67] hover:bg-[#8A7556] text-white rounded-full px-5 text-sm h-9">
                            بروشور المزاد
                        </Button>
                        <Button className="bg-[#A28B67] hover:bg-[#8A7556] text-white rounded-full px-5 text-sm h-9">
                            عرض الخريطة
                        </Button>
                    </div>
                    {/* Empty block on the far left to match screenshot alignment if needed, or flex justify-between handles it */}

                </div>
            </div>
        </div>
    );
}
