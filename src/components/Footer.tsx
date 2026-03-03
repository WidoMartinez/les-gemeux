import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-stone-900 text-stone-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif text-white mb-6 tracking-wider">LES GEMEAUX</h3>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Un santuario de belleza y bienestar donde cada detalle está pensado para resaltar tu esencia natural.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-brand-600 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-brand-600 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-brand-300 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-brand-300 transition-colors">Servicios</a></li>
              <li><a href="#productos" className="hover:text-brand-300 transition-colors">Tienda</a></li>
              <li><a href="#blog" className="hover:text-brand-300 transition-colors">Blog</a></li>
              <li><a href="#contacto" className="hover:text-brand-300 transition-colors">Reservar Cita</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-400 mt-1 flex-shrink-0" />
                <span>Av. Las Condes 12345,<br />Santiago, Chile</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-400 flex-shrink-0" />
                <span>+56 9 9071 1277</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-400 flex-shrink-0" />
                <span>contacto@lesgemeaux.cl</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Horario</h4>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Lunes - Viernes</span>
                <span className="text-white">10:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span className="text-white">10:00 - 15:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span className="text-brand-400">Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Les Gemeaux. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
