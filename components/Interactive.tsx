import React, { useState, useRef, useEffect } from 'react';
import { Send, Calendar, Clock, MessageSquare, Bot, X, Loader2, ChevronLeft, ChevronRight, Star, Plus, Minus, HelpCircle } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';

// --- Testimonials ---

const reviews = [
  { id: 1, text: "I never thought I could love my smile this much! Dr. Kalkidan is a true artist. The veneers look so natural.", author: "Selam W.", treatment: "Veneers" },
  { id: 2, text: "Professional, clean, and painless. The best dental experience I've had in Addis. Highly recommended for nervous patients.", author: "Michael T.", treatment: "Root Canal" },
  { id: 3, text: "Her attention to detail with my whitening was incredible. My confidence has skyrocketed since my visit.", author: "Bethlehem A.", treatment: "Teeth Whitening" },
  { id: 4, text: "The clinic is beautiful and the staff is so welcoming. Dr. Kalkidan explains everything clearly.", author: "Dawit G.", treatment: "General Checkup" },
  { id: 5, text: "I fixed my chipped tooth here. You can't even tell it was ever broken. Amazing craftsmanship.", author: "Hanna M.", treatment: "Bonding" },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-mint-900 text-white relative overflow-hidden">
       {/* Background Pattern */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mint-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
             <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
                <Star className="text-gold-400 w-5 h-5 fill-current" />
             </div>
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Patient Stories</h2>
             <p className="text-mint-100 max-w-2xl mx-auto text-lg">See why thousands of patients trust Dr. Kalkidan with their smiles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {reviews.slice(0, 3).map((review) => (
                <div key={review.id} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300 flex flex-col h-full">
                   <div className="flex gap-1 mb-6">
                      {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-gold-400 fill-current" />)}
                   </div>
                   <p className="text-lg text-slate-100 italic mb-8 flex-grow leading-relaxed">"{review.text}"</p>
                   <div className="flex items-center gap-4 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-400 to-gold-600 flex items-center justify-center text-white font-bold font-serif">
                         {review.author.charAt(0)}
                      </div>
                      <div>
                         <h4 className="font-bold text-white">{review.author}</h4>
                         <p className="text-xs text-mint-200 uppercase tracking-wide">{review.treatment}</p>
                      </div>
                   </div>
                </div>
             ))}
          </div>
          
          {/* Mobile swipe indicator or view all button could go here */}
          <div className="mt-12 text-center">
             <div className="inline-flex gap-2">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span className="w-2 h-2 rounded-full bg-white/30"></span>
                <span className="w-2 h-2 rounded-full bg-white/30"></span>
             </div>
          </div>
       </div>
    </section>
  );
};

// --- FAQ Component ---

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  { question: "How do I book an appointment?", answer: "You can book directly through our website using the form below, or send us a message on WhatsApp. We typically confirm appointments within 24 hours." },
  { question: "Do you offer consultation for smile makeovers?", answer: "Yes! We specialize in smile makeovers. We start with a comprehensive consultation to discuss your goals, analyze your smile, and create a personalized treatment plan." },
  { question: "What is the difference between veneers and bonding?", answer: "Veneers are thin porcelain shells custom-made to cover the front surface of teeth, offering a long-lasting and stain-resistant solution. Bonding uses a composite resin to fix minor imperfections and is generally a quicker, more affordable option but less durable than veneers." },
  { question: "Do you accept insurance?", answer: "We work with several major insurance providers. Please contact our clinic via WhatsApp or email with your insurance details so we can verify your coverage." },
  { question: "Is teeth whitening safe?", answer: "Yes, professional teeth whitening conducted by a dentist is very safe. We use high-quality materials that protect your enamel while effectively brightening your smile." },
  { question: "How often should I visit for a check-up?", answer: "We recommend visiting every 6 months for a routine check-up and cleaning. Regular visits help prevent dental issues and keep your smile healthy and bright." }
];

export const FAQ: React.FC = () => {
  // Set initial state to null so no item is expanded by default
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <span className="text-mint-600 font-bold tracking-widest uppercase text-xs">Common Questions</span>
           <h2 className="text-3xl font-serif font-bold text-slate-900 mt-2">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`rounded-2xl transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-white shadow-xl ring-1 ring-mint-100' 
                  : 'bg-slate-50 hover:bg-white hover:shadow-md'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className={`font-serif font-bold text-lg pr-4 transition-colors ${openIndex === index ? 'text-mint-700' : 'text-slate-800'}`}>
                  {item.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                  openIndex === index ? 'bg-mint-500 text-white rotate-0' : 'bg-white border border-slate-200 text-slate-400 rotate-90'
                }`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Calendar Component ---

const CalendarSelector: React.FC<{
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
}> = ({ selectedDate, onSelect }) => {
  const [viewDate, setViewDate] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const daysInMonth = getDaysInMonth(viewDate);
  const firstDay = getFirstDayOfMonth(viewDate);
  const today = new Date();
  today.setHours(0,0,0,0);

  const handlePrevMonth = () => {
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1);
    setViewDate(newDate);
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const handleDayClick = (day: number) => {
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    if (newDate < today) return;
    onSelect(newDate);
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10" />);
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      const dateToCheck = new Date(viewDate.getFullYear(), viewDate.getMonth(), i);
      const isToday = dateToCheck.toDateString() === today.toDateString();
      const isSelected = selectedDate?.toDateString() === dateToCheck.toDateString();
      const isPast = dateToCheck < today;

      days.push(
        <button
          key={i}
          type="button"
          onClick={() => handleDayClick(i)}
          disabled={isPast}
          className={`h-10 w-10 rounded-full flex items-center justify-center text-sm transition-all duration-200
            ${isSelected ? 'bg-mint-500 text-white font-bold shadow-md transform scale-105' : ''}
            ${!isSelected && !isPast ? 'hover:bg-mint-100 text-slate-700 hover:text-mint-700' : ''}
            ${isPast ? 'text-slate-300 cursor-not-allowed' : ''}
            ${isToday && !isSelected ? 'border border-mint-500 text-mint-600 font-bold' : ''}
          `}
        >
          {i}
        </button>
      );
    }
    return days;
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <button type="button" onClick={handlePrevMonth} className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors">
          <ChevronLeft size={20} />
        </button>
        <span className="font-serif font-bold text-lg text-slate-800">
          {viewDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </span>
        <button type="button" onClick={handleNextMonth} className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="text-xs font-bold text-slate-400 uppercase tracking-wider h-8 flex items-center justify-center">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 place-items-center">
        {renderDays()}
      </div>
    </div>
  );
};

// --- Booking Form ---

export const Booking: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate) {
      alert("Please select a preferred date from the calendar.");
      return;
    }
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="book" className="py-24 bg-beige-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-slate-900">Book Your Appointment</h2>
          <p className="text-slate-500 mt-2">Start your journey to a perfect smile today.</p>
        </div>

        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100">
          {formStatus === 'success' ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Request Sent!</h3>
              <p className="text-slate-600 mt-2">We will contact you shortly to confirm your slot.</p>
              <button 
                onClick={() => { setFormStatus('idle'); setSelectedDate(null); }}
                className="mt-6 text-mint-600 font-medium hover:underline"
              >
                Book another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-mint-500 focus:ring-2 focus:ring-mint-200 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-mint-500 focus:ring-2 focus:ring-mint-200 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="+251 ..." />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Calendar Section */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-mint-500" /> Select Preferred Date
                  </label>
                  <CalendarSelector selectedDate={selectedDate} onSelect={setSelectedDate} />
                  <div className="mt-4 text-center">
                    {selectedDate ? (
                        <p className="text-sm font-medium text-mint-600 bg-mint-50 inline-block px-4 py-2 rounded-full border border-mint-100">
                          Selected: {selectedDate.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    ) : (
                        <p className="text-sm text-slate-400 italic">Please choose a date from the calendar</p>
                    )}
                  </div>
                </div>

                {/* Time & Reason Section */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                       <Clock className="w-4 h-4 text-gold-500" /> Preferred Time
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-mint-500 focus:ring-2 focus:ring-mint-200 outline-none transition-all appearance-none bg-slate-50 focus:bg-white">
                        <option>Morning (9:00 AM - 12:00 PM)</option>
                        <option>Afternoon (12:00 PM - 4:00 PM)</option>
                        <option>Evening (4:00 PM - 7:00 PM)</option>
                      </select>
                      <Clock className="absolute right-4 top-3.5 text-slate-400 w-5 h-5 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Reason for Visit</label>
                    <textarea 
                        rows={4} 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-mint-500 focus:ring-2 focus:ring-mint-200 outline-none transition-all bg-slate-50 focus:bg-white resize-none" 
                        placeholder="Briefly describe your needs (e.g. Consultation, Cleaning, Whitening...)"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button 
                      disabled={formStatus === 'submitting'}
                      type="submit" 
                      className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-gold-500 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 transform hover:-translate-y-1"
                    >
                      {formStatus === 'submitting' ? (
                        <>Processing...</>
                      ) : (
                        <>Confirm Appointment <Send size={18} /></>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

// --- AI Chat Assistant ---

interface Message {
  role: 'user' | 'bot';
  text: string;
}

export const DentalChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hello! I am Dr. Kalkidan\'s virtual assistant. How can I help you today?' }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const reply = await sendMessageToGemini(userMsg);

    setLoading(false);
    setMessages(prev => [...prev, { role: 'bot', text: reply }]);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 right-6 z-40 bg-white p-3 rounded-full shadow-lg border border-slate-100 text-mint-600 hover:bg-mint-50 transition-all duration-300 ${isOpen ? 'hidden' : 'block'}`}
      >
        <Bot size={28} />
      </button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden max-h-[500px] animate-fade-in-up">
          {/* Header */}
          <div className="bg-mint-500 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span className="font-bold">Smile Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-mint-100"><X size={20}/></button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-3 h-80">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  msg.role === 'user' 
                    ? 'bg-mint-500 text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 rounded-tl-none">
                  <Loader2 className="animate-spin w-4 h-4 text-mint-500" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about smiles..." 
              className="flex-1 px-3 py-2 border border-slate-200 rounded-full text-sm focus:outline-none focus:border-mint-500"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="p-2 bg-slate-900 text-white rounded-full hover:bg-gold-500 transition-colors disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};