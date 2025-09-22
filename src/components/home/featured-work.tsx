import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { featuredProjects } from '@/data/projects';
import { useScrollAnimation, fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

export const FeaturedWork: React.FC = () => {
  const { ref, mainControls } = useScrollAnimation();

  return (
    <section className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={mainControls}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Work
            </h2>
            <p className="text-xl text-gray-400">
              A curated selection of my most compelling visual narratives
            </p>
          </motion.div>

          {/* Featured Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className={`group relative overflow-hidden rounded-lg ${
                  index === 0 ? 'md:col-span-2 h-96' : 'h-80'
                }`}
              >
                <Link to={`/project/${project.id}`}>
                  <div className="relative w-full h-full">
                    {/* Project Image */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.coverImage})` }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                    
                    {/* Play Button for Videos */}
                    {project.category === 'video' && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0.8 }}
                        whileHover={{ scale: 1.1, opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-amber-500/90 transition-colors duration-300">
                          <Play className="h-6 w-6 text-white ml-1" />
                        </div>
                      </motion.div>
                    )}
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">
                            {project.category}
                          </span>
                          <h3 className="text-white text-xl md:text-2xl font-bold mt-1">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 text-sm mt-2 line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <ArrowRight className="h-6 w-6" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Link */}
          <motion.div variants={fadeInUp} className="text-center">
            <Link 
              to="/work"
              className="inline-flex items-center text-amber-500 hover:text-amber-400 font-medium text-lg group transition-colors"
            >
              View All Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};