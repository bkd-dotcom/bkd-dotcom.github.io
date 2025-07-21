import React, { useRef } from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

export function Contact({ visible }: { visible?: boolean }) {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || '';
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || '';
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '';
    const mailto = `mailto:binaydalai2024@gmail.com?subject=Message from ${encodeURIComponent(name)} (${encodeURIComponent(email)})&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
  };
  return (
    <section id="contact" className="py-20 bg-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Mail className={`w-8 h-8 text-indigo-400${visible ? ' animate-about-fadeup' : ''}`} />
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-0 text-white">Get in Touch</h2>
        </div>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
            <div className="space-y-4 w-full">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-indigo-400 mr-3" />
                <a href="mailto:binaydalai2024@gmail.com" className="text-gray-300 hover:text-white">
                  binaydalai2024@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-indigo-400 mr-3" />
                <span className="text-gray-300">State College, Pennsylvania</span>
              </div>
              <div className="flex items-center">
                <Github className="w-5 h-5 text-indigo-400 mr-3" />
                <a href="https://github.com/bkd-dotcom" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  github.com/bkd-dotcom
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-5 h-5 text-indigo-400 mr-3" />
                <a href="https://www.linkedin.com/in/binay-dalai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  linkedin.com/in/binay-dalai
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="flex flex-col items-center w-full">
              <iframe
                title="Penn State University Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.393964479836!2d-77.865312!3d40.798213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cea8a3e2e2e2e3%3A0x7e2e2e2e2e2e2e2e!2sPenn%20State%20University!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '0.75rem', maxWidth: '480px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}