"use client"

import React from 'react'

export const ServiceCTA = () => (
    <section className="max-w-7xl mx-auto px-8 py-16" dir="rtl">
        <div className="bg-gradient-to-r from-[#041534] to-[#1b2a4a] p-12 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8 text-right">
            <div className="space-y-4 text-center md:text-right">
                <h2 className="text-3xl font-extrabold">هل أنت مستعد لبدء تقييم عقارك؟</h2>
                <p className="text-[#8392b7] text-lg">فريقنا جاهز لمساعدتك في الحصول على أدق قيمة لأصولك.</p>
            </div>
            <button className="px-10 py-5 bg-[#006a66] text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">ابدأ طلب التقييم الآن</button>
        </div>
    </section>
)
