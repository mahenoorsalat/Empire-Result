"use client"
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Empire Results</title>
        <meta name="description" content="Next-gen social media and digital marketing agency delivering performance-driven results." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black to-transparent z-10"></div>
        <div className="absolute inset-0">
          <Image 
            src="/PersonWorking.png" 
            alt="Digital marketing team at work" 
            layout="fill" 
            objectFit="cover" 
            className="brightness-100"
            priority
          />
        </div>
        <div className="relative z-20 max-w-4xl mx-auto px-6 h-full flex flex-col justify-center items-center">
          <div className="max-w-3xl text-start">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Driven by Results</h1>
            <p className="text-xl text-gray-200 mb-8">
              We’re a next-gen agency using AI + strategy to grow service-based businesses—fast, smart, and affordably.
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
                We Build Brands That Convert
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We don’t just post content—we build systems. From lead-generating funnels to AI-powered videos, every move we make is strategic, bold, and built for results.
              </p>
              <p className="text-lg text-gray-700">
                While others chase vanity metrics, we focus on ROI. With clients spending $20K for what others charge for catering, we deliver more for less—and we’ve got the awards to prove it.
              </p>
            </div>
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/behindthescene.jpg" 
                alt="Empire Results behind the scenes" 
                width={600} 
                height={400} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Pillars */}
      <section className="py-20 bg-[#022729] text-white flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto px-6 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Smart Systems. Real Results.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Content & Growth",
                desc: "Reels, carousels, and captions crafted for reach and relevance. We grow audiences with trends, hooks, and UGC campaigns.",
              },
              {
                title: "AI + Automation",
                desc: "From AI-powered scripts to auto-responders, we use next-gen tech to scale production without losing the human touch.",
              },
              {
                title: "Paid Ads & Funnels",
                desc: "Lead-gen campaigns, landing pages, and data-backed ads across TikTok, Meta, and Google—built to convert, not just impress.",
              }
            ].map((item, i) => (
              <div key={i} className="bg-teal-800 p-8 rounded-lg">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-white text-[#022729] flex items-center justify-center text-2xl font-bold">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{item.title}</h3>
                <p className="text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


{/* The V.I.S.I.O.N. Method™ Section */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
     The V.I.S.I.O.N. Method™
    </h2>
    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
      Our creative framework for helping local brands and content creators grow organically with clarity, consistency, and content that converts.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
      {[
        {
          letter: "V",
          title: "Visual Identity",
          desc: "Establish a consistent, on-brand aesthetic and creative direction that reflects your client’s core values and personality.",
        },
        {
          letter: "I",
          title: "Intentional Strategy",
          desc: "Build a content plan tailored to your client’s goals—whether that’s engagement, local recognition, or monetization.",
        },
        {
          letter: "S",
          title: "Storytelling Frameworks",
          desc: "Use narrative-driven content formats to deepen connection and showcase what makes the brand or creator unique.",
        },
        {
          letter: "I",
          title: "Implementation & Production",
          desc: "Shoot, edit, and post high-quality content across the right platforms using a streamlined, efficient process.",
        },
        {
          letter: "O",
          title: "Organic Growth Loops",
          desc: "Spark growth using engagement tactics, community interaction, and trending formats with a purpose.",
        },
        {
          letter: "N",
          title: "Next-Level Optimization",
          desc: "Use analytics and testing to improve performance, spot growth opportunities, and evolve the strategy monthly.",
        },
      ].map((item, i) => (
        <div key={i} className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-[#022729] text-white flex items-center justify-center font-bold text-lg mr-4">
              {item.letter}
            </div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </div>
          <p className="text-gray-700">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      

     
{/* Meet the Founder Section */}
<section className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-6 md:flex md:items-start md:gap-10">
    {/* Left Side: Founder Image */}
    <div className="mb-8 md:mb-0 md:w-1/3">
      <img
        src="/CEO.png" // Replace with your actual photo
        alt="Founder"
        className="rounded-lg object-cover w-full h-auto shadow-md"
      />
    </div>

    {/* Right Side: Text Content */}
    <div className="md:w-2/3">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Our focus enables us to provide customized, actionable recommendations that draw.
      </h2>

      <blockquote className="border-l-4 border-[#022729] pl-4 italic text-gray-700 mb-4">
        Our focus enables us to provide customized, actionable recommendations that draw on robust
        problem framing, cutting-edge methodologies, deep therapeutic area knowledge, extensive global
        networks of stakeholders, and expert synthesis across scientific, clinical, and business disciplines.
      </blockquote>

      <p className="text-gray-700 mb-6">
        At Empire Results, I dedicate my work to helping businesses grow through smart systems,
        AI-powered content, and bold digital strategy. Whether you’re starting out or scaling fast, I’m here to deliver.
      </p>

      <p className="font-semibold italic text-[#022729] mb-2">Jeremiah (Founder)</p>



      {/* CTA Button */}
      <a
        href="https://calendly.com/jeremiah-empireresults/new-meeting" // Update this to your booking link or contact section
        className="inline-block bg-[#022729] hover:bg-teal-700 text-white py-3 px-8 rounded-full font-medium"
      >
        Book a Call
      </a>
    </div>
  </div>
</section>



      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s Build a Growth Engine for You</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Want leads, content, or a brand overhaul? We’re ready when you are.
          </p>
          <Link href="/contact" className="inline-block bg-[#022729] hover:bg-teal-700 text-white py-3 px-8 rounded-full font-medium transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
