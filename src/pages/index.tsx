import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
    Megaphone,
    Search,
    Share2,
    FileText,
    Layout,
    Code2,
    CheckCircle2,
    ArrowRight,
    ChevronRight,
    Star
} from 'lucide-react';
import { home } from 'virtual:content';

const site = 'https://adshero.online';

const iconMap: Record<string, React.ReactNode> = {
    megaphone: <Megaphone size={24} className="stroke-[2]" />,
    search: <Search size={24} className="stroke-[2]" />,
    share2: <Share2 size={24} className="stroke-[2]" />,
    filetext: <FileText size={24} className="stroke-[2]" />,
    layout: <Layout size={24} className="stroke-[2]" />,
    code2: <Code2 size={24} className="stroke-[2]" />,
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

export default function HomePage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            { '@type': 'WebSite', '@id': `${site}/#website`, name: 'AdsHero', url: `${site}/` },
            {
                '@type': 'Organization',
                '@id': `${site}/#organization`,
                name: 'AdsHero',
                url: `${site}/`,
                description: 'Full-service digital marketing agency. Facebook & Google Ads, SEO, Social Media, and Web Design & Development.',
            },
            {
                '@type': 'WebPage',
                '@id': `${site}/#webpage`,
                url: `${site}/`,
                name: 'AdsHero — Full-Service Digital Marketing Agency & Web Development',
                isPartOf: { '@id': `${site}/#website` },
                about: { '@id': `${site}/#organization` },
                datePublished: '2026-07-23',
                dateModified: '2026-07-23',
            },
        ],
    };

    return (
        <>
            <Helmet>
                <title>AdsHero — Full-Service Digital Marketing Agency & Web Development</title>
                <meta
                    name="description"
                    content="AdsHero is a full-service digital marketing agency offering Facebook & Google Ads, SEO, Social Media management, and website design & development for SMEs."
                />
                <link rel="canonical" href={site} />
                <meta property="og:title" content="AdsHero — Full-Service Digital Marketing Agency" />
                <meta property="og:description" content="Boost sales and grow online with measurable results." />
                <meta property="og:url" content={site} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <main>
                {/* ── HERO (Elegant Bright Theme) ── */}
                <section
                    className="relative overflow-hidden bg-white border-b border-slate-100"
                >
                    {/* Premium Light Pattern Overlay */}
                    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                        {/* Soft grid pattern */}
                        <div
                            className="absolute inset-0 opacity-[0.4]"
                            style={{
                                backgroundImage:
                                    'linear-gradient(rgba(226, 232, 240, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(226, 232, 240, 0.6) 1px, transparent 1px)',
                                backgroundSize: '40px 40px',
                            }}
                        />
                        {/* Soft glowing accent circle */}
                        <div
                            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.06]"
                            style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }}
                        />
                        <div
                            className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full opacity-[0.04]"
                            style={{ background: 'radial-gradient(circle, #C5A880 0%, transparent 70%)' }}
                        />
                        
                        {/* Elegant Geometric lines */}
                        <svg
                            className="absolute right-0 top-0 h-full w-1/2 opacity-[0.03] text-primary"
                            viewBox="0 0 600 800"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <polygon points="600,0 600,800 200,400" fill="#2563EB" />
                            <polygon points="600,0 400,0 600,300" fill="#C5A880" />
                            <rect x="100" y="200" width="1" height="400" fill="currentColor" />
                            <circle cx="450" cy="200" r="80" stroke="currentColor" strokeWidth="0.5" fill="none" />
                            <circle cx="350" cy="500" r="120" stroke="#C5A880" strokeWidth="0.5" fill="none" />
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 md:px-6 py-20 md:py-28 lg:py-36 relative z-10">
                        <div className="max-w-3xl">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={stagger}
                            >
                                <motion.div variants={fadeUp}>
                                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent border border-accent/20 bg-accent/5 rounded-full px-3 py-1 mb-6 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                        Digital Marketing Agency
                                    </span>
                                </motion.div>

                                <motion.h1
                                    variants={fadeUp}
                                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-tight mb-2 tracking-tight"
                                    style={{ fontFamily: 'var(--font-heading)' }}
                                >
                                    <span>{home.hero.headline}</span>
                                </motion.h1>
                                <motion.h1
                                    variants={fadeUp}
                                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-accent"
                                    style={{ fontFamily: 'var(--font-heading)' }}
                                >
                                    <span>{home.hero.headlineAccent}</span>
                                </motion.h1>

                                <motion.p
                                    variants={fadeUp}
                                    className="text-md sm:text-lg md:text-xl text-gold-dark font-semibold mb-3 tracking-wide uppercase"
                                    style={{ fontFamily: 'var(--font-heading)' }}
                                >
                                    {home.hero.subheadline}
                                </motion.p>

                                <motion.p
                                    variants={fadeUp}
                                    className="text-base sm:text-lg text-slate-500 leading-relaxed mb-10 max-w-xl"
                                >
                                    {home.hero.description}
                                </motion.p>

                                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        to="/contact"
                                        className="relative inline-flex items-center justify-center gap-2 rounded-lg px-8 py-3.5 text-sm font-bold text-white overflow-hidden group shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-200"
                                        style={{ background: '#2563EB' }}
                                    >
                                        {/* Animated shimmer on hover */}
                                        <span
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{
                                                background:
                                                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                                                animation: 'shimmer 1.5s infinite',
                                            }}
                                        />
                                        <span className="relative">{home.hero.ctaPrimary}</span>
                                        <ArrowRight size={16} className="relative transition-transform duration-200 group-hover:translate-x-1" />
                                    </Link>
                                    <a
                                        href="#services"
                                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition-all duration-200 shadow-sm"
                                    >
                                        {home.hero.ctaSecondary}
                                        <ChevronRight size={16} />
                                    </a>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ── STATS BAR (Sleek Clean Look) ── */}
                <section className="bg-slate-50/50 py-10 border-b border-slate-100">
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            variants={stagger}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
                        >
                            {home.stats.map((stat) => (
                                <motion.div key={stat.id} variants={fadeUp} className="text-center px-4">
                                    <div 
                                        className="text-4xl md:text-5xl font-extrabold text-primary mb-1 tracking-tight"
                                        style={{ fontFamily: 'var(--font-heading)' }}
                                    >
                                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{stat.value}</span>
                                    </div>
                                    <div className="text-xs md:text-sm text-slate-500 font-semibold uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── SERVICES ── */}
                <section id="services" className="py-20 md:py-28 bg-white relative">
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={stagger}
                            className="text-center mb-16"
                        >
                            <motion.span
                                variants={fadeUp}
                                className="inline-block text-xs font-bold text-gold uppercase tracking-widest mb-3 bg-gold/5 border border-gold/15 rounded-full px-3 py-1"
                            >
                                {home.services.sectionLabel}
                            </motion.span>
                            <motion.h2
                                variants={fadeUp}
                                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-4 tracking-tight"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                {home.services.headline}
                            </motion.h2>
                            <motion.p
                                variants={fadeUp}
                                className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
                            >
                                {home.services.description}
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={stagger}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {home.services.items.map((svc) => (
                                <motion.div
                                    key={svc.id}
                                    variants={fadeUp}
                                    className="group relative bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:border-slate-200/50 hover:-translate-y-1 transition-all duration-300 cursor-default"
                                >
                                    {/* Top accent line on hover */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-accent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/5 text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                                        {iconMap[svc.icon]}
                                    </div>
                                    <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-200">{svc.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{svc.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── WHY ADSHERO (Premium Minimalist Look) ── */}
                <section
                    className="py-20 md:py-28 bg-slate-50/50 relative border-t border-b border-slate-100"
                >
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                            {/* Left */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={stagger}
                                className="lg:col-span-7"
                            >
                                <motion.span
                                    variants={fadeUp}
                                    className="inline-block text-xs font-bold text-accent uppercase tracking-widest mb-3 bg-accent/5 border border-accent/15 rounded-full px-3 py-1"
                                >
                                    {home.whyUs.sectionLabel}
                                </motion.span>
                                <motion.h2
                                    variants={fadeUp}
                                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-4 tracking-tight"
                                    style={{ fontFamily: 'var(--font-heading)' }}
                                >
                                    {home.whyUs.headline}
                                </motion.h2>
                                <motion.p
                                    variants={fadeUp}
                                    className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8 max-w-xl"
                                >
                                    {home.whyUs.description}
                                </motion.p>

                                <motion.ul variants={stagger} className="space-y-5">
                                    {home.whyUs.points.map((point) => (
                                        <motion.li
                                            key={point.id}
                                            variants={fadeUp}
                                            className="flex items-start gap-3.5"
                                        >
                                            <div className="w-5.5 h-5.5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <CheckCircle2
                                                    size={14}
                                                    className="text-accent"
                                                />
                                            </div>
                                            <div>
                                                <span className="font-bold text-primary text-sm sm:text-base">{point.title}</span>
                                                <span className="text-slate-500 text-sm sm:text-base"> — {point.description}</span>
                                            </div>
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                <motion.div variants={fadeUp} className="mt-10">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-bold text-white hover:bg-accent transition-all duration-200 shadow-md shadow-primary/10 hover:shadow-accent/20 hover:-translate-y-0.5"
                                    >
                                        ปรึกษาฟรีวันนี้
                                        <ArrowRight size={16} />
                                    </Link>
                                </motion.div>
                            </motion.div>

                            {/* Right — elegant white container card with gold detailing */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, ease: 'easeOut' as const }}
                                className="relative lg:col-span-5"
                            >
                                <div
                                    className="rounded-2xl p-8 md:p-10 bg-white border border-slate-200/60 shadow-xl shadow-slate-100 relative overflow-hidden"
                                >
                                    {/* Light subtle visual details */}
                                    <div
                                        className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-[0.03]"
                                        style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }}
                                        aria-hidden="true"
                                    />
                                    <div
                                        className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-[0.03]"
                                        style={{ background: 'radial-gradient(circle, #C5A880, transparent)' }}
                                        aria-hidden="true"
                                    />

                                    <div className="relative z-10">
                                        <div 
                                            className="text-5xl font-extrabold mb-1 flex items-center gap-1.5 text-accent"
                                            style={{ fontFamily: 'var(--font-heading)' }}
                                        >
                                            #1
                                            <span className="text-gold text-lg"><Star size={20} className="fill-gold" /></span>
                                        </div>
                                        <div className="text-md font-bold text-slate-800 mb-6 tracking-wide uppercase">
                                            Digital Marketing Agency
                                        </div>
                                        <div className="space-y-4">
                                            {[
                                                { label: 'ROI เฉลี่ย', value: '320%', color: 'text-accent' },
                                                { label: 'ลูกค้าใหม่ต่อเดือน', value: '50+', color: 'text-slate-800' },
                                                { label: 'แคมเปญที่ประสบความสำเร็จ', value: '1,000+', color: 'text-slate-800' },
                                            ].map((item) => (
                                                <div
                                                    key={item.label}
                                                    className="flex justify-between items-center border-b border-slate-100 pb-3"
                                                >
                                                    <span className="text-sm font-semibold text-slate-500">{item.label}</span>
                                                    <span className={`text-sm font-extrabold ${item.color}`}>{item.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-6 text-xs text-slate-400">
                                            ข้อมูลจากผลลัพธ์จริงของลูกค้า AdsHero
                                        </div>
                                    </div>
                                </div>

                                {/* Floating badge (Clean design) */}
                                <div
                                    className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 border border-slate-100"
                                >
                                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                                        <CheckCircle2 size={16} className="text-emerald-500" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-primary">ผลลัพธ์รับประกัน</div>
                                        <div className="text-xs text-slate-400">วัดได้จริงทุกแคมเปญ</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ── CTA SECTION (Elegant White/Blue Soft Theme) ── */}
                <section
                    className="relative overflow-hidden py-20 md:py-28 bg-white"
                >
                    {/* Soft ambient background */}
                    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                        <div
                            className="absolute inset-0 opacity-[0.2]"
                            style={{
                                backgroundImage:
                                    'linear-gradient(rgba(226, 232, 240, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(226, 232, 240, 0.4) 1px, transparent 1px)',
                                backgroundSize: '50px 50px',
                            }}
                        />
                        <div
                            className="absolute -bottom-20 -left-20 w-[450px] h-[450px] rounded-full opacity-[0.06]"
                            style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 75%)' }}
                        />
                        <div
                            className="absolute -top-20 -right-20 w-[450px] h-[450px] rounded-full opacity-[0.05]"
                            style={{ background: 'radial-gradient(circle, #C5A880 0%, transparent 75%)' }}
                        />
                    </div>

                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            variants={stagger}
                            className="max-w-2xl mx-auto"
                        >
                            <motion.h2
                                variants={fadeUp}
                                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-4 tracking-tight"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                {home.cta.headline}
                            </motion.h2>
                            <motion.p
                                variants={fadeUp}
                                className="text-slate-500 text-sm sm:text-base mb-10 leading-relaxed"
                            >
                                {home.cta.description}
                            </motion.p>
                            <motion.div variants={fadeUp}>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 rounded-lg px-10 py-4 text-sm font-bold text-white transition-all duration-200 bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-accent/35 hover:-translate-y-0.5"
                                >
                                    {home.cta.buttonText}
                                    <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    );
}
