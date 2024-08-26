import React, {useRef, useState} from 'react';
import emailjs from "@emailjs/browser";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Contact = ({ref}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const form = useRef();

    function openModal() {
        setModalOpen(true);

        // setTimeout(() => {
        //     closeModal();
        // }, 5000)
    }

    function closeModal() {
        setModalOpen(false);
    }

    function openErrorModal() {
        setErrorModalOpen(true);
    }

    function closeErrorModal() {
        setErrorModalOpen(false);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_7mzzfdd', 'template_csnwcxr', form.current, 'RFXJgjiNicTEPS3qQ')
          .then((result) => {
              console.log(result.text);
              openModal();
          }, (error) => {
              console.log(error.text);
              openErrorModal();
          });
          e.target.reset();
    }





  return (
    <>
        <a ref={ref} className='anchor' id='contact-section'></a>
        <div className='content' id='contact-content'>
            <div className='wrapper' id='contact-wrapper'>
                <h2 className="section-header">Get in touch with us</h2>
                <div id='form-container'>  
                    <h2 id="contact-blurb">Feel free to fill out our contact form here, <br></br>or just give us a call at <br></br><h2 id="contact-num">(631) 744 - 5147</h2></h2>                      
                    <form id="contact-form" ref={form} onSubmit={sendEmail}>
                        <label className="form-labels">Name:</label>
                        <input type="text" className="form-inputs" name="name" placeholder="Name" required></input>
                        <label className="form-labels">Email:</label>
                        <input type="email" className="form-inputs" name="email" placeholder="Email" required></input>
                        <label className="form-labels">Phone:</label>
                        <input type="tel" className="form-inputs" name="phone" placeholder="Phone Number" maxLength="16" required></input>
                        <label className="form-labels">How can we help?:</label>
                        <textarea id="contact-textarea" placeholder="How can we help?" rows="10" name="additional-info"></textarea>
                        {
                            modalOpen ? 
                        <div data-aos="zoom-in" className="contact-message">
                            <span id="modal-x" onClick={() => closeModal()}>X</span>
                            <h2>Thank You!</h2>
                            <p>Thank you for considering us for your project!</p>
                            <p>We will review your inquiry and get back to you promptly with how we can assist you. Talk to you soon!</p>
                        </div>
                        : 
                        null
                        }
                        {
                            errorModalOpen ? 
                            <div data-aos="zoom-in" className="contact-message">
                            <span id="modal-x" onClick={() => closeErrorModal()}>X</span>
                            <h2>Inquiry not sent successfully.</h2>
                            <p>Hmm... It seems like your submission did not send. Please try again.</p>
                            <p>If your inquiry is still not sending successfully, feel free to email us directly at "Floorjays@gmail.com"</p>
                            <p>Thank you for your interest in FloorJays! We hope to hear from you soon!</p>
                            </div>
                        : 
                        null
                        }
                        <button id="contact-btn">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact