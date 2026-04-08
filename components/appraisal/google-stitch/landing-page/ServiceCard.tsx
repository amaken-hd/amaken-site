interface Props {
    icon: string
    title: string
    description: string
}

export default function ServiceCard({ icon, title, description }: Props) {
    return (
        <div className="group bg-white p-10 rounded-2xl border-l-0 border-[#006A66] hover:border-l-8 transition-all duration-300 shadow-sm flex flex-col justify-between min-h-[320px]">

            <div>
                <span className="text-5xl mb-6 block">{icon}</span>

                <h3 className="text-2xl font-bold text-[#041534] mb-4">
                    {title}
                </h3>

                <p className="text-gray-500 leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="mt-8 flex items-center text-[#006A66] font-bold gap-2 cursor-pointer">
                اقرأ المزيد
            </div>

        </div>
    )
}