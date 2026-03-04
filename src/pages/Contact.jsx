import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Map, ExternalLink, Send, CheckCircle } from 'lucide-react';

function useReveal() {
          const ref = useRef(null);
          useEffect(() => {
                    const observer = new IntersectionObserver(
                              (entries) => {
                                        entries.forEach(entry => {
                                                  if (entry.isIntersecting) entry.target.classList.add('visible');
                                        });
                              },
                              { threshold: 0.08 }
                    );
                    const els = ref.current?.querySelectorAll('.reveal');
                    els?.forEach(el => observer.observe(el));
                    return () => observer.disconnect();
          }, []);
          return ref;
}

export default function Contact() {
          const [submitted, setSubmitted] = useState(false);
          const pageRef = useReveal();

          const handleSubmit = (e) => {
                    e.preventDefault();
                    setSubmitted(true);
                    setTimeout(() => setSubmitted(false), 4000);
          };

          const contactCards = [
                    { icon: MapPin, title: 'Address', lines: ['123 Gourmet Avenue, Downtown', 'New York, NY 10001'] },
                    { icon: Phone, title: 'Phone', lines: ['+1 (555) 123-4567', '+1 (555) 987-6543'] },
                    { icon: Mail, title: 'Email', lines: ['reservations@lamaisondoree.com', 'info@lamaisondoree.com'] },
                    { icon: Clock, title: 'Opening Hours', lines: ['Mon – Thu: 5:00 PM – 10:00 PM', 'Fri – Sun: 5:00 PM – 11:00 PM'] },
          ];

          return (
                    <div ref={pageRef}>
                              {/* Page Hero */}
                              <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-dark overflow-hidden">
                                        <div className="absolute inset-0 opacity-20">
                                                  <img src="/images/interior.png" alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-dark" />
                                        <div className="relative z-10 text-center container-main">
                                                  <span className="section-tag text-accent bg-accent/10 animate-fade-up">Get In Touch</span>
                                                  <h1 className="heading-page text-white animate-fade-up delay-1 mt-2">Contact Us</h1>
                                                  <p className="mt-4 text-gray-400 text-lg animate-fade-up delay-2 max-w-md mx-auto">
                                                            We'd love to hear from you
                                                  </p>
                                        </div>
                              </section>

                              {/* Content */}
                              <section className="section-padding bg-cream">
                                        <div className="container-main">
                                                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                                                            {/* Info Side */}
                                                            <div>
                                                                      <h2 className="heading-2 text-dark mb-10 reveal">
                                                                                Find <span className="text-primary">Us</span>
                                                                      </h2>

                                                                      {/* Contact cards — equal height, 2-col grid */}
                                                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                                                                                {contactCards.map((card, i) => (
                                                                                          <div
                                                                                                    key={i}
                                                                                                    className="reveal card-equal p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                                                                                                    style={{ transitionDelay: `${i * 0.1}s` }}
                                                                                          >
                                                                                                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                                                                                              <card.icon size={18} className="text-primary" />
                                                                                                    </div>
                                                                                                    <h4 className="heading-3 text-dark mb-2">{card.title}</h4>
                                                                                                    {card.lines.map((line, j) => (
                                                                                                              <p key={j} className="text-sm text-gray-warm leading-relaxed">{line}</p>
                                                                                                    ))}
                                                                                          </div>
                                                                                ))}
                                                                      </div>

                                                                      {/* Map Placeholder */}
                                                                      <div className="reveal bg-gradient-to-br from-dark-medium to-dark rounded-2xl p-10 text-center">
                                                                                <Map size={48} className="mx-auto text-accent mb-5" />
                                                                                <h4 className="heading-3 text-white mb-2">Our Location</h4>
                                                                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">123 Gourmet Avenue, Downtown, New York</p>
                                                                                <a
                                                                                          href="https://maps.google.com"
                                                                                          target="_blank"
                                                                                          rel="noreferrer"
                                                                                          className="btn-base btn-md border border-accent/30 text-accent hover:bg-accent/10"
                                                                                >
                                                                                          <ExternalLink size={14} />
                                                                                          Open in Maps
                                                                                </a>
                                                                      </div>
                                                            </div>

                                                            {/* Form Side */}
                                                            <div className="reveal">
                                                                      <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl shadow-black/5">
                                                                                <h3 className="heading-2 text-dark mb-8" style={{ fontSize: '1.5rem' }}>Send Us a Message</h3>

                                                                                {submitted ? (
                                                                                          <div className="py-16 text-center animate-scale-in">
                                                                                                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                                                                                                              <CheckCircle size={40} className="text-green-500" />
                                                                                                    </div>
                                                                                                    <h3 className="heading-2 text-dark mb-3" style={{ fontSize: '1.5rem' }}>Message Sent!</h3>
                                                                                                    <p className="text-gray-warm leading-relaxed">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                                                                                          </div>
                                                                                ) : (
                                                                                          <form onSubmit={handleSubmit} className="space-y-5">
                                                                                                    <div>
                                                                                                              <label className="input-label">Your Name</label>
                                                                                                              <input type="text" placeholder="John Doe" required className="input-field" />
                                                                                                    </div>
                                                                                                    <div>
                                                                                                              <label className="input-label">Email Address</label>
                                                                                                              <input type="email" placeholder="your@email.com" required className="input-field" />
                                                                                                    </div>
                                                                                                    <div>
                                                                                                              <label className="input-label">Subject</label>
                                                                                                              <input type="text" placeholder="How can we help?" required className="input-field" />
                                                                                                    </div>
                                                                                                    <div>
                                                                                                              <label className="input-label">Message</label>
                                                                                                              <textarea rows="5" placeholder="Tell us more..." required className="input-field resize-none" />
                                                                                                    </div>
                                                                                                    <button type="submit" className="btn-base btn-lg bg-primary text-white w-full hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25">
                                                                                                              <Send size={18} />
                                                                                                              Send Message
                                                                                                    </button>
                                                                                          </form>
                                                                                )}
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>
                              </section>
                    </div>
          );
}
