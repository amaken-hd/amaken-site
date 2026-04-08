import ServiceCard from "./ServiceCard"

export default function ServicesSection() {
    return (
        <section className="py-24 container mx-auto px-6">

            <div className="grid md:grid-cols-3 gap-8">

                <ServiceCard
                    icon="🏢"
                    title="التقييم العقاري"
                    description="تقييم الأراضي والمجمعات السكنية بدقة."
                />

                <ServiceCard
                    icon="⚙️"
                    title="تقييم الآلات"
                    description="تثمين خطوط الإنتاج والآلات الصناعية."
                />

                <ServiceCard
                    icon="🏭"
                    title="تقييم المنشآت"
                    description="دراسة القيمة السوقية للمنشآت."
                />

            </div>

        </section>
    )
}