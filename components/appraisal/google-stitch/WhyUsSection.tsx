export default function WhyUsSection() {
    const items = [
        {
            title: "تقارير معتمدة",
            desc: 'متوافقة تماماً مع معايير "تقييم" السعودية.'
        },
        {
            title: "سرعة الاستجابة",
            desc: "نلتزم بجداول زمنية صارمة للتسليم."
        },
        {
            title: "مصداقية عالية",
            desc: "استقلالية تامة في كافة عمليات التقييم."
        },
        {
            title: "خبراء متخصصون",
            desc: "فريق من المقيمين المعتمدين دولياً."
        }
    ]

    return (
        <section className="bg-[#041534] py-24">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                <div className="space-y-8">

                    <h2 className="text-4xl font-extrabold text-white">
                        لماذا تختار أماكن للتقييم؟
                    </h2>

                    <p className="text-slate-300 text-lg">
                        نحن لا نقدم مجرد أرقام، بل نقدم رؤى استراتيجية مبنية
                        على بيانات دقيقة وخبرات عميقة في السوق السعودي.
                    </p>

                    <div className="grid grid-cols-2 gap-6">

                        {items.map((item, i) => (
                            <div
                                key={i}
                                className="p-6 bg-[#1b2a4a] rounded-2xl border border-white/10"
                            >
                                <h4 className="text-white font-bold mb-2">
                                    {item.title}
                                </h4>

                                <p className="text-slate-300 text-xs">
                                    {item.desc}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>

                <div>
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBObbasxqCOc0cxYXpAYFAWV_xjBPyKyRUOdczcHsPgdslc-dkSDRda9bfbROmlSQFV0X0fZtutYqAcLGG4svdvUiLOK8gGmMckhWJwVmBXuQW-zkumtmbq22Ubq5fSkOdUkWcCONmsPvHa5z0DRVuc63WHaMbSoqejDBSHCesv55KRz_K_ULYIwrEfN1oDPTdNeWean2Tjo5LcQSn3WrK1eUSktULUXN43OAJ5h8tmXj3dUF-6otSSTxCRIaC-w-O1-GNl8Cf_soQ"
                        className="rounded-3xl shadow-2xl"
                        alt="why us"
                    />
                </div>

            </div>
        </section>
    )
}