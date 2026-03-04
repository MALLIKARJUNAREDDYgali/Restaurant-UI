import { useEffect, useRef } from 'react';
import { Award, Star, Maximize2 } from 'lucide-react';

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

export default function About() {
          const pageRef = useReveal();

          const galleryImages = [
                    { src: '/images/interior.png', alt: 'Restaurant Interior', large: true },
                    { src: '/images/dish-steak.png', alt: 'Wagyu Steak' },
                    { src: '/images/dish-salmon.png', alt: 'Pan-Seared Salmon' },
                    { src: '/images/chef.png', alt: 'Chef at Work' },
                    { src: '/images/dish-dessert.png', alt: 'Crème Brûlée' },
                    { src: '/images/dish-bruschetta.png', alt: 'Truffle Bruschetta', large: true },
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
                                                  <span className="section-tag text-accent bg-accent/10 animate-fade-up">Our Story</span>
                                                  <h1 className="heading-page text-white animate-fade-up delay-1 mt-2">About Us</h1>
                                                  <p className="mt-4 text-gray-400 text-lg animate-fade-up delay-2 max-w-md mx-auto">
                                                            A legacy of culinary excellence since 2010
                                                  </p>
                                        </div>
                              </section>

                              {/* Restaurant Story */}
                              <section className="section-padding bg-cream">
                                        <div className="container-main">
                                                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                                            <div className="reveal-left">
                                                                      <span className="section-tag text-primary bg-primary/10">Est. 2010</span>
                                                                      <h2 className="heading-2 text-dark mb-6 mt-2">
                                                                                Our <span className="text-primary">Story</span>
                                                                      </h2>
                                                                      <div className="space-y-5 text-gray-warm leading-relaxed text-[15px]">
                                                                                <p>
                                                                                          La Maison Dorée was born from a dream — to create a dining experience that transcends the ordinary.
                                                                                          Founded in 2010 by Chef Antoine Beaumont, our restaurant has grown from a small, intimate space into
                                                                                          one of the city's most celebrated culinary destinations.
                                                                                </p>
                                                                                <p>
                                                                                          We believe that great food is more than just sustenance; it's an art form, a cultural expression, and a
                                                                                          way to bring people together. Every dish on our menu is a testament to this philosophy, crafted with
                                                                                          meticulous attention to detail.
                                                                                </p>
                                                                                <p>
                                                                                          Our ingredients are sourced from the finest local farms and international purveyors, ensuring that every
                                                                                          bite delivers an explosion of authentic flavors. From our hand-rolled pasta to our dry-aged steaks, every
                                                                                          element is prepared with the care and passion that defines our kitchen.
                                                                                </p>
                                                                      </div>
                                                            </div>
                                                            <div className="reveal-right relative">
                                                                      <div className="rounded-2xl overflow-hidden shadow-2xl">
                                                                                <img src="/images/interior.png" alt="Restaurant Interior" className="w-full h-auto object-cover aspect-[4/3]" />
                                                                      </div>
                                                                      <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
                                                                                <span className="block font-heading text-4xl font-bold leading-none">15</span>
                                                                                <span className="text-sm text-white/80 mt-1 block">Years of<br />Excellence</span>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>
                              </section>

                              {/* Chef Section */}
                              <section className="section-padding bg-dark text-white">
                                        <div className="container-main">
                                                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                                            <div className="reveal-left order-2 lg:order-1">
                                                                      <div className="rounded-2xl overflow-hidden shadow-2xl">
                                                                                <img src="/images/chef.png" alt="Chef Antoine Beaumont" className="w-full h-auto object-cover aspect-[4/3]" />
                                                                      </div>
                                                            </div>
                                                            <div className="reveal-right order-1 lg:order-2">
                                                                      <span className="section-tag text-accent bg-accent/10">Meet The Chef</span>
                                                                      <h2 className="heading-2 text-white mb-6 mt-2">
                                                                                Chef Antoine <span className="text-accent">Beaumont</span>
                                                                      </h2>
                                                                      <blockquote className="text-xl font-accent italic text-accent-light mb-8 pl-5 border-l-2 border-accent/50 leading-relaxed">
                                                                                "Cooking is an act of love. Every ingredient has a story, and my job is to bring those stories together on a plate."
                                                                      </blockquote>
                                                                      <div className="space-y-5 text-gray-400 leading-relaxed text-[15px]">
                                                                                <p>
                                                                                          With over 25 years of culinary experience spanning Paris, Tokyo, and New York, Chef Antoine brings a
                                                                                          global perspective to every dish. A graduate of Le Cordon Bleu and a former sous chef at a
                                                                                          three-Michelin-star restaurant.
                                                                                </p>
                                                                                <p>
                                                                                          His philosophy is simple: respect the ingredients, honor the traditions, and never stop innovating.
                                                                                          Under his leadership, La Maison Dorée has earned numerous accolades.
                                                                                </p>
                                                                      </div>
                                                                      <div className="flex flex-wrap gap-4 mt-10">
                                                                                <div className="flex items-center gap-2.5 px-5 py-3 bg-white/5 rounded-xl border border-white/10">
                                                                                          <Award size={18} className="text-gold" />
                                                                                          <span className="text-sm font-medium">Chef of the Year 2023</span>
                                                                                </div>
                                                                                <div className="flex items-center gap-2.5 px-5 py-3 bg-white/5 rounded-xl border border-white/10">
                                                                                          <Star size={18} className="text-gold" />
                                                                                          <span className="text-sm font-medium">Michelin Recommended</span>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>
                              </section>

                              {/* Gallery */}
                              <section className="section-padding bg-cream">
                                        <div className="container-main">
                                                  <div className="section-header reveal">
                                                            <span className="section-tag text-primary bg-primary/10">Gallery</span>
                                                            <h2 className="heading-2 text-dark">
                                                                      A Glimpse <span className="text-primary">Inside</span>
                                                            </h2>
                                                  </div>
                                                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                                            {galleryImages.map((img, i) => (
                                                                      <div
                                                                                key={i}
                                                                                className={`reveal group relative rounded-2xl overflow-hidden cursor-pointer ${img.large ? 'col-span-2 lg:col-span-1 aspect-[16/10]' : 'aspect-square'
                                                                                          }`}
                                                                                style={{ transitionDelay: `${i * 0.1}s` }}
                                                                      >
                                                                                <img
                                                                                          src={img.src}
                                                                                          alt={img.alt}
                                                                                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                                                />
                                                                                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-300 flex items-center justify-center">
                                                                                          <Maximize2 size={28} className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-75" />
                                                                                </div>
                                                                      </div>
                                                            ))}
                                                  </div>
                                        </div>
                              </section>
                    </div>
          );
}
