import { Link } from 'react-router-dom';
import { UtensilsCrossed, CalendarDays, ChefHat, Leaf, Wine, Truck, ArrowRight, ChevronDown, Plus, Star, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { testimonials } from '../data/menuData';
import { useEffect, useRef } from 'react';

function useReveal() {
          const ref = useRef(null);
          useEffect(() => {
                    const observer = new IntersectionObserver(
                              (entries) => {
                                        entries.forEach(entry => {
                                                  if (entry.isIntersecting) entry.target.classList.add('visible');
                                        });
                              },
                              { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
                    );
                    const els = ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
                    els?.forEach(el => observer.observe(el));
                    return () => observer.disconnect();
          }, []);
          return ref;
}

const featuredDishes = [
          { id: 'wagyu', name: 'Wagyu Beef Steak', desc: 'Premium A5 wagyu, seared to perfection with truffle jus and seasonal vegetables.', price: 58, category: 'Main Course', image: '/images/dish-steak.png' },
          { id: 'salmon', name: 'Pan-Seared Salmon', desc: 'Atlantic salmon with crispy skin, lemon butter sauce, and grilled asparagus.', price: 38, category: 'Main Course', image: '/images/dish-salmon.png' },
          { id: 'risotto', name: 'Truffle Risotto', desc: 'Creamy arborio rice with black truffle, aged parmesan, and wild mushrooms.', price: 34, category: 'Main Course', image: '/images/dish-risotto.png' },
          { id: 'creme', name: 'Crème Brûlée', desc: 'Classic French custard with a caramelized sugar crust and fresh berries.', price: 14, category: 'Dessert', image: '/images/dish-dessert.png' },
];

export default function Home() {
          const { addToCart } = useCart();
          const pageRef = useReveal();

          return (
                    <div ref={pageRef}>
                              {/* ===== HERO SECTION ===== */}
                              <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                                        {/* Background */}
                                        <div className="absolute inset-0">
                                                  <img
                                                            src="/images/hero-bg.png"
                                                            alt="Fine dining experience"
                                                            className="w-full h-full object-cover scale-105 animate-[scaleIn_1.5s_ease_forwards]"
                                                  />
                                                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
                                                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10 container-main text-center py-20">
                                                  <div className="animate-fade-up">
                                                            <span className="section-tag text-accent border border-accent/30 backdrop-blur-sm bg-white/5 mb-8">
                                                                      ★ Premium Fine Dining ★
                                                            </span>
                                                  </div>
                                                  <h1 className="animate-fade-up delay-1 heading-1 text-white mb-6">
                                                            Where Every Bite
                                                            <br />
                                                            <span className="bg-gradient-to-r from-accent via-accent-light to-gold bg-clip-text text-transparent">
                                                                      Tells a Story
                                                            </span>
                                                  </h1>
                                                  <p className="animate-fade-up delay-2 max-w-2xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed mb-12">
                                                            Experience culinary artistry at its finest. Our chefs craft each dish with passion,
                                                            using the world's finest ingredients to create unforgettable flavors.
                                                  </p>
                                                  <div className="animate-fade-up delay-3 flex flex-col sm:flex-row gap-4 justify-center">
                                                            <Link
                                                                      to="/order"
                                                                      className="btn-base btn-lg bg-primary text-white hover:bg-primary-light hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
                                                            >
                                                                      <UtensilsCrossed size={18} />
                                                                      Order Online
                                                            </Link>
                                                            <Link
                                                                      to="/reservation"
                                                                      className="btn-base btn-lg border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm hover:-translate-y-0.5"
                                                            >
                                                                      <CalendarDays size={18} />
                                                                      Reserve a Table
                                                            </Link>
                                                  </div>

                                                  {/* Stats */}
                                                  <div className="animate-fade-up delay-4 mt-16 flex justify-center gap-12 sm:gap-20">
                                                            {[
                                                                      { number: '15+', label: 'Years of Excellence' },
                                                                      { number: '50+', label: 'Signature Dishes' },
                                                                      { number: '4.9', label: 'Guest Rating' },
                                                            ].map((stat, i) => (
                                                                      <div key={i} className="text-center">
                                                                                <div className="text-3xl sm:text-4xl font-heading font-bold text-accent leading-none">{stat.number}</div>
                                                                                <div className="text-xs sm:text-sm text-gray-400 mt-2">{stat.label}</div>
                                                                      </div>
                                                            ))}
                                                  </div>
                                        </div>

                                        {/* Scroll Indicator */}
                                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-float">
                                                  <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
                                                  <ChevronDown size={20} className="animate-bounce" />
                                        </div>
                              </section>

                              {/* ===== FEATURED DISHES ===== */}
                              <section className="section-padding bg-cream">
                                        <div className="container-main">
                                                  <div className="section-header reveal">
                                                            <span className="section-tag text-primary bg-primary/10">Our Specialties</span>
                                                            <h2 className="heading-2 text-dark">
                                                                      Featured <span className="text-primary">Dishes</span>
                                                            </h2>
                                                            <p className="mt-4 max-w-xl mx-auto text-gray-warm text-base leading-relaxed">
                                                                      Handcrafted with passion, served with perfection. Discover our chef's most celebrated creations.
                                                            </p>
                                                  </div>

                                                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                                            {featuredDishes.map((dish, i) => (
                                                                      <div
                                                                                key={dish.id}
                                                                                className="reveal card-equal group bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
                                                                                style={{ transitionDelay: `${i * 0.1}s` }}
                                                                      >
                                                                                {/* Fixed-height image with consistent price badge */}
                                                                                <div className="relative h-56 overflow-hidden">
                                                                                          <img
                                                                                                    src={dish.image}
                                                                                                    alt={dish.name}
                                                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                                                          />
                                                                                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                                                          <span className="absolute top-4 right-4 px-3.5 py-1.5 bg-dark/80 backdrop-blur-sm text-accent font-heading text-lg font-bold rounded-full">
                                                                                                    ${dish.price}
                                                                                          </span>
                                                                                </div>
                                                                                {/* Card body with flex-grow for equal-height alignment */}
                                                                                <div className="card-body">
                                                                                          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-primary/70">{dish.category}</span>
                                                                                          <h3 className="heading-3 text-dark mt-1.5 mb-2">{dish.name}</h3>
                                                                                          <p className="text-sm text-gray-warm leading-relaxed flex-1">{dish.desc}</p>
                                                                                          <div className="card-actions">
                                                                                                    <button
                                                                                                              onClick={() => addToCart({ id: dish.id, name: dish.name, price: dish.price, image: dish.image })}
                                                                                                              className="btn-base btn-sm bg-primary/10 text-primary hover:bg-primary hover:text-white w-full"
                                                                                                    >
                                                                                                              <Plus size={16} />
                                                                                                              Add to Cart
                                                                                                    </button>
                                                                                          </div>
                                                                                </div>
                                                                      </div>
                                                            ))}
                                                  </div>

                                                  <div className="text-center mt-14 reveal">
                                                            <Link
                                                                      to="/menu"
                                                                      className="btn-base btn-md border-2 border-primary text-primary hover:bg-primary hover:text-white group"
                                                            >
                                                                      View Full Menu
                                                                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                                            </Link>
                                                  </div>
                                        </div>
                              </section>

                              {/* ===== WHY CHOOSE US ===== */}
                              <section className="section-padding bg-dark text-white">
                                        <div className="container-main">
                                                  <div className="section-header reveal">
                                                            <span className="section-tag text-accent bg-accent/10">Why La Maison Dorée</span>
                                                            <h2 className="heading-2 text-white">
                                                                      An Experience <span className="text-accent">Beyond Dining</span>
                                                            </h2>
                                                  </div>
                                                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                                            {[
                                                                      { icon: ChefHat, title: 'Master Chefs', desc: 'Our award-winning chefs bring decades of international experience to every plate.' },
                                                                      { icon: Leaf, title: 'Fresh Ingredients', desc: 'Sourced daily from local farms and the finest international suppliers.' },
                                                                      { icon: Wine, title: 'Premium Wines', desc: 'A curated collection of over 200 wines from the world\'s top vineyards.' },
                                                                      { icon: Truck, title: 'Fast Delivery', desc: 'Restaurant-quality meals delivered to your door in under 45 minutes.' },
                                                            ].map((item, i) => (
                                                                      <div
                                                                                key={i}
                                                                                className="reveal card-equal group p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-accent/30 transition-all duration-500 text-center hover:-translate-y-1"
                                                                                style={{ transitionDelay: `${i * 0.1}s` }}
                                                                      >
                                                                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                                                                                          <item.icon size={28} />
                                                                                </div>
                                                                                <h3 className="heading-3 text-white mb-3">{item.title}</h3>
                                                                                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                                                                      </div>
                                                            ))}
                                                  </div>
                                        </div>
                              </section>

                              {/* ===== TESTIMONIALS ===== */}
                              <section className="section-padding bg-cream">
                                        <div className="container-main">
                                                  <div className="section-header reveal">
                                                            <span className="section-tag text-primary bg-primary/10">Guest Reviews</span>
                                                            <h2 className="heading-2 text-dark">
                                                                      What Our <span className="text-primary">Guests Say</span>
                                                            </h2>
                                                  </div>
                                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                            {testimonials.map((t, i) => (
                                                                      <div
                                                                                key={t.id}
                                                                                className="reveal card-equal p-8 bg-white rounded-2xl shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                                                                                style={{ transitionDelay: `${i * 0.15}s` }}
                                                                      >
                                                                                <div className="flex gap-1 mb-5">
                                                                                          {Array.from({ length: t.rating }).map((_, j) => (
                                                                                                    <Star key={j} size={18} className="fill-gold text-gold" />
                                                                                          ))}
                                                                                </div>
                                                                                <p className="text-dark-light leading-relaxed font-accent text-lg italic flex-1 mb-8">{t.text}</p>
                                                                                <div className="flex items-center gap-3 mt-auto pt-6 border-t border-gray-100">
                                                                                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-sm shrink-0">
                                                                                                    {t.initials}
                                                                                          </div>
                                                                                          <div>
                                                                                                    <h4 className="font-semibold text-dark text-[15px]">{t.name}</h4>
                                                                                                    <span className="text-xs text-gray-warm">{t.role}</span>
                                                                                          </div>
                                                                                </div>
                                                                      </div>
                                                            ))}
                                                  </div>
                                        </div>
                              </section>

                              {/* ===== CTA SECTION ===== */}
                              <section className="relative py-28 sm:py-36 overflow-hidden">
                                        <div className="absolute inset-0">
                                                  <img src="/images/interior.png" alt="Restaurant" className="w-full h-full object-cover" />
                                                  <div className="absolute inset-0 bg-dark/85 backdrop-blur-sm" />
                                        </div>
                                        <div className="relative z-10 container-main text-center reveal">
                                                  <h2 className="heading-2 text-white leading-tight mb-6">
                                                            Ready for an <span className="text-accent">Unforgettable</span> Evening?
                                                  </h2>
                                                  <p className="text-lg text-gray-300 mb-12 max-w-lg mx-auto leading-relaxed">
                                                            Book your table today and let us create a memorable experience for you and your loved ones.
                                                  </p>
                                                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                                            <Link
                                                                      to="/reservation"
                                                                      className="btn-base btn-lg bg-primary text-white hover:bg-primary-light hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
                                                            >
                                                                      <CalendarDays size={18} />
                                                                      Reserve Now
                                                            </Link>
                                                            <a
                                                                      href="tel:+15551234567"
                                                                      className="btn-base btn-lg border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5"
                                                            >
                                                                      <Phone size={18} />
                                                                      Call Us
                                                            </a>
                                                  </div>
                                        </div>
                              </section>
                    </div>
          );
}
