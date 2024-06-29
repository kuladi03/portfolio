import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container" id='contact'>
        <h2 className="section__title">Contact</h2>
        
        <div className="contact__content">
          <p className="contact__intro">
            Get in touch to discuss collaboration opportunities🤝 or just to say hello👋!
          </p>

          <div className="contact__info">
            <h3 className="contact__subtitle">Contact Information</h3>
            <ul>
              <li><i class="uil uil-envelope"></i><strong> Email:</strong> kuladi03@gmail.com</li>
              <li><i class="uil uil-phone"></i><strong> Phone:</strong> +91 7447396321</li>
            </ul>
          </div>

          <div className="contact__social">
            <h3 className="contact__subtitle">Social Media</h3>
            <ul>
            <li><a href="https://github.com/kuladi03" className="home__social icon" target="_blank">
                <i class="uil uil-github"></i>
            </a></li>

            <li><a href="https://www.linkedin.com/in/kuladi/" className="home__social icon" target="_blank">
                <i class="uil uil-linkedin"></i>
            </a></li>

            <li><a href="https://www.instagram.com/adikulkarni03/" className="home__social icon" target="_blank">
                <i class="uil uil-instagram"></i>
            </a> </li>   

            <li><a href="https://x.com/Adikulkarni03" className="home__social icon" target="_blank">
                <i class="uil uil-twitter"></i>
            </a>  </li>  
            </ul>
          </div>

          <div className="contact__location">
            <h3 className="contact__subtitle">Location</h3>
            <p><i class="uil uil-map-marker"></i> Pune , Maharashtra , India</p>
          </div>

          <div className="contact__connect">
            <p className="contact__connect-text">Let's connect😊!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
