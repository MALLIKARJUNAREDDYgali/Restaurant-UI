import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
          const quickLinks = [
                    { path: '/', label: 'Home' },
                    { path: '/menu', label: 'Menu' },
                    { path: '/order', label: 'Order Online' },
                    { path: '/reservation', label: 'Reserve a Table' },
                    { path: '/about', label: 'About Us' },
                    { path: '/contact', label: 'Contact' },
          ];

          return (
                    <footer className="bg-dark text-gray-300">
                              {/* Main Footer */}
                              <div className="container-main py-16 sm:py-20">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

                                                  {/* Brand Column — 4 cols */}
                                                  <div className="lg:col-span-4">
                                                            <Link to="/" className="flex items-center gap-2.5 mb-5 group">
                                                                      <span className="text-accent text-xl transition-transform duration-300 group-hover:rotate-90">✦</span>
                                                                      <span className="font-heading text-xl font-bold text-white">
                                                                                La Maison <span className="text-accent">Dorée</span>
                                                                      </span>
                                                            </Link>
                                                            <p className="text-gray-warm text-sm leading-relaxed mb-8 max-w-[280px]">
                                                                      Where every bite tells a story. Experience culinary artistry at its finest in the heart of downtown New York.
                                                            </p>
                                                            <div className="flex gap-3">
                                                                      {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                                                                                <a
                                                                                          key={i}
                                                                                          href="#"
                                                                                          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent/20 hover:text-accent transition-all duration-300 hover:-translate-y-1"
                                                                                          aria-label="Social link"
                                                                                >
                                                                                          <Icon size={16} />
                                                                                </a>
                                                                      ))}
                                                            </div>
                                                  </div>

                                                  {/* Quick Links Column — 2 cols */}
                                                  <div className="lg:col-span-2">
                                                            <h4 className="text-white font-heading text-base font-semibold mb-2">
                                                                      Quick Links
                                                            </h4>
                                                            <div className="w-8 h-0.5 bg-accent mb-5"></div>
                                                            <ul className="space-y-3">
                                                                      {quickLinks.map(link => (
                                                                                <li key={link.path}>
                                                                                          <Link
                                                                                                    to={link.path}
                                                                                                    className="text-gray-warm text-sm hover:text-accent hover:pl-2 transition-all duration-300 block leading-relaxed"
                                                                                          >
                                                                                                    {link.label}
                                                                                          </Link>
                                                                                </li>
                                                                      ))}
                                                            </ul>
                                                  </div>

                                                  {/* Hours Column — 3 cols */}
                                                  <div className="lg:col-span-3">
                                                            <h4 className="text-white font-heading text-base font-semibold mb-2">
                                                                      Opening Hours
                                                            </h4>
                                                            <div className="w-8 h-0.5 bg-accent mb-5"></div>
                                                            <ul className="space-y-4 text-sm">
                                                                      {[
                                                                                { day: 'Mon – Thu', time: '5:00 – 10:00 PM' },
                                                                                { day: 'Fri – Sat', time: '5:00 – 11:00 PM' },
                                                                                { day: 'Sunday', time: '5:00 – 10:00 PM' },
                                                                      ].map((item, i) => (
                                                                                <li key={i} className="flex items-center justify-between gap-3 text-gray-warm">
                                                                                          <span className="whitespace-nowrap">{item.day}</span>
                                                                                          <span className="h-px flex-1 bg-white/10"></span>
                                                                                          <span className="text-accent-light font-medium whitespace-nowrap">{item.time}</span>
                                                                                </li>
                                                                      ))}
                                                            </ul>
                                                  </div>

                                                  {/* Contact Column — 3 cols */}
                                                  <div className="lg:col-span-3">
                                                            <h4 className="text-white font-heading text-base font-semibold mb-2">
                                                                      Contact
                                                            </h4>
                                                            <div className="w-8 h-0.5 bg-accent mb-5"></div>
                                                            <ul className="space-y-4 text-sm">
                                                                      <li className="flex items-start gap-3 text-gray-warm">
                                                                                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                                                                                <span className="leading-relaxed">123 Gourmet Avenue,<br />Downtown NYC</span>
                                                                      </li>
                                                                      <li className="flex items-center gap-3 text-gray-warm">
                                                                                <Phone size={16} className="text-accent shrink-0" />
                                                                                <span>+1 (555) 123-4567</span>
                                                                      </li>
                                                                      <li className="flex items-center gap-3 text-gray-warm">
                                                                                <Mail size={16} className="text-accent shrink-0" />
                                                                                <span>info@lamaisondoree.com</span>
                                                                      </li>
                                                            </ul>
                                                  </div>
                                        </div>
                              </div>

                              {/* Bottom Bar */}
                              <div className="border-t border-white/10">
                                        <div className="container-main py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-warm">
                                                  <p>© 2026 La Maison Dorée. All rights reserved.</p>
                                                  <div className="flex gap-6">
                                                            <a href="#" className="hover:text-accent transition-colors duration-300">Privacy Policy</a>
                                                            <a href="#" className="hover:text-accent transition-colors duration-300">Terms of Service</a>
                                                  </div>
                                        </div>
                              </div>
                    </footer>
          );
}
