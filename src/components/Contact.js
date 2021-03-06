import React from "react";
function Contact() {
  return (
    <div className="contact">
      <div className="contact-header">
        <div className="contact-header__title">
          Wanted to Discuss something...
        </div>
        <div className="contact-header__subtitle">
          I am always excited to work on some awesome projects, message me and
          let's discuss over coffee.
        </div>
        <a
          href="mailto:adeshgangwar1996@gmail.com?subject=Here's&nbsp;a&nbsp;thing!&body=Hi."
          className="contact-header__msgbtn"
        >
          <i className="fa fa-pencil"></i> Write a Message
        </a>
      </div>
      <div className="contact-options">
        <a href="tel:+918979988766" className="contact-options__card">
          <div className="contact-options__icon">
            <i className="fa fa-phone"></i>
          </div>
          <div className="contact-options__title">Call</div>
          <div className="contact-options__details">+91 (897) 998-8766</div>
        </a>
        <a
          href="mailto:adeshgangwar1996@gmail.com?subject=Here's&nbsp;a&nbsp;thing!&body=Hi."
          className="contact-options__card"
        >
          <div className="contact-options__icon">
            <i className="fa fa-envelope"></i>
          </div>
          <div className="contact-options__title">Email</div>
          <div className="contact-options__details">
            adeshgangwar1996@gmail.com
          </div>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=918979988766&amp;text=Hi"
          className="contact-options__card"
        >
          <div className="contact-options__icon">
            <i className="fa fa-whatsapp"></i>
          </div>
          <div className="contact-options__title">Whatsapp</div>
          <div className="contact-options__details">+91 (897) 998-8766</div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
