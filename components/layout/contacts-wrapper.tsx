"use client";

import { usePathname } from "next/navigation";
import { WhatsAppContact } from "@/components/ui/whatsapp-contact";
import SupportChat from "@/components/ui/support-chat";
import { CallIcon } from "@/components/ui/call-icon";

export default function ContactsWrapper() {
    const pathname = usePathname();

    // Define colors for each section
    const colors = {
        group: "#A28B67",
        appraisal: "#1b9d98",
        consultation: "#EFD447",
        default: "#000000",
        whatsappDefault: "#25D366",
    };

    let color = colors.default;
    let whatsappColor = colors.whatsappDefault;

    if (pathname?.startsWith("/group")) {
        color = colors.group;
        whatsappColor = colors.group;
    } else if (pathname?.startsWith("/appraisal")) {
        color = colors.appraisal;
        whatsappColor = colors.appraisal;
    } else if (pathname?.startsWith("/consultation")) {
        color = colors.consultation;
        whatsappColor = colors.consultation;
    }

    return (
        <>
            <WhatsAppContact color={whatsappColor} />
            <SupportChat color={color} />
            <CallIcon color={color} />
        </>
    );
}
