import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
          alt="Spa Relax"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="block text-brand-100 text-lg md:text-xl font-medium tracking-[0.2em] mb-4 uppercase"
        >
          Bienvenida a Les Gemeaux
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight"
        >
          Realza tu <span className="italic text-brand-200">Belleza</span> Natural
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-stone-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light"
        >
          Un espacio dedicado a tu bienestar, donde cada tratamiento es una experiencia única diseñada para ti.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#servicios"
            className="px-8 py-4 bg-white text-brand-900 rounded-full font-medium hover:bg-brand-50 transition-colors shadow-lg min-w-[180px]"
          >
            Ver Servicios
          </a>
          <a
            href="#contacto"
            className="px-8 py-4 bg-brand-600 text-white rounded-full font-medium hover:bg-brand-700 transition-colors shadow-lg min-w-[180px]"
          >
            Agendar Cita
          </a>
        </motion.div>
      </div>
    </section>
  );
}
