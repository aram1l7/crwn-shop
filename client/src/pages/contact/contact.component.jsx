import React, { Component } from 'react';
import './contact.styles.scss'
class ContactPage extends Component{
    render(){
        return(
            <section id="contact" className="section-bg">
            <div className="container" data-aos="fade-up">
      
              <div className="section-header">
                <h2 className="contact-title">Contact Info</h2>
              </div>
      
              <div className="row contact-info">
                <div className="col-md-4">
                  <div className="contact-address">
                    <i className="ion-ios-location-outline">
                    &#8962;
                    </i>
                    <h3>Address</h3>
                    <address>A108 Adam Street, NY 535022, USA</address>
                  </div>
                </div>
      
                <div className="col-md-4">
                  <div className="contact-phone">
                  <i className="ion-ios-telephone-outline">
                  📞
                  </i>
                    <h3>Phone Number</h3>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
      
                <div className="col-md-4">
                  <div className="contact-email">
                    <i className="ion-ios-email-outline">
                    &#128231;
                    </i>
                    <h3>Email</h3>
                    <p><a href="mailto:info@example.com">info@example.com</a></p>
                  </div>
                </div>
      
              </div>
              </div>
              </section>
        );
    }
}
export default ContactPage;