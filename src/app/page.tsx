"use client";
import HeroSection from "@/components/landing/hero";
import { useState } from "react";

export default function Page() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="">
      
      <HeroSection />
    </div>
  );
}
