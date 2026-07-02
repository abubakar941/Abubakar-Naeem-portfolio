import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import portrait from "@/assets/portrait.jpg";
import heroCharacter from "@/assets/hero-character.png";
import globe from "@/assets/globe.png";
import watercolorAsset from "@/assets/watercolor.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abubakar-Naeem Designer Portfolio" },
      { name: "description", content: "A multidisciplinary designer crafting interfaces, brand systems and motion for ambitious teams." },
      { property: "og:title", content: "Abubakar-Naeem Designer Portfolio" },
      { property: "og:description", content: "A multidisciplinary designer crafting interfaces, brand systems and motion for ambitious teams." },
    ],
  }),
  component: Index,
});

const works = [
  {
    src: work1, title: "DAX-9 E-Bike", tag: "Product · 2025", span: "row-span-2",
    description: "This is a modern and futuristic e bike landing page design created to showcase electric mobility in a clean and stylish way. The design uses soft blue tones a minimal layout and a strong product focused composition to make the e bike stand out.",
    tech: ["Figma"],
  },
  {
    src: work2, title: "Intax Camera", tag: "Animation · 2025", span: "",
    description: "A friendly crypto wallet for first-time users — focused on clarity, soft gradients and confident microcopy.",
    tech: ["Figma", "Webflow"], demo: "https://www.instagram.com/reel/DZxr-f-q3Jt/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
  },
  {
    src: work3, title: "Sneaker Landing Page", tag: "Animation · 2025", span: "",
    description: "This is a modern and premium sneaker landing page design created for showcasing Nike Air Max shoes in a bold and stylish way. The design uses a dark background clean navigation large product image and blue accent color to create a sporty and futuristic look..",
    tech: ["Figma"], demo: "https://www.instagram.com/reel/DYx-XA0qKMX/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  },
  {
    src: work4, title: "Baan Identity", tag: "Brand · 2024", span: "row-span-2",
    description: "Brand identity system for a boutique hospitality studio — logo, type, social kit and a flexible photo treatment.",
    tech: ["Figma", "Canva", "Illustrator"], demo: "#",
  },
  {
    src: work5, title: "Destinations", tag: "travelling · 2025", span: "",
    description: "This is a clean and modern travel website gallery design created to showcase holiday destinations in a visually attractive way. The design features a grid style layout with destination images giving users a quick look at different travel experiences such as beaches mountains city tours desert rides and scenic locations.",
    tech: ["Figma"]
  },
  {
    src: work6, title: "Inaar Hospitality", tag: "Tourism Consultancy · 2024", span: "",
    description: "This is a premium and corporate-style website design created for a hospitality and tourism consultancy brand. The design uses a dark navy background luxury gold accents and modern geometric visuals to create a professional and elegant brand identity.",
    tech: ["Figma"]
  },
];

const services = [
  { n: "01", t: "Website Design", d: "I create modern clean and professional website designs with strong visual appeal." },
  { n: "02", t: "Brand & Identity", d: "Logos type systems and social kits crafted in Figma and Canva for fast moving teams." },
  { n: "03", t: "Motion & Animation", d: "Micro interactions loaders and product reels that bring static screens to life." },
  { n: "04", t: "Website Redesign", d: "I improve old websites by giving them a fresh, modern, and professional look." },
];

type Work = (typeof works)[number];

function Index() {
  const [activeWork, setActiveWork] = useState<Work | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div className="noise-bg min-h-screen text-foreground scroll-smooth">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
          <a href="#top" className="font-display text-lg font-bold tracking-[0.15em] sm:text-xl md:text-2xl">
            ABUBAKR
          </a>

          <ul className="hidden items-center justify-center gap-8 text-sm text-muted-foreground md:flex lg:gap-10">
            <li><a href="#work" className="text-foreground transition hover:text-accent">Work</a></li>
            <li><a href="#about" className="transition hover:text-foreground">About</a></li>
            <li><a href="#services" className="transition hover:text-foreground">Services</a></li>
            <li><a href="#contact" className="transition hover:text-foreground">Contacts</a></li>
          </ul>

          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition hover:opacity-90 sm:inline-flex">
              Let's talk
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
              className="grid h-10 w-10 place-items-center rounded-full border border-border/60 bg-card/70 text-foreground md:hidden"
            >
              <span className="text-xl leading-none">{isMenuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="border-t border-border/50 bg-background/95 px-4 py-4 md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-muted-foreground">
                {[
                  ["Work", "#work"],
                  ["About", "#about"],
                  ["Services", "#services"],
                  ["Contacts", "#contact"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-xl border border-border/50 bg-card/50 px-4 py-3 transition hover:text-foreground"
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl bg-accent px-4 py-3 text-left font-medium text-accent-foreground transition hover:opacity-90"
                >
                  Let's talk
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Vertical social rail */}
     <div className="fixed bottom-4 left-4 z-40 flex flex-row gap-4 rounded-full border border-border/60 bg-background/85 px-4 py-3 text-muted-foreground shadow-lg backdrop-blur md:bottom-auto md:left-auto md:right-4 md:top-1/2 md:-translate-y-1/2 md:flex-col md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0">
        <a
          href="https://www.instagram.com/design.by.bakar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-accent transition"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
        </a>

        <a
          href="https://wa.me/923186099092?text=Hi%20Abu%20Bakar%2C%20I%20visited%20your%20portfolio%20website."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:text-accent transition"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.52 3.48A11.8 11.8 0 0 0 12.05 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.36-1.67a11.87 11.87 0 0 0 5.69 1.45h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.4-8.44ZM12.06 21.78h-.01a9.84 9.84 0 0 1-5.02-1.38l-.36-.21-3.77.99 1.01-3.68-.24-.38a9.82 9.82 0 0 1-1.5-5.26c0-5.44 4.43-9.86 9.88-9.86a9.8 9.8 0 0 1 6.98 2.9 9.82 9.82 0 0 1 2.89 6.98c0 5.44-4.43 9.86-9.86 9.86Zm5.41-7.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/abubakar-webdesigner/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-accent transition"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8h4.56v14H.22V8Zm7.6 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.44h-4.56v-6.6c0-1.57-.03-3.6-2.19-3.6-2.19 0-2.52 1.71-2.52 3.49V22H7.82V8Z"/></svg>
        </a>
      </div>

      {/* Hero */}
      <section
        ref={heroRef}
        id="top"
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#07071F", minHeight: "calc(100svh - 65px)" }}
      >
        {/* Watercolor texture overlay — center/left, soft */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            backgroundImage: `url(${watercolorAsset.url})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "20% 55%",
            backgroundSize: "min(1400px, 95%) auto",
            opacity: 0.45,
            mixBlendMode: "screen",
            filter: "hue-rotate(210deg) saturate(0.8) brightness(0.85)",
          }}
        />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col px-4 sm:px-6 lg:px-10" style={{ minHeight: "calc(100svh - 65px)" }}>
          <div className="grid flex-1 grid-cols-1 items-center gap-8 pt-10 sm:pt-14 lg:grid-cols-[45%_55%] lg:pt-20">
            {/* Left */}
            <motion.div
              style={{ y: heroTextY }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="self-center py-10 text-left sm:py-12"
            >
              <p className="mb-5 text-sm text-muted-foreground sm:text-base md:text-lg">
                Hi, I'm Abubakar,
              </p>
              <h1 className="font-display text-[clamp(3rem,15vw,7.375rem)] font-bold uppercase tracking-tight" style={{ lineHeight: 0.98 }}>
                <span className="block text-white">I'M A WEB</span>
                <span className="block text-gradient">DESIGNER</span>
              </h1>
              <p className="mt-6 max-w-[520px] text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                I design and build modern clean and user friendly websites focused on simple design and smooth experiences that turn ideas into real products.
              </p>
              <a
                href="#work"
                className="group relative mt-8 inline-flex items-center gap-2 pb-1 font-display font-semibold text-foreground sm:mt-10"
              >
                <span>View My Projects →</span>
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-accent origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-500" />
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-accent origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" />
              </a>
            </motion.div>

            {/* Right — avatar anchored bottom-right */}
            <motion.div
              style={{ y: heroImageY }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative flex h-[360px] items-end justify-end self-end sm:h-[520px] lg:h-full"
            >
              <img
                src={heroCharacter}
                alt="Abubakar"
                className="block h-full max-h-[720px] max-w-full select-none object-contain"
                style={{ filter: "drop-shadow(0 40px 80px rgba(124,58,237,0.35))" }}
              />
            </motion.div>
          </div>

          {/* Marquee at bottom of hero */}
          <div className="relative overflow-hidden border-y border-white/10 py-4 sm:py-5">
            <div className="flex animate-marquee gap-8 whitespace-nowrap font-display text-base text-muted-foreground/70 sm:gap-12 sm:text-xl">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex gap-12 shrink-0">
                  {["Figma", "Canva", "After Effects", "Rive", "Framer", "Lottie", "Webflow", "Spline"].map((s) => (
                    <span key={s} className="flex items-center gap-12">
                      {s}
                      <span className="text-accent">✦</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work — Masonry */}
      <section id="work" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-32">
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Selected work</p>
            <h2 className="font-display text-4xl tracking-tight md:text-6xl">Recent projects.</h2>
          </div>
          <a href="#contact" className="hidden md:inline text-sm text-muted-foreground hover:text-foreground">View archive →</a>
        </div>

        <div className="grid grid-cols-1 gap-5 auto-rows-[260px] sm:auto-rows-[320px] md:grid-cols-3 md:auto-rows-[220px]">
          {works.map((w, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setActiveWork(w)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-border/60 bg-card text-left ${w.span ? "md:row-span-2" : ""}`}
            >
              <img
                src={w.src}
                alt={w.title}
                loading={i < 2 ? "eager" : "lazy"}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-95 transition" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-4 sm:p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent mb-1">{w.tag}</p>
                  <h3 className="font-display text-xl sm:text-2xl">{w.title}</h3>
                </div>
                <span className="h-10 w-10 rounded-full bg-background/80 backdrop-blur grid place-items-center text-lg transition group-hover:bg-accent group-hover:text-accent-foreground">↗</span>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-32">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12 md:items-center">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60">
              <img src={portrait} alt="Portrait" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">About</p>
            <h2 className="mb-6 font-display text-4xl tracking-tight md:mb-8 md:text-6xl">
              two years turning <span className="text-gradient italic">briefs</span> into beautiful, usable products.
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              I’m a creative Web Designer who designs modern clean and user friendly websites. 
              I focus on creating layouts that look professional are easy to use and help brands build a strong online presence.
            </p>
    <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/60">
              <div>
                <div className="font-display text-4xl text-accent">60+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects shipped</div>
              </div>
              <div>
                <div className="font-display text-4xl text-accent">14</div>
                <div className="text-sm text-muted-foreground mt-1">Awards & features</div>
              </div>
              <div>
                <div className="font-display text-4xl text-accent">6yr</div>
                <div className="text-sm text-muted-foreground mt-1">Design experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-32">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">What I do</p>
        <h2 className="mb-10 max-w-3xl font-display text-4xl tracking-tight md:mb-16 md:text-6xl">
          One Designer Many Ways to Bring Ideas to Life.
        </h2>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.n} className="group bg-card p-6 transition hover:bg-secondary/60 sm:p-10">
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="font-display text-xl text-accent">{s.n}</span>
                <div>
                  <h3 className="font-display text-2xl mb-3 group-hover:text-accent transition">{s.t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-32">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-3xl border border-border/60 bg-card/60 p-5 backdrop-blur sm:p-8 md:p-10">
            <h2 className="mb-6 font-display text-3xl tracking-tight sm:text-4xl md:mb-8 md:text-5xl">Get in Touch</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "mailto:work.abubakarnaeem@gmail.com";
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input type="text" placeholder="First Name" className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm focus:outline-none focus:border-accent transition" />
                <input type="text" placeholder="Last Name" className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm focus:outline-none focus:border-accent transition" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm focus:outline-none focus:border-accent transition" />
              <input type="text" placeholder="Subject Line" className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm focus:outline-none focus:border-accent transition" />
              <textarea placeholder="Drop Your Message..." rows={5} className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm focus:outline-none focus:border-accent transition resize-none" />
              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                <input type="checkbox" className="accent-accent" />
                I've read and agree with terms & privacy policy.
              </label>
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-accent text-accent-foreground px-6 py-3 font-medium hover:opacity-90 transition">
                Send Message ✈
              </button>
            </form>
          </div>
          <AnimatedGlobe />
        </div>
      </section>

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 text-left text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center">
          <p>© 2026 Abu Bakar Crafted with care designed with purpose.</p>
          <p>work.abubakarnaeem@gmail.com</p>
        </div>
      </footer>

      <ProjectModal work={activeWork} onClose={() => setActiveWork(null)} />
    </div>
  );
}

function AnimatedGlobe() {
  return (
    <div className="relative flex min-h-[320px] items-center justify-center sm:min-h-[420px] lg:min-h-[500px] lg:justify-center">
      {/* Soft blue/purple glows */}
      <motion.div
        className="absolute h-[260px] w-[260px] rounded-full bg-primary/30 blur-3xl pointer-events-none sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-[220px] w-[220px] rounded-full bg-accent/25 blur-3xl pointer-events-none sm:h-[340px] sm:w-[340px] lg:h-[420px] lg:w-[420px]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="relative"
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.img
          src={globe}
          alt="Rotating globe"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="relative w-full max-w-[300px] object-contain drop-shadow-[0_30px_80px_rgba(124,58,237,0.55)] sm:max-w-[420px] lg:max-w-[560px]"
        />
      </motion.div>
    </div>
  );
}

export function ResponsiveTable({ children }: { children: ReactNode }) {
  return (
    <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden rounded-2xl border border-border/60">
          <table className="min-w-[700px] w-full text-left text-sm">
            {children}
          </table>
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ work, onClose }: { work: Work | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {work && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/70 backdrop-blur-xl"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={work.title}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[90svh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-border/60 bg-card/90 shadow-[0_30px_80px_-20px_rgba(124,58,237,0.5)] backdrop-blur-2xl sm:rounded-3xl"
          >
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-background/80 backdrop-blur grid place-items-center text-lg hover:bg-accent hover:text-accent-foreground transition"
            >
              ✕
            </button>
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
              <img src={work.src} alt={work.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            </div>
            <div className="p-5 sm:p-6 md:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">{work.tag}</p>
              <h3 className="mb-4 font-display text-2xl tracking-tight sm:text-3xl md:text-4xl">{work.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{work.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {work.tech?.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full border border-border/60 bg-background/50 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {work.demo && (
                  <a href={work.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-accent text-accent-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
                    Live Demo ↗
                  </a>
                )}
                {/* {work.github && (
                  <a href={work.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/50 px-5 py-2.5 text-sm font-medium hover:bg-secondary transition">
                    GitHub
                  </a>
                )} */}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}