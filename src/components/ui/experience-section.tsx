"use client"

import type React from "react"

interface Experience {
    role: string
    company: string
    period: string
    isCurrent?: boolean
}

const experiences: Experience[] = [
    {
        role: "UI UX Designer",
        company: "Acviss Technologies",
        period: "Oct 2024 - Present",
        isCurrent: true,
    },
    {
        role: "UI/UX Designer",
        company: "Freelance",
        period: "Feb 2024 - Sep 2024",
    },
    {
        role: "UI Designer",
        company: "Incresco Technology",
        period: "Aug 2022 - Dec 2023",
    },
    {
        role: "UI UX Designer",
        company: "Turnkey Tech Solutions",
        period: "Apr 2022 - Jul 2022",
    },
]

const education: Experience[] = [
    {
        role: "Master of Design",
        company: "National Institute of Design",
        period: "2020 - 2022",
    },
    {
        role: "Bachelor of Fine Arts",
        company: "Delhi College of Art",
        period: "2016 - 2020",
    }
]

export function ExperienceSection() {
    const allJourneyItems = [...experiences, ...education]

    return (
        <section className="relative w-full max-w-5xl mx-auto px-6 py-32">
            <div className="space-y-0">
                <h2 className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-8">Journey</h2>
                <div className="border-t border-border">
                    {allJourneyItems.map((item, index) => (
                        <div key={index} className="group relative">
                            <div
                                className={`
                  relative flex items-start justify-between gap-4 px-4 py-8 transition-all duration-500 ease-out border-b border-border
                  ${item.isCurrent
                                        ? "bg-[#7C3AED] text-white shadow-[0_20px_40px_-15px_rgba(124,58,237,0.4)] rounded-xl border-none z-10 scale-[1.02] my-4 mx-[-16px] px-8"
                                        : "hover:bg-secondary/50"
                                    }
                `}
                            >
                                <div className="flex-1 min-w-0">
                                    <h3 className={`text-xl font-semibold tracking-tight ${item.isCurrent ? "text-white" : "text-foreground"}`}>
                                        {item.role}
                                    </h3>

                                    <p className={`text-sm mt-1 leading-relaxed transition-colors ${item.isCurrent ? "text-white/90" : "text-muted-foreground group-hover:text-foreground/70"}`}>
                                        {item.company}
                                    </p>
                                </div>

                                <div className="text-right">
                                    <span className={`text-xs font-mono tabular-nums transition-colors ${item.isCurrent ? "text-white/80" : "text-muted-foreground/60"}`}>
                                        {item.period}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
