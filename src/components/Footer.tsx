import React from 'react';
import { Shield, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative mt-24 px-4">
      <div className="backdrop-blur-xl bg-gray-900/70 border border-gray-700/30 shadow-lg rounded-2xl mx-auto max-w-7xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-indigo-400" />
                <span className="ml-2 text-xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                  SecureChat
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Secure, private, and intelligent communication platform for the modern web.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-gray-300 font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 text-sm">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 text-sm">Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 text-sm">Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 text-sm">Enterprise</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-300 font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 text-sm">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 text-sm">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 text-sm">Guides</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 text-sm">Help Center</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-300 font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 text-sm">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 text-sm">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 text-sm">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700/30 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 SecureChat. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;