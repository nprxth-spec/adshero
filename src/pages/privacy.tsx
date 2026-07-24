import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { privacy } from 'virtual:content';

const site = 'https://adshero.online';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};
const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

export default function PrivacyPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${site}/privacy#webpage`,
        name: 'Privacy Policy — AdsHero',
        url: `${site}/privacy`,
        isPartOf: { '@id': `${site}/#website` },
    };

    return (
        <>
            <Helmet>
                <title>Privacy Policy — AdsHero</title>
                <meta name="description" content="AdsHero's privacy policy describes how we collect, use, and protect your personal data." />
                <link rel="canonical" href={`${site}/privacy`} />
                <meta name="robots" content="noindex, follow" />
                <meta property="og:title" content="Privacy Policy — AdsHero" />
                <meta property="og:url" content={`${site}/privacy`} />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <main>
                {/* ── HERO (Elegant Bright Theme) ── */}
                <section
                    className="relative overflow-hidden bg-white border-b border-slate-100 py-16 md:py-20"
                >
                    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                        <div className="absolute inset-0 opacity-[0.3]" style={{ backgroundImage: 'linear-gradient(rgba(226, 232, 240, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(226, 232, 240, 0.6) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    </div>
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <motion.div initial="hidden" animate="visible" variants={stagger}>
                            <motion.h1
                                variants={fadeUp}
                                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-3 tracking-tight"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                {privacy.title}
                            </motion.h1>
                            <motion.p variants={fadeUp} className="text-xs sm:text-sm text-slate-400 font-semibold uppercase">
                                Last Updated: <span>{privacy.lastUpdated}</span>
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* ── CONTENT ── */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-3xl mx-auto">
                            {/* Intro */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeUp}
                                className="bg-slate-50/50 rounded-2xl p-6 md:p-8 mb-10 border border-slate-100/60"
                            >
                                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{privacy.intro}</p>
                            </motion.div>

                            {/* Sections */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.05 }}
                                variants={stagger}
                                className="space-y-8"
                            >
                                {privacy.sections.map((section, idx) => (
                                    <motion.div key={section.id} variants={fadeUp} className="border-b border-slate-100 pb-8 last:border-0 last:pb-0">
                                        <div className="flex items-start gap-4">
                                            <div
                                                className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-white text-xs font-bold mt-1 shadow-sm shadow-accent/10"
                                                style={{ background: 'linear-gradient(135deg, #2563EB, #4F46E5)' }}
                                            >
                                                <span>{idx + 1}</span>
                                            </div>
                                            <div>
                                                <h2 className="text-lg font-bold text-primary mb-3 leading-snug">
                                                    {section.title}
                                                </h2>
                                                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                                                    {section.content}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
