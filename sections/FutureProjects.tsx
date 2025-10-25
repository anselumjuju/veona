'use client';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const FutureProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const elements = containerRef.current!.querySelectorAll('.pillar-card');
    elements.forEach((element) => {
      gsap.fromTo(element, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 80%' } });
    });
  });

  return (
    <section aria-labelledby='future-title' ref={containerRef}>
      <h2 className='section-title' id='future-title'>
        Future Projects
      </h2>
      <div className='pillars-grid'>
        <div className='pillar-card'>
          <div className='pillar-icon'>💼</div>
          <h3>Employment Programs</h3>
          <p>Creating job opportunities and skill development initiatives</p>
        </div>
        <div className='pillar-card'>
          <div className='pillar-icon'>🏥</div>
          <h3>Rehabilitation Centers</h3>
          <p>Supporting recovery and reintegration into society</p>
        </div>
        <div className='pillar-card'>
          <div className='pillar-icon'>🔒</div>
          <h3>Digital Safety</h3>
          <p>Protecting vulnerable communities in the digital age</p>
        </div>
        <div className='pillar-card'>
          <div className='pillar-icon'>🚀</div>
          <h3>Innovation Hub</h3>
          <p>Technology solutions for humanitarian challenges</p>
        </div>
      </div>
    </section>
  );
};

export default FutureProjects;
