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
        title: `${guide.name} — Flora & Luxe`,
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
            <div className="mx-auto max-w-6xl px-4 pt-24 pb-16 md:px-6">
                <div className="grid gap-8 md:grid-cols-[1fr_320px] lg:gap-12 lg:grid-cols-[1fr_340px]">
                    {/* ── LEFT COLUMN ─────────────────────────────────────────────── */}
                    <div className="flex flex-col gap-12">
                        {/* Header Section */}
                        <div className="flex flex-col gap-5">
                            {/* Hero card */}
                            <BlurFade delay={0.05} inView>
                                <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-sm sm:flex-row sm:p-8 sm:items-center">
                                    <div className="relative h-48 w-full sm:h-40 sm:w-40 shrink-0 overflow-hidden rounded-2xl bg-stone-50 border border-stone-100">
                                        <Image
                                            src={guide.image}
                                            alt={guide.name}
                                            fill
                                            className="object-cover transition-transform duration-500 hover:scale-105"
                                            priority
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h1 className="text-2xl font-extrabold tracking-tight text-stone-900 md:text-3xl">
                                            {guide.name.replace(" Care Guide", "")}
                                        </h1>
                                        <p className="mt-3 text-base font-medium text-stone-600 sm:text-lg">{guide.subtitle}</p>
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {guide.badges.map((b) => (
                                                <span
                                                    key={b.label}
                                                    className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-sm border border-black/5 ${b.color}`}
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
                                <div className="relative rounded-2xl bg-white/60 p-6 text-center shadow-sm border border-stone-200/60 backdrop-blur-sm">
                                    <p className="text-sm font-medium italic text-stone-600 md:text-base">
                                        "{guide.quote}"
                                    </p>
                                </div>
                            </BlurFade>

                            {/* Quick Summary */}
                            <BlurFade delay={0.12} inView>
                                <div className="grid grid-cols-3 gap-2 rounded-2xl bg-white p-5 shadow-sm border border-stone-100 md:gap-4 md:p-6">
                                    <div className="flex flex-col items-center gap-1.5 text-center">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-50 text-yellow-600 text-lg">☀️</span>
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Light</p>
                                        <p className="text-xs font-bold text-stone-800 md:text-sm">{guide.quickSummary.light}</p>
                                    </div>
                                    <div className="flex flex-col items-center gap-1.5 border-x border-stone-100 px-2 text-center">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 text-lg">💧</span>
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Water</p>
                                        <p className="text-xs font-bold text-stone-800 md:text-sm">{guide.quickSummary.water}</p>
                                    </div>
                                    <div className="flex flex-col items-center gap-1.5 text-center">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-50 text-stone-600 text-lg">🌱</span>
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Difficulty</p>
                                        <p className="text-xs font-bold text-stone-800 md:text-sm">{guide.quickSummary.difficulty}</p>
                                    </div>
                                </div>
                            </BlurFade>
                        </div>

                        {/* Standard Care Section */}
                        <div className="flex flex-col gap-6">
                            {/* Standard Care heading */}
                            <BlurFade delay={0.15} inView>
                                <div className="flex items-center gap-3 border-b border-stone-200 pb-3">
                                    <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#3a7d34]/10">
                                        <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-[#3a7d34] opacity-40"></span>
                                        <span className="relative inline-flex h-3 w-3 rounded-full bg-[#3a7d34]"></span>
                                    </span>
                                    <h2 className="text-2xl font-bold tracking-tight text-stone-800">Standard Care</h2>
                                </div>
                            </BlurFade>

                            {/* Care cards */}
                            <div className="flex flex-col gap-4">
                                {guide.careCards.map((card, i) => (
                                    <BlurFade key={card.title} delay={0.2 + i * 0.1} inView>
                                        <div className="rounded-2xl border border-stone-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                                            <div className="mb-5 flex items-center gap-3">
                                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3a7d34]/10 text-2xl shadow-inner border border-[#3a7d34]/10">
                                                    {card.icon}
                                                </span>
                                                <h3 className="text-lg font-bold text-stone-800">{card.title}</h3>
                                            </div>
                                            <ul className="space-y-3 pl-1">
                                                {card.tips.map((tip) => (
                                                    <li key={tip} className="flex items-start gap-3 text-sm font-medium text-stone-600 md:text-base">
                                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3a7d34]" />
                                                        <span className="leading-relaxed">{tip}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            {card.warning && (
                                                <div className="mt-6 flex items-start gap-3 rounded-xl bg-amber-50/80 px-5 py-4 text-sm font-medium text-amber-800 border border-amber-200/50">
                                                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                                                    <span className="leading-relaxed">{card.warning}</span>
                                                </div>
                                            )}
                                        </div>
                                    </BlurFade>
                                ))}
                            </div>
                        </div>

                        {/* Troubleshooting Section */}
                        <div className="flex flex-col gap-6">
                            {/* Troubleshooting heading */}
                            <BlurFade delay={0.4} inView>
                                <div className="flex items-center gap-3 border-b border-stone-200 pb-3">
                                    <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-red-100">
                                        <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-red-500 opacity-40"></span>
                                        <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
                                    </span>
                                    <h2 className="text-2xl font-bold tracking-tight text-stone-800">Troubleshooting</h2>
                                </div>
                            </BlurFade>

                            {/* Troubleshooting grid */}
                            <BlurFade delay={0.45} inView>
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {guide.troubleshooting.map((t) => (
                                        <div key={t.problem} className="flex h-full flex-col rounded-2xl border border-stone-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                                            <p className="mb-5 text-base font-bold text-[#3a7d34]">{t.problem}</p>
                                            
                                            <div className="flex flex-1 flex-col gap-4">
                                                <div className="flex-1">
                                                    <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-stone-400">Reason</p>
                                                    <p className="text-sm font-medium leading-relaxed text-stone-600">{t.reason}</p>
                                                </div>
                                                <Separator className="bg-stone-100" />
                                                <div className="flex-1">
                                                    <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-stone-400">Solution</p>
                                                    <p className="text-sm font-medium leading-relaxed text-stone-600">{t.solution}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </BlurFade>
                        </div>

                        {/* Summary Section */}
                        <div className="flex flex-col gap-6 pt-4 border-t border-stone-100">
                            <BlurFade delay={0.48} inView>
                                <div className="rounded-2xl bg-stone-50/50 p-6 sm:p-8">
                                    <h3 className="mb-3 text-lg font-bold text-stone-800">Plant Summary</h3>
                                    <p className="text-sm font-medium leading-relaxed text-stone-600 md:text-base">
                                        {guide.description}
                                    </p>
                                </div>
                            </BlurFade>
                        </div>

                        {/* Support Section */}
                        <div className="flex flex-col gap-6 pt-4">
                            {/* WhatsApp nudge */}
                            <BlurFade delay={0.5} inView>
                                <p className="text-center text-sm font-medium italic text-stone-500">
                                    If you&rsquo;re unsure what&rsquo;s happening,{" "}
                                    <a
                                        href="https://wa.me/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-bold text-[#3a7d34] underline decoration-transparent underline-offset-4 transition-all hover:decoration-[#3a7d34]"
                                    >
                                        message us on WhatsApp
                                    </a>{" "}
                                    and we&rsquo;ll help.
                                </p>
                            </BlurFade>

                            {/* Still need assistance CTA */}
                            <BlurFade delay={0.55} inView>
                                <div className="rounded-3xl bg-[#3a7d34] px-6 py-10 text-center shadow-lg sm:px-10">
                                    <h3 className="text-2xl font-bold text-white">
                                        Still need assistance?
                                    </h3>
                                    <p className="mx-auto mt-4 max-w-md text-sm font-medium text-green-50/90 md:text-base">
                                        Our plant experts are available daily to help you diagnose
                                        issues or give personalized advice.
                                    </p>
                                    <a
                                        href="https://wa.me/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#3a7d34] shadow-sm transition-transform hover:scale-105"
                                    >
                                        <MessageCircle className="h-5 w-5" />
                                        Ask Us on WhatsApp
                                    </a>
                                </div>
                            </BlurFade>

                            {/* Footer line */}
                            <p className="pb-6 text-center text-xs font-medium text-stone-400">
                                © 2026 Flora & Luxe Garden Center. All rights reserved.
                            </p>
                        </div>
                    </div>

                    {/* ── RIGHT SIDEBAR ────────────────────────────────────────────── */}
                    <aside className="static md:sticky md:top-28 md:h-fit">
                        <BlurFade delay={0.1} inView>
                            <div className="rounded-3xl border border-stone-200/60 bg-white p-6 shadow-sm">
                                <div className="mb-6 flex items-center gap-3 border-b border-stone-100 pb-4">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-100/80 text-lg">📚</span>
                                    <h2 className="text-lg font-bold text-stone-800">More Guides</h2>
                                </div>
                                <div className="flex flex-col gap-2">
                                    {otherPlants.map((p) => (
                                        <Link
                                            key={p.slug}
                                            href={`/guides/${p.slug}`}
                                            className="group flex items-center gap-4 rounded-2xl p-2 transition-all hover:bg-stone-50"
                                        >
                                            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-stone-100 border border-stone-100">
                                                <Image
                                                    src={p.image}
                                                    alt={p.name}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="truncate text-sm font-bold text-stone-800 transition-colors group-hover:text-[#3a7d34]">
                                                    {p.name.replace(" Care Guide", "")}
                                                </p>
                                                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-stone-400">
                                                    {p.badges[0]?.label}
                                                </p>
                                            </div>
                                            <ChevronRight className="h-4 w-4 shrink-0 text-stone-300 transition-colors group-hover:text-[#3a7d34]" />
                                        </Link>
                                    ))}
                                </div>

                                <Separator className="my-6 bg-stone-100" />

                                <div className="rounded-2xl bg-stone-50 p-5 text-center">
                                    <p className="mb-4 text-xs font-bold uppercase tracking-wider text-stone-500">
                                        New plants arrive weekly!
                                    </p>
                                    <Link
                                        href="/"
                                        className="block w-full rounded-full bg-[#3a7d34] border border-[#3a7d34] py-2.5 text-center text-sm font-bold text-white shadow-sm transition-all hover:bg-[#2d6228] hover:border-[#2d6228]"
                                    >
                                        View Full Shop
                                    </Link>
                                </div>
                            </div>
                        </BlurFade>
                    </aside>
                </div>
            </div>
        </main>
    );
}
