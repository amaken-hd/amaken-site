export default function ReportsSection() {
    return (
        <section className="py-24 container mx-auto px-6">

            <div className="flex flex-col md:flex-row items-center gap-16">

                <div className="flex-1">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdyLjpZiCMiInGDi1Ssbk_yNm4hu6hmdVnyGq3__iy5JHJ3dIzD11NqNesIZ8qUJ35nMv-sx7EgYNb5VOrIwViUw_-UMiCJMG5oZ9a1YagJzJdmoRKDcpxZUncWrSqJV6qsy0vTZam3lBTFDmNm5ZjMcYWqXz4uOPDjBPzSNHzJV0W1eVVPbagWk_rYinQAEQEVmexJ4SvxhpM2F7Vd5i49A9M8v2na-xbnq9HaZvtg7aBzQXMF92GnSdwPzXNtwTgWWZ62FlQFe4"
                        className="rounded-3xl shadow-2xl w-full"
                        alt="report"
                    />
                </div>

                <div className="flex-1 space-y-8">

                    <h2 className="text-5xl font-extrabold text-[#041534]">
                        تقارير مخصصة لكل قطاع
                    </h2>

                    <p className="text-gray-600 text-lg">
                        نطور نماذج تقارير ذكية تلبي احتياجات البنوك
                        وشركات التطوير العقاري والمستثمرين.
                    </p>

                    <button className="bg-[#041534] text-white px-8 py-4 rounded-xl font-bold">
                        عرض نموذج تقرير
                    </button>

                </div>

            </div>

        </section>
    )
}