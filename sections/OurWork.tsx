'use client';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const OurWork = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const elements = containerRef.current!.querySelectorAll('.pillar-card');
    elements.forEach((element) => {
      gsap.fromTo(element, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 80%' } });
    });
  });

  return (
    <section id='work' aria-labelledby='work-title' ref={containerRef}>
      <h2 className='section-title' id='work-title'>
        Our 12 Core Pillars
      </h2>
      <div className='pillars-grid'>
        <div className='pillar-card'>
          <div className='pillar-icon'>🤝</div>
          <h3>Helping Roadside & Homeless People</h3>
          <p>Providing immediate aid and dignity to those living on the streets</p>
        </div>
        <div className='pillar-card'>
          <div className='pillar-icon'>📚</div>
          <h3>Education for All</h3>
          <p>Ensuring every child has access to quality education</p>
        </div>
        <div className='pillar-card'>
          <div className='pillar-icon'>🍲</div>
          <h3>Food Help</h3>
          <p>Fighting hunger through organized food distribution programs</p>
        </div>
        <div className='pillar-card'>
          <div className='pillar-icon'>💉</div>
          <h3>Blood Donation & Health Camps</h3>
          <p>Organizing health camps and blood donation drives</p>
        </div>
        <div className='pillar-card'>
          <div className='pillar-icon'>💭</div>
          <h3>Counselling & Emotional Support</h3>
          <p>Providing mental health support and emotional healing</p>
        </div>
        <div className='pillar-card'>
          <div className='pillar-icon'>👶</div>
          <h3>Children Care</h3>
          <p>Protecting and nurturing vulnerable children</p>
        </div>
        <div className='pillar-card'>
          <div className='pillar-icon'>🏡</div>
          <h3>Hospitality & Elder Care</h3>
          <p>Ensuring dignity and care for our elderly community</p>
        </div>
        <div className='pillar-card'>
          <div className='pillar-icon'>🌍</div>
          <h3>Environment & Clean Planet</h3>
          <p>Working towards a sustainable and clean environment</p>
        </div>
        <div className='pillar-card'>
          <div className='pillar-icon'>👩</div>
          <h3>Women Empowerment</h3>
          <p>Empowering women through education and opportunities</p>
        </div>
        <div className='pillar-card'>
          <div className='pillar-icon'>♿</div>
          <h3>Disability & Inclusion</h3>
          <p>Creating an inclusive world for people with disabilities</p>
        </div>
        <div className='pillar-card'>
          <div className='pillar-icon'>🎯</div>
          <h3>Youth Leadership & Volunteering</h3>
          <p>Inspiring the next generation of changemakers</p>
        </div>
        <div className='pillar-card'>
          <div className='pillar-icon'>🧘</div>
          <h3>Spiritual & Mindful Living</h3>
          <p>Promoting inner peace and mindful existence</p>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
