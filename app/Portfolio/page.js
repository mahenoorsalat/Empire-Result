"use client"

// pages/portfolio.js
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function Portfolio() {
      const [showVideo, setShowVideo] = useState(false);

  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'music', name: 'Music Videos' },
    { id: 'documentary', name: 'Documentary' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'event', name: 'Events' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Urban Dreams',
      client: 'Neon Apparel',
      category: 'commercial',
      thumbnail: '/images/portfolio/project1.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Mountain Escape',
      client: 'Travel Adventures Co.',
      category: 'documentary',
      thumbnail: '/images/portfolio/project2.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Corporate Overview',
      client: 'TechNova Inc.',
      category: 'corporate',
      thumbnail: '/images/portfolio/project3.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Electric Nights Tour',
      client: 'Sparks Music Band',
      category: 'music',
      thumbnail: '/images/portfolio/project4.jpg',
      featured: true
    },
    {
      id: 5,
      title: 'Product Launch',
      client: 'Gadget Universe',
      category: 'event',
      thumbnail: '/images/portfolio/project5.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Nature Documentary',
      client: 'Earth Films',
      category: 'documentary',
      thumbnail: '/images/portfolio/project6.jpg',
      featured: false
    },
    {
      id: 7,
      title: 'Holiday Campaign',
      client: 'Winter Wonders',
      category: 'commercial',
      thumbnail: '/images/portfolio/project7.jpg',
      featured: true
    },
    {
      id: 8,
      title: 'Annual Conference',
      client: 'Global Connect Forum',
      category: 'event',
      thumbnail: '/images/portfolio/project8.jpg',
      featured: false
    }
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <>
      <Head>
        <title>Our Portfolio | Empire Media</title>
        <meta name="description" content="Explore our award-winning video production portfolio" />
      </Head>
      
       {/* Hero Section */}
            <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black to-transparent z-10"></div>
              <div className="absolute inset-0">
                <Image 
                  src="/projectHero.png" 
                  alt="Our team at work" 
                  layout="fill" 
                  objectFit="cover" 
                  className="brightness-100"
                  priority
                />
              </div>
             <div className="relative z-20 max-w-4xl mx-auto px-6 h-full flex flex-col justify-center items-center">
        <div className="max-w-3xl text-start">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-200 mb-8">
              Award-winning productions that captivate audiences and drive results
          </p>
        </div>
      </div>
      
            </section>
     
      
 <section className="py-20  ">
  <div className="max-w-4xl mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center mb-12">
      <div>
        <h2 className="text-3xl font-bold mb-1">Client Spotlight</h2>
        <p className="text-gray-700">Real businesses. Real results. Powered by Empire Results.</p>
      </div>
    
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


{/* Systems, Not Studios */}
<section className="py-20 bg-[#022729]  text-white">
  <div className="mx-auto px-6 max-w-4xl">
    <div className="flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">We Don’t Need a Studio. We Build Systems.</h2>
        <p className="text-lg mb-8">
          While others boast about space, we focus on scalable growth systems that deliver real business results—powered by AI, strategy, and social precision.
        </p>
        <Link href="/services" className="inline-flex items-center text-white hover:text-teal-300 transition-colors">
          <span>Explore Our Workflows</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
      <div className="w-full md:w-1/2">
        <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
          <Image 
            src="/studio.png" // Replace with an image that represents automation or digital workflows
            alt="Our growth systems"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>


{/* Why Clients Choose Empire Results */}
<section className="py-20">
  <div className="mx-auto px-6 max-w-4xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Our Clients Stick Around</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="text-yellow-500 text-3xl mb-4">🤖</div>
        <h3 className="text-xl font-bold mb-3">AI-Driven Execution</h3>
        <p className="text-gray-700">
          From content to captions, video scripts to voiceovers — our hybrid human-AI process is faster, smarter, and way more efficient.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="text-[#022729]  text-3xl mb-4">🎯</div>
        <h3 className="text-xl font-bold mb-3">Lead-Gen That Works</h3>
        <p className="text-gray-700">
          Every post, page, and funnel is designed to drive conversions — not just look pretty. Expect real ROI, not vanity metrics.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="text-purple-500 text-3xl mb-4">📈</div>
        <h3 className="text-xl font-bold mb-3">Scalable Growth Systems</h3>
        <p className="text-gray-700">
          Whether you're a solo brand or multi-location business, our systems scale with you — from DMs to dashboards.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="text-red-500 text-3xl mb-4">💰</div>
        <h3 className="text-xl font-bold mb-3">Only Pay for What You Use</h3>
        <p className="text-gray-700">
          Our a-la-carte and modular packages give you flexibility without hidden fees — get exactly what you need, nothing you don’t.
        </p>
      </div>
    </div>
  </div>
</section>




      

        {/* Our Work Section */}
          <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">AI-Powered Growth. Real Results.</h2>
          <h3 className="text-2xl font-semibold">
            From Social Management to Viral Campaigns — All Under One Roof
          </h3>
        </div>

        <div className="max-w-3xl mx-auto mb-12 relative">
          {!showVideo ? (
            <>
              <img src="/reel.png" alt="Reel thumbnail" className="w-full rounded-md shadow-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setShowVideo(true)}
                  className="flex items-center bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-full shadow-md"
                >
                  <span className="mr-2">Watch Our Reel</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://drive.google.com/file/d/1SkQyUklk9V8oxiZLXQ6co6EqYowMuZZW/preview"
                allow="autoplay"
                allowFullScreen
                title="Our Work Reel"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
   
      
      {/* CTA Section */}
      <section className="py-20 bg-[#022729]  text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Something Extraordinary?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our award-winning team can help bring your vision to life.
          </p>
          <Link href="/contact" className="inline-block bg-teal-500  hover:bg-teal-700 text-white py-3 px-8 rounded-full font-medium transition-colors">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}