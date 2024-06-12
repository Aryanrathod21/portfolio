// src/app/page.tsx
'use client'
import React, { useRef, useEffect, RefObject } from 'react';
import About from "@/components/about";
import Contact from "@/components/contact";
import Homepage from "@/components/home";
import Projectdesc from "@/components/projectdesc";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";
import Header from '@/components/header';  // Import Header here
import { useVisibility } from '@/components/visible/VisibilityContext';

type Section = 'home' | 'about' | 'projects' | 'contact';

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const { setIsVisible } = useVisibility();

  const scrollToSection = (section: Section) => {
    const refs: Record<Section, RefObject<HTMLDivElement>> = {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
      contact: contactRef,
    };
    refs[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setIsVisible(true);
  }, [setIsVisible]);

  return (
    <div className="bg-slate-50">
      <Header scrollToSection={scrollToSection} />
      <div ref={homeRef}><Homepage /></div>
      <div ref={aboutRef}><About /></div>
      <Technologies />
      <div ref={projectsRef}><Projects /></div>
      <Projectdesc />
      <div ref={contactRef}><Contact /></div>
    </div>
  );
}
