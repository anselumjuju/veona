const About = () => {
  return (
    <section id='about' aria-labelledby='about-title'>
      <h2 className='section-title' id='about-title'>
        About VEONA Foundation
      </h2>
      <div className='about-content'>
        <div className='about-text'>
          <h3>Our Story</h3>
          <p>VEONA Foundation is a global humanitarian platform that connects people who want to help with those who need it.</p>
          <p>
            <strong>Mission:</strong> To build a global humanitarian network that provides food, education, health, care, and hope by connecting people, technology, and purpose.
          </p>
          <p>
            <strong>Vision:</strong> To create a world where compassion is organized, and every act of help reaches the right person at the right time.
          </p>
        </div>
        <div className='principles' aria-label='Core principles'>
          <h4>Core Principles</h4>
          <ul>
            <li>
              <strong>Transparency:</strong> Every donation and action is traceable
            </li>
            <li>
              <strong>Dignity:</strong> Every person deserves respect
            </li>
            <li>
              <strong>Action:</strong> Less talk, more real help
            </li>
            <li>
              <strong>Technology for Good:</strong> Digital tools that connect hearts
            </li>
            <li>
              <strong>Global Inclusion:</strong> Anyone, anywhere, can be part of the change
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
