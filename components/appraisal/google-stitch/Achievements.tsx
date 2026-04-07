export default function Achievements() {
    const items = [
        { label: "قيمة الأصول المقيمة", value: "500B+ SAR" },
        { label: "رضا العملاء", value: "98%" },
        { label: "تغطية جغرافية", value: "100%" },
        { label: "جوائز تميز", value: "12" }
    ]

    return (
        <section className="py-24 bg-[#f8f9fb]">

            <div className="container mx-auto px-6">

                <h2 className="text-3xl font-extrabold text-[#041534] text-center mb-16">
                    إنجازاتنا في أرقام
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-xl border-t-4 border-[#006A66] shadow-sm text-center"
                        >
                            <span className="text-sm font-bold text-gray-400 block mb-2">
                                {item.label}
                            </span>

                            <span className="text-3xl font-black text-[#041534]">
                                {item.value}
                            </span>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}