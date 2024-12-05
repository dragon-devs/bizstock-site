'use client';
import React from 'react';
import {HeroSection} from "@/app/components/hero-section";
import {FeaturesSection} from "@/app/components/features-section";
import {PricingSection} from "@/app/components/pricing-section";
import {SEOContentSection} from "@/app/components/seo-content-section";
import {TestimonialsSection} from "@/app/components/testimonials-section";
import {FaqSection} from "@/app/components/faq-section";
import {CtaSection} from "@/app/components/cta-section";
import {SiteFooter} from "@/app/components/site-footer";


export default function Home() {
  return (
    <div className="bg-gradient-to-l from-blue-500/40 to-white/0">

      <div className="flex max-w-[72rem] mx-auto flex-col">
        <main className="flex-1 ">
          <div
            className="absolute -z-10 transition-all -top-5 sm:-left-20 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"/>
          <div
            className="absolute -z-10 transition-all -top-5 right-0 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl"/>
          <HeroSection/>
          <FeaturesSection/>
          <PricingSection/>
          <SEOContentSection/>
          <TestimonialsSection/>
          <FaqSection/>
          <CtaSection/>
        </main>
        <SiteFooter/>
      </div>
    </div>

  );
}