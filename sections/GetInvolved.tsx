'use client';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const GetInvolved = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const elements = containerRef.current!.querySelectorAll('.option-card');
    elements.forEach((element, index) => {
      gsap.fromTo(element, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 80%' } });
    });
  });

  return (
    <section id='involved' className='get-involved' aria-labelledby='involved-title' ref={containerRef}>
      <h2 className='section-title' id='involved-title'>
        Get Involved
      </h2>
      <div className='involvement-options'>
        <div className='option-card'>
          <h3>🙋 Become a Volunteer</h3>
          <p>Join our global team of changemakers and make a direct impact in your community</p>
          <a href='#contact' className='btn btn-primary'>
            Sign Up
          </a>
        </div>
        <div className='option-card'>
          <h3>🤝 Partner with Us</h3>
          <p>Collaborate with VEONA to amplify your humanitarian efforts</p>
          <a href='#contact' className='btn btn-primary'>
            Partner Now
          </a>
        </div>
        <div className='option-card'>
          <h3>❤ Sponsor a Child</h3>
          <p>Change a child's life through education and care sponsorship</p>
          <a href='#contact' className='btn btn-primary'>
            Sponsor
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
