import ServiceCard from "./ServiceCard"

export default function ServicesSection() {
    return (
        <section className="py-24 container mx-auto px-6">

            <div className="grid md:grid-cols-3 gap-8">

                <ServiceCard
                    icon={<span className="text-5xl">🏢</span>}
                    title="التقييم العقاري"
                    description="تقييم الأراضي والمجمعات السكنية بدقة."
                    href="/appraisal/services/real-estate"
                />

                <ServiceCard
                    icon={<span className="text-5xl">⚙️</span>}
                    title="تقييم الآلات"
                    description="تثمين خطوط الإنتاج والآلات الصناعية."
                    href="/appraisal/services/machinery"
                />

                <ServiceCard
                    icon={<span className="text-5xl">🏭</span>}
                    title="تقييم المنشآت"
                    description="دراسة القيمة السوقية للمنشآت."
                    href="/appraisal/services/facilities"
                />

            </div>

        </section>
    )
}