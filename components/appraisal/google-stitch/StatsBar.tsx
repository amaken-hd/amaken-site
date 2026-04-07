export default function StatsBar() {
    const stats = [
        { value: "+100k", label: "تقارير منجزة" },
        { value: "+10", label: "سنوات الخبرة" },
        { value: "+50k", label: "عميل سعيد" },
        { value: "+3", label: "مدن رئيسية" }
    ]

    return (
        <div className="relative z-20 -mt-12 container mx-auto px-6">
            <div className="bg-[#006A66] p-8 rounded-2xl shadow-2xl flex flex-wrap justify-around items-center gap-8">

                {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                        <p className="text-4xl font-extrabold text-white">{stat.value}</p>
                        <p className="text-white/80 text-sm font-medium mt-1">{stat.label}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}