'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import RealWorkShowcase from '@/components/RealWorkShowcase';
import WhatIsIncluded from '@/components/WhatIsIncluded';
import BeforeAfterTransformation from '@/components/BeforeAfterTransformation';
import BenefitsSection from '@/components/BenefitsSection';
import SocialProofAndTestimonials from '@/components/SocialProofAndTestimonials';
import FAQSection from '@/components/FAQSection';
import GuaranteeFooter from '@/components/GuaranteeFooter';
import StickyBottomBar from '@/components/StickyBottomBar';
import CheckoutModal from '@/components/CheckoutModal';
import LiveNotificationToast from '@/components/LiveNotificationToast';

export default function Home() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutSource, setCheckoutSource] = useState('unknown');
  const [remainingSlots, setRemainingSlots] = useState(14); // 14 remaining slots of 100

  const handleOpenCheckout = (source: string) => {
    setCheckoutSource(source);
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#090b0a] text-slate-100 relative selection:bg-[#8bf500] selection:text-black">
      {/* Top Navbar */}
      <Navbar remainingSlots={remainingSlots} onOpenCheckout={() => handleOpenCheckout('navbar')} />

      {/* Hero Section */}
      <HeroSection remainingSlots={remainingSlots} onOpenCheckout={() => handleOpenCheckout('hero')} />

      {/* Real client work showcase */}
      <RealWorkShowcase onOpenCheckout={() => handleOpenCheckout('real_work_showcase')} />

      {/* What's Included Section */}
      <WhatIsIncluded onOpenCheckout={() => handleOpenCheckout('included')} />

      {/* Before vs After Visual Transformation */}
      <BeforeAfterTransformation onOpenCheckout={() => handleOpenCheckout('before_after')} />

      {/* Benefits & Value Proposition */}
      <BenefitsSection onOpenCheckout={() => handleOpenCheckout('benefits')} />

      {/* Social Proof & Testimonials */}
      <SocialProofAndTestimonials />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Footer & Guarantees */}
      <GuaranteeFooter onOpenCheckout={() => handleOpenCheckout('footer')} />

      {/* Persistent Bottom Bar on scroll */}
      <StickyBottomBar remainingSlots={remainingSlots} onOpenCheckout={() => handleOpenCheckout('sticky_bar')} />

      {/* Live Social Proof Purchase Toasts */}
      <LiveNotificationToast onOpenCheckout={() => handleOpenCheckout('live_notification')} />

      {/* Instant Checkout Order Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
        remainingSlots={remainingSlots}
        source={checkoutSource}
      />
    </main>
  );
}
