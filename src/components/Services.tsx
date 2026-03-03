import { motion } from 'motion/react';
import { Sparkles, Scissors, Eye, Sun, Heart, Flower2 } from 'lucide-react';

const services = [
  {
    title: 'Depilación Láser',
    description: 'Tecnología de vanguardia para una piel suave y libre de vello de forma duradera.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Pestañas y Cejas',
    description: 'Lifting, perfilado y tratamientos LiLash para una mirada impactante.',
    icon: Eye,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Spa y Relajación',
    description: 'Masajes descontracturantes, piedras calientes y hot tub para renovar tu energía.',
    icon: Flower2,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Estética Corporal',
    description: 'Tratamientos reductivos y reafirmantes personalizados para tu cuerpo.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Peluquería',
    description: 'Cortes, coloración y alisado japonés con productos de alta gama.',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Bronceado DHA',
    description: 'Bronceado natural y saludable sin exposición a rayos UV.',
    icon: Sun,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-medium tracking-wider uppercase text-sm">Nuestros Servicios</span>
          <h2 className="mt-2 text-4xl font-serif text-stone-900">Experiencias de Belleza</h2>
          <div className="w-24 h-1 bg-brand-300 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <service.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-medium">{service.title}</h3>
                </div>
                <p className="text-stone-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
