'use client';

import { useState, useEffect } from 'react';

interface Section {
  id: string;
  label: string;
}

interface SideNavigationProps {
  sections: Section[];
  theme: {
    dotColor: string;
    activeDotColor: string;
    labelColor: string;
  };
}

export default function SideNavigation({ sections, theme }: SideNavigationProps) {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center gap-3"
            aria-label={section.label}
          >
            <span
              className={`text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${theme.labelColor}`}
            >
              {section.label}
            </span>
            <span
              className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? `${theme.activeDotColor} scale-125`
                  : `${theme.dotColor} hover:scale-110`
              }`}
            />
          </button>
        ))}
      </div>
    </nav>
  );
}
