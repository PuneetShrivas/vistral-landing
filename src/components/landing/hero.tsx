"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { JSX, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function Hero() {
  const navItems = [
    {
      name: "Industries",
      link: "#industries",
    },
    {
      name: "Process",
      link: "#process",
    },
    {
      name: "Results",
      link: "#results",
    },
    {
      name: "Team",
      link: "#team",
    },
    {
      name: "Blog",
      link: "#blog",
    },
  ];

  const teamMembers = [
    {
      name: "Puneet Shrivas",
      role: "Lead Consultant",
      image: "/puneet_shrivas.jpeg",
    },
    {
      name: "Gautam Murgai",
      role: "Lead Consultant",
      image: "/gautam_murgai.jpeg",
    },
    {
      name: "Puneet Shrivas",
      role: "Lead Consultant",
      image: "/puneet_shrivas.jpeg",
    },
  ];

  const blogPosts = [
    {
      author: "Puneet Shrivas",
      role: "Lead Consultant",
      image: "/b1.jpg",
      desc: "End-to-end AI-Powered solutions that enhance quality, ensure safety and reduce costs.",
    },
    {
      author: "Gautam Murgai",
      role: "Lead Consultant",
      image: "/b2.jpg",
      desc: "End-to-end AI-Powered solutions that enhance quality, ensure safety and reduce costs.",
    },
    {
      author: "Gautam Murgai",
      role: "Lead Consultant",
      image: "/b3.jpg",
      desc: "End-to-end AI-Powered solutions that enhance quality, ensure safety and reduce costs.",
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white">
      <Image
        src="/hero-bg.jpg" // replace with your hero image path
        alt="Hero background"
        fill
        className="object-cover object-center"
        priority
      />
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody className="backdrop-filter backdrop-blur-sm bg-black/40 [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]">
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary" className="rounded-full bg-transparent border-1 border-white text-white hover:bg-white hover:text-black">Book a call</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden">
        <div className="relative  w-full -pb-20 ">

          <div className="text-center my-[30vh] h-fit md:text-left px-10">
            <h1 className="text-4xl md:text-6xl font-bold">
              Computer Vision Experts
            </h1>
            <p className="mt-4 font-thin text-3xl md:text-3xl max-w-2xl">
              End-to-end AI-Powered solutions that <br /> enhance quality, ensure safety
              and reduce costs.
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <Button className="px-10 py-4 h-15 text-lg rounded-full">
                Book a call
              </Button>
              <Button
                variant="outline"
                className="px-10 py-4 h-15 text-lg rounded-full bg-transparent border-white text-white hover:bg-white hover:text-white"
              >
                Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="bg-black  text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-row gap-6">
            <h2 className="text-3xl font-semibold mb-8">Industries</h2>
            <div className="h-8 border-b-1 w-full border-white/40" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1 */}
            <div className="flex flex-col">
              <h3 className="text-xl">1. Manufacturing</h3>
              <p className="text-sm font-thin text-gray-300 mb-4">
                Automated defect detection & full on production lines
              </p>
              <div className="relative h-48 w-full overflow-hidden rounded-md">
                <Image
                  src="/manufacturing.jpg"
                  alt="Manufacturing"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-3 h-8 w-auto">
                  <Image
                    src="/vistral_logo.svg"
                    alt="Vistral Logo"
                    width={40}
                    height={16}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="flex flex-col">
              <h3 className="text-xl ">2. Renewable Energy</h3>
              <p className="text-sm font-thin text-gray-300 mb-4">
                Solar farm anomaly detection & predictive maintenance
              </p>
              <div className="relative h-48 w-full overflow-hidden rounded-md">
                <Image
                  src="/renewable.jpg"
                  alt="Renewable"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute bottom-0 left-3 h-8 w-auto">
                  <Image
                    src="/vistral_logo.svg"
                    alt="Vistral Logo"
                    width={40}
                    height={16}
                    className="object-contain"
                  />
                </div>
              </div>

            </div>
            {/* 3 */}
            <div className="flex flex-col">
              <h3 className="text-xl ">3. Warehousing</h3>
              <p className="text-sm font-thin text-gray-300 mb-4">
                Real-time stock track & safety compliance
              </p>
              <div className="relative h-48 w-full overflow-hidden rounded-md">
                <Image
                  src="/warehousing.png"
                  alt="Warehousing"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-3 h-8 w-auto">
                  <Image
                    src="/vistral_logo.svg"
                    alt="Vistral Logo"
                    width={40}
                    height={16}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="flex flex-col">
              <h3 className="text-xl ">4. Construction</h3>
              <p className="text-sm font-thin text-gray-300 mb-4">
                PPE compliance detection & site safety
              </p>
              <div className="relative h-48 w-full overflow-hidden rounded-md">
                <Image
                  src="/construction.png"
                  alt="Construction"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute bottom-0 left-3 h-8 w-auto">
                  <Image
                    src="/vistral_logo.svg"
                    alt="Vistral Logo"
                    width={40}
                    height={16}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            {/* 5 */}
            <div className="flex flex-col">
              <h3 className="text-xl ">5. Transportation</h3>
              <p className="text-sm font-thin text-gray-300 mb-4">
                Driver distraction detection & load damage inspection
              </p>
              <div className="relative h-48 w-full overflow-hidden rounded-md">
                <Image
                  src="/transportation.png"
                  alt="Transportation"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-3 h-8 w-auto">
                  <Image
                    src="/vistral_logo.svg"
                    alt="Vistral Logo"
                    width={40}
                    height={16}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            {/* 6 */}
            <div className="flex flex-col">
              <h3 className="text-xl ">6. Retail</h3>
              <p className="text-sm font-thin text-gray-300 mb-4">
                Shelf stock monitoring & customer analytics
              </p>
              <div className="relative h-48 w-full overflow-hidden rounded-md">
                <Image
                  src="/retail.png"
                  alt="Retail"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-3 h-8 w-auto">
                  <Image
                    src="/vistral_logo.svg"
                    alt="Vistral Logo"
                    width={40}
                    height={16}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-row gap-6 items-center mb-8">
          <h2 className="text-3xl font-semibold">Process</h2>
          <div className="h-8 border-b-1 w-full border-white/40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left text */}
          <div className="md:col-span-2">
            <p className="text-sm text-gray-300 leading-relaxed pr-24">
              End-to-end AI-Powered solutions that enhance quality, ensure safety
              and reduce costs. GDPR &amp; CCPA compliant, on-device inference,
              encrypted pipelines.
            </p>
          </div>
          {/* Right cards */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="rounded-xl bg-neutral-900 p-6">
              <div className="mb-3 h-15 w-auto">
                <Image
                  src="/logo_roi.png"
                  alt="ROI Icon"
                  width={73}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg">Proven ROI</h3>
              <p className="text-sm text-gray-300 mt-2">
                Safety incidents ↓34%, efficiency ↑41% on average across
                projects.
              </p>
            </div>
            {/* Card 2 */}
            <div className="rounded-xl bg-neutral-900 p-6">
              <div className="mb-3 h-15 w-auto">
                <Image
                  src="/logo_end_to_end.png"
                  alt="ROI Icon"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg">End-To-End</h3>
              <p className="text-sm text-gray-300 mt-2">
                Problem scoping → Model development → Integration → Ongoing
                monitoring.
              </p>
            </div>
            {/* Card 3 */}
            <div className="rounded-xl bg-neutral-900 p-6">
              <div className="mb-3 h-15 w-auto">
                <Image
                  src="/logo_dev_ready.png"
                  alt="ROI Icon"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg">Deployment-Ready</h3>
              <p className="text-sm text-gray-300 mt-2">
                Optimized for edge devices, low latency, and real-world
                conditions.
              </p>
            </div>
            {/* Card 4 */}
            <div className="rounded-xl bg-neutral-900 p-6">
              <div className="mb-3 h-15 w-auto">
                <Image
                  src="/logo_design.png"
                  alt="ROI Icon"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg">Secure By Design</h3>
              <p className="text-sm text-gray-300 mt-2">
                GDPR &amp; CCPA compliant, on-device inference, encrypted
                pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 mt-24">
        <div className="flex flex-row gap-6 items-center mb-8">
          <h2 className="text-3xl font-semibold">Results</h2>
          <div className="h-8 border-b-1 w-full border-white/40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left text */}
          <div className="md:col-span-2">
            <p className="text-sm text-gray-300 leading-relaxed pr-24">
              End-to-end AI-Powered solutions that enhance quality, ensure safety
              and reduce costs. <strong>GDPR &amp; CCPA compliant</strong>,
              on-device inference, encrypted pipelines.
            </p>
          </div>
          {/* Right case studies */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Case 1 */}
            <div className="rounded-xl bg-neutral-900 p-6 flex flex-col gap-3">
              <div className="flex items-center justify-center bg-white p-2 rounded-md">
                {/* Replace with your logo */}
                <Image
                  src="/sael_logo.png"
                  alt="SAEL Logo"
                  width={80}
                  height={30}
                />
              </div>
              <div className="text-sm text-gray-300">
                <p>
                  <span className="font-semibold text-white">Industry:</span>{" "}
                  Solar Manufacturing &amp; Plants
                </p>
                <p>
                  <span className="font-semibold text-white">Challenge:</span>{" "}
                  Defect detection in solar cells and monitoring large-scale
                  solar farms.
                </p>
                <p>
                  <span className="font-semibold text-white">Solution:</span>{" "}
                  Edge-based CV for micro-crack detection on cells; drone
                  integrated vision for panel anomalies.
                </p>
                <p>
                  <span className="font-semibold text-white">Impact:</span>{" "}
                  Manufacturing defects: ↓31%, Solar farm downtime: ↓22%, Annual
                  savings: $1.2M
                </p>
              </div>
            </div>
            {/* Case 2 */}
            <div className="rounded-xl bg-neutral-900 p-6 flex flex-col gap-3">
              <div className="flex items-center justify-center bg-white p-2 rounded-md">
                {/* Replace with your logo */}
                <Image
                  src="/gardex_logo.png"
                  alt="GARDEX Logo"
                  width={80}
                  height={30}
                />
              </div>
              <div className="text-sm text-gray-300">
                <p>
                  <span className="font-semibold text-white">Industry:</span>{" "}
                  Hand Tool Manufacturing
                </p>
                <p>
                  <span className="font-semibold text-white">Challenge:</span>{" "}
                  High defect rate and inconsistent quality checks on
                  fast-moving production lines.
                </p>
                <p>
                  <span className="font-semibold text-white">Solution:</span>{" "}
                  Real-time CV-based QC system with automated anomaly detection.
                </p>
                <p>
                  <span className="font-semibold text-white">Impact:</span>{" "}
                  Manufacturing defects: ↓31%, Solar farm downtime: ↓22%, Annual
                  savings: $1.2M
                </p>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-center mt-6">
              <button className="rounded-full border border-white px-8 py-3 w-full text-sm hover:bg-white hover:text-black transition">
                MORE CASE STUDIES COMING SOON.
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* TEAM SECTION */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="flex flex-row gap-6 items-center mb-8">
          <h2 className="text-3xl font-semibold">Team</h2>
          <div className="h-8 border-b-1 w-full border-white/40" />
        </div>
        <ScrollableRow
          items={teamMembers}
          renderItem={(member, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-72 rounded-xl bg-neutral-800 p-6 flex flex-col items-center text-center"
            >
              <div className="relative w-48 h-48 mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-300">{member.role}</p>
            </div>
          )}
        />
      </section>

      {/* BLOG SECTION */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-row gap-6 items-center mb-8">
          <h2 className="text-3xl font-semibold">Blog</h2>
          <div className="h-8 border-b-1 w-full border-white/40" />
        </div>
        <ScrollableRow
          items={blogPosts}
          renderItem={(post, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-72 rounded-xl bg-neutral-800 p-4 flex flex-col"
            >
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={post.image}
                  alt={post.author}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-md font-semibold">{post.author}</h3>
              <p className="text-sm text-gray-300 mb-2">{post.role}</p>
              <p className="text-sm text-gray-400">{post.desc}</p>
            </div>
          )}
        />
      </section>
      <section>
        <div className=" mx-10 border-t-1 border-b-1 mt-10 border-white/40 py-6 mb-10">
          <div className="mx-auto h-[400px] flex items-center justify-center">
            <TextHoverEffect text="VISTRAL" />
          </div>
        </div>

      </section>
      <footer className="max-w-7xl mx-auto px-4 py-16 mt-16 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-between w-full">
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#team" className="text-sm text-gray-400 hover:text-white">Team</a></li>
              <li><a href="#results" className="text-sm text-gray-400 hover:text-white">Results</a></li>
              <li><a href="#process" className="text-sm text-gray-400 hover:text-white">Process</a></li>
              <li><a href="#industries" className="text-sm text-gray-400 hover:text-white">Industries</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-sm text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="/terms" className="text-sm text-gray-400 hover:text-white">Terms</a></li>
              <li><a href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy</a></li>
              <li><a href="https://linkedin.com/company/vistral" className="text-sm text-gray-400 hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-12 pt-8 border-t border-white/10">
          <a href="mailto:hello@vistral.co" className="text-sm text-gray-400 hover:text-white mb-4 md:mb-0">hello@vistral.co</a>
          <p className="text-sm text-gray-500">© 2025 QUMANS. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}


function ScrollableRow({
  items,
  renderItem,
}: {
  items: any[];
  renderItem: (item: any, idx: number) => JSX.Element;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = dir === "left" ? -300 : 300;
    containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80"
      >
        <ChevronLeft className="text-white" />
      </button>
      <div
        ref={containerRef}
        className="flex overflow-x-auto no-scrollbar gap-6 px-10"
      >
        {items.map((item, idx) => renderItem(item, idx))}
      </div>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80"
      >
        <ChevronRight className="text-white" />
      </button>
    </div>
  );
}