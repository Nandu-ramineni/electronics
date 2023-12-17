// About.jsx
import React, { useEffect } from 'react';
import '../styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <div className="about-section" /*data-aos="fade-up" data-aos-offset="10" data-aos-delay="10" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-center"*/>
      <div className="about-container">
        <div className="about-content">
          <h2>About Tech Craft</h2>
          <p>
            Welcome to Tech Craft, your go-to destination for all things tech and electric!
            We strive to provide high-quality products that cater to your technological needs.
            Our store features a wide range of components, gadgets, and accessories to enhance
            your tech experience.
          </p>
          <p>
            At Tech Craft, we believe in innovation, reliability, and customer satisfaction.
            Our team is dedicated to curating a collection of cutting-edge products that align
            with the latest technological trends. Whether you're a tech enthusiast, gamer, or
            professional, we have something for everyone.
          </p>
          <p>
            Explore our diverse catalog, and indulge in the world of possibilities that
            technology has to offer. We're committed to delivering a seamless shopping
            experience, ensuring that you find the perfect tech solutions that match your
            preferences and requirements.
          </p>
          <p>
            Our team of experts is passionate about technology, and we curate a selection of
            products that are not only reliable but also reflect the latest trends. Whether you are
            a tech enthusiast, hobbyist, or professional, Tech Craft has something for everyone.
          </p>
          <p>
            Join us on this journey of technological exploration. Tech Craft - Your Tech, Your Way!
          </p>
          <p>
            We appreciate your trust in us, and we strive to exceed your expectations with every
            purchase. Thank you for choosing Tech Craft Electric Store.
          </p>
        </div>
        <div className="about-images" /*data-aos="fade-up" data-aos-offset="10" data-aos-delay="10" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-center"*/>
          {/* Replace the placeholder paths with your actual image paths */}
          <img src="https://img.freepik.com/free-photo/cute-freelance-girl-using-laptop-sitting-floor-smiling_176420-20221.jpg?w=1060&t=st=1702012417~exp=1702013017~hmac=c06c3966352aef7733afdd5fb81221200412f964b596258e8a43f4a82a84a39f" alt="Tech Craft Store" className="about-image"/>
          <img src="https://img.freepik.com/free-photo/close-up-portrait-nice-cute-adorable-smiling-charming-cheerful-girl-pointing-with-her-index-finger_176532-7923.jpg?w=1060&t=st=1702012470~exp=1702013070~hmac=827319069779939b711305f2c4e5874e0696d4ac44af102fac6e7afd60494f5c" alt="Tech Craft Products"className="about-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
