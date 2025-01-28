import React, { useState } from 'react';
import { Menu, X, Shield, MessageCircle, Users, Sparkles, ChevronDown, Lock, Zap, Heart, Code, Settings, HelpCircle } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="fixed w-full top-0 z-50 px-4">
      <div className="backdrop-blur-xl bg-gray-900/70 border border-gray-700/30 shadow-lg rounded-2xl mt-4 mx-auto max-w-7xl">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">SecureChat</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {/* Features Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('features')}
                  className="flex items-center text-gray-300 hover:text-indigo-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Features
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'features' && (
                  <div className="absolute top-full mt-2 w-48 rounded-xl bg-gray-900/95 backdrop-blur-xl border border-gray-700/30 shadow-lg py-2">
                    <a href="#privacy" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-indigo-400">
                      <Lock className="mr-2 h-4 w-4" />
                      Privacy Shield
                    </a>
                    <a href="#ai" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-indigo-400">
                      <Sparkles className="mr-2 h-4 w-4" />
                      AI Assistant
                    </a>
                    <a href="#chat" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-indigo-400">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Smart Chat
                    </a>
                  </div>
                )}
              </div>

              {/* Community Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('community')}
                  className="flex items-center text-gray-300 hover:text-indigo-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Community
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'community' && (
                  <div className="absolute top-full mt-2 w-48 rounded-xl bg-gray-900/95 backdrop-blur-xl border border-gray-700/30 shadow-lg py-2">
                    <a href="#forums" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-indigo-400">
                      <Users className="mr-2 h-4 w-4" />
                      Forums
                    </a>
                    <a href="#events" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-indigo-400">
                      <Heart className="mr-2 h-4 w-4" />
                      Events
                    </a>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('resources')}
                  className="flex items-center text-gray-300 hover:text-indigo-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'resources' && (
                  <div className="absolute top-full mt-2 w-48 rounded-xl bg-gray-900/95 backdrop-blur-xl border border-gray-700/30 shadow-lg py-2">
                    <a href="#docs" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-indigo-400">
                      <Code className="mr-2 h-4 w-4" />
                      Documentation
                    </a>
                    <a href="#help" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-indigo-400">
                      <HelpCircle className="mr-2 h-4 w-4" />
                      Help Center
                    </a>
                    <a href="#settings" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-indigo-400">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </a>
                  </div>
                )}
              </div>

              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 shadow-lg shadow-indigo-500/25">
                Get Started
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-indigo-400 p-2 rounded-lg transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden backdrop-blur-xl bg-gray-900/95 rounded-xl mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="border-b border-gray-700/30 pb-2">
                <p className="px-3 text-xs font-semibold text-gray-400 uppercase">Features</p>
                <a href="#privacy" className="flex items-center px-3 py-2 text-base text-gray-300 hover:bg-gray-800/50 hover:text-indigo-400 rounded-lg">
                  <Lock className="mr-2 h-4 w-4" />
                  Privacy Shield
                </a>
                <a href="#ai" className="flex items-center px-3 py-2 text-base text-gray-300 hover:bg-gray-800/50 hover:text-indigo-400 rounded-lg">
                  <Sparkles className="mr-2 h-4 w-4" />
                  AI Assistant
                </a>
                <a href="#chat" className="flex items-center px-3 py-2 text-base text-gray-300 hover:bg-gray-800/50 hover:text-indigo-400 rounded-lg">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Smart Chat
                </a>
              </div>

              <div className="border-b border-gray-700/30 pb-2">
                <p className="px-3 text-xs font-semibold text-gray-400 uppercase">Community</p>
                <a href="#forums" className="flex items-center px-3 py-2 text-base text-gray-300 hover:bg-gray-800/50 hover:text-indigo-400 rounded-lg">
                  <Users className="mr-2 h-4 w-4" />
                  Forums
                </a>
                <a href="#events" className="flex items-center px-3 py-2 text-base text-gray-300 hover:bg-gray-800/50 hover:text-indigo-400 rounded-lg">
                  <Heart className="mr-2 h-4 w-4" />
                  Events
                </a>
              </div>

              <div className="pb-2">
                <p className="px-3 text-xs font-semibold text-gray-400 uppercase">Resources</p>
                <a href="#docs" className="flex items-center px-3 py-2 text-base text-gray-300 hover:bg-gray-800/50 hover:text-indigo-400 rounded-lg">
                  <Code className="mr-2 h-4 w-4" />
                  Documentation
                </a>
                <a href="#help" className="flex items-center px-3 py-2 text-base text-gray-300 hover:bg-gray-800/50 hover:text-indigo-400 rounded-lg">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Help Center
                </a>
                <a href="#settings" className="flex items-center px-3 py-2 text-base text-gray-300 hover:bg-gray-800/50 hover:text-indigo-400 rounded-lg">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </a>
              </div>

              <div className="pt-2">
                <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg text-base font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 shadow-lg shadow-indigo-500/25">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;