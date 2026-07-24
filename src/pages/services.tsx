import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
    Megaphone, Search, Share2, FileText, Layout, Code2,
    CheckCircle2, ArrowRight, ChevronRight,
} from 'lucide-react';
import { services } from 'virtual:content';

const site = 'https://adshero.online';

const iconMap: Record<string, React.ReactNode> = {
    megaphone: <Megaphone size={28} className="stroke-[1.8]" />,
    search: <Search size={28} className="stroke-[1.8]" />,
    share2: <Share2 size={28} className="stroke-[1.8]" />,
    filetext: <FileText size={28} className="stroke-[1.8]" />,
    layout: <Layout size={28} className="stroke-[1.8]" />,
    code2: <Code2 size={28} className="stroke-[1.8]" />,
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};
const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

export default function ServicesPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${site}/services#webpage`,
        name: 'Our Digital Marketing Services — AdsHero',
        url: `${site}/services`,
        isPartOf: { '@id': `${site}/#website` },
        about: { '@id': `${site}/#organization` },
    };

    return (
        <>
            <Helmet>
                <title>Our Services — AdsHero Digital Marketing Agency</title>
                <meta name="description" content="AdsHero offers performance marketing, Facebook & Google Ads, SEO, Social Media, Content Marketing, and premium Web Design & Development." />
                <link rel="canonical" href={`${site}/services`} />
                <meta property="og:title" content="Our Digital Marketing Services — AdsHero" />
                <meta property="og:description" content="End-to-end digital growth services from advertising campaigns to web development." />
                <meta property="og:url" content={`${site}/services`} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <main>
                {/* ── HERO (Elegant Bright Theme) ── */}
                <section
                    className="relative overflow-hidden bg-white border-b border-slate-100 py-16 md:py-24"
                >
                    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                        <div
                            className="absolute inset-0 opacity-[0.3]"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(226, 232, 240, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(226, 232, 240, 0.6) 1px, transparent 1px)',
                                backgroundSize: '40px 40px',
                            }}
                        />
                        <div
                            className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-[0.05]"
                            style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }}
                        />
                    </div>
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <motion.div initial="hidden" animate="visible" variants={stagger}>
                            <motion.span variants={fadeUp} className="inline-block text-xs font-bold text-accent border border-accent/20 bg-accent/5 rounded-full px-3 py-1 mb-5 shadow-sm">
                                {services.hero.label}
                            </motion.span>
                            <motion.h1
                                variants={fadeUp}
                                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-5 tracking-tight"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                {services.hero.headline}
                            </motion.h1>
                            <motion.p variants={fadeUp} className="text-sm sm:text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                                {services.hero.description}
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* ── SERVICE CARDS ── */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.05 }}
                            variants={stagger}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {services.services.map((svc) => (
                                <motion.article
                                    key={svc.id}
                                    variants={fadeUp}
                                    className="group relative bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:border-slate-200/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
                                >
                                    <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Icon */}
                                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-accent/5 text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                                        {iconMap[svc.icon]}
                                    </div>

                                    {/* Title & tagline */}
                                    <h2 className="text-xl font-bold text-primary mb-1.5 group-hover:text-accent transition-colors duration-200">{svc.title}</h2>
                                    <p className="text-xs font-bold text-gold uppercase tracking-wide mb-3">{svc.tagline}</p>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">{svc.description}</p>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-8 border-t border-slate-50 pt-5">
                                        {svc.features.map((feat) => (
                                            <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                                                <CheckCircle2 size={16} className="shrink-0 text-accent mt-0.5" />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Price + CTA */}
                                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">ราคาเริ่มต้น</div>
                                            <span className="text-base font-extrabold text-accent">{svc.price.replace("เริ่มต้น ", "")}</span>
                                        </div>
                                        <Link
                                            to="/contact"
                                            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 shadow-sm"
                                        >
                                            สอบถามเพิ่ม <ChevronRight size={14} />
                                        </Link>
                                    </div>
                                </motion.article>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── PROCESS ── */}
                <section
                    className="py-20 md:py-28 bg-slate-50/50 border-t border-b border-slate-100"
                >
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={stagger}
                            className="text-center mb-16"
                        >
                            <motion.span variants={fadeUp} className="inline-block text-xs font-bold text-accent uppercase tracking-widest mb-3 bg-accent/5 border border-accent/15 rounded-full px-3 py-1">
                                {services.process.label}
                            </motion.span>
                            <motion.h2
                                variants={fadeUp}
                                className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                {services.process.headline}
                            </motion.h2>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={stagger}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {services.process.steps.map((step, idx) => (
                                <motion.div key={step.id} variants={fadeUp} className="relative">
                                    {/* Connector line */}
                                    {idx < services.process.steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-slate-200 z-0" style={{ width: 'calc(100% - 2rem)', left: 'calc(50% + 2rem)' }} aria-hidden="true" />
                                    )}
                                    <div className="relative z-10 bg-white rounded-2xl p-7 border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <div
                                            className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white font-extrabold text-base mb-5 shadow-md shadow-accent/10"
                                            style={{ background: 'linear-gradient(135deg, #2563EB, #4F46E5)' }}
                                        >
                                            <span>{step.number}</span>
                                        </div>
                                        <h3 className="font-bold text-primary mb-2 text-base sm:text-lg">{step.title}</h3>
                                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section
                    className="relative overflow-hidden py-20 md:py-28 bg-white"
                >
                    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                        <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'linear-gradient(rgba(226, 232, 240, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(226, 232, 240, 0.4) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
                        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.05]" style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }} />
                    </div>
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={stagger} className="max-w-2xl mx-auto">
                            <motion.h2
                                variants={fadeUp}
                                className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                {services.cta.headline}
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-500 text-sm sm:text-base mb-8 leading-relaxed">
                                {services.cta.description}
                            </motion.p>
                            <motion.div variants={fadeUp}>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-bold text-white bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20 hover:-translate-y-0.5 transition-all duration-200"
                                >
                                    {services.cta.buttonText}
                                    <ArrowRight size={16} />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    );
}
