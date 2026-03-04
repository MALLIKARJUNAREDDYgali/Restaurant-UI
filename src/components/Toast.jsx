import { CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Toast() {
          const { showToast, toastMessage } = useCart();

          return (
                    <div
                              className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ${showToast
                                                  ? 'opacity-100 translate-y-0 scale-100'
                                                  : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
                                        }`}
                    >
                              <div className="flex items-center gap-3 px-6 py-3.5 bg-dark/95 backdrop-blur-xl text-white rounded-2xl shadow-2xl shadow-black/40 border border-white/10">
                                        <CheckCircle size={20} className="text-green-400 shrink-0" />
                                        <span className="text-sm font-medium whitespace-nowrap">{toastMessage}</span>
                              </div>
                    </div>
          );
}
