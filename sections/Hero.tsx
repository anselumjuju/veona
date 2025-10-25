const Hero = () => {
  return (
    <section className='hero' id='home' role='banner' aria-label='VEONA Foundation hero section'>
      <h1>VEONA Foundation</h1>
      <p className='tagline'>"Everyone Deserves Another Chance."</p>
      <p>Building a global humanitarian network that connects compassion with action</p>
      <div className='cta-buttons' role='group' aria-label='Primary calls to action'>
        <a href='#contact' className='btn btn-primary'>
          Donate Now
        </a>
        <a href='#involved' className='btn btn-secondary'>
          Join Us
        </a>
        <a href='#involved' className='btn btn-secondary'>
          Become a Volunteer
        </a>
      </div>
    </section>
  );
};

export default Hero;
