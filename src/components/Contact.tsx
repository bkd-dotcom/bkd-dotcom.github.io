import React from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
              <div className="space-y-4">
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
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}