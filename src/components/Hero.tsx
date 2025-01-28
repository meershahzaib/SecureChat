import React from 'react';
import { Shield, Lock, Sparkles, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative px-4 pt-20 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
            Secure Communication
          </span>
          <br />
          <span className="text-gray-200">for the Modern World</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Experience the next generation of secure messaging with end-to-end encryption,
          AI-powered features, and seamless collaboration tools.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 shadow-lg shadow-indigo-500/25">
            Get Started
          </button>
          <button className="bg-gray-800/50 backdrop-blur-xl text-gray-300 border border-gray-700/30 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-800/70 transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <div className="backdrop-blur-xl bg-gray-800/50 border border-gray-700/30 rounded-2xl p-6 shadow-lg hover:transform hover:scale-105 transition-all duration-300">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Lock className="text-white h-6 w-6" />
          </div>
          <h3 className="text-gray-200 text-xl font-semibold mb-2">End-to-End Encryption</h3>
          <p className="text-gray-400">
            Your messages are secured with state-of-the-art encryption, ensuring complete privacy and security.
          </p>
        </div>

        <div className="backdrop-blur-xl bg-gray-800/50 border border-gray-700/30 rounded-2xl p-6 shadow-lg hover:transform hover:scale-105 transition-all duration-300">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Sparkles className="text-white h-6 w-6" />
          </div>
          <h3 className="text-gray-200 text-xl font-semibold mb-2">AI-Powered Features</h3>
          <p className="text-gray-400">
            Smart suggestions, automated responses, and intelligent filtering enhance your messaging experience.
          </p>
        </div>

        <div className="backdrop-blur-xl bg-gray-800/50 border border-gray-700/30 rounded-2xl p-6 shadow-lg hover:transform hover:scale-105 transition-all duration-300">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Users className="text-white h-6 w-6" />
          </div>
          <h3 className="text-gray-200 text-xl font-semibold mb-2">Anonymous Chat</h3>
          <p className="text-gray-400">
            Connect freely without revealing your identity. Engage with others in a secure 
            and open space. No sign-ups, just real conversations!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;