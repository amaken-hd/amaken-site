"use client"

import React from 'react'

const related = [
    { icon: "analytics", title: "دراسات الجدوى", desc: "تحليل شامل للمشاريع العقارية قبل التنفيذ." },
    { icon: "corporate_fare", title: "إدارة الأملاك", desc: "تعظيم عوائدك العقارية من خلال إدارة محترفة." },
    { icon: "storefront", title: "التسويق العقاري", desc: "الوصول للعميل المستهدف بأفضل الوسائل الرقمية." },
    { icon: "engineering", title: "فحص المباني", desc: "تقرير فني متكامل عن الحالة الإنشائية للعقار." }
]

export const RelatedServices = () => (
    <section className="max-w-7xl mx-auto px-8 py-24 border-t border-[#edeef0]" dir="rtl">
        <div className="flex justify-between items-end mb-12 text-right">
            <h2 className="text-2xl font-bold text-[#041534]">خدمات أخرى قد تهمك</h2>
            <a className="text-[#006a66] font-bold flex items-center gap-1 group" href="#">
                عرض جميع الخدمات
                <span className="material-symbols-outlined group-hover:translate-x-[-4px] transition-transform align-middle">arrow_back</span>
            </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-right">
            {related.map((service, idx) => (
                <div key={idx} className="bg-[#ffffff] p-6 rounded-xl hover:bg-[#f2f4f6] transition-colors group cursor-pointer shadow-sm">
                    <span className="material-symbols-outlined text-[#041534] mb-4 block group-hover:text-[#006a66] align-middle">{service.icon}</span>
                    <h4 className="font-bold mb-2 text-[#041534]">{service.title}</h4>
                    <p className="text-xs text-[#45464e]">{service.desc}</p>
                </div>
            ))}
        </div>
    </section>
)
