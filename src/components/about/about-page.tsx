import React from 'react';
import { motion } from 'framer-motion';
import { Award, Camera, Users, Clock } from 'lucide-react';
import { useScrollAnimation, fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

const clients = [
  'Adobe', 'Nike', 'Apple', 'Netflix', 'Spotify', 'Tesla', 'Vogue', 'National Geographic'
];

const timeline = [
  { year: '2024', title: 'Award-Winning Documentary', description: 'Sundance Film Festival Selection' },
  { year: '2023', title: 'Commercial Campaign', description: 'Nike Global Brand Campaign' },
  { year: '2022', title: 'Editorial Feature', description: 'Vogue Italia Cover Story' },
  { year: '2021', title: 'Fine Art Exhibition', description: 'Solo Show at Gallery Modern' },
];

export const AboutPage: React.FC = () => {
  const { ref, mainControls } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <div className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={mainControls}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About Me
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                I'm a visual storyteller with over a decade of experience capturing moments that 
                transcend the ordinary. My work spans across photography and videography, with a 
                focus on creating compelling narratives that connect with audiences on an emotional level.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Based in Los Angeles, I work with brands, publications, and individuals who value 
                authentic storytelling and cinematic excellence. My approach combines technical 
                precision with artistic vision, resulting in visuals that are both striking and meaningful.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="aspect-square bg-cover bg-center rounded-lg"
                   style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop)' }} />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-500 rounded-lg opacity-20" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-amber-500 rounded-lg" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Clock, number: '10+', label: 'Years Experience' },
              { icon: Users, number: '200+', label: 'Happy Clients' },
              { icon: Camera, number: '500+', label: 'Projects Completed' },
              { icon: Award, number: '15+', label: 'Awards Won' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 text-amber-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-12">
              Trusted by Leading Brands
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {clients.map((client, index) => (
                <div
                  key={client}
                  className="text-gray-400 font-medium text-lg hover:text-white transition-colors"
                >
                  {client}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-16 text-center">
              Recent Milestones
            </motion.h2>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={fadeInUp}
                  className="flex items-center space-x-8"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-lg">{item.year}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};