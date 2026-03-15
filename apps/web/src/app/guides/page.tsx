import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { allPlants } from "./[plant]/plant-data";
import { BlurFade } from "@my-better-t-app/ui/components/blur-fade";

export const metadata = {
    title: "Plant Guides — Flora & Luxe",
    description:
        "Browse our collection of detailed plant care guides. Learn how to keep your plants healthy and thriving.",
};

export default function GuidesIndex() {
    return (
        <main className="min-h-screen bg-[#f7f6f3]">
            <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
                {/* Page header */}
                <BlurFade delay={0.05} inView>
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl font-bold text-stone-800 md:text-4xl">
                            🌿 Plant Care Guides
                        </h1>
                        <p className="mt-3 text-stone-500 text-sm md:text-base max-w-xl mx-auto">
                            Choose a plant below to get simple, practical care instructions — from
                            watering schedules to troubleshooting common problems.
                        </p>
                    </div>
                </BlurFade>

                {/* Plant cards grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {allPlants.map((plant, i) => (
                        <BlurFade key={plant.slug} delay={0.1 + i * 0.08} inView>
                            <Link
                                href={`/guides/${plant.slug}`}
                                className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                {/* Plant image */}
                                <div className="relative h-52 w-full overflow-hidden bg-stone-100">
                                    <Image
                                        src={plant.image}
                                        alt={plant.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Gradient overlay at bottom */}
                                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
                                </div>

                                {/* Card content */}
                                <div className="p-5 space-y-3">
                                    <div className="flex items-start justify-between gap-2">
                                        <h2 className="text-lg font-bold text-stone-800 group-hover:text-orange-600 transition-colors leading-snug">
                                            {plant.name.replace(" Care Guide", "")}
                                        </h2>
                                        <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-stone-300 group-hover:text-orange-500 transition-colors" />
                                    </div>

                                    <p className="text-sm text-stone-500 leading-relaxed line-clamp-2">
                                        {plant.subtitle}
                                    </p>

                                    {/* Badges */}
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {plant.badges.map((b) => (
                                            <span
                                                key={b.label}
                                                className={`rounded-full px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${b.color}`}
                                            >
                                                {b.label}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </BlurFade>
                    ))}
                </div>

                {/* Bottom message */}
                <BlurFade delay={0.5} inView>
                    <div className="mt-12 rounded-2xl bg-orange-50 p-8 text-center shadow-sm">
                        <p className="text-lg font-bold text-stone-800">
                            Don&rsquo;t see your plant here?
                        </p>
                        <p className="mt-2 text-sm text-stone-500">
                            We add new guides every week. Message us on WhatsApp and we&rsquo;ll
                            help you with personalized care tips.
                        </p>
                        <a
                            href="https://wa.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
                        >
                            Ask Us on WhatsApp
                        </a>
                    </div>
                </BlurFade>
            </div>
        </main>
    );
}
