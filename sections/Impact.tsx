'use client';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Impact = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const elements = containerRef.current!.querySelectorAll('.stat-card');
    elements.forEach((element, index) => {
      gsap.fromTo(element, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 80%' } });
    });
  });

  return (
    <section id='impact' aria-labelledby='impact-title' ref={containerRef}>
      <h2 className='section-title' id='impact-title'>
        Our Impact
      </h2>
      <p className='impact-lead'>Together, we're creating real change around the world</p>
      <div className='impact-stats'>
        <div className='stat-card'>
          <div className='stat-number'>10,000+</div>
          <div className='stat-label'>Lives Touched</div>
        </div>
        <div className='stat-card'>
          <div className='stat-number'>500+</div>
          <div className='stat-label'>Active Volunteers</div>
        </div>
        <div className='stat-card'>
          <div className='stat-number'>25+</div>
          <div className='stat-label'>Countries Reached</div>
        </div>
        <div className='stat-card'>
          <div className='stat-number'>50+</div>
          <div className='stat-label'>Partner Organizations</div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
