// app/page.js
"use client";
import { useState , useEffect , useRef} from 'react';
import Image from 'next/image';

export default function Home() {
    // Stats for animation
  const [stats, setStats] = useState({
    projects: 0,
    views: 0,
    reviews: 0,
    reviews_avg: 0,
    success_stories: 0,
    awards: 0,
    high_view_rate: 0
  });
  
  const targetStats = {
    projects: 900,
    views: 1100, // 1.1 billion, displayed differently
    reviews: 77,
    reviews_avg: 4.9,
    success_stories: 37,
    awards: 26,
    high_view_rate: 67
  };
  
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Check if element is in viewport
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

  // Animation function
  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated && statsRef.current && isInViewport(statsRef.current)) {
        setHasAnimated(true);
        
        const animationDuration = 2000; // 2 seconds
        const frameDuration = 1000 / 60; // 60fps
        const totalFrames = Math.round(animationDuration / frameDuration);
        let frame = 0;
        
        const counter = setInterval(() => {
          frame++;
          const progress = frame / totalFrames;
          
          setStats({
            projects: Math.floor(progress * targetStats.projects),
            views: Math.floor(progress * targetStats.views),
            reviews: Math.floor(progress * targetStats.reviews),
            reviews_avg: parseFloat((progress * targetStats.reviews_avg).toFixed(1)),
            success_stories: Math.floor(progress * targetStats.success_stories),
            awards: Math.floor(progress * targetStats.awards),
            high_view_rate: Math.floor(progress * targetStats.high_view_rate)
          });
          
          if (frame === totalFrames) {
            clearInterval(counter);
            setStats(targetStats);
          }
        }, frameDuration);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
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
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your server
    alert('Form submitted successfully!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      details: ''
    });
  };

  return (
    <main className="min-h-screen">
{/* Header/Navigation */}
<header className="absolute w-full z-50 ">
  <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
    
    {/* Logo Section */}
    <div className="flex-shrink-0">
      <img src="/Logo.png" alt="Logo" className="h-12 w-auto" />
    </div>

    {/* Menu Section */}
    <nav>
      <ul className="flex space-x-6 text-white text-sm font-serif">
        <li><a href="#" className="hover:text-yellow-500">Home</a></li>
        <li><a href="#" className="hover:text-yellow-500">About</a></li>
        <li><a href="#" className="hover:text-yellow-500">Services</a></li>
        <li><a href="#" className="hover:text-yellow-500">Contact Us</a></li>
      </ul>
    </nav>

  </div>
</header>


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
      Award-Winning Video Production<br />at Unbeatable Prices
    </h1>
    <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
      Over 200 awards | Premium production quality | Half the cost of competitors
    </p>
  </div>
</section>


      {/* Client Logos */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['Adobe', 'Spotify', 'Vive', 'Samsung', 'Unity'].map((client, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <div className="h-8 flex items-center justify-center">
                  <div className="text-black font-bold">{client}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Production Excellence. Redefined.</h2>
            <h3 className="text-2xl font-semibold">Our work speaks for itself — <span className="italic">over 200 international awards, projects</span></h3>
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


          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-700">
              We're not just another production company. While others rush through projects for quick profits, we focus on quality, creativity, and affordability. Imagine producing a full-scale 3D game show, 6D experience for $80,000, while others spend 3x on camera gear.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">"Award-Winning Visuals That Drive Impact - for Brand"</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="text-teal-500 mr-2">•</div>
                  <p>Fast, streamlined production tailored to your brand's identity</p>
                </li>
                <li className="flex items-start">
                  <div className="text-teal-500 mr-2">•</div>
                  <p>Creative excellence backed by 200+ industry awards</p>
                </li>
                <li className="flex items-start">
                  <div className="text-teal-500 mr-2">•</div>
                  <p>Premium results at half the cost of competitors</p>
                </li>
              </ul>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">"Your Production Partner for High-Impact Video - for Agency"</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="text-teal-500 mr-2">•</div>
                  <p>Fast, streamlined production tailored to your brand's identity</p>
                </li>
                <li className="flex items-start">
                  <div className="text-teal-500 mr-2">•</div>
                  <p>Creative excellence backed by 200+ industry awards</p>
                </li>
                <li className="flex items-start">
                  <div className="text-teal-500 mr-2">•</div>
                  <p>Premium results at half the cost of competitors</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section ref={statsRef} className="bg-[#022729] text-white py-16 pt-24">
<div className="container mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left column */}
            <div className="border-r border-gray-700 pr-8">
              <h2 className="text-3xl font-bold mb-2">Vidico at a glance.</h2>
              <p className="text-gray-400 text-sm mb-4">
                See real results, created by the creative production company consistently rated five stars.
              </p>
            </div>
            
            {/* Middle column */}
            <div className="grid grid-rows-2 gap-8 border-r border-gray-700 pr-4">
              <div>
                <div className="text-4xl font-bold mb-1">{stats.projects}+</div>
                <div className="text-sm text-gray-400">Creative projects</div>
                <a href="#" className="text-xs flex items-center text-gray-400 mt-2 hover:text-white">
                  See verified reviews <span className="ml-1">→</span>
                </a>
              </div>
              
              <div>
                <div className="text-4xl font-bold mb-1">{stats.reviews}+</div>
                <div className="text-sm text-gray-400">{stats.reviews_avg}/5 reviews</div>
                <a href="#" className="text-xs flex items-center text-gray-400 mt-2 hover:text-white">
                  See verified reviews <span className="ml-1">→</span>
                </a>
              </div>
            </div>
            
            {/* Right column */}
            <div className="grid grid-rows-3 gap-6">
              <div>
                <div className="text-3xl font-bold mb-1">{stats.views / 1000} billion</div>
                <div className="text-sm text-gray-400">Product views</div>
              </div>
              
              <div>
                <div className="text-3xl font-bold mb-1">{stats.success_stories}+</div>
                <div className="text-sm text-gray-400">Success stories</div>
                <a href="#" className="text-xs flex items-center text-gray-400 mt-2 hover:text-white">
                  See case studies <span className="ml-1">→</span>
                </a>
              </div>
              
              <div>
                <div className="text-3xl font-bold mb-1">{stats.awards}+</div>
                <div className="text-sm text-gray-400">Awards (Vimeo, B&T, Davey)</div>
                <a href="#" className="text-xs flex items-center text-gray-400 mt-2 hover:text-white">
                  See winning projects <span className="ml-1">→</span>
                </a>
              </div>

              <div>
                <div className="text-3xl font-bold mb-1">{stats.high_view_rate}%+</div>
                <div className="text-sm text-gray-400">We get high view rates</div>
                <a href="#" className="text-xs flex items-center text-gray-400 mt-2 hover:text-white">
                  Check it out <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Trusted by global brands,</h2>
            <h3 className="text-2xl">whose products you use every day.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
           <div className="relative h-64 bg-gray-300">
    <img
      src="https://i.pravatar.cc/300?img=4"
      alt="Jane Zhang"
      className="object-cover w-full h-full"
    />
    <div className="absolute bottom-2 left-2 bg-white rounded-full px-3 py-1 flex items-center text-sm font-semibold shadow">
      <span className="mr-1">▶</span> 1:02
    </div>
  </div>
              <div className="p-6">
                <h4 className="font-bold">Karim Zuhri</h4>
                <p className="text-gray-600 mb-2">Chief Marketing Officer</p>
                <div className="flex items-center mb-4">
                  <div className="bg-gray-800 h-5 w-5 rounded-sm mr-2"></div>
                  <span className="text-sm">cascade</span>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  With Vidico, every single detail matters. They make sure everything looks clean, beautiful and very professional, really caring about the outcome and following up constantly. If you need to scale, you can be happy with the results for customer-focused teams.
                </p>
                <ul className="text-xs text-gray-600 space-y-1 mb-4">
                  <li>• Avg. production time: 3hrs (33% avg. rate)</li>
                  <li>• Over 1.4 million views on YouTube</li>
                </ul>
                <a href="#" className="inline-block text-blue-600 font-medium text-sm">
                  Read full case study →
                </a>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="relative h-64 bg-gray-300">
    <img
      src="https://i.pravatar.cc/300?img=5"
      alt="Jane Zhang"
      className="object-cover w-full h-full"
    />
    <div className="absolute bottom-2 left-2 bg-white rounded-full px-3 py-1 flex items-center text-sm font-semibold shadow">
      <span className="mr-1">▶</span> 1:02
    </div>
  </div>
              <div className="p-6">
                <h4 className="font-bold">Adam Hender</h4>
                <p className="text-gray-600 mb-2">Senior Video Operations Manager</p>
                <div className="flex items-center mb-4">
                  <div className="bg-gray-800 h-5 w-5 rounded-sm mr-2"></div>
                  <span className="text-sm">DigitalOcean</span>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  The ROI we were getting, the cost per acquisition and the ARR just for the views have really been effective. The scale has been our pet condition when it comes to working with our various partners, both and producing our platform with this video.
                </p>
                <ul className="text-xs text-gray-600 space-y-1 mb-4">
                  <li>• Over 3.7 million views on YouTube</li>
                  <li>• Lowered CAC</li>
                </ul>
                <a href="#" className="inline-block text-blue-600 font-medium text-sm">
                  Read full case study →
                </a>
              </div>
            </div>

           {/* Testimonial 3 */}
<div className="bg-gray-100 rounded-lg overflow-hidden shadow-md max-w-sm mx-auto">
  <div className="relative h-64 bg-gray-300">
    <img
      src="https://i.pravatar.cc/300?img=8"
      alt="Jane Zhang"
      className="object-cover w-full h-full"
    />
    <div className="absolute bottom-2 left-2 bg-white rounded-full px-3 py-1 flex items-center text-sm font-semibold shadow">
      <span className="mr-1">▶</span> 1:02
    </div>
  </div>
  <div className="p-6">
    <h4 className="font-bold text-lg mb-1">Jane Zhang</h4>
    <p className="text-gray-600 mb-4">Product Marketing Manager</p>

    <div className="flex items-center mb-4">
      <div className="bg-gray-800 h-5 w-5 rounded-sm mr-2"></div>
      <span className="text-sm font-semibold">SHIFT</span>
    </div>

    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
      The Vidico team is a joy to work with — talented copywriters and animators, seamless communication, and timely delivery despite a tight deadline. Their videos explain our features simply, beautifully, and we'd gladly work with them (Michael and the team again).
    </p>

    <ul className="text-xs text-gray-600 space-y-1 mb-4 list-disc list-inside">
      <li>5x commendable produced and hosted for USA</li>
    </ul>

    <a
      href="#"
      className="inline-block text-blue-600 font-medium text-sm hover:underline"
    >
      Read full case study →
    </a>
  </div>
</div>

          </div>

          <div className="text-center mt-12">
            <button className="bg-[#022729] text-white px-8 py-3 rounded-lg font-medium">
              View all studies
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
      <button className="mt-6 md:mt-0 bg-white text-[#022729] px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-white">
        Explore our Services
      </button>
    </div>

    {/* Image Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {[
        { title: "Commercials", img: "./project3.png" },
        { title: "TV Ads", img: "./project1.png" },
        { title: "Promotion", img: "./project2.png" },
        { title: "Educational", img: "./project5.png", tall: true },
        { title: "CG & VFX", img: "./project4.png" },
      ].map((item, idx) => (
        <div
          key={idx}
          className={`relative overflow-hidden rounded-lg group ${
            item.tall ? "row-span-2 md:row-span-1 md:col-span-2" : ""
          }`}
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover aspect-[4/3]"
          />
          <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">
            {item.title}
          </div>
          <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-white/40 flex items-center justify-center text-white text-xs group-hover:bg-white/70 transition">
            ⭕
          </div>
        </div>
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
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter Your First Name"
                  className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-teal-500"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Your Last Name"
                  className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-teal-500"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Your Phone"
                  className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-teal-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-teal-500"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter Your Company Name"
                className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-teal-500"
              />
            </div>

            <div className="mb-8">
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Request Details"
                rows="4"
                className="w-full border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-teal-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="bg-[#022729] text-white px-12 py-3 rounded hover:bg-teal-800 transition-colors">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t   border-gray-200 py-12">
<div className="container mx-auto max-w-4xl px-4">
  <div className="grid md:grid-cols-4 gap-8 justify-center">
            <div>
                    <img src="/Logo.png" alt="Logo" className="h-12 mb-10 w-auto" />

              <div className="flex space-x-4 mb-4">
                <a href="#" className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <p className="text-sm text-gray-500">©2023 All Rights Reserved</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Shop</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#022729]">Video Production</a></li>
                <li><a href="#" className="hover:text-[#022729]">Animation Services</a></li>
                <li><a href="#" className="hover:text-[#022729]">VFX Creation</a></li>
                <li><a href="#" className="hover:text-[#022729]">Motion Graphics</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#022729]">Guides</a></li>
                <li><a href="#" className="hover:text-[#022729]">Articles</a></li>
                <li><a href="#" className="hover:text-[#022729]">FAQs</a></li>
                <li><a href="#" className="hover:text-[#022729]">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#022729]">Terms of Use</a></li>
                <li><a href="#" className="hover:text-[#022729]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#022729]">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}