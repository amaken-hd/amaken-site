import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
    color?: string;
}

export function Footer({ color }: FooterProps) {
    return (
        <footer
            id="contact"
            className="border-t border-white/10 pt-10 pb-5 text-white relative overflow-hidden"
            style={{ backgroundColor: color || "black" }}
        >
            {/* Pattern overlay */}
            <div className="absolute inset-0 z-0 opacity-10"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
            ></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-5">

                    {/* Brand */}
                    <div>
                        <Link href="/" className="text-3xl font-bold tracking-tighter text-white block mb-6">
                            AMAKEN
                        </Link>
                        <p className="text-white/70 mb-6">
                            Leading the way in real estate excellence. We build your dreams into reality.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="#" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Projects</Link></li>
                            <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Property Development</Link></li>
                            <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Real Estate Management</Link></li>
                            <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Consultancy</Link></li>
                            <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Marketing</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 text-white/70">
                                <MapPin className="text-white mt-1 shrink-0" size={20} />
                                <span>123 Business Bay,<br />Riyadh, Saudi Arabia</span>
                            </li>

                            <li className="flex items-center gap-4 text-white/70">

                                <Phone className="text-white shrink-0" size={20} />

                                <a href="tel:+966920003401">
                                    <span className="hover:text-white transition-colors">+966 920003401</span></a>
                            </li>

                            <li className="flex items-center gap-4 text-white/70">
                                <Mail className="text-white shrink-0" size={20} />
                                <span className="hover:text-white transition-colors">info@goamaken.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
                    <p>&copy; {new Date().getFullYear()} Amaken International Group. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
