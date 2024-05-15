"use client";
import React from 'react';
import swal from 'sweetalert';
import emailjs from 'emailjs-com';
import "../public/ContactForm.css";

import { useState } from 'react';

interface ContactFormProps {
  // define any props your component might accept
}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    else if (name === 'phone') setPhone(value);
    else if (name === 'email') setEmail(value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your form submission logic here
  }

  return (
    <div className=''>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1941492392557!2d106.66422177465911!3d10.79643725882507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292e79f1e72f%3A0xae118f87eef3dca1!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBUw6BpIG5ndXnDqm4gdsOgIE3DtGkgdHLGsOG7nW5nIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1713020451541!5m2!1svi!2s"
        width="400"
        height="450"
        style={{ width: '40%', left: '40%', position: 'absolute', top: '250%', transform: 'translate(-50%, -50%)', marginTop: '250px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <h2>Đăng ký thành viên</h2>
        <h2>Để nhận nhiều ưu đãi bất ngờ</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" id="name" placeholder="Name" name="name" value={name} onChange={handleInputChange} required />
          <input type="text" id="phone" placeholder="Phone" name="phone" value={phone} onChange={handleInputChange} required />
          <input type="email" id="email" placeholder="Email" name="email" value={email} onChange={handleInputChange} required />
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
