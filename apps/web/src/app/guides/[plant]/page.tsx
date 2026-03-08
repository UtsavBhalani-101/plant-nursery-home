import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, AlertTriangle, MessageCircle } from "lucide-react";
import { allPlants, plantsBySlug } from "./plant-data";
import { BlurFade } from "@my-better-t-app/ui/components/blur-fade";
import { Separator } from "@my-better-t-app/ui/components/separator";

// ─── Static params ────────────────────────────────────────────────────────────
export function generateStaticParams() {
    return allPlants.map((p) => ({ plant: p.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ plant: string }>;
}) {
    const { plant } = await params;
    const guide = plantsBySlug[plant];
    if (!guide) return {};
    return {
        title: `${guide.name} — Nursery Home`,
        description: guide.subtitle,
    };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function PlantGuidePage({
    params,
}: {
    params: Promise<{ plant: string }>;
}) {
    const { plant } = await params;
    const guide = plantsBySlug[plant];
    if (!guide) notFound();

    const otherPlants = allPlants.filter((p) => p.slug !== guide.slug);

    return (
        <main className="min-h-screen bg-[#f7f6f3]">
            <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
                <div className="grid gap-8 md:grid-cols-[1fr_300px]">

                    {/* ── LEFT COLUMN ─────────────────────────────────────────────── */}
                    <div className="space-y-6">

                        {/* Hero card */}
                        <BlurFade delay={0.05} inView>
                            <div className="flex gap-5 rounded-2xl bg-white p-5 shadow-sm">
                                <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-xl bg-stone-50">
                                    <Image
                                        src={guide.image}
                                        alt={guide.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h1 className="text-2xl font-bold leading-snug text-stone-800">
                                        {guide.name}
                                    </h1>
                                    <p className="mt-1 text-sm text-stone-500">{guide.subtitle}</p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {guide.badges.map((b) => (
                                            <span
                                                key={b.label}
                                                className={`rounded-full px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${b.color}`}
                                            >
                                                {b.label}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </BlurFade>

                        {/* Quote */}
                        <BlurFade delay={0.1} inView>
                            <p className="rounded-xl bg-white px-5 py-4 text-sm italic text-stone-500 shadow-sm">
                                {guide.quote}
                            </p>
                        </BlurFade>

                        {/* Standard Care heading */}
                        <BlurFade delay={0.15} inView>
                            <div className="flex items-center gap-2">
                                <span className="text-orange-500">🛡️</span>
                                <h2 className="text-lg font-bold text-stone-800">Standard Care</h2>
                            </div>
                        </BlurFade>

                        {/* Care cards */}
                        {guide.careCards.map((card, i) => (
                            <BlurFade key={card.title} delay={0.2 + i * 0.1} inView>
                                <div className="rounded-2xl bg-white p-5 shadow-sm space-y-3">
                                    <div className="flex items-center gap-2">
                                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-xl">
                                            {card.icon}
                                        </span>
                                        <h3 className="font-semibold text-stone-800">{card.title}</h3>
                                    </div>
                                    <ul className="space-y-1.5">
                                        {card.tips.map((tip) => (
                                            <li key={tip} className="flex items-start gap-2 text-sm text-stone-600">
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                                                {tip}
                                            </li>
                                        ))}
                                    </ul>
                                    {card.warning && (
                                        <div className="flex items-start gap-2 rounded-lg bg-orange-50 px-4 py-3 text-sm text-orange-700">
                                            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                                            {card.warning}
                                        </div>
                                    )}
                                </div>
                            </BlurFade>
                        ))}

                        {/* Troubleshooting heading */}
                        <BlurFade delay={0.4} inView>
                            <div className="flex items-center gap-2 pt-2">
                                <span className="text-orange-600">🔸</span>
                                <h2 className="text-lg font-bold text-stone-800">Troubleshooting</h2>
                            </div>
                        </BlurFade>

                        {/* Troubleshooting grid */}
                        <BlurFade delay={0.45} inView>
                            <div className="grid gap-4 sm:grid-cols-3">
                                {guide.troubleshooting.map((t) => (
                                    <div key={t.problem} className="rounded-2xl bg-white p-4 shadow-sm space-y-2">
                                        <p className="font-semibold text-orange-600">{t.problem}</p>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Reason</p>
                                            <p className="text-sm text-stone-600">{t.reason}</p>
                                        </div>
                                        <Separator className="my-1" />
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Solution</p>
                                            <p className="text-sm text-stone-600">{t.solution}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </BlurFade>

                        {/* WhatsApp nudge */}
                        <BlurFade delay={0.5} inView>
                            <p className="text-center text-sm italic text-stone-400">
                                If you&rsquo;re unsure what&rsquo;s happening,{" "}
                                <a
                                    href="https://wa.me/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-500 underline hover:text-orange-600"
                                >
                                    message us on WhatsApp
                                </a>{" "}
                                and we&rsquo;ll help.
                            </p>
                        </BlurFade>

                        {/* Still need assistance CTA */}
                        <BlurFade delay={0.55} inView>
                            <div className="rounded-2xl bg-orange-50 p-8 text-center shadow-sm">
                                <h3 className="text-xl font-bold text-stone-800">
                                    Still need assistance?
                                </h3>
                                <p className="mt-2 text-sm text-stone-500">
                                    Our plant experts are available daily to help you diagnose
                                    issues or give personalized advice.
                                </p>
                                <a
                                    href="https://wa.me/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                    Ask Us on WhatsApp
                                </a>
                            </div>
                        </BlurFade>

                        {/* Footer line */}
                        <p className="pb-6 text-center text-xs text-stone-400">
                            © 2024 PlantNursery Local Garden Center. All rights reserved.
                        </p>
                    </div>

                    {/* ── RIGHT SIDEBAR ────────────────────────────────────────────── */}
                    <aside className="space-y-4">
                        <BlurFade delay={0.1} inView>
                            <div className="rounded-2xl bg-white p-5 shadow-sm">
                                <div className="mb-4 flex items-center gap-2">
                                    <span>📚</span>
                                    <h2 className="font-bold text-stone-800">More Guides</h2>
                                </div>
                                <div className="space-y-3">
                                    {otherPlants.map((p) => (
                                        <Link
                                            key={p.slug}
                                            href={`/guides/${p.slug}`}
                                            className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-stone-50 group"
                                        >
                                            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-stone-100">
                                                <Image
                                                    src={p.image}
                                                    alt={p.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="truncate text-sm font-semibold text-stone-800 group-hover:text-orange-600 transition-colors">
                                                    {p.name.replace(" Care Guide", "")}
                                                </p>
                                                <p className="text-[11px] uppercase tracking-wider text-stone-400">
                                                    {p.badges[0]?.label}
                                                </p>
                                            </div>
                                            <ChevronRight className="h-4 w-4 shrink-0 text-stone-300 group-hover:text-orange-400 transition-colors" />
                                        </Link>
                                    ))}
                                </div>

                                <Separator className="my-4" />

                                <p className="mb-3 text-center text-xs text-stone-400">
                                    New plants arrive weekly!
                                </p>
                                <Link
                                    href="/"
                                    className="block w-full rounded-full border border-orange-500 py-2 text-center text-sm font-semibold text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
                                >
                                    View Full Shop
                                </Link>
                            </div>
                        </BlurFade>
                    </aside>

                </div>
            </div>
        </main>
    );
}
