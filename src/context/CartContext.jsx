import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
          const [cartItems, setCartItems] = useState([]);
          const [toastMessage, setToastMessage] = useState('');
          const [showToast, setShowToast] = useState(false);

          const showToastMsg = useCallback((msg) => {
                    setToastMessage(msg);
                    setShowToast(true);
                    setTimeout(() => setShowToast(false), 2500);
          }, []);

          const addToCart = useCallback((item) => {
                    setCartItems(prev => {
                              const existing = prev.find(i => i.id === item.id);
                              if (existing) {
                                        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
                              }
                              return [...prev, { ...item, quantity: 1 }];
                    });
                    showToastMsg(`${item.name} added to cart!`);
          }, [showToastMsg]);

          const removeFromCart = useCallback((id) => {
                    setCartItems(prev => prev.filter(i => i.id !== id));
          }, []);

          const updateQuantity = useCallback((id, delta) => {
                    setCartItems(prev => {
                              return prev.map(i => {
                                        if (i.id === id) {
                                                  const newQty = i.quantity + delta;
                                                  if (newQty <= 0) return null;
                                                  return { ...i, quantity: newQty };
                                        }
                                        return i;
                              }).filter(Boolean);
                    });
          }, []);

          const clearCart = useCallback(() => {
                    setCartItems([]);
          }, []);

          const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
          const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
          const deliveryFee = cartItems.length > 0 ? 5.99 : 0;
          const total = subtotal + deliveryFee;

          return (
                    <CartContext.Provider value={{
                              cartItems,
                              cartCount,
                              subtotal,
                              deliveryFee,
                              total,
                              addToCart,
                              removeFromCart,
                              updateQuantity,
                              clearCart,
                              toastMessage,
                              showToast,
                              showToastMsg,
                    }}>
                              {children}
                    </CartContext.Provider>
          );
}

export function useCart() {
          const context = useContext(CartContext);
          if (!context) throw new Error('useCart must be used within CartProvider');
          return context;
}
