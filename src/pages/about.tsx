import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Target, Shield, Users, Zap, ArrowRight } from 'lucide-react';
import { about } from 'virtual:content';

const site = 'https://adshero.online';

const iconMap: Record<string, React.ReactNode> = {
    target: <Target size={24} className="stroke-[2]" />,
    shield: <Shield size={24} className="stroke-[2]" />,
    users: <Users size={24} className="stroke-[2]" />,
    zap: <Zap size={24} className="stroke-[2]" />,
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};
const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

export default function AboutPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        '@id': `${site}/about#webpage`,
        name: 'About AdsHero — Digital Marketing Agency',
        url: `${site}/about`,
        isPartOf: { '@id': `${site}/#website` },
        about: { '@id': `${site}/#organization` },
    };

    return (
        <>
            <Helmet>
                <title>About Us — AdsHero Digital Marketing Agency</title>
                <meta name="description" content="Learn more about AdsHero, a digital marketing agency built on driving real results. We help SMEs grow with experienced professionals and ROI focus." />
                <link rel="canonical" href={`${site}/about`} />
                <meta property="og:title" content="About AdsHero" />
                <meta property="og:description" content="Digital marketing agency built on driving real results." />
                <meta property="og:url" content={`${site}/about`} />
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
                        <div className="absolute inset-0 opacity-[0.3]" style={{ backgroundImage: 'linear-gradient(rgba(226, 232, 240, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(226, 232, 240, 0.6) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-[0.05]" style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }} />
                    </div>
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <motion.div initial="hidden" animate="visible" variants={stagger}>
                            <motion.span variants={fadeUp} className="inline-block text-xs font-bold text-accent border border-accent/20 bg-accent/5 rounded-full px-3 py-1 mb-5 shadow-sm">
                                {about.hero.label}
                            </motion.span>
                            <motion.h1
                                variants={fadeUp}
                                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-5 tracking-tight"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                {about.hero.headline}
                            </motion.h1>
                            <motion.p variants={fadeUp} className="text-sm sm:text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                                {about.hero.description}
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* ── STATS (Sleek Clean Look) ── */}
                <section className="bg-slate-50/50 py-12 md:py-16 border-b border-slate-100">
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            variants={stagger}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
                        >
                            {about.stats.map((stat) => (
                                <motion.div key={stat.id} variants={fadeUp} className="text-center">
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

                {/* ── STORY ── */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                            {/* Left text */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={stagger}
                                className="lg:col-span-7"
                            >
                                <motion.span variants={fadeUp} className="inline-block text-xs font-bold text-gold uppercase tracking-widest mb-3 bg-gold/5 border border-gold/15 rounded-full px-3 py-1">
                                    {about.story.label}
                                </motion.span>
                                <motion.h2
                                    variants={fadeUp}
                                    className="text-3xl md:text-4xl font-extrabold text-primary mb-6 tracking-tight"
                                    style={{ fontFamily: 'var(--font-heading)' }}
                                >
                                    {about.story.headline}
                                </motion.h2>
                                <motion.div variants={stagger} className="space-y-5">
                                    {about.story.paragraphs.map((para) => (
                                        <motion.p key={para} variants={fadeUp} className="text-slate-500 text-sm sm:text-base leading-relaxed">
                                            {para}
                                        </motion.p>
                                    ))}
                                </motion.div>
                            </motion.div>

                            {/* Right — elegant white visual card */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, ease: 'easeOut' as const }}
                                className="lg:col-span-5"
                            >
                                <div
                                    className="rounded-2xl p-10 bg-white border border-slate-200/60 shadow-xl shadow-slate-100 relative overflow-hidden"
                                >
                                    <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-[0.03]" style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }} aria-hidden="true" />
                                    <div className="relative z-10">
                                        <div 
                                            className="text-6xl font-extrabold mb-2 text-accent"
                                            style={{ fontFamily: 'var(--font-heading)' }}
                                        >
                                            10+
                                        </div>
                                        <div className="text-lg font-bold text-slate-800 mb-4 uppercase tracking-wide">ปีแห่งประสบการณ์</div>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            ตลอดกว่า 10 ปีที่ผ่านมา เราได้ช่วยธุรกิจหลากหลายประเภทเติบโตออนไลน์ ตั้งแต่ร้านค้าเล็กๆ ไปจนถึงบริษัทขนาดกลาง
                                        </p>
                                        <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                                            <div>
                                                <div className="text-2xl font-extrabold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>500+</div>
                                                <div className="text-xs text-slate-400 font-semibold uppercase">ลูกค้าที่ไว้วางใจ</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-extrabold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>1,000+</div>
                                                <div className="text-xs text-slate-400 font-semibold uppercase">โปรเจกต์สำเร็จ</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ── VALUES ── */}
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
                                {about.values.label}
                            </motion.span>
                            <motion.h2
                                variants={fadeUp}
                                className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                {about.values.headline}
                            </motion.h2>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={stagger}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {about.values.items.map((val) => (
                                <motion.div
                                    key={val.id}
                                    variants={fadeUp}
                                    className="bg-white rounded-2xl p-7 border border-slate-100 hover:shadow-lg hover:border-slate-200/50 hover:-translate-y-1 transition-all duration-300 text-center"
                                >
                                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/5 text-accent mx-auto mb-5 shadow-sm">
                                        {iconMap[val.icon]}
                                    </div>
                                    <h3 className="font-bold text-primary mb-2 text-base sm:text-lg">{val.title}</h3>
                                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{val.description}</p>
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
                                {about.cta.headline}
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-slate-500 text-sm sm:text-base mb-8 leading-relaxed">
                                {about.cta.description}
                            </motion.p>
                            <motion.div variants={fadeUp}>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-bold text-white bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20 hover:-translate-y-0.5 transition-all duration-200"
                                >
                                    {about.cta.buttonText}
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
