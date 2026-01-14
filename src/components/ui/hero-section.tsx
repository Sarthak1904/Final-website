'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center text-sm min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <div className="flex items-center gap-2 border border-border hover:border-border/80 bg-background/50 backdrop-blur-sm rounded-full w-max mx-auto px-4 py-2 transition-colors">
        <span className="text-muted-foreground">New announcement on your inbox</span>
        <button className="flex items-center gap-1 font-medium text-foreground">
          <span>Read more</span>
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M3.959 9.5h11.083m0 0L9.501 3.958M15.042 9.5l-5.541 5.54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <h1 className="text-4xl md:text-7xl font-semibold tracking-tight max-w-[850px] text-center mx-auto mt-8 text-foreground">
        Build apps faster with ui components
      </h1>

      <p className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2 text-muted-foreground leading-relaxed">
        Build sleek, consistent UIs without wrestling with design systems, our components handle the heavy lifting so you can ship faster.
      </p>

      <div className="mx-auto w-full flex items-center justify-center gap-3 mt-8">
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium transition-all shadow-sm">
          Get Started
        </button>
        <button className="flex items-center gap-2 border border-border hover:bg-secondary rounded-full px-8 py-3 transition-colors text-foreground">
          <span>Learn More</span>
          <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M1.25.5 4.75 4l-3.5 3.5" stroke="currentColor" strokeOpacity=".6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
