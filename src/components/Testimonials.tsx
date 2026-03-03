import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "El mejor lugar para relajarse. El masaje descontracturante fue increíble y la atención de primera. Definitivamente volveré.",
    author: "Carolina M.",
    role: "Clienta Frecuente"
  },
  {
    content: "Me hice el alisado japonés y mi cabello nunca había lucido tan brillante y sano. Los productos que usan son de excelente calidad.",
    author: "Andrea S.",
    role: "Clienta Nueva"
  },
  {
    content: "Amo venir a hacerme las pestañas aquí. El ambiente es súper acogedor y las chicas son muy profesionales. ¡Recomendadísimo!",
    author: "Valentina R.",
    role: "Clienta VIP"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Quote size={48} className="mx-auto text-brand-300 mb-6" />
          <h2 className="text-4xl font-serif text-stone-900 mb-4">Lo que dicen nuestras clientas</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">La satisfacción de quienes nos visitan es nuestra mejor carta de presentación.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-brand-100"
            >
              <div className="flex flex-col h-full justify-between">
                <p className="text-stone-600 italic mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-serif font-bold text-stone-900">{testimonial.author}</h4>
                  <span className="text-xs text-brand-500 uppercase tracking-wider font-medium">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
