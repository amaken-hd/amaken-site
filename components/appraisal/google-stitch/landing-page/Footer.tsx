export default function Footer() {
    return (
        <footer className="bg-[#041534] text-white py-12 px-8">

            <div className="grid md:grid-cols-3 gap-8">

                <div>
                    <h3 className="text-lg font-bold mb-4">
                        Amaken Appraisal
                    </h3>

                    <p className="text-slate-300 text-sm">
                        مؤسسة سعودية رائدة في مجال التقييم العقاري والصناعي.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-4">الروابط</h4>

                    <ul className="space-y-2 text-sm">
                        <li>الرئيسية</li>
                        <li>خدماتنا</li>
                        <li>عن أماكن</li>
                        <li>اتصل بنا</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4">
                        النشرة البريدية
                    </h4>

                    <div className="flex gap-2">

                        <input
                            className="px-4 py-2 rounded-lg text-black w-full"
                            placeholder="البريد الإلكتروني"
                        />

                        <button className="bg-[#006A66] px-4 py-2 rounded-lg">
                            اشترك
                        </button>

                    </div>
                </div>

            </div>

        </footer>
    )
}