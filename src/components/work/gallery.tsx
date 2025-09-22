import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import { Project } from '@/types';
import { Button } from '@/components/ui/button';
import { useScrollAnimation, fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

type FilterType = 'all' | 'photo' | 'video';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [visibleProjects, setVisibleProjects] = useState(8);
  const { ref, mainControls } = useScrollAnimation();

  const filteredProjects = useMemo(() => {
    return filter === 'all' 
      ? projects 
      : projects.filter(project => project.category === filter);
  }, [filter]);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 8);
  };

  return (
    <section className="py-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={mainControls}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              My Work
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A collection of visual stories spanning photography and videography
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div variants={fadeInUp} className="flex justify-center">
            <div className="bg-zinc-900 rounded-full p-1">
              {(['all', 'photo', 'video'] as FilterType[]).map((filterType) => (
                <button
                  key={filterType}
                  onClick={() => {
                    setFilter(filterType);
                    setVisibleProjects(8);
                  }}
                  className={`px-6 py-3 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                    filter === filterType
                      ? 'bg-amber-500 text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {filterType === 'all' ? 'All Work' : filterType}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {displayedProjects.map((project, index) => (
                <GalleryItem key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Load More */}
          {visibleProjects < filteredProjects.length && (
            <motion.div variants={fadeInUp} className="text-center">
              <Button
                onClick={loadMore}
                variant="outline"
                size="lg"
                className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black"
              >
                Load More Projects
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const GalleryItem: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className={`group relative overflow-hidden rounded-lg ${
        index % 4 === 0 ? 'lg:col-span-2 h-80' : 'h-64'
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Video Indicator */}
          {project.category === 'video' && (
            <div className="absolute top-4 right-4">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <Play className="h-4 w-4 text-black ml-0.5" />
              </div>
            </div>
          )}
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-white text-lg font-bold mt-1">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.description}
            </p>
            <div className="flex items-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-gray-400 text-xs">{project.date}</span>
              <ExternalLink className="h-4 w-4 text-amber-500 ml-auto" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};