// app/page.js
"use client";
import { useState , useEffect , useRef} from 'react';
import Image from 'next/image';

export default function Home() {
   const [stats, setStats] = useState({
    revenue: 0,
    projects: 0,
    years: 0
  });

  const targetStats = {
    revenue: 500000,
    projects: 100,
    years: 4
  };

  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const isInViewport = (element) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated && statsRef.current && isInViewport(statsRef.current)) {
        setHasAnimated(true);

        const duration = 2000;
        const frameDuration = 1000 / 60;
        const totalFrames = Math.round(duration / frameDuration);
        let frame = 0;

        const counter = setInterval(() => {
          frame++;
          const progress = frame / totalFrames;

          setStats({
            revenue: Math.floor(progress * targetStats.revenue),
            projects: Math.floor(progress * targetStats.projects),
            years: Math.floor(progress * targetStats.years)
          });

          if (frame === totalFrames) {
            clearInterval(counter);
            setStats(targetStats);
          }
        }, frameDuration);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);
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
    <main className="min-h-screen">
{/* Hero Section */}
<section
  className="relative h-screen flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: `url('./homeBg.png')`, // Change this to your image URL
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0  z-0"></div>

  {/* Content */}
  <div className="container mx-auto px-6 relative z-10 text-center">
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
  Next-Gen Digital Growth for Service Brands
</h1>
<p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
  Lead Generation. Viral Content. AI-Enhanced Campaigns. All-in-One Growth Engine.
</p>

  </div>
</section>

{/* services */}
   <section className="bg-white py-8 overflow-hidden">
  <div className="relative">
    <div className="animate-marquee whitespace-nowrap flex gap-12">
      {[
        "Social Media Management",
        "AI-Powered Content",
        "Lead Generation Funnels",
        "Reels & TikToks",
        "Brand Design & Identity"
      ].map((item, index) => (
        <div key={index} className="text-black font-bold text-lg px-4">
          {item}
        </div>
      ))}
      {/* Duplicate for seamless loop */}
      {[
        "Social Media Management",
        "AI-Powered Content",
        "Lead Generation Funnels",
        "Reels & TikToks",
        "Brand Design & Identity"
      ].map((item, index) => (
        <div key={`dup-${index}`} className="text-black font-bold text-lg px-4">
          {item}
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Our Work Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
<h2 className="text-3xl font-bold mb-2">AI-Powered Growth. Real Results.</h2>
<h3 className="text-2xl font-semibold">From Social Management to Viral Campaigns — All Under One Roof</h3>
          </div>

          <div className="max-w-4xl mx-auto mb-12 relative">
  <img src="/reel.png" alt="Logo" className="mx-auto block" />

  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <button className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
      <span>Watch Our Reel</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
      </svg>
    </button>
  </div>
</div>


       
        </div>
      </section>


      {/* Stats Section */}
  <section ref={statsRef} className="bg-[#022729] text-white py-20">
      <div className="container mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Empire Results in Numbers</h2>
        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          Backed by performance. Empire Results has delivered high-impact strategies, creative execution, and real business growth — consistently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 p-8 rounded-lg shadow-md hover:bg-white/20 transition">
            <div className="text-3xl font-bold mb-2">
              ${stats.revenue.toLocaleString()}
            </div>
            <div className="text-gray-300 text-sm">Revenue from one project</div>
          </div>

          <div className="bg-white/10 p-8 rounded-lg shadow-md hover:bg-white/20 transition">
            <div className="text-3xl font-bold mb-2">
              {stats.projects}+
            </div>
            <div className="text-gray-300 text-sm">Projects Completed</div>
          </div>

          <div className="bg-white/10 p-8 rounded-lg shadow-md hover:bg-white/20 transition">
            <div className="text-3xl font-bold mb-2">
              {stats.years}
            </div>
            <div className="text-gray-300 text-sm">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>

    {/* Beta Program Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-4">
      We’re currently helping 4 businesses grow organically—
    </h2>
    <p className="text-xl text-gray-600 mb-12">
      Check back soon to see their progress!
    </p>

    <div className="relative w-[400px] h-[400px] mx-auto">

      {/* Orbit Rings (Gray Lines) */}
      <div className="absolute inset-0 rounded-full border border-gray-300 opacity-50"></div>
      <div className="absolute inset-[20px] rounded-full border border-gray-300 opacity-50"></div>
      <div className="absolute inset-[40px] rounded-full border border-gray-300 opacity-50"></div>
      <div className="absolute inset-[60px] rounded-full border border-gray-300 opacity-50"></div>

      {/* Center Logo */}
      <div className="absolute top-1/2 left-1/2 w-28 h-28 rounded-full bg-[#022729] flex items-center justify-center shadow-2xl transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
          <img src="/Logo.png" alt="Logo" className="h-10 w-auto" />
        </div>
      </div>

      {/* Strategy 1 - Social Media */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <div className="w-20 h-20 rounded-full bg-white shadow-md flex flex-col items-center justify-center text-xs font-medium">
          <div className="w-10 h-10 bg-[#022729] text-white rounded-full flex items-center justify-center shadow-lg">
            A
          </div>
          <span className="mt-1 text-[11px] text-gray-700">Social Media</span>
        </div>
      </div>

      {/* Strategy 2 - Growth Systems */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <div className="w-20 h-20 rounded-full bg-white shadow-md flex flex-col items-center justify-center text-xs font-medium">
          <div className="w-10 h-10 bg-[#022729] text-white rounded-full flex items-center justify-center shadow-lg">
            B
          </div>
          <span className="mt-1 text-[11px] text-gray-700">Growth Systems</span>
        </div>
      </div>

      {/* Strategy 3 - AI Content */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="w-20 h-20 rounded-full bg-white shadow-md flex flex-col items-center justify-center text-xs font-medium">
          <div className="w-10 h-10 bg-[#022729] text-white rounded-full flex items-center justify-center shadow-lg">
            C
          </div>
          <span className="mt-1 text-[11px] text-gray-700">AI Content</span>
        </div>
      </div>

      {/* Strategy 4 - Paid Ads */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <div className="w-20 h-20 rounded-full bg-white shadow-md flex flex-col items-center justify-center text-xs font-medium">
          <div className="w-10 h-10 bg-[#022729] text-white rounded-full flex items-center justify-center shadow-lg">
            D
          </div>
          <span className="mt-1 text-[11px] text-gray-700">Paid Ads</span>
        </div>
      </div>

    </div>

    <div className="mt-12">
      <button className="bg-[#022729] text-white px-8 py-3 rounded-full font-medium">
        View Upcoming Results
      </button>
    </div>
  </div>
</section>






      {/* Our work */}

 <section className="py-20 bg-[#022729] text-white">
  <div className="max-w-4xl mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center mb-12">
      <div>
        <h2 className="text-3xl font-bold mb-1">EyeShow Studios</h2>
        <p className="text-gray-300">Where Creativity Meets Award-Winning Production.</p>
      </div>
     <a href='/About'>
       <button className="mt-6 md:mt-0 bg-white text-[#022729] px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-white">
        Explore our Services
      </button>
     </a>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
      {[
        {
          title: "Diamond Law Center",
          img: "/diamondlawcenter.png",
          link: "https://diamondlawcenter.net/",
        },
        {
          title: "RiverRock Medical",
          img: "/riverrockmedical.png",
          link: "https://riverrockmedical.com/",
        },
        {
          title: "Big Fish Results",
          img: "/bigfishresults.png",
          link: "https://bigfishresults.com/",
        },
        {
          title: "Tony Guarnaccia",
          img: "/tonyguarnaccia.png",
          link: "https://tonyguarnaccia.com/",
        },
      ].map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative rounded-lg overflow-hidden border-2 border-black shadow-lg group p-4 bg-white hover:scale-[1.02] transition"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-40 object-contain rounded-lg bg-white"
          />
          <div className="mt-4 text-center text-[#022729] font-semibold text-lg">
            {item.title}
          </div>
        </a>
      ))}
    </div>
  </div>
</section>




      {/* Contact Form */}
   <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Contact Our <span className="text-[#022729]">team</span></h2>
          <p className="text-gray-600">Let's Create Something Extraordinary!</p>
        </div>

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
    </section>

    
    </main>
  );
}