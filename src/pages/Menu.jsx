import { useState, useEffect, useRef } from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { menuItems, categories } from '../data/menuData';

export default function MenuPage() {
          const [activeCategory, setActiveCategory] = useState('all');
          const { addToCart } = useCart();
          const gridRef = useRef(null);

          const filteredItems = activeCategory === 'all'
                    ? menuItems
                    : menuItems.filter(item => item.category === activeCategory);

          useEffect(() => {
                    const observer = new IntersectionObserver(
                              (entries) => {
                                        entries.forEach(entry => {
                                                  if (entry.isIntersecting) entry.target.classList.add('visible');
                                        });
                              },
                              { threshold: 0.05 }
                    );
                    const els = gridRef.current?.querySelectorAll('.reveal');
                    els?.forEach(el => observer.observe(el));
                    return () => observer.disconnect();
          }, [filteredItems]);

          return (
                    <div>
                              {/* Page Hero */}
                              <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-dark overflow-hidden">
                                        <div className="absolute inset-0 opacity-30">
                                                  <img src="/images/dish-steak.png" alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-dark" />
                                        <div className="relative z-10 text-center container-main">
                                                  <span className="section-tag text-accent bg-accent/10 animate-fade-up">Explore Our</span>
                                                  <h1 className="heading-page text-white animate-fade-up delay-1 mt-2">Menu</h1>
                                                  <p className="mt-4 text-gray-400 text-lg animate-fade-up delay-2 max-w-md mx-auto">
                                                            Discover a world of flavors crafted with passion and precision
                                                  </p>
                                        </div>
                              </section>

                              {/* Menu Content */}
                              <section className="section-padding bg-cream">
                                        <div className="container-main">
                                                  {/* Category Tabs — centered, consistent sizing */}
                                                  <div className="flex flex-wrap justify-center gap-3 mb-14">
                                                            {categories.map(cat => (
                                                                      <button
                                                                                key={cat.id}
                                                                                onClick={() => setActiveCategory(cat.id)}
                                                                                className={`btn-base btn-md transition-all duration-300 ${activeCategory === cat.id
                                                                                                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                                                                                    : 'bg-white text-dark-light hover:bg-primary/10 hover:text-primary'
                                                                                          }`}
                                                                      >
                                                                                {cat.label}
                                                                      </button>
                                                            ))}
                                                  </div>

                                                  {/* Menu Grid — equal-height cards */}
                                                  <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                                            {filteredItems.map((item, i) => (
                                                                      <div
                                                                                key={item.id}
                                                                                className="reveal card-equal group bg-white rounded-2xl overflow-hidden shadow-md shadow-black/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1"
                                                                                style={{ transitionDelay: `${Math.min(i * 0.05, 0.3)}s` }}
                                                                      >
                                                                                {/* Fixed-height image */}
                                                                                <div className="relative h-52 overflow-hidden">
                                                                                          <img
                                                                                                    src={item.image}
                                                                                                    alt={item.name}
                                                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                                                          />
                                                                                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                                                          {item.badge && (
                                                                                                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-[11px] font-bold tracking-wider uppercase rounded-full">
                                                                                                              {item.badge}
                                                                                                    </span>
                                                                                          )}
                                                                                          <span className="absolute top-4 right-4 px-3.5 py-1.5 bg-dark/80 backdrop-blur-sm text-accent font-heading text-lg font-bold rounded-full">
                                                                                                    ${item.price}
                                                                                          </span>
                                                                                </div>
                                                                                {/* Card body — flex column for bottom-aligned button */}
                                                                                <div className="card-body">
                                                                                          <h3 className="heading-3 text-dark mb-1.5">{item.name}</h3>
                                                                                          <p className="text-sm text-gray-warm leading-relaxed flex-1">{item.description}</p>
                                                                                          <div className="card-actions">
                                                                                                    <button
                                                                                                              onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, image: item.image })}
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
                                        </div>
                              </section>
                    </div>
          );
}
