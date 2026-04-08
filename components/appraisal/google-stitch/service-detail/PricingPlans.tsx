"use client"

import React from 'react'

export const PricingPlans = () => (
    <section className="bg-[#ffffff] py-24" dir="rtl">
        <div className="max-w-7xl mx-auto px-8 text-center">
            <h2 className="text-3xl font-bold text-[#041534] mb-4">خطط الأسعار</h2>
            <p className="text-[#45464e] mb-16 max-w-xl mx-auto">اختر الخطة المناسبة لحجم وتنوع أصولك العقارية.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
                {/* Basic */}
                <div className="p-8 rounded-xl border border-[#c5c6cf] hover:border-[#006a66] transition-all flex flex-col">
                    <h3 className="text-xl font-bold text-[#041534] mb-2">الباقة الأساسية</h3>
                    <p className="text-sm text-[#45464e] mb-6">مناسبة للوحدات السكنية الصغيرة</p>
                    <div className="text-4xl font-black text-[#041534] mb-8">990 <span className="text-sm font-normal text-[#45464e]">ر.س</span></div>
                    <ul className="space-y-4 mb-10 flex-1">
                        <li className="flex items-center gap-2 text-sm text-[#191c1e]">
                            <span className="material-symbols-outlined text-[#006a66] text-sm align-middle">done</span>
                            تقرير لشقة أو فيلا واحدة
                        </li>
                        <li className="flex items-center gap-2 text-sm text-[#191c1e]">
                            <span className="material-symbols-outlined text-[#006a66] text-sm align-middle">done</span>
                            زيارة ميدانية واحدة
                        </li>
                        <li className="flex items-center gap-2 text-sm text-[#191c1e]">
                            <span className="material-symbols-outlined text-[#006a66] text-sm align-middle">done</span>
                            تسليم خلال 3 أيام عمل
                        </li>
                    </ul>
                    <button className="w-full py-3 border-2 border-[#041534] text-[#041534] font-bold rounded-lg hover:bg-[#041534] hover:text-white transition-all">اختر الباقة</button>
                </div>
                {/* Standard (Featured) */}
                <div className="p-8 rounded-xl bg-[#041534] text-white scale-105 shadow-2xl relative flex flex-col">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#006a66] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">الأكثر طلباً</div>
                    <h3 className="text-xl font-bold mb-2 text-white">الباقة المتقدمة</h3>
                    <p className="text-sm text-[#8392b7] mb-6">للعقارات التجارية والاستثمارية</p>
                    <div className="text-4xl font-black mb-8 text-white">2,450 <span className="text-sm font-normal text-[#8392b7]">ر.س</span></div>
                    <ul className="space-y-4 mb-10 flex-1">
                        <li className="flex items-center gap-2 text-sm">
                            <span className="material-symbols-outlined text-[#86f5ee] text-sm align-middle">done</span>
                            تقييم مجمعات تجارية أو أبراج
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                            <span className="material-symbols-outlined text-[#86f5ee] text-sm align-middle">done</span>
                            دراسة السوق التفصيلية
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                            <span className="material-symbols-outlined text-[#86f5ee] text-sm align-middle">done</span>
                            تحليل أعلى وأفضل استخدام
                        </li>
                    </ul>
                    <button className="w-full py-3 bg-[#006a66] text-white font-bold rounded-lg hover:opacity-90 transition-all shadow-lg">اختر الباقة</button>
                </div>
                {/* Premium */}
                <div className="p-8 rounded-xl border border-[#c5c6cf] hover:border-[#006a66] transition-all flex flex-col">
                    <h3 className="text-xl font-bold text-[#041534] mb-2">باقة المحافظ</h3>
                    <p className="text-sm text-[#45464e] mb-6">للمستثمرين والصناديق العقارية</p>
                    <div className="text-4xl font-black text-[#041534] mb-8">تواصل معنا</div>
                    <ul className="space-y-4 mb-10 flex-1">
                        <li className="flex items-center gap-2 text-sm text-[#191c1e]">
                            <span className="material-symbols-outlined text-[#006a66] text-sm align-middle">done</span>
                            تقييم محافظ عقارية كاملة
                        </li>
                        <li className="flex items-center gap-2 text-sm text-[#191c1e]">
                            <span className="material-symbols-outlined text-[#006a66] text-sm align-middle">done</span>
                            تحديث دوري ربع سنوي
                        </li>
                        <li className="flex items-center gap-2 text-sm text-[#191c1e]">
                            <span className="material-symbols-outlined text-[#006a66] text-sm align-middle">done</span>
                            مدير حساب مخصص
                        </li>
                    </ul>
                    <button className="w-full py-3 border-2 border-[#041534] text-[#041534] font-bold rounded-lg hover:bg-[#041534] hover:text-white transition-all">طلب عرض سعر</button>
                </div>
            </div>
        </div>
    </section>
)
