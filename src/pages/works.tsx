import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ArrowRight, Trophy, Sparkles, TrendingUp, Cpu, Award } from 'lucide-react';
import { works } from 'virtual:content';

const site = 'https://adshero.online';

const iconMap: Record<string, React.ReactNode> = {
    w1: <Trophy className="text-amber-500 w-5 h-5" />,
    w2: <TrendingUp className="text-emerald-500 w-5 h-5" />,
    w3: <Sparkles className="text-indigo-500 w-5 h-5" />,
    w4: <Award className="text-rose-500 w-5 h-5" />,
    w5: <Cpu className="text-blue-500 w-5 h-5" />,
    w6: <TrendingUp className="text-teal-500 w-5 h-5" />,
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
};

export default function WorksPage() {
    const [activeCategory, setActiveCategory] = useState('ทั้งหมด');

    const filteredItems = activeCategory === 'ทั้งหมด'
        ? works.items
        : works.items.filter(item => item.category === activeCategory);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${site}/works#webpage`,
        name: 'ผลงานของเรา — AdsHero',
        url: `${site}/works`,
        isPartOf: { '@id': `${site}/#website` },
        about: { '@id': `${site}/#organization` },
    };

    return (
        <>
            <Helmet>
                <title>ผลงานของเรา — AdsHero เอเจนซี่โฆษณา & ทำเว็บไซต์</title>
                <meta name="description" content="รวมผลงานการตลาดออนไลน์ที่ประสบความสำเร็จของ AdsHero ทั้งการยิงแอด Facebook/Google, การทำ SEO ให้ติดหน้าแรก และการพัฒนาเว็บไซต์คุณภาพสูง" />
                <link rel="canonical" href={`${site}/works`} />
                <meta property="og:title" content="ผลงานความสำเร็จ — AdsHero" />
                <meta property="og:description" content="กรณีศึกษาและผลงานการทำแคมเปญการตลาดดิจิทัลที่เพิ่มยอดขายและ ROI ให้ธุรกิจจริง" />
                <meta property="og:url" content={`${site}/works`} />
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
                                {works.hero.label}
                            </motion.span>
                            <motion.h1
                                variants={fadeUp}
                                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-5 tracking-tight"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                {works.hero.headline}
                            </motion.h1>
                            <motion.p variants={fadeUp} className="text-sm sm:text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                                {works.hero.description}
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* ── PORTFOLIO FILTER & GRID ── */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        
                        {/* Filter Tabs */}
                        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 md:mb-16">
                            {works.categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 ${
                                        activeCategory === cat
                                            ? 'bg-accent text-white shadow-md shadow-accent/15'
                                            : 'bg-slate-50 text-slate-600 border border-slate-100 hover:bg-slate-100 hover:text-primary'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Project Grid */}
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredItems.map((project) => (
                                    <motion.article
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                        key={project.id}
                                        className="group relative bg-white border border-slate-100 rounded-2xl p-7 hover:shadow-xl hover:border-slate-200/50 transition-all duration-300 flex flex-col justify-between"
                                    >
                                        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        
                                        <div>
                                            {/* Tag / Category with Icon */}
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-2.5">
                                                    <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm">
                                                        {iconMap[project.id]}
                                                    </div>
                                                    <span className="text-[10px] font-extrabold text-accent bg-accent/5 border border-accent/15 rounded-md px-2.5 py-1 tracking-wide uppercase">
                                                        {project.category}
                                                    </span>
                                                </div>
                                                <span className="text-xs font-bold text-slate-400">
                                                    {project.client}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-base sm:text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-200">
                                                {project.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                                                {project.description}
                                            </p>

                                            {/* Metrics box (Highlighted with Gold background tag) */}
                                            <div className="grid grid-cols-2 gap-3 mb-6 bg-slate-50/50 border border-slate-100/60 rounded-xl p-4">
                                                {project.metrics.map((metric) => (
                                                    <div key={metric.label} className="text-center">
                                                        <div className="text-xs text-slate-400 font-semibold mb-0.5">{metric.label}</div>
                                                        <div className="text-sm sm:text-base font-extrabold text-gold">{metric.value}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Bottom section tags */}
                                        <div className="border-t border-slate-100 pt-4 mt-auto">
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.tags.slice(0, 3).map((tag) => (
                                                    <span key={tag} className="text-[10px] font-bold text-slate-400 bg-slate-50 rounded-md px-2 py-0.5">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </section>

                {/* ── CTA SECTION ── */}
                <section
                    className="relative overflow-hidden py-20 md:py-28 bg-slate-50/50 border-t border-slate-100"
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
                                {works.cta.headline}
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-500 text-sm sm:text-base mb-8 leading-relaxed">
                                {works.cta.description}
                            </motion.p>
                            <motion.div variants={fadeUp}>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-bold text-white bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20 hover:-translate-y-0.5 transition-all duration-200"
                                >
                                    {works.cta.buttonText}
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
