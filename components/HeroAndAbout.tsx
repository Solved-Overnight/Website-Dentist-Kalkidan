import React, { useState, useEffect } from 'react';
import { Sparkles, Award, GraduationCap, ArrowRight, Play } from 'lucide-react';

// Counter Component for animations
const CountUp: React.FC<{ end: number; duration?: number; suffix?: string; decimals?: number }> = ({ end, duration = 2500, suffix = '', decimals = 0 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease out quart function for smooth animation
      const ease = 1 - Math.pow(1 - progress, 4);
      
      setCount(ease * end);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>{count.toFixed(decimals)}{suffix}</span>
  );
};

export const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-[#FAFAF9]">
      {/* Modern Abstract Background */}
      <div className="absolute top-0 right-0 w-[40vw] h-full bg-mint-50/60 skew-x-[-12deg] origin-top translate-x-20 hidden lg:block z-0"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gold-100/30 rounded-full blur-3xl z-0"></div>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Typography / Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8 pt-8 lg:pt-0">
            <div className="inline-flex items-center gap-3 animate-fade-in-up">
              <span className="h-px w-8 bg-gold-500"></span>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-slate-500 font-sans">Smile Enthusiast</span>
            </div>
            
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-medium text-slate-900 leading-tight tracking-tight whitespace-normal lg:whitespace-nowrap">
                Dr. Kalkidan <span className="text-gold-500 italic">Ephrem</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-500 font-light max-w-lg leading-relaxed font-sans">
                Combining artistic vision with dental precision to create <span className="text-slate-900 font-medium italic font-serif">gorgeous smile makeovers</span>.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-4">
              <a 
                href="#book" 
                onClick={(e) => handleNavClick(e, '#book')}
                className="group relative px-8 py-4 bg-slate-900 text-white rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 font-sans"
              >
                <span className="relative z-10 font-medium flex items-center gap-2">
                  Book Appointment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
              </a>
              
              <a 
                href="#gallery" 
                onClick={(e) => handleNavClick(e, '#gallery')}
                className="group flex items-center gap-3 px-6 py-4 rounded-full hover:bg-white hover:shadow-lg border border-transparent hover:border-slate-100 transition-all duration-300 font-sans"
              >
                <div className="w-10 h-10 rounded-full bg-mint-100 flex items-center justify-center text-mint-600 group-hover:scale-110 transition-transform">
                   <Play size={14} fill="currentColor" />
                </div>
                <span className="font-medium text-slate-600 group-hover:text-slate-900">View Gallery</span>
              </a>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-8 border-t border-slate-200/60 w-full max-w-md">
               <div>
                 <span className="block text-3xl md:text-4xl font-bold font-sans text-slate-900">
                   <CountUp end={78} />
                 </span>
                 <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-sans">Posts</span>
               </div>
               <div>
                 <span className="block text-3xl md:text-4xl font-bold font-sans text-slate-900">
                   <CountUp end={39.7} decimals={1} suffix="K" />
                 </span>
                 <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-sans">Followers</span>
               </div>
               <div>
                 <span className="block text-3xl md:text-4xl font-bold font-sans text-slate-900">
                   <CountUp end={300} suffix="+" />
                 </span>
                 <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-sans">Smiles</span>
               </div>
            </div>
          </div>

          {/* Image / Right Content */}
          <div className="lg:col-span-5 relative h-full flex items-center justify-center lg:justify-end">
             <div className="relative w-full max-w-md aspect-[3/4] group">
                {/* Decorative Frame Elements */}
                <div className="absolute inset-0 border-[1px] border-slate-900/10 rounded-tl-[100px] rounded-br-[100px] translate-x-4 translate-y-4 z-0"></div>
                <div className="absolute -inset-4 bg-gradient-to-tr from-mint-100 to-transparent rounded-tl-[110px] rounded-br-[110px] -z-10 opacity-50 blur-xl"></div>
                
                {/* Main Image */}
                <div className="relative w-full h-full rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl z-10 bg-white">
                  <img 
                    src="https://picsum.photos/id/64/800/1000" 
                    alt="Dr. Kalkidan Ephrem" 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Glassmorphism Floating Card */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                     <p className="text-white/90 font-serif italic text-lg text-center">"Creating gorgeous smiles."</p>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-6 -left-6 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce-slow z-20">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-full text-green-600">
                        <Sparkles size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 uppercase font-sans">Accepting</p>
                        <p className="text-xs text-slate-500 font-sans">New Patients</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1 relative">
             <div className="absolute top-10 left-10 w-full h-full border border-slate-100 rounded-full -z-10"></div>
             <img 
              src="https://picsum.photos/id/338/800/800" 
              alt="Dr. Kalkidan Ephrem" 
              className="w-full h-auto rounded-tr-[5rem] rounded-bl-[5rem] shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <div>
              <span className="text-mint-600 font-bold tracking-widest uppercase text-xs font-sans">The Doctor</span>
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 mt-3">About Dr. Kalkidan</h2>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed font-light font-sans">
              Dr. Kalkidan Ephrem is a distinguished General Dentist known for her artistic approach to dentistry. As an alumna of <strong className="text-slate-900 font-medium">AAU</strong> and <strong className="text-slate-900 font-medium">Black Lion Specialized Hospital</strong>, she combines rigorous medical training with a passion for cosmetic excellence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-beige-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-beige-100">
                <GraduationCap className="w-8 h-8 text-gold-500 mb-4" />
                <h4 className="font-bold text-slate-900 mb-1 font-sans">Education</h4>
                <p className="text-sm text-slate-500 leading-snug font-sans">AAU | Black Lion Specialized Hospital Alumna</p>
              </div>
              <div className="p-6 bg-beige-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-beige-100">
                <Award className="w-8 h-8 text-mint-500 mb-4" />
                <h4 className="font-bold text-slate-900 mb-1 font-sans">Specialty</h4>
                <p className="text-sm text-slate-500 leading-snug font-sans">General Dentist & Smile Makeovers</p>
              </div>
            </div>

            <div className="pt-4">
               <blockquote className="text-xl font-serif italic text-slate-400 border-l-2 border-gold-400 pl-6">
                 "Dedicated to transforming smiles with modern techniques and compassionate care."
               </blockquote>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};