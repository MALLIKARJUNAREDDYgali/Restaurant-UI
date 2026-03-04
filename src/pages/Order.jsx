import { useState, useEffect, useRef } from 'react';
import { Plus, Minus, Trash2, ShoppingCart, ShoppingBag, ArrowRight, X, User, CreditCard, Banknote, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { menuItems, categories } from '../data/menuData';

export default function Order() {
          const [activeCategory, setActiveCategory] = useState('all');
          const [showCheckout, setShowCheckout] = useState(false);
          const [orderPlaced, setOrderPlaced] = useState(false);
          const [paymentMethod, setPaymentMethod] = useState('card');
          const { cartItems, cartCount, subtotal, deliveryFee, total, addToCart, removeFromCart, updateQuantity, clearCart, showToastMsg } = useCart();
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

          const handleCheckout = (e) => {
                    e.preventDefault();
                    setOrderPlaced(true);
                    setTimeout(() => {
                              setShowCheckout(false);
                              setOrderPlaced(false);
                              clearCart();
                              showToastMsg('Order placed successfully! 🎉');
                    }, 2500);
          };

          return (
                    <div>
                              {/* Page Hero */}
                              <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-dark overflow-hidden">
                                        <div className="absolute inset-0 opacity-30">
                                                  <img src="/images/dish-bruschetta.png" alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-dark" />
                                        <div className="relative z-10 text-center container-main">
                                                  <span className="section-tag text-accent bg-accent/10 animate-fade-up">Delivery & Pickup</span>
                                                  <h1 className="heading-page text-white animate-fade-up delay-1 mt-2">Order Online</h1>
                                                  <p className="mt-4 text-gray-400 text-lg animate-fade-up delay-2 max-w-md mx-auto">
                                                            Premium dining delivered to your doorstep
                                                  </p>
                                        </div>
                              </section>

                              {/* Order Content */}
                              <section className="section-padding bg-cream">
                                        <div className="container-main">
                                                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
                                                            {/* Menu Items */}
                                                            <div className="flex-1 min-w-0 w-full">
                                                                      {/* Category Tabs */}
                                                                      <div className="flex flex-wrap gap-2.5 mb-8">
                                                                                {categories.map(cat => (
                                                                                          <button
                                                                                                    key={cat.id}
                                                                                                    onClick={() => setActiveCategory(cat.id)}
                                                                                                    className={`btn-base btn-sm transition-all duration-300 ${activeCategory === cat.id
                                                                                                              ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                                                                                              : 'bg-white text-dark-light hover:bg-primary/10 hover:text-primary'
                                                                                                              }`}
                                                                                          >
                                                                                                    {cat.label}
                                                                                          </button>
                                                                                ))}
                                                                      </div>

                                                                      {/* Grid — compact horizontal cards */}
                                                                      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                                                {filteredItems.map((item, i) => (
                                                                                          <div
                                                                                                    key={item.id}
                                                                                                    className="reveal group flex bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                                                                                                    style={{ transitionDelay: `${Math.min(i * 0.03, 0.2)}s`, minHeight: '140px' }}
                                                                                          >
                                                                                                    <div className="w-[120px] shrink-0 relative overflow-hidden">
                                                                                                              <img
                                                                                                                        src={item.image}
                                                                                                                        alt={item.name}
                                                                                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                                                                              />
                                                                                                              {item.badge && (
                                                                                                                        <span className="absolute top-2 left-2 px-2 py-0.5 bg-primary text-white text-[10px] font-bold tracking-wider uppercase rounded-full">
                                                                                                                                  {item.badge}
                                                                                                                        </span>
                                                                                                              )}
                                                                                                    </div>
                                                                                                    <div className="flex-1 p-4 flex flex-col justify-between min-w-0">
                                                                                                              <div className="overflow-hidden">
                                                                                                                        <h3 className="font-heading text-[15px] font-bold text-dark leading-tight truncate">{item.name}</h3>
                                                                                                                        <p className="text-xs text-gray-warm mt-1 line-clamp-2 leading-relaxed">{item.description}</p>
                                                                                                              </div>
                                                                                                              <div className="flex items-center justify-between mt-auto pt-2">
                                                                                                                        <span className="font-heading text-lg font-bold text-primary">${item.price}</span>
                                                                                                                        <button
                                                                                                                                  onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, image: item.image })}
                                                                                                                                  className="w-9 h-9 flex items-center justify-center bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                                                                                                                        >
                                                                                                                                  <Plus size={18} />
                                                                                                                        </button>
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>
                                                                                ))}
                                                                      </div>
                                                            </div>

                                                            {/* Cart Sidebar */}
                                                            <div className="w-full lg:w-[360px] shrink-0">
                                                                      <div className="sticky top-24 bg-white rounded-2xl shadow-xl shadow-black/5 overflow-hidden">
                                                                                <div className="px-6 py-5 bg-dark text-white flex items-center justify-between">
                                                                                          <div className="flex items-center gap-2.5">
                                                                                                    <ShoppingBag size={20} />
                                                                                                    <h3 className="font-heading text-lg font-bold">Your Order</h3>
                                                                                          </div>
                                                                                          <span className="text-sm text-accent font-medium">{cartCount} items</span>
                                                                                </div>

                                                                                <div className="p-6 max-h-[400px] overflow-y-auto">
                                                                                          {cartItems.length === 0 ? (
                                                                                                    <div className="text-center py-10">
                                                                                                              <ShoppingCart size={44} className="mx-auto text-gray-light mb-4" />
                                                                                                              <p className="text-dark-light font-medium text-[15px]">Your cart is empty</p>
                                                                                                              <p className="text-xs text-gray-warm mt-1.5">Add items from the menu to get started</p>
                                                                                                    </div>
                                                                                          ) : (
                                                                                                    <div className="space-y-4">
                                                                                                              {cartItems.map(item => (
                                                                                                                        <div key={item.id} className="flex items-center gap-3 p-3 bg-cream rounded-xl">
                                                                                                                                  <img src={item.image} alt={item.name} className="w-14 h-14 rounded-lg object-cover shrink-0" />
                                                                                                                                  <div className="flex-1 min-w-0">
                                                                                                                                            <h4 className="text-sm font-semibold text-dark truncate">{item.name}</h4>
                                                                                                                                            <p className="text-sm font-bold text-primary mt-0.5">${(item.price * item.quantity).toFixed(2)}</p>
                                                                                                                                  </div>
                                                                                                                                  <div className="flex items-center gap-2 shrink-0">
                                                                                                                                            <div className="flex items-center bg-white rounded-lg shadow-sm">
                                                                                                                                                      <button
                                                                                                                                                                onClick={() => updateQuantity(item.id, -1)}
                                                                                                                                                                className="w-8 h-8 flex items-center justify-center text-dark hover:text-primary transition-colors"
                                                                                                                                                      >
                                                                                                                                                                <Minus size={14} />
                                                                                                                                                      </button>
                                                                                                                                                      <span className="w-7 text-center text-sm font-bold">{item.quantity}</span>
                                                                                                                                                      <button
                                                                                                                                                                onClick={() => updateQuantity(item.id, 1)}
                                                                                                                                                                className="w-8 h-8 flex items-center justify-center text-dark hover:text-primary transition-colors"
                                                                                                                                                      >
                                                                                                                                                                <Plus size={14} />
                                                                                                                                                      </button>
                                                                                                                                            </div>
                                                                                                                                            <button
                                                                                                                                                      onClick={() => removeFromCart(item.id)}
                                                                                                                                                      className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors"
                                                                                                                                            >
                                                                                                                                                      <Trash2 size={14} />
                                                                                                                                            </button>
                                                                                                                                  </div>
                                                                                                                        </div>
                                                                                                              ))}
                                                                                                    </div>
                                                                                          )}
                                                                                </div>

                                                                                {cartItems.length > 0 && (
                                                                                          <div className="px-6 pb-6 pt-4 border-t border-gray-100 space-y-3">
                                                                                                    <div className="flex justify-between text-sm text-gray-warm">
                                                                                                              <span>Subtotal</span>
                                                                                                              <span className="font-semibold text-dark">${subtotal.toFixed(2)}</span>
                                                                                                    </div>
                                                                                                    <div className="flex justify-between text-sm text-gray-warm">
                                                                                                              <span>Delivery Fee</span>
                                                                                                              <span className="font-semibold text-dark">${deliveryFee.toFixed(2)}</span>
                                                                                                    </div>
                                                                                                    <div className="flex justify-between text-lg font-bold pt-3 border-t border-gray-100">
                                                                                                              <span>Total</span>
                                                                                                              <span className="text-primary">${total.toFixed(2)}</span>
                                                                                                    </div>
                                                                                                    <button
                                                                                                              onClick={() => setShowCheckout(true)}
                                                                                                              className="btn-base btn-lg bg-primary text-white w-full hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25 mt-2"
                                                                                                    >
                                                                                                              Proceed to Checkout
                                                                                                              <ArrowRight size={18} />
                                                                                                    </button>
                                                                                          </div>
                                                                                )}
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>
                              </section>

                              {/* Checkout Modal */}
                              {showCheckout && (
                                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                                                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => !orderPlaced && setShowCheckout(false)} />
                                                  <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-scale-in">
                                                            {orderPlaced ? (
                                                                      <div className="p-12 text-center">
                                                                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center animate-scale-in">
                                                                                          <CheckCircle size={40} className="text-green-500" />
                                                                                </div>
                                                                                <h2 className="heading-2 text-dark mb-3">Order Placed!</h2>
                                                                                <p className="text-gray-warm leading-relaxed">Your delicious meal is being prepared. You'll receive a confirmation shortly.</p>
                                                                      </div>
                                                            ) : (
                                                                      <>
                                                                                <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
                                                                                          <h2 className="font-heading text-2xl font-bold">Checkout</h2>
                                                                                          <button onClick={() => setShowCheckout(false)} className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
                                                                                                    <X size={20} />
                                                                                          </button>
                                                                                </div>
                                                                                <form onSubmit={handleCheckout} className="px-8 py-6 space-y-8">
                                                                                          {/* Delivery Details */}
                                                                                          <div>
                                                                                                    <h3 className="flex items-center gap-2 heading-3 text-dark mb-5">
                                                                                                              <User size={18} className="text-primary" />
                                                                                                              Delivery Details
                                                                                                    </h3>
                                                                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                                                                              <div>
                                                                                                                        <label className="input-label">Full Name</label>
                                                                                                                        <input type="text" placeholder="John Doe" required className="input-field" />
                                                                                                              </div>
                                                                                                              <div>
                                                                                                                        <label className="input-label">Phone Number</label>
                                                                                                                        <input type="tel" placeholder="+1 (555) 123-4567" required className="input-field" />
                                                                                                              </div>
                                                                                                    </div>
                                                                                                    <div className="mt-4">
                                                                                                              <label className="input-label">Delivery Address</label>
                                                                                                              <textarea rows="2" placeholder="Enter your full delivery address..." required className="input-field resize-none" />
                                                                                                    </div>
                                                                                          </div>

                                                                                          {/* Payment */}
                                                                                          <div>
                                                                                                    <h3 className="flex items-center gap-2 heading-3 text-dark mb-5">
                                                                                                              <CreditCard size={18} className="text-primary" />
                                                                                                              Payment Method
                                                                                                    </h3>
                                                                                                    <div className="grid grid-cols-2 gap-3 mb-5">
                                                                                                              {[
                                                                                                                        { value: 'card', icon: CreditCard, label: 'Credit Card' },
                                                                                                                        { value: 'cash', icon: Banknote, label: 'Cash' },
                                                                                                              ].map(opt => (
                                                                                                                        <button
                                                                                                                                  key={opt.value}
                                                                                                                                  type="button"
                                                                                                                                  onClick={() => setPaymentMethod(opt.value)}
                                                                                                                                  className={`flex items-center justify-center gap-2.5 p-4 rounded-xl border-2 transition-all duration-300 ${paymentMethod === opt.value
                                                                                                                                            ? 'border-primary bg-primary/5 text-primary'
                                                                                                                                            : 'border-gray-200 text-gray-warm hover:border-gray-300'
                                                                                                                                            }`}
                                                                                                                        >
                                                                                                                                  <opt.icon size={18} />
                                                                                                                                  <span className="font-medium text-sm">{opt.label}</span>
                                                                                                                        </button>
                                                                                                              ))}
                                                                                                    </div>

                                                                                                    {paymentMethod === 'card' && (
                                                                                                              <div className="space-y-4 animate-fade-in">
                                                                                                                        <div>
                                                                                                                                  <label className="input-label">Card Number</label>
                                                                                                                                  <input type="text" placeholder="1234 5678 9012 3456" maxLength="19" className="input-field" />
                                                                                                                        </div>
                                                                                                                        <div className="grid grid-cols-2 gap-4">
                                                                                                                                  <div>
                                                                                                                                            <label className="input-label">Expiry</label>
                                                                                                                                            <input type="text" placeholder="MM/YY" maxLength="5" className="input-field" />
                                                                                                                                  </div>
                                                                                                                                  <div>
                                                                                                                                            <label className="input-label">CVV</label>
                                                                                                                                            <input type="text" placeholder="123" maxLength="3" className="input-field" />
                                                                                                                                  </div>
                                                                                                                        </div>
                                                                                                              </div>
                                                                                                    )}
                                                                                          </div>

                                                                                          {/* Order Total */}
                                                                                          <div className="p-5 bg-cream rounded-xl space-y-3">
                                                                                                    <div className="flex justify-between text-sm text-gray-warm">
                                                                                                              <span>Subtotal</span>
                                                                                                              <span className="font-medium">${subtotal.toFixed(2)}</span>
                                                                                                    </div>
                                                                                                    <div className="flex justify-between text-sm text-gray-warm">
                                                                                                              <span>Delivery Fee</span>
                                                                                                              <span className="font-medium">${deliveryFee.toFixed(2)}</span>
                                                                                                    </div>
                                                                                                    <div className="flex justify-between text-lg font-bold pt-3 border-t border-gray-200">
                                                                                                              <span>Total</span>
                                                                                                              <span className="text-primary">${total.toFixed(2)}</span>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <button type="submit" className="btn-base btn-lg bg-primary text-white w-full hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25">
                                                                                                    <CheckCircle size={18} />
                                                                                                    Place Order
                                                                                          </button>
                                                                                </form>
                                                                      </>
                                                            )}
                                                  </div>
                                        </div>
                              )}
                    </div>
          );
}
