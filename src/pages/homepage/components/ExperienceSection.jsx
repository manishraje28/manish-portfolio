import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../../data/experience';

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 bg-bg-primary">
            <div className="container-custom max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold mb-6 text-text-primary">Experience</h2>
                    <p className="text-lg text-text-secondary">
                        Professional journey and key roles.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 border-l border-white/10"
                        >
                            <span className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-accent-primary ring-4 ring-bg-primary" />

                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-text-primary">{exp.title}</h3>
                                <span className="text-sm font-mono text-text-muted">{exp.period}</span>
                            </div>

                            <div className="text-accent-primary font-medium mb-4">{exp.company}</div>

                            <p className="text-text-secondary leading-relaxed mb-4">
                                {exp.description}
                            </p>

                            <ul className="mb-6 space-y-2">
                                {exp.achievements.map((item, i) => (
                                    <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                                        <span className="text-text-muted mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                    <span key={i} className="text-xs px-2 py-1 bg-bg-secondary rounded text-text-muted border border-white/5">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
