"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"; // Assuming standard shadcn path
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useI18n } from "@/lib/i18n/context";
import { UnitData } from "./types";
import { Move, Bed, Bath, CheckCircle } from "lucide-react";

interface UnitInterestModalProps {
    unit: UnitData | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function UnitInterestModal({ unit, open, onOpenChange }: UnitInterestModalProps) {
    const { dictionary, locale } = useI18n();
    const t = (dictionary as any).projectsPage;
    const tUnits = t.units;
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Submit logic
        setTimeout(() => {
            setSubmitted(false);
            onOpenChange(false);
        }, 2000);
    };

    if (!unit) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                <div className="grid grid-cols-1">
                    {/* Unit Preview */}
                    <div className="relative h-48 bg-zinc-100 dark:bg-zinc-800">
                        <img
                            src={unit.image || "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"}
                            alt={unit.name[locale]}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <h3 className="text-white text-xl font-bold">{unit.name[locale]}</h3>
                            <div className="flex gap-4 text-white/90 text-sm mt-1">
                                <span className="flex items-center gap-1"><Move className="w-3 h-3" /> {unit.area} {tUnits.area}</span>
                                <span className="flex items-center gap-1"><Bed className="w-3 h-3" /> {unit.rooms} {tUnits.rooms}</span>
                                <span className="flex items-center gap-1"><Bath className="w-3 h-3" /> {unit.bathrooms} {tUnits.bathrooms}</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        <DialogHeader className="mb-4">
                            <DialogTitle>{t.form.title}</DialogTitle>
                        </DialogHeader>

                        {submitted ? (
                            <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in duration-300">
                                <div className="w-16 h-16 bg-group-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle className="w-8 h-8 text-group-primary" />
                                </div>
                                <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 italic">{t.form.success}</h4>
                                <p className="text-zinc-500 dark:text-zinc-400">Our team will be in touch shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="modal-name">{t.form.name}</Label>
                                    <Input id="modal-name" required placeholder={t.form.name} className="bg-zinc-50 dark:bg-zinc-800 focus-visible:ring-group-primary" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="modal-email">{t.form.email}</Label>
                                        <Input id="modal-email" type="email" required placeholder={t.form.email} className="bg-zinc-50 dark:bg-zinc-800 focus-visible:ring-group-primary" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="modal-phone">{t.form.phone}</Label>
                                        <Input id="modal-phone" type="tel" required placeholder={t.form.phone} className="bg-zinc-50 dark:bg-zinc-800 focus-visible:ring-group-primary" />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#A28B67' }}
                                    className="w-full text-white mt-4 h-12 text-lg font-bold shadow-lg shadow-[#A28B67]/20 hover:opacity-90 transition-all active:scale-[0.98]"
                                >
                                    {t.form.submit}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
