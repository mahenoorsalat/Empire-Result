"use client"
// pages/about.js
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Empire Media</title>
        <meta name="description" content="Learn more about our award-winning video production team" />
      </Head>
      
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black to-transparent z-10"></div>
        <div className="absolute inset-0">
          <Image 
            src="/PersonWorking.png" 
            alt="Our team at work" 
            layout="fill" 
            objectFit="cover" 
            className="brightness-100"
            priority
          />
        </div>
       <div className="relative z-20 max-w-4xl mx-auto px-6 h-full flex flex-col justify-center items-center">
  <div className="max-w-3xl text-start">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Story</h1>
    <p className="text-xl text-gray-200 mb-8">
      Passionate creators turning visions into award-winning productions since 2015
    </p>
  </div>
</div>

      </section>

      {/* Our Philosophy */}
<section className="py-20 bg-white h-screen flex items-center justify-center">
  <div className="max-w-6xl mx-auto px-6 w-full">
    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          We're not just another production company
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          While others rush through projects for quick profits, we focus on quality, creativity, and affordability. 
          Imagine producing a full-featured 3-minute show for $20,000, while others spend that on catering alone.
        </p>
        <p className="text-lg text-gray-700">
          Our work has earned over 200 international awards, but what truly matters to us is the impact our 
          productions make for our clients. We prioritize your brand's identity and message in everything we create.
        </p>
      </div>
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-xl">
        <Image 
          src="/behindthescene.jpg" 
          alt="Behind the scenes" 
          width={600} 
          height={400} 
          className="w-full h-auto"
        />
      </div>
    </div>
  </div>
</section>

      
      {/* Our Values */}
<section className="py-20 bg-[#022729] text-white flex items-center justify-center min-h-screen">
  <div className="max-w-4xl mx-auto px-6 w-full">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      Where Creativity Meets Award-Winning Production
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[1, 2, 3].map((number, i) => {
        const titles = [
          "Creative Strategy",
          "Production & Execution",
          "Optimized for Impact"
        ];
        const descriptions = [
          "We develop compelling narratives and visuals that resonate with your audience and align with your brand identity.",
          "Our expert team brings your vision to life with state-of-the-art equipment and industry-leading techniques.",
          "We ensure your content drives results - whether that's engagement, conversions, or brand awareness."
        ];
        return (
          <div key={i} className="bg-teal-800 p-8 rounded-lg">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-white text-[#022729] flex items-center justify-center text-2xl font-bold">
                {number}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">{titles[i]}</h3>
            <p className="text-center">{descriptions[i]}</p>
          </div>
        );
      })}
    </div>
  </div>
</section>

      
     {/* Our Benefits - Similar to Lemonlight style */}
<section className="py-20 bg-black text-white flex items-center justify-center min-h-screen">
  <div className="max-w-4xl mx-auto px-6 w-full">
    <h2 className="text-4xl font-bold mb-4 text-center">
      Create any video with<br />a single partner.
    </h2>
    <p className="text-lg mb-12 text-gray-300 text-center">
      Why choose us for all your video production needs
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div className="text-yellow-500 text-3xl mb-4">⚙️</div>
        <h3 className="text-xl font-bold mb-3">Align strategy with production</h3>
        <p className="text-gray-300">
          We've united creative strategy and production under one roof, ensuring your videos align perfectly with your goals and vision.
        </p>
      </div>

      <div>
        <div className="text-yellow-500 text-3xl mb-4">⏱️</div>
        <h3 className="text-xl font-bold mb-3">Get high-quality videos – fast</h3>
        <p className="text-gray-300">
          Produce high-quality videos on tight timelines, to ensure you meet every deadline without having to compromise on your standards.
        </p>
      </div>

      <div>
        <div className="text-yellow-500 text-3xl mb-4">📱</div>
        <h3 className="text-xl font-bold mb-3">Scale your content needs effortlessly</h3>
        <p className="text-gray-300">
          Whether it's a single video or assets for an entire campaign, our services scale to meet your brand's growing needs for content.
        </p>
      </div>

      <div>
        <div className="text-yellow-500 text-3xl mb-4">💴</div>
        <h3 className="text-xl font-bold mb-3">Only pay for what you need</h3>
        <p className="text-gray-300">
          Customize our offerings to fit your project. Choose only the services you need, ensuring you pay for exactly what you use.
        </p>
      </div>
    </div>
  </div>
</section>

      
  {/* Team Section */}
<section className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Meet Our Team</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="text-center">
        <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden mb-6">
          <Image 
            src="/images/team-member-1.jpg" 
            alt="Team Member" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-full"
          />
        </div>
        <h3 className="text-xl font-bold mb-2">Alex Johnson</h3>
        <p className="text-gray-600 mb-4">Creative Director</p>
        <p className="text-gray-700">
          With over 15 years in the industry, Alex leads our creative vision and ensures every project exceeds expectations.
        </p>
      </div>
      
      <div className="text-center">
        <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden mb-6">
          <Image 
            src="/images/team-member-2.jpg" 
            alt="Team Member" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-full"
          />
        </div>
        <h3 className="text-xl font-bold mb-2">Sam Rivera</h3>
        <p className="text-gray-600 mb-4">Director of Photography</p>
        <p className="text-gray-700">
          Sam's eye for stunning visuals has contributed to numerous award-winning productions in our portfolio.
        </p>
      </div>
      
      <div className="text-center">
        <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden mb-6">
          <Image 
            src="/images/team-member-3.jpg" 
            alt="Team Member" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-full"
          />
        </div>
        <h3 className="text-xl font-bold mb-2">Jordan Lee</h3>
        <p className="text-gray-600 mb-4">Post-Production Manager</p>
        <p className="text-gray-700">
          Jordan's technical expertise and creative editing skills add the final polish to every project we deliver.
        </p>
      </div>
    </div>
    
    <div className="text-center mt-12">
      <Link href="/team" className="inline-block bg-[#022729] hover:bg-teal-700 text-white py-3 px-8 rounded-full font-medium transition-colors">
        View Our Full Team
      </Link>
    </div>
  </div>
</section>

      
      {/* Contact CTA */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Something Extraordinary?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Let's discuss how our award-winning team can help bring your vision to life.
          </p>
          <Link href="/contact" className="inline-block bg-[#022729] hover:bg-teal-700 text-white py-3 px-8 rounded-full font-medium transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}