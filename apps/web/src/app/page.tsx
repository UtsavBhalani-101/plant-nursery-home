import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, MapPin, Phone, MessageCircle, Instagram } from "lucide-react";
import { Badge } from "@my-better-t-app/ui/components/badge";
import { AnimatedShinyText } from "@my-better-t-app/ui/components/animated-shiny-text";
import { BlurFade } from "@my-better-t-app/ui/components/blur-fade";

// ─── Data ────────────────────────────────────────────────────────────────────

const weekEvents = [
  {
    id: 1,
    badge: "BEST-OF",
    badgeColor: "bg-orange-500",
    title: "Repotting 101",
    subtitle: "Saturday · Fernridge Farm",
    description:
      "Bring your most distressed plant. We'll diagnose the root cause and provide the right soil mix. Step-by-step demo included.",
    image: "/event-repotting.png",
  },
  {
    id: 2,
    badge: "JUST ARRIVED",
    badgeColor: "bg-green-600",
    title: "Fresh Monstera Arrivals",
    subtitle: "In stock now",
    description:
      "Three new Monstera varieties just landed. These beauties won't last — our humidity room is open to the public Thursday–Saturday.",
    image: "/event-monstera.png",
  },
  {
    id: 3,
    badge: "SALE",
    badgeColor: "bg-blue-500",
    title: "Soil Science Talk",
    subtitle: "Sunday · Free · No RSVP needed",
    description:
      "Our soil specialist breaks down why drainage matters and which mixes work best for indoor plants. Coffee provided.",
    image: "/event-soil.png",
  },
];

const clinicServices = [
  "Fertilization plans & treatment plans",
  "Repotting services for large plants",
  "Recommended & custom soil for you",
];

const hours = [
  { day: "Mon – Fri", time: "24 hours" },
  { day: "Saturday", time: "24 hours" },
  { day: "Sunday", time: "24 hours" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-stone-800">

      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="relative h-[580px] w-full overflow-hidden">
        <Image
          src="/hero.png"
          alt="Lush greenhouse interior at Flora & Luxe"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <BlurFade delay={0.1} inView>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Plants for real homes,<br />not just pretty photos.
            </h1>
          </BlurFade>
          <BlurFade delay={0.25} inView>
            <p className="mt-4 max-w-xl text-base text-white/85 leading-relaxed">
              Get guidance from people who grow and care for these plants every day.
            </p>
          </BlurFade>
          <BlurFade delay={0.4} inView>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link
                href="/visit"
                className="flex items-center gap-2 rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
              >
                🌿 Plan Your Visit
              </Link>

            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── 2. This Week at the Nursery ─────────────────────────────────── */}
      <section id="workshops" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-stone-800">
            This Week at the Nursery
          </h2>
          <p className="mt-1 text-sm text-stone-500">
            Workshops, fresh arrivals, and community gatherings.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {weekEvents.map((event, i) => (
            <BlurFade key={event.id} delay={0.1 * i} inView>
              <div className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white ${event.badgeColor}`}
                  >
                    {event.badge}
                  </span>
                </div>
                {/* Content */}
                <div className="p-4">
                  <p className="mb-1 text-xs font-medium text-stone-400 uppercase tracking-wider">
                    {event.subtitle}
                  </p>
                  <h3 className="text-base font-bold text-stone-800">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-500 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ── 3. Personal Plant Advice ─────────────────────────────────────── */}
      <section className="w-full bg-[#3d4a38] px-6 py-20 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl font-bold md:text-4xl leading-snug">
              Not sure which plant will<br />work in your home?
            </h2>
            <p className="mt-5 text-base text-white/75 leading-relaxed">
              Show us your room, balcony, or window light and we&rsquo;ll recommend
              plants that will actually grow there.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/visit"
                className="rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
              >
                Ask for Plant Advice
              </Link>
              <a
                href="https://wa.me/919724739315"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
              >
                Message Us Before You Buy
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── 4. From Wilted to Wonderful ─────────────────────────────────── */}
      <section id="plant-clinic" className="mx-auto max-w-7xl px-6 py-20">
        <BlurFade delay={0.1} inView>
          <p className="mb-1 text-center text-xs font-semibold uppercase tracking-widest text-orange-500">
            Local Success Stories
          </p>
          <h2 className="mb-2 text-center text-2xl font-bold text-stone-800">
            From Wilted to Wonderful
          </h2>
          <p className="mx-auto mb-12 max-w-lg text-center text-sm text-stone-500">
            See how our community members revived their green friends with a little help
            from our Plant Clinic.
          </p>
        </BlurFade>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Before / After images */}
          <BlurFade delay={0.2} inView>
            <div className="flex items-center gap-4">
              <div className="relative flex-1 overflow-hidden rounded-2xl border border-stone-200">
                <span className="absolute left-2 top-2 z-10 rounded bg-stone-800/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  Before
                </span>
                <Image
                  src="/plant-before.png"
                  alt="Wilted plant before Plant Clinic"
                  width={300}
                  height={350}
                  className="h-72 w-full object-cover"
                />
              </div>
              <ArrowRight className="h-6 w-6 shrink-0 text-stone-400" />
              <div className="relative flex-1 overflow-hidden rounded-2xl border border-stone-200">
                <span className="absolute left-2 top-2 z-10 rounded bg-green-600/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  After
                </span>
                <Image
                  src="/plant-after.png"
                  alt="Healthy plant after Plant Clinic"
                  width={300}
                  height={350}
                  className="h-72 w-full object-cover"
                />
              </div>
            </div>
          </BlurFade>

          {/* Plant Clinic info */}
          <BlurFade delay={0.35} inView>
            <div className="space-y-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <span className="text-lg">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-stone-800">
                Have a plant in distress?
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Don&rsquo;t give up. Our &ldquo;Plant Doctors&rdquo; are in every Tuesday and
                Thursday. Bring photos or a small clipping in a sealed bag,
                or come in for a diagnosis.
              </p>
              <ul className="space-y-2.5">
                {clinicServices.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-stone-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                    {s}
                  </li>
                ))}
              </ul>
              <Link
                href="#plant-clinic"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
              >
                Learn more about the Clinic <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── 5. Footer ───────────────────────────────────────────────────── */}
      <footer id="visit" className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-10 md:grid-cols-3">

            {/* Column 1 – Visit Us */}
            <div>
              <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-stone-700">
                Visit Us
              </h4>
              {/* Map placeholder */}
              <div className="mb-3 overflow-hidden rounded-xl border border-stone-200">
                <iframe
                  title="Nursery Location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=72.9189%2C22.5545%2C72.9389%2C22.5745&layer=mapnik&marker=22.5645%2C72.9289"
                  width="100%"
                  height="140"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
              <div className="flex items-start gap-2 text-sm text-stone-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                <div>
                  <p className="font-semibold text-stone-800">Flora &amp; Luxe</p>
                  <p>Ground Floor, Shop No. G-6 &amp; Anand</p>
                  <p>Aakaar City Centre, Lambhvel Rd</p>
                  <p>Opp. Zydus Hospital, Anand</p>
                  <p>Gujarat 388001</p>
                </div>
              </div>
              <p className="mt-2 ml-6 text-xs text-green-600 font-medium">🐾 Pet Friendly!</p>
            </div>

            {/* Column 2 – Open Hours */}
            <div>
              <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-stone-700">
                Open Hours
              </h4>
              <table className="w-full text-sm">
                <tbody>
                  {hours.map(({ day, time }) => (
                    <tr key={day} className="border-b border-stone-100 last:border-0">
                      <td className="py-2 pr-4 text-stone-500">{day}</td>
                      <td className="py-2 font-medium text-stone-800">{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Column 3 – Get in Touch */}
            <div>
              <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-stone-700">
                Get in Touch
              </h4>
              <p className="mb-1 text-xs text-stone-400">Questions? Give us a call.</p>
              <a
                href="tel:+919724739315"
                className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors"
              >
                +91 97247 39315
              </a>
              <div className="mt-5 flex gap-3">
                <a
                  href="https://wa.me/"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-500 hover:text-green-500 hover:border-green-300 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/flora_and_luxe/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-500 hover:text-pink-500 hover:border-pink-300 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-200 px-6 py-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <p className="text-xs text-stone-400">
              © 2026 Flora &amp; Luxe. Locally grown.
            </p>
            <div className="flex gap-4 text-xs text-stone-400">
              <Link href="#" className="hover:text-stone-600 transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-stone-600 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
