"use client"

import React , {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaInstagram } from "react-icons/fa";


export default function Contact() {
   
   const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.details,
      subject: "New Submission from Empire Results"
    };

    const json = JSON.stringify(data);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });

    const result = await response.json();
    console.log("Web3Forms Response:", result); 

    if (result.success) {
      alert("Form submitted successfully!");
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        details: ''
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Contact Us | Empire Realty</title>
        <meta name="description" content="Contact Empire Realty for award-winning video production services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        {/* Hero Section */}
                  <section className="relative h-[70vh] w-full overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black to-transparent z-10"></div>
                    <div className="absolute inset-0">
                      <Image 
                        src="/contactBg.png" 
                        alt="Our team at work" 
                        layout="fill" 
                        objectFit="cover" 
                        className="brightness-100"
                        priority
                      />
                    </div>
                   <div className="relative z-20 max-w-4xl mx-auto px-6 h-full flex flex-col justify-center items-center">
              <div className="max-w-3xl text-start">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Get In Touch With Us</h1>
                <p className="text-xl text-gray-200 mb-8">
Let's collaborate on your next award-winning video production project                </p>
              </div>
            </div>
            
                  </section>

    

      {/* Contact Information Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Our <span className="text-[#022729] ">team</span></h2>
              <p className="text-gray-700 mb-8">Let's Create Something Extraordinary!</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  {/* <div className="bg-[#022729]  rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div> */}
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#022729]  rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-gray-600">jeremiah@empireresults.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#022729]  rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Office Location</h3>
                    <p className="text-gray-600">Austin, Texas</p>
                  </div>
                </div>
              </div>
              
            <div className="mt-12">
  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
  <div className="flex space-x-4">
    <a
      href="https://www.linkedin.com/in/jeremiah-guarnaccia/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#022729] hover:bg-teal-700 transition p-3 rounded-full"
    >
      <FaLinkedin className="w-5 h-5 text-white" />
    </a>
    <a
      href="https://www.instagram.com/empireresults/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#022729] hover:bg-teal-700 transition p-3 rounded-full"
    >
      <FaInstagram className="w-5 h-5 text-white" />
    </a>
  </div>
</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter Your First Name" required className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-teal-500" />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter Your Last Name" required className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-teal-500" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Your Phone" className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-teal-500" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" required className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-teal-500" />
          </div>

          <div className="mb-6">
            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Enter Your Company Name" className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-teal-500" />
          </div>

          <div className="mb-8">
            <textarea name="details" value={formData.details} onChange={handleChange} placeholder="Request Details" rows="4" className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-teal-500"></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="bg-[#022729] text-white px-12 py-3 rounded-full hover:bg-teal-800 transition-colors">
              Submit
            </button>
          </div>
        </form>
            </div>
          </div>
        </div>
      </section>

{/* Map Section */}
<section className="py-16 bg-[#022729]">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl text-white font-bold mb-12 text-center">Find Us</h2>
      <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
        <iframe
          title="Austin, Texas Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110571.77413159592!2d-97.79674739320649!3d30.307181209417036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a1a81c3cbb%3A0xf9b6c04d2080efea!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1716366717595!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</section>


     {/* FAQ Section */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

      <div className="space-y-6">

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <button className="flex justify-between items-center w-full p-6 text-left">
            <span className="text-lg font-semibold">What services does Empire Results offer?</span>
            <svg className="w-5 h-5 text-[#022729] " fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="px-6 pb-6">
            <p className="text-gray-700">
              We offer a full suite of services including social media management, lead generation ads, AI-powered content creation, 
              branding & design, local SEO, and community management—tailored for service-based businesses.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <button className="flex justify-between items-center w-full p-6 text-left">
            <span className="text-lg font-semibold">Who is your ideal client?</span>
            <svg className="w-5 h-5 text-[#022729] " fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="px-6 pb-6">
            <p className="text-gray-700">
              We specialize in working with local service-based businesses—like dental clinics, fitness studios, wellness brands, 
              and coaches—typically run by owners aged 25–45 who want fast, effective digital growth.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <button className="flex justify-between items-center w-full p-6 text-left">
            <span className="text-lg font-semibold">What makes Empire Results different?</span>
            <svg className="w-5 h-5 text-[#022729] " fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="px-6 pb-6">
            <p className="text-gray-700">
              We blend high-performance marketing with automation and AI to deliver results quickly and affordably. 
              Unlike traditional agencies, our systems are optimized for ROI—not just flashy deliverables.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <button className="flex justify-between items-center w-full p-6 text-left">
            <span className="text-lg font-semibold">How much do your services cost?</span>
            <svg className="w-5 h-5 text-[#022729] " fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="px-6 pb-6">
            <p className="text-gray-700">
              Pricing is based on the services you select. We offer à la carte options and packages. 
              You’ll only pay for what you need—no bloated retainers or hidden fees. Book a call for a custom quote.
            </p>
          </div>
        </div>

        

      </div>
    </div>
  </div>
</section>



    </div>
  );
}