import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
          const [scrolled, setScrolled] = useState(false);
          const [mobileOpen, setMobileOpen] = useState(false);
          const { cartCount } = useCart();
          const location = useLocation();

          useEffect(() => {
                    const handleScroll = () => setScrolled(window.scrollY > 50);
                    window.addEventListener('scroll', handleScroll);
                    return () => window.removeEventListener('scroll', handleScroll);
          }, []);

          useEffect(() => {
                    setMobileOpen(false);
                    window.scrollTo(0, 0);
          }, [location]);

          useEffect(() => {
                    document.body.style.overflow = mobileOpen ? 'hidden' : '';
                    return () => { document.body.style.overflow = ''; };
          }, [mobileOpen]);

          const navLinks = [
                    { path: '/', label: 'Home' },
                    { path: '/menu', label: 'Menu' },
                    { path: '/order', label: 'Order Online' },
                    { path: '/reservation', label: 'Reserve' },
                    { path: '/about', label: 'About' },
                    { path: '/contact', label: 'Contact' },
          ];

          const isActive = (path) => location.pathname === path;

          return (
                    <>
                              <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                                                  ? 'bg-dark/95 backdrop-blur-xl shadow-2xl shadow-black/30 py-3'
                                                  : 'bg-transparent py-5'
                                        }`}>
                                        <div className="container-main flex items-center justify-between">
                                                  {/* Logo */}
                                                  <Link to="/" className="flex items-center gap-2.5 group shrink-0">
                                                            <span className="text-accent text-2xl transition-transform duration-300 group-hover:rotate-90">✦</span>
                                                            <span className="font-heading text-xl sm:text-2xl font-bold text-white tracking-wide">
                                                                      La Maison <span className="text-accent">Dorée</span>
                                                            </span>
                                                  </Link>

                                                  {/* Desktop Nav — evenly spaced */}
                                                  <ul className="hidden lg:flex items-center gap-1.5">
                                                            {navLinks.map(link => (
                                                                      <li key={link.path}>
                                                                                <Link
                                                                                          to={link.path}
                                                                                          className={`relative px-5 py-2.5 text-[13px] font-medium tracking-wide transition-all duration-300 rounded-full whitespace-nowrap
                    ${isActive(link.path)
                                                                                                              ? 'text-accent bg-accent/10'
                                                                                                              : 'text-gray-300 hover:text-white hover:bg-white/5'
                                                                                                    }`}
                                                                                >
                                                                                          {link.label}
                                                                                          {isActive(link.path) && (
                                                                                                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                                                                                          )}
                                                                                </Link>
                                                                      </li>
                                                            ))}
                                                  </ul>

                                                  {/* Actions — consistent sizing */}
                                                  <div className="flex items-center gap-2">
                                                            <Link
                                                                      to="/order"
                                                                      className="relative w-10 h-10 flex items-center justify-center text-white hover:text-accent transition-colors duration-300 hover:bg-white/5 rounded-full"
                                                                      aria-label="Shopping cart"
                                                            >
                                                                      <ShoppingBag size={20} />
                                                                      {cartCount > 0 && (
                                                                                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-primary-light text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-scale-in">
                                                                                          {cartCount}
                                                                                </span>
                                                                      )}
                                                            </Link>
                                                            <button
                                                                      onClick={() => setMobileOpen(!mobileOpen)}
                                                                      className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-accent transition-colors duration-300 rounded-full hover:bg-white/5"
                                                                      aria-label="Toggle menu"
                                                            >
                                                                      {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                                                            </button>
                                                  </div>
                                        </div>
                              </nav>

                              {/* Mobile Menu Overlay */}
                              <div
                                        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                                                  }`}
                                        onClick={() => setMobileOpen(false)}
                              />

                              {/* Mobile Menu */}
                              <div
                                        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-dark/98 backdrop-blur-2xl z-50 transition-transform duration-500 ease-out lg:hidden ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
                                                  }`}
                              >
                                        <div className="flex flex-col h-full pt-20 pb-8 px-6">
                                                  <div className="flex-1 space-y-1">
                                                            {navLinks.map((link, i) => (
                                                                      <Link
                                                                                key={link.path}
                                                                                to={link.path}
                                                                                className={`block px-5 py-4 text-[17px] font-medium rounded-xl transition-all duration-300 ${isActive(link.path)
                                                                                                    ? 'text-accent bg-accent/10'
                                                                                                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                                                                                          }`}
                                                                                style={{ animationDelay: `${i * 0.05}s` }}
                                                                      >
                                                                                {link.label}
                                                                      </Link>
                                                            ))}
                                                  </div>
                                                  <div className="border-t border-white/10 pt-6 mt-4">
                                                            <Link
                                                                      to="/reservation"
                                                                      className="btn-base btn-lg bg-primary text-white w-full hover:bg-primary-light"
                                                            >
                                                                      Reserve a Table
                                                            </Link>
                                                  </div>
                                        </div>
                              </div>
                    </>
          );
}
