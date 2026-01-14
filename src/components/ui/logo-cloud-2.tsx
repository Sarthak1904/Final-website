"use client";

import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";

type Logo = {
    src: string;
    alt: string;
};

const logos: Logo[] = [
    { src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Nvidia" },
    { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase" },
    { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "GitHub" },
    { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI" },
    { src: "https://svgl.app/library/linear.svg", alt: "Linear" },
    { src: "https://svgl.app/library/stripe.svg", alt: "Stripe" },
    { src: "https://svgl.app/library/turso-wordmark-light.svg", alt: "Turso" },
    { src: "https://svgl.app/library/clerk-wordmark-light.svg", alt: "Clerk" },
    { src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg", alt: "Claude AI" },
    { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel" },
    { src: "https://svgl.app/library/resend.svg", alt: "Resend" },
    { src: "https://svgl.app/library/lemon-squeezy.svg", alt: "Lemon Squeezy" },
];

export function LogoCloud({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            className={cn(
                "group relative flex w-full flex-col border-y bg-background md:flex-row overflow-hidden",
                className
            )}
            {...props}
        >
            {/* Layered Atmospheric Background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Soft Mesh Gradients - Increased Intensity */}
                <div className="absolute -top-[60%] -left-[15%] w-[60%] h-[120%] bg-purple-500/15 blur-[100px] rounded-full animate-pulse [animation-duration:8s]" />
                <div className="absolute -bottom-[60%] -right-[15%] w-[60%] h-[120%] bg-blue-500/15 blur-[100px] rounded-full animate-pulse [animation-duration:10s]" />
                <div className="absolute top-[10%] left-[20%] w-[50%] h-[80%] bg-orange-500/10 blur-[120px] rounded-full" />

                {/* Background Decorative Grid */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            </div>

            {/* Static Heading Section */}
            <div className="relative z-10 flex shrink-0 items-center justify-center border-b bg-muted/20 backdrop-blur-sm p-6 md:w-1/4 md:border-b-0 md:border-r">
                <h2 className="max-w-[160px] text-center font-medium text-base leading-tight text-muted-foreground/80 tracking-tight md:text-left">
                    Brands that <span className="font-semibold text-primary block text-lg">trust us.</span>
                </h2>

                {/* Decorative Plus Icon at intersection */}
                <PlusIcon className="absolute -right-3 -bottom-3 z-20 size-6 text-border hidden md:block" strokeWidth={1} />
            </div>

            {/* Marquee Section */}
            <div className="relative z-10 flex flex-1 flex-col overflow-hidden py-3">
                {/* Row 1 */}
                <div className="flex w-full overflow-hidden border-b border-border/50 py-4 last:border-b-0">
                    <div className="flex w-max shrink-0 animate-marquee items-center justify-around gap-16 px-8">
                        {Array.from({ length: 4 }).flatMap(() =>
                            logos.slice(0, 6).map((logo, i) => (
                                <LogoImage key={`row1-${i}`} logo={logo} />
                            ))
                        )}
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex w-full overflow-hidden py-4">
                    <div className="flex w-max shrink-0 animate-marquee-reverse items-center justify-around gap-16 px-8">
                        {Array.from({ length: 4 }).flatMap(() =>
                            logos.slice(6).map((logo, i) => (
                                <LogoImage key={`row2-${i}`} logo={logo} />
                            ))
                        )}
                    </div>
                </div>

                {/* Side Masks with a smoother, slightly wider fade */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-20" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-20" />
            </div>

            <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50%)); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee 50s linear infinite reverse;
        }
        .animate-marquee:hover, .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
}

function LogoImage({ logo }: { logo: Logo }) {
    return (
        <div className="group/logo relative flex h-6 w-32 items-center justify-center transition-all duration-300 hover:scale-110">
            <img
                alt={logo.alt}
                className="h-full w-full object-contain transition-all"
                src={logo.src}
            />
        </div>
    );
}
