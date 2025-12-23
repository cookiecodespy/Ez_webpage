import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion, type Variants, useReducedMotion } from 'framer-motion';
import { SubmitButton } from './UIButtons';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    website: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const successMessageRef = useRef<HTMLParagraphElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Honeypot check
    if (formData.website) {
      setIsSubmitting(false);
      return;
    }

    try {
      // EmailJS configuration - Get credentials from .env.local
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ezlogistics',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact',
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          to_email: 'msotz@ezlogistics.cl'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key_here'
      );

      setIsSubmitting(false);
      setSubmitStatus('success');

      setTimeout(() => {
        successMessageRef.current?.focus();
      }, 50);

      setTimeout(() => {
        setSubmitStatus('idle');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          website: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-20 bg-white"
      role="region"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          className="mb-12 text-center"
          variants={headingVariants}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Conversemos sobre tu operación
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-20 rounded-full bg-[#E41B13]" aria-hidden="true" />
          <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed text-center">
            Solicita una propuesta o agenda una asesoría logística con nuestro equipo experto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="rounded-2xl bg-gray-50 p-8 shadow-lg">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    id="contact-name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-[#E41B13] focus:ring-2 focus:ring-[#E41B13]/20"
                    placeholder="Nombre y apellido"
                    minLength={3}
                    maxLength={80}
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    id="contact-company"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-[#E41B13] focus:ring-2 focus:ring-[#E41B13]/20"
                    placeholder="Nombre de la empresa"
                    maxLength={80}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    id="contact-email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-[#E41B13] focus:ring-2 focus:ring-[#E41B13]/20"
                    placeholder="correo@empresa.cl"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    title="Ingresa un correo válido (ej: nombre@empresa.cl)"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    id="contact-phone"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-[#E41B13] focus:ring-2 focus:ring-[#E41B13]/20"
                    placeholder="+56 9 1234 5678"
                    pattern="[+]?\d{6,15}"
                    title="Ingresa un teléfono válido (ej: +56912345678)"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="contact-service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Servicio requerido *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  id="contact-service"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-[#E41B13] focus:ring-2 focus:ring-[#E41B13]/20"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="freight">Transporte internacional</option>
                  <option value="warehousing">Almacenaje y distribución</option>
                  <option value="customs">Agenciamiento de aduanas</option>
                  <option value="lastmile">Distribución de última milla</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Cuéntanos qué necesitas *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  id="contact-message"
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-[#E41B13] focus:ring-2 focus:ring-[#E41B13]/20"
                  placeholder="Comparte detalle de tu operación, origen/destino, volumen u otros datos relevantes..."
                  minLength={20}
                  maxLength={500}
                />
              </div>

              <div className="hidden">
                <label htmlFor="contact-website" className="sr-only">Sitio web</label>
                <input
                  type="text"
                  id="contact-website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>

              <SubmitButton
                type="submit"
                isLoading={isSubmitting}
                isSuccess={submitStatus === 'success'}
                className="mt-2"
              >
                <span className="inline-flex items-center gap-2">
                  Enviar mensaje
                  <Send className="h-5 w-5" aria-hidden="true" />
                </span>
              </SubmitButton>
              {submitStatus === 'success' && (
                <p
                  ref={successMessageRef}
                  className="mt-4 text-center text-green-600 font-semibold"
                  role="status"
                  aria-live="polite"
                  tabIndex={-1}
                >
                  ✓ Gracias por escribirnos. Un especialista se pondrá en contacto contigo muy pronto.
                </p>
              )}
              {submitStatus === 'error' && (
                <p
                  className="mt-4 text-center text-red-600 font-semibold"
                  role="status"
                  aria-live="polite"
                >
                  ✗ Hubo un error al enviar el mensaje. Por favor intenta nuevamente o escríbenos directamente a msotz@ezlogistics.cl
                </p>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E41B13] via-[#d71711] to-[#b6120d] p-8 text-white shadow-2xl">
              <div className="pointer-events-none absolute -top-16 -right-20 h-40 w-40 rounded-full bg-white/20 blur-3xl" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-black/10 blur-3xl" aria-hidden="true" />

              <h3 className="relative text-2xl font-semibold tracking-tight">Datos de contacto</h3>
              <p className="relative mt-2 text-sm text-white/80">
                Nuestro equipo responde en menos de 24 horas hábiles. También puedes escribirnos directamente.
              </p>

              <div className="relative mt-8 space-y-6">
                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                    <Mail className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-white/70">Correo</div>
                    <a
                      href="mailto:msotz@ezlogistics.cl"
                      className="mt-1 inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#E41B13] shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      msotz@ezlogistics.cl
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                    <Phone className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-white/70">Teléfono</div>
                    <a
                      href="tel:+56934252106"
                      className="mt-1 inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#E41B13] shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      +56 9 3425 2106
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                    <MapPin className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-white/70">Dirección</div>
                    <p className="mt-1 text-sm leading-relaxed text-white">
                      Carr. Gral. San Martín 8250, 8700000 Quilicura, Región Metropolitana, Chile
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
              <h4 className="text-gray-700 font-semibold px-6 pt-6 pb-2">Ubicación principal: Bodega 17B</h4>
              <iframe
                src="https://www.google.com/maps?q=Bodega+17B,+Carr.+Gral.+San+Mart%C3%ADn+8250,+Quilicura,+Regi%C3%B3n+Metropolitana,+Chile&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Bodega 17B"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
