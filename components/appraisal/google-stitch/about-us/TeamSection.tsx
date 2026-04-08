"use client"

import React from 'react'

export const TeamSection = () => (
    <section className="py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
            <div className="mb-16">
                <h2 className="text-[#041534] text-3xl font-bold mb-4">قادتنا وخبراؤنا</h2>
                <p className="text-[#45464e]">نخبة من الكفاءات الوطنية والخبرات العالمية</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* Member 1 */}
                <div className="group">
                    <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/5]">
                        <img
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            alt="Professional portrait of a middle-eastern male executive"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_y0rsyo3-lKCfymsvo6V-SKLsAg0rgZQ9RdyRaypjHn1jDNcJfoodSu-6lA_8HP3XAeYtLoYVxBH-KEZyNmNEdyIMT7_Tr4y8UqPOSWJaSbBtteMHneU-ewkrVRvDQSf34_Vrk3Eug6DdiREIKOA3_E8J_AxznXOksATQ69yrJjuoPx1sXZOi4MmUuhR-C-dB0WfQWL8w-f-6yaVD_7c9s_FIxaQgiPO1MbDb173UB3CdeCn98PYCMJ5SR4_QKAqy9719EkOiZrI"
                        />
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-2 rounded shadow-lg">
                            <a className="text-[#041534] hover:text-[#006a66]" href="#"><span className="material-symbols-outlined align-middle">link</span> LinkedIn</a>
                        </div>
                    </div>
                    <h3 className="text-[#041534] text-xl font-bold">م. فهد القحطاني</h3>
                    <p className="text-[#006a66] font-medium text-sm mb-2">الرئيس التنفيذي</p>
                    <p className="text-[#45464e] text-sm leading-relaxed">خبرة تزيد عن 20 عاماً في الاستثمار العقاري والتقييم الفني في السوق السعودي.</p>
                </div>
                {/* Member 2 */}
                <div className="group">
                    <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/5]">
                        <img
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            alt="Portrait of a professional middle-eastern female executive"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWOnOBIe02ef6_BayVMsS5nQR3XdiZsjdWY4jZsSjddYKOKsPbRmbdDzHTppIDfQlgKmLgyPhFROJaLI9ABsHWXAzj5jZGnnUdIAW_7TI-3tici4sYfEu4Is_vjjDE6LVVwKKw1hQxPISw13JbYjW3xJHLw-rOpU1VqEfCE9Ko30kutHuaxQJczv6KNg2F35QbQ-w5dmmZgQ9fumvp2PL7m9CNhRnM8tzBnhqF5ymGC1b2WmxYxPVFHPc8CzjUhQTUiE0kasd5wlw"
                        />
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-2 rounded shadow-lg">
                            <a className="text-[#041534] hover:text-[#006a66]" href="#"><span className="material-symbols-outlined align-middle">link</span> LinkedIn</a>
                        </div>
                    </div>
                    <h3 className="text-[#041534] text-xl font-bold">أ. سارة المنصور</h3>
                    <p className="text-[#006a66] font-medium text-sm mb-2">مديرة قسم الدراسات والبحوث</p>
                    <p className="text-[#45464e] text-sm leading-relaxed">متخصصة في تحليل البيانات العقارية والتنبؤ باتجاهات السوق السكني والتجاري.</p>
                </div>
                {/* Member 3 */}
                <div className="group">
                    <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/5]">
                        <img
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            alt="Portrait of a senior male professional"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAehtgJH7iAds4rC-bDh69kpPdHjmmo6A4nGzGDZDqSycbFb2o4rKkwlnvhSOR23pBSbMMNc6Ll1kGoIxrPcSuVSwjLavDTdqffI8EsM7M0BkJ6z2ak2QDbFZV3-Nvc2LIYqeBg8YevdaEHCEIbkPAIWVDjApFVkBI9Vt2xRNV9V6gc0_xvIVPu_fxNmlgGpkmEcomfGE_X8BE9W4aLSpd1bbY1ZNRRgkV7N9Mbl6UGXrZ_El1pWxlJX0zDk_TGEu5hKD5RFvVpODI"
                        />
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-2 rounded shadow-lg">
                            <a className="text-[#041534] hover:text-[#006a66]" href="#"><span className="material-symbols-outlined align-middle">link</span> LinkedIn</a>
                        </div>
                    </div>
                    <h3 className="text-[#041534] text-xl font-bold">د. إبراهيم العتيبي</h3>
                    <p className="text-[#006a66] font-medium text-sm mb-2">كبير المقيمين المعتمدين</p>
                    <p className="text-[#45464e] text-sm leading-relaxed">زميل الهيئة السعودية للمقيمين المعتمدين وخبير في تقييم المنشآت الاقتصادية الكبرى.</p>
                </div>
            </div>
        </div>
    </section>
)
