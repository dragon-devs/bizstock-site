'use client';
import React from 'react';
import {HeroSection} from "@/components/hero-section";
import {FeaturesSection} from "@/components/features-section";
import {PricingSection} from "@/components/pricing-section";
import {SEOContentSection} from "@/components/seo-content-section";
import {TestimonialsSection} from "@/components/testimonials-section";
import {FaqSection} from "@/components/faq-section";
import {CtaSection} from "@/components/cta-section";
import {SiteFooter} from "@/components/site-footer";


export default function Home() {
  return (
    <div className="bg-gradient-to-l from-blue-500/40 to-white/0">
      <div className="flex max-w-[72rem] mx-auto flex-col">
        <main className="flex-1 ">
          <div
            className="absolute -z-10 transition-all -top-5 sm:-left-20 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"/>
          <div
            className="absolute -z-10 transition-all -top-5 right-0 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"/>
          <HeroSection/>
          <FeaturesSection/>
          {/*<PricingSection/>*/}
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