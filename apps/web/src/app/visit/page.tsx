import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Phone, MessageCircle, Instagram, ArrowRight, CheckCircle2 } from "lucide-react";
import { BlurFade } from "@my-better-t-app/ui/components/blur-fade";

export const metadata: Metadata = {
    title: "Visit Us — Flora & Luxe",
    description:
        "Come see us in Anand, Gujarat. Find our store hours, address, map, and contact details for Flora & Luxe nursery.",
};

const hours = [
    { day: "Mon – Fri", time: "24 hours" },
    { day: "Saturday", time: "24 hours" },
    { day: "Sunday", time: "24 hours" },
];

const tips = [
    "Bring photos of your space or window light — we'll recommend the right plants",
    "Ask about our plant care clinic every Tuesday & Thursday",
    "We're pet friendly — bring your furry friend along",
    "No appointment needed — just walk in",
];

export default function VisitPage() {
    return (
        <main className="min-h-screen bg-white text-stone-800">

            {/* ── Hero ─────────────────────────────────────────────────────────── */}
            <section className="w-full bg-[#3d4a38] px-6 py-16 text-white">
                <div className="mx-auto max-w-3xl text-center">
                    <BlurFade delay={0.1} inView>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/60">
                            Flora &amp; Luxe · Anand, Gujarat
                        </p>
                        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                            Come visit us.
                        </h1>
                        <p className="mt-4 text-base text-white/75 leading-relaxed max-w-xl mx-auto">
                            We&rsquo;re a local nursery in Anand where you can explore plants, get honest advice,
                            and find something that will actually thrive in your home.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <a
                                href="https://wa.me/919724739315"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
                            >
                                <MessageCircle className="h-4 w-4" />
                                Message Us on WhatsApp
                            </a>
                            <a
                                href="tel:+919724739315"
                                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                            >
                                <Phone className="h-4 w-4" />
                                Call Us
                            </a>
                        </div>
                    </BlurFade>
                </div>
            </section>

            {/* ── Main content ─────────────────────────────────────────────────── */}
            <section className="mx-auto max-w-7xl px-6 pt-24 pb-16">
                <div className="grid gap-12 md:grid-cols-2">

                    {/* Left — Map + Address */}
                    <BlurFade delay={0.15} inView>
                        <div>
                            <h2 className="mb-5 text-xl font-bold text-stone-800">Find Us</h2>
                            <div className="overflow-hidden rounded-2xl border border-stone-200 mb-5">
                                <iframe
                                    title="Flora & Luxe Location"
                                    src="https://www.openstreetmap.org/export/embed.html?bbox=72.9189%2C22.5545%2C72.9389%2C22.5745&layer=mapnik&marker=22.5645%2C72.9289"
                                    width="100%"
                                    height="280"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex items-start gap-3 text-sm text-stone-600">
                                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                                <div>
                                    <p className="font-semibold text-stone-800 text-base">Flora &amp; Luxe</p>
                                    <p className="mt-1">Ground Floor, Shop No. G-6 &amp; Anand</p>
                                    <p>Aakaar City Centre, Lambhvel Rd</p>
                                    <p>Opp. Zydus Hospital, Anand</p>
                                    <p>Gujarat 388001</p>
                                </div>
                            </div>
                            <p className="mt-3 ml-8 text-xs text-green-600 font-medium">🐾 Pet Friendly!</p>

                            {/* Contact */}
                            <div className="mt-8 space-y-3">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500">
                                    Contact
                                </h3>
                                <a
                                    href="tel:+919724739315"
                                    className="flex items-center gap-2.5 text-sm text-stone-700 hover:text-orange-500 transition-colors"
                                >
                                    <Phone className="h-4 w-4 text-orange-500" />
                                    +91 97247 39315
                                </a>
                                <a
                                    href="https://wa.me/919724739315"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 text-sm text-stone-700 hover:text-green-600 transition-colors"
                                >
                                    <MessageCircle className="h-4 w-4 text-green-500" />
                                    WhatsApp
                                </a>
                                <a
                                    href="https://www.instagram.com/flora_and_luxe/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 text-sm text-stone-700 hover:text-pink-500 transition-colors"
                                >
                                    <Instagram className="h-4 w-4 text-pink-500" />
                                    @flora_and_luxe
                                </a>
                            </div>
                        </div>
                    </BlurFade>

                    {/* Right — Hours + Tips */}
                    <BlurFade delay={0.25} inView>
                        <div className="space-y-10">

                            {/* Hours */}
                            <div>
                                <h2 className="mb-5 text-xl font-bold text-stone-800">Store Hours</h2>
                                <div className="rounded-2xl border border-stone-200 overflow-hidden">
                                    <table className="w-full text-sm">
                                        <tbody>
                                            {hours.map(({ day, time }, i) => (
                                                <tr
                                                    key={day}
                                                    className={`flex items-center justify-between px-5 py-3.5 ${i !== hours.length - 1 ? "border-b border-stone-100" : ""
                                                        }`}
                                                >
                                                    <td className="text-stone-500">{day}</td>
                                                    <td className="font-semibold text-stone-800">{time}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Tips */}
                            <div>
                                <h2 className="mb-5 text-xl font-bold text-stone-800">Before You Come In</h2>
                                <ul className="space-y-3">
                                    {tips.map((tip) => (
                                        <li key={tip} className="flex items-start gap-3 text-sm text-stone-600">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                                            {tip}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA strip */}
                            <div className="rounded-2xl bg-stone-50 border border-stone-200 p-6">
                                <p className="text-sm font-semibold text-stone-800 mb-1">
                                    Not sure what plants suit your home?
                                </p>
                                <p className="text-xs text-stone-500 mb-4 leading-relaxed">
                                    Send us a photo of your room or balcony on WhatsApp and we&rsquo;ll suggest the right plants before you visit.
                                </p>
                                <a
                                    href="https://wa.me/919724739315"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                                >
                                    Ask for Plant Advice <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>

                        </div>
                    </BlurFade>
                </div>
            </section>

        </main>
    );
}
