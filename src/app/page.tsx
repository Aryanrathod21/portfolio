// src/app/page.tsx
'use client'
import React, { useRef, useEffect, useState, RefObject } from 'react';
import About from "@/components/about";
import Contact from "@/components/contact";
import Homepage from "@/components/home";
import Projectdesc from "@/components/projectdesc";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";
import Header from '@/components/header';  // Import Header here
import { useVisibility } from '@/components/visible/VisibilityContext';
import { generateCyclingText } from './utils';

type Section = 'home' | 'about' | 'projects' | 'contact';

const SplashScreen: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Animation", "is", "Revolution"];
  const [currentText, setCurrentText] = useState<string[]>([]);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const textSequence = generateCyclingText(words[currentWordIndex], 7); // Updated speed
      setCurrentText(textSequence);
    }
  }, [currentWordIndex]);

  useEffect(() => {
    if (currentText.length > 0) {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText(currentText[index]);
        index++;
        if (index === currentText.length) {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentWordIndex((prevIndex) => prevIndex + 1);
          }, 500); // Adding a slight delay before showing the next word
        }
      }, 7); // Updated speed
      return () => clearInterval(interval);
    }
  }, [currentText]);

  return (
    <div className="fixed inset-0 flex items-center justify-center galaxy-background z-50">
      <div className="text-white text-center">
        {currentWordIndex < words.length && (
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
            {displayedText}
          </h1>
        )}
      </div>
    </div>
  );
};

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
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
    const timer = setTimeout(() => {
      setShowSplash(false);
      setIsVisible(true);
    }, 6000); // Adjusted timing based on the length of the splash screen animation

    return () => clearTimeout(timer);
  }, [setIsVisible]);

  return (
    <div className="bg-slate-50">
      {showSplash && <SplashScreen />}
      {!showSplash && (
        <>
          <Header scrollToSection={scrollToSection} />
          <div ref={homeRef}><Homepage /></div>
          <div ref={aboutRef}><About /></div>
          <Technologies />
          <div ref={projectsRef}><Projects /></div>
          <Projectdesc />
          <div ref={contactRef}><Contact /></div>
        </>
      )}
    </div>
  );
}
