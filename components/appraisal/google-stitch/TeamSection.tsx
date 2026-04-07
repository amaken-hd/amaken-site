export default function TeamSection() {
    const members = [
        { name: "م. عبدالله منصور", role: "كبير مقيمي العقارات" },
        { name: "أ. سارة الحربي", role: "مديرة الجودة والامتثال" },
        { name: "د. فيصل العتيبي", role: "مقيم منشآت معتمد" },
        { name: "م. خالد القحطاني", role: "مقيم آلات ومعدات" }
    ]

    return (
        <section className="py-24 bg-gray-100">

            <div className="container mx-auto px-6">

                <h2 className="text-4xl font-extrabold text-center text-[#041534] mb-16">
                    نخبة من المقيمين المعتمدين
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {members.map((m, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-lg p-6 text-center"
                        >
                            <h4 className="text-xl font-bold text-[#041534]">
                                {m.name}
                            </h4>

                            <p className="text-[#006A66] text-sm">
                                {m.role}
                            </p>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}