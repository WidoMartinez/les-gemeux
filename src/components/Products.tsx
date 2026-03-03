import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const products = [
  {
    name: 'Olaplex Nº3',
    description: 'Perfeccionador capilar que repara y fortalece.',
    price: '$32.990',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop',
  },
  {
    name: 'LiLash Serum',
    description: 'Serum purificado para pestañas más largas.',
    price: '$69.990',
    image: 'https://images.unsplash.com/photo-1587575494201-11fe74d90d38?q=80&w=1887&auto=format&fit=crop',
  },
  {
    name: 'Olaplex Nº7',
    description: 'Aceite capilar reparador y protector térmico.',
    price: '$32.990',
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2080&auto=format&fit=crop',
  },
  {
    name: 'LiBrow Serum',
    description: 'Serum para cejas más densas y definidas.',
    price: '$69.990',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1887&auto=format&fit=crop',
  },
];

export default function Products() {
  return (
    <section id="productos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-brand-600 font-medium tracking-wider uppercase text-sm">Tienda Online</span>
            <h2 className="mt-2 text-4xl font-serif text-stone-900">Favoritos de Nuestras Clientas</h2>
            <p className="mt-4 text-stone-600">Descubre los productos profesionales que utilizamos en nuestros tratamientos para mantener tu belleza en casa.</p>
          </div>
          <a href="#" className="hidden md:inline-block text-brand-700 font-medium hover:text-brand-900 border-b border-brand-300 hover:border-brand-700 transition-colors pb-1">
            Ver todos los productos
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] bg-stone-100 rounded-xl overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute bottom-4 right-4 bg-white text-stone-900 p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-50">
                  <span className="sr-only">Añadir al carrito</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                </button>
              </div>
              <h3 className="text-lg font-serif font-medium text-stone-900">{product.name}</h3>
              <p className="text-sm text-stone-500 mb-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-brand-700">{product.price}</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-block text-brand-700 font-medium hover:text-brand-900 border-b border-brand-300 pb-1">
            Ver todos los productos
          </a>
        </div>
      </div>
    </section>
  );
}
