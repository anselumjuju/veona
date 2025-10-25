const Contact = () => {
  return (
    <section id='contact' aria-labelledby='contact-title'>
      <h2 className='section-title' id='contact-title'>
        Contact Us
      </h2>
      <div className='contact-grid'>
        <div className='contact-form'>
          <h3>Send Us a Message</h3>
          <form id='contactForm'>
            <input type='text' name='name' placeholder='Your Name' required />
            <input type='email' name='email' placeholder='Your Email' required />
            <input type='text' name='subject' placeholder='Subject' required />
            <textarea name='message' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>
              Send Message
            </button>
          </form>
        </div>
        <div className='contact-info'>
          <h3>Get in Touch</h3>
          <p>
            <strong>Email:</strong> contact@veona.org
          </p>
          <p>
            <strong>Founder:</strong> Milan (Christofer V.P)
          </p>
          <p>
            <strong>Founded:</strong> 2022
          </p>
          <p style={{ marginTop: '1.2rem' }}>Connect with us on social media and be part of the global humanitarian movement.</p>
          <p style={{ color: '#f59e0b', fontSize: '1.05rem', marginTop: '1rem' }}>Everyone deserves another chance at life.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
