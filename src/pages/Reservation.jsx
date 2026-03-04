import { useState } from 'react';
import { CalendarDays, Clock, Users, User, Mail, Phone, MessageSquare, Sparkles, CheckCircle } from 'lucide-react';

export default function Reservation() {
          const [submitted, setSubmitted] = useState(false);

          const handleSubmit = (e) => {
                    e.preventDefault();
                    setSubmitted(true);
                    setTimeout(() => setSubmitted(false), 4000);
          };

          return (
                    <div>
                              {/* Page Hero */}
                              <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-dark overflow-hidden">
                                        <div className="absolute inset-0 opacity-20">
                                                  <img src="/images/interior.png" alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-dark" />
                                        <div className="relative z-10 text-center container-main">
                                                  <span className="section-tag text-accent bg-accent/10 animate-fade-up">Book Your Experience</span>
                                                  <h1 className="heading-page text-white animate-fade-up delay-1 mt-2">Reserve a Table</h1>
                                                  <p className="mt-4 text-gray-400 text-lg animate-fade-up delay-2 max-w-md mx-auto">
                                                            Secure your perfect evening at La Maison Dorée
                                                  </p>
                                        </div>
                              </section>

                              {/* Content */}
                              <section className="section-padding bg-cream">
                                        <div className="container-main">
                                                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                                                            {/* Info Side */}
                                                            <div className="pt-2">
                                                                      <h2 className="heading-2 text-dark mb-4">
                                                                                Make a <span className="text-primary">Reservation</span>
                                                                      </h2>
                                                                      <p className="text-gray-warm leading-relaxed mb-8 text-base">
                                                                                Join us for an extraordinary dining experience. Please fill out the form and we'll confirm your reservation shortly.
                                                                      </p>

                                                                      <div className="space-y-4">
                                                                                {[
                                                                                          { icon: Clock, title: 'Opening Hours', desc: 'Mon-Thu: 5:00 PM - 10:00 PM\nFri-Sun: 5:00 PM - 11:00 PM' },
                                                                                          { icon: Users, title: 'Group Dining', desc: 'For parties of 8 or more, please call us directly for special arrangements.' },
                                                                                          { icon: Sparkles, title: 'Special Events', desc: 'Private dining rooms available for celebrations and corporate events.' },
                                                                                ].map((feature, i) => (
                                                                                          <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                                                                                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                                                                                              <feature.icon size={20} className="text-primary" />
                                                                                                    </div>
                                                                                                    <div className="min-w-0">
                                                                                                              <h4 className="heading-3 text-dark">{feature.title}</h4>
                                                                                                              <p className="text-sm text-gray-warm mt-1.5 whitespace-pre-line leading-relaxed">{feature.desc}</p>
                                                                                                    </div>
                                                                                          </div>
                                                                                ))}
                                                                      </div>
                                                            </div>

                                                            {/* Form Side */}
                                                            <div className="bg-white p-7 sm:p-9 rounded-2xl shadow-xl shadow-black/5">
                                                                      {submitted ? (
                                                                                <div className="py-14 text-center animate-scale-in">
                                                                                          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                                                                                                    <CheckCircle size={40} className="text-green-500" />
                                                                                          </div>
                                                                                          <h3 className="heading-2 text-dark mb-3">Reservation Confirmed!</h3>
                                                                                          <p className="text-gray-warm leading-relaxed">We'll send a confirmation email shortly. We look forward to seeing you!</p>
                                                                                </div>
                                                                      ) : (
                                                                                <form onSubmit={handleSubmit} className="space-y-5">
                                                                                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                                                                    <div>
                                                                                                              <label className="input-label">
                                                                                                                        <CalendarDays size={14} className="text-primary" /> Date
                                                                                                              </label>
                                                                                                              <input type="date" required className="input-field" />
                                                                                                    </div>
                                                                                                    <div>
                                                                                                              <label className="input-label">
                                                                                                                        <Clock size={14} className="text-primary" /> Time
                                                                                                              </label>
                                                                                                              <select required className="input-field appearance-none">
                                                                                                                        <option value="">Select a time</option>
                                                                                                                        {['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'].map(t => (
                                                                                                                                  <option key={t} value={t}>{t}</option>
                                                                                                                        ))}
                                                                                                              </select>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                    <label className="input-label">
                                                                                                              <Users size={14} className="text-primary" /> Number of Guests
                                                                                                    </label>
                                                                                                    <select required className="input-field appearance-none">
                                                                                                              <option value="">Select guests</option>
                                                                                                              {[1, 2, 3, 4, 5, 6, 7].map(n => (
                                                                                                                        <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>
                                                                                                              ))}
                                                                                                              <option value="8">8+ Guests</option>
                                                                                                    </select>
                                                                                          </div>

                                                                                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                                                                    <div>
                                                                                                              <label className="input-label">
                                                                                                                        <User size={14} className="text-primary" /> Full Name
                                                                                                              </label>
                                                                                                              <input type="text" placeholder="Your full name" required className="input-field" />
                                                                                                    </div>
                                                                                                    <div>
                                                                                                              <label className="input-label">
                                                                                                                        <Phone size={14} className="text-primary" /> Phone
                                                                                                              </label>
                                                                                                              <input type="tel" placeholder="+1 (555) 123-4567" required className="input-field" />
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div>
                                                                                                    <label className="input-label">
                                                                                                              <Mail size={14} className="text-primary" /> Email
                                                                                                    </label>
                                                                                                    <input type="email" placeholder="your@email.com" required className="input-field" />
                                                                                          </div>

                                                                                          <div>
                                                                                                    <label className="input-label">
                                                                                                              <MessageSquare size={14} className="text-primary" /> Special Requests
                                                                                                    </label>
                                                                                                    <textarea rows="3" placeholder="Allergies, celebrations, seating preferences..." className="input-field resize-none" />
                                                                                          </div>

                                                                                          <button type="submit" className="btn-base btn-lg bg-primary text-white w-full hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25 mt-2">
                                                                                                    <CheckCircle size={18} />
                                                                                                    Confirm Reservation
                                                                                          </button>
                                                                                </form>
                                                                      )}
                                                            </div>
                                                  </div>
                                        </div>
                              </section>
                    </div>
          );
}
