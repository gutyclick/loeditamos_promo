'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
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
  const [remainingSlots, setRemainingSlots] = useState(14); // 14 remaining slots of 100

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#090b0a] text-slate-100 relative selection:bg-[#8bf500] selection:text-black">
      {/* Top Navbar */}
      <Navbar remainingSlots={remainingSlots} onOpenCheckout={handleOpenCheckout} />

      {/* Hero Section */}
      <HeroSection remainingSlots={remainingSlots} onOpenCheckout={handleOpenCheckout} />

      {/* What's Included Section */}
      <WhatIsIncluded onOpenCheckout={handleOpenCheckout} />

      {/* Before vs After Visual Transformation */}
      <BeforeAfterTransformation onOpenCheckout={handleOpenCheckout} />

      {/* Benefits & Value Proposition */}
      <BenefitsSection onOpenCheckout={handleOpenCheckout} />

      {/* Social Proof & Testimonials */}
      <SocialProofAndTestimonials />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Footer & Guarantees */}
      <GuaranteeFooter onOpenCheckout={handleOpenCheckout} />

      {/* Persistent Bottom Bar on scroll */}
      <StickyBottomBar remainingSlots={remainingSlots} onOpenCheckout={handleOpenCheckout} />

      {/* Live Social Proof Purchase Toasts */}
      <LiveNotificationToast onOpenCheckout={handleOpenCheckout} />

      {/* Instant Checkout Order Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
        remainingSlots={remainingSlots}
      />
    </main>
  );
}
