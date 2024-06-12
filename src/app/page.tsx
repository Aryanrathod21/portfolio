// src/app/page.tsx
'use client'
import React, { useRef, useEffect } from 'react';
import About from "@/components/about";
import Contact from "@/components/contact";
import Homepage from "@/components/home";
import Projectdesc from "@/components/projectdesc";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";
import Header from '@/components/header';  // Import Header here
import { useVisibility } from '@/components/visible/VisibilityContext';

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const { setIsVisible } = useVisibility();

  const scrollToSection = (section) => {
    switch (section) {
      case 'home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
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
