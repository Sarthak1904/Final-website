"use client"

import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "@/components/ui/hero-gallery-scroll-animation"
import { Button } from "@/components/ui/button"

const IMAGES = [
    "/images/Gemini_Generated_Image_lnwi7elnwi7elnwi.png",
    "/images/WhatsApp Image 2026-01-17 at 2.46.24 PM.jpeg",
    "/images/WhatsApp Image 2026-01-17 at 2.46.25 PM.jpeg",
    "/images/WhatsApp Image 2026-01-17 at 2.46.26 PM (1).jpeg",
    "/images/WhatsApp Image 2026-01-17 at 2.46.26 PM.jpeg",
]

export function GallerySection() {
    return (
        <ContainerScroll className="h-[400vh] bg-white relative">
            <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
                {/* Layered Content */}
                <div className="relative w-full h-full">
                    {/* Bento Grid Layer */}
                    <div className="absolute inset-0 z-0">
                        <BentoGrid className="h-full w-full p-6 md:p-12">
                            {IMAGES.map((imageUrl, index) => (
                                <BentoCell
                                    key={index}
                                    className="overflow-hidden rounded-2xl shadow-2xl border border-gray-100"
                                >
                                    <img
                                        className="size-full object-cover object-center"
                                        src={imageUrl}
                                        alt={`Gallery image ${index + 1}`}
                                    />
                                </BentoCell>
                            ))}
                        </BentoGrid>
                    </div>

                    {/* Text/Overlay Layer */}
                    <div className="absolute inset-0 z-10">
                        <ContainerScale className="text-center">
                            <h1 className="max-w-2xl text-2xl md:text-4xl font-semibold font-serif text-black mx-auto drop-shadow-sm leading-tight">
                                Snippets from my Recent Expedition
                            </h1>
                            <p className="my-4 max-w-lg text-neutral-600 text-sm md:text-base px-4 mx-auto leading-relaxed">
                                Recent escapes that spark creativity and connect me with nature
                            </p>
                        </ContainerScale>
                    </div>
                </div>
            </div>
        </ContainerScroll>
    )
}
