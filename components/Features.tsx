import React, { useState } from 'react';
import { Smile, Sparkles, Drill, Stethoscope, Microscope, Heart, X, ChevronLeft, ChevronRight, ExternalLink, ArrowRight, Share2 } from 'lucide-react';
import { ServiceItem, GalleryItem, Affiliation } from '../types';

// --- Services Component ---

const services: ServiceItem[] = [
  { id: '1', title: 'Smile Makeovers', description: 'Complete aesthetic transformation of your smile.', icon: Smile },
  { id: '2', title: 'Cosmetic Dentistry', description: 'Veneers, bonding, and aesthetic corrections.', icon: Sparkles },
  { id: '3', title: 'Whitening & Cleaning', description: 'Professional brightening and hygiene maintenance.', icon: Sparkles },
  { id: '4', title: 'General Dentistry', description: 'Routine checkups, fillings, and oral health.', icon: Stethoscope },
  { id: '5', title: 'Restorations', description: 'Crowns, bridges, and implant restorations.', icon: Drill },
  { id: '6', title: 'Consultation', description: 'Expert diagnosis and personalized treatment plans.', icon: Microscope },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-mint-600 font-bold tracking-widest uppercase text-xs">Expertise</span>
          <h2 className="text-4xl font-serif font-bold text-slate-900 mt-2">World-Class Dental Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-2">
              <div className="w-14 h-14 bg-mint-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-mint-500 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-mint-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Gallery Component ---

const galleryItems: GalleryItem[] = [
  { id: 1, imageUrl: 'https://picsum.photos/id/1027/800/800', category: 'Makeover', description: 'Full veneer restoration' },
  { id: 2, imageUrl: 'https://picsum.photos/id/64/800/800', category: 'Whitening', description: 'Brightening treatment results' },
  { id: 3, imageUrl: 'https://picsum.photos/id/342/800/800', category: 'Restoration', description: 'Ceramic crown placement' },
  { id: 4, imageUrl: 'https://picsum.photos/id/1011/800/800', category: 'Makeover', description: 'Gummy smile correction' },
  { id: 5, imageUrl: 'https://picsum.photos/id/129/800/800', category: 'Cosmetic', description: 'Composite bonding' },
  { id: 6, imageUrl: 'https://picsum.photos/id/331/800/800', category: 'Makeover', description: 'Aligner progress' },
];

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const handleShare = async (item: GalleryItem) => {
    const shareData = {
      title: 'Dr. Kalkidan Ephrem - Smile Transformation',
      text: `Check out this amazing ${item.category}: ${item.description}`,
      url: window.location.href // Sharing the site URL as deep linking to images isn't implemented
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif font-bold text-slate-900">Smile Transformations</h2>
            <p className="text-slate-600 mt-2">Real results from real patients.</p>
          </div>
          <a href="https://instagram.com/kalkidanephrem_" target="_blank" rel="noreferrer" className="text-mint-600 font-medium hover:text-mint-700 flex items-center gap-1 mt-4 md:mt-0">
            View more on Instagram <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <img 
                src={item.imageUrl} 
                alt={item.description} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center p-4">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-xs mb-2">
                    {item.category}
                  </span>
                  <p className="text-white font-medium">{item.description}</p>
                </div>
              </div>
              
              {/* Share Button */}
              <button 
                onClick={(e) => { e.stopPropagation(); handleShare(item); }}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-mint-600 transition-all opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 duration-300 z-10 shadow-lg"
                title="Share this smile"
              >
                <Share2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-gray-300">
            <X size={32} />
          </button>
          <div className="max-w-4xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.description} 
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
            />
            <div className="bg-white p-4 rounded-b-lg mt-[-4px] flex justify-between items-center">
              <div>
                <h3 className="font-bold text-slate-900">{selectedImage.description}</h3>
                <span className="text-sm text-mint-600 uppercase tracking-wider">{selectedImage.category}</span>
              </div>
              <button 
                onClick={() => handleShare(selectedImage)}
                className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors"
              >
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// --- Affiliations Component ---

const affiliations: Affiliation[] = [
  { name: 'Dentmex Materials', handle: '@dentmex_materials_', role: 'Material Partner', description: 'Partnering with global leaders to provide the highest quality dental materials for durable, natural-looking smiles.' },
  { name: 'Dalian Dental Clinic', handle: '@dalian_dental_clinic', role: 'Clinical Partner', description: 'Collaborating with state-of-the-art facilities to ensure every procedure meets world-class medical standards.' },
];

export const Affiliations: React.FC = () => {
  return (
    <section id="affiliations" className="py-24 bg-gradient-to-br from-beige-50 via-white to-beige-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mint-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="text-center mb-16">
            <span className="text-gold-500 font-bold tracking-widest uppercase text-xs">Partnerships</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Professional Affiliations</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              We work with industry leaders to bring you the best care possible.
            </p>
         </div>

         <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {affiliations.map((aff) => (
              <a 
                key={aff.handle} 
                href={`https://instagram.com/${aff.handle.replace('@', '')}`}
                target="_blank" 
                rel="noreferrer"
                className="group bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-mint-500/10 border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                 {/* Hover effect background */}
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-mint-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                 <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:bg-gold-500 transition-colors duration-300 shadow-lg">
                   <span className="font-serif font-bold text-3xl">{aff.name.charAt(0)}</span>
                 </div>
                 
                 <div className="relative z-10 flex-1">
                   <h4 className="text-xl font-bold text-slate-900 group-hover:text-mint-600 transition-colors">{aff.name}</h4>
                   <p className="text-xs font-bold text-gold-500 uppercase tracking-wide mb-2">{aff.role}</p>
                   <p className="text-sm text-slate-500 leading-relaxed mb-3">{aff.description}</p>
                   <div className="flex items-center text-xs font-medium text-slate-400 group-hover:text-slate-600 transition-colors">
                      {aff.handle} <ArrowRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                   </div>
                 </div>
              </a>
            ))}
         </div>
      </div>
    </section>
  );
};