"use client";

import React from "react";
import { motion } from "framer-motion";
import { PixelTrail } from "./pixel-trail";

export function Footer() {
    return (
        <footer id="contact" className="w-full bg-[#e0e0da] py-32 px-10 md:px-20 relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">
            <PixelTrail
                pixelSize={48}
                fadeDuration={600}
                delay={0}
                pixelClassName="bg-[#fb923c]"
            />

            <div className="max-w-7xl w-full mx-auto flex flex-col items-center relative z-10 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-6"
                >
                    <h2 className="text-5xl md:text-8xl font-semibold tracking-tighter text-black text-center mb-8">
                        Glad you made it to the end!
                    </h2>

                    <div className="flex flex-col items-center w-fit pointer-events-auto">
                        <p className="text-lg md:text-xl text-neutral-500 text-center mb-12 whitespace-nowrap">
                            Let’s create something amazing together.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                            {[
                                { label: "Email", href: "mailto:sarthakchoudhary830@gmail.com" },
                                { label: "LinkedIn", href: "https://www.linkedin.com/in/sarchou/" },
                                { label: "Instagram", href: "https://www.instagram.com/sc.uncaptured/" },
                            ].map((link) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target={link.label !== "Email" ? "_blank" : undefined}
                                    rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                                    className="group flex items-center gap-2 text-black/60 hover:text-black transition-colors font-semibold text-xl md:text-2xl"
                                    initial="initial"
                                    whileHover="hover"
                                >
                                    {link.label}
                                    <motion.span
                                        variants={{
                                            initial: { rotate: 45 },
                                            hover: { rotate: 0 }
                                        }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="inline-block"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.5 1.5H10.5M10.5 1.5V8.5M10.5 1.5L1.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </motion.span>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>


        </footer >
    );
}
