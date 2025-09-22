import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, User, Camera, Monitor } from 'lucide-react';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  const currentIndex = projects.findIndex(p => p.id === id);
  const nextProject = projects[currentIndex + 1] || projects[0];
  const prevProject = projects[currentIndex - 1] || projects[projects.length - 1];

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.coverImage})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="text-center max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-amber-500 text-sm font-medium uppercase tracking-wider"
            >
              {project.category}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mt-4"
            >
              {project.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto"
            >
              {project.description}
            </motion.p>
          </div>
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-20 left-6 z-20"
        >
          <Link to="/work">
            <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-black">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Work
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Project Details */}
      <div className="py-16 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <User className="h-5 w-5 text-amber-500" />
              <div>
                <p className="text-sm text-gray-400">Role</p>
                <p className="text-white font-medium">{project.role}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-amber-500" />
              <div>
                <p className="text-sm text-gray-400">Year</p>
                <p className="text-white font-medium">{project.date}</p>
              </div>
            </div>
            
            {project.client && (
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-amber-500" />
                <div>
                  <p className="text-sm text-gray-400">Client</p>
                  <p className="text-white font-medium">{project.client}</p>
                </div>
              </div>
            )}
            
            {project.equipment && (
              <div className="flex items-center space-x-3">
                <Camera className="h-5 w-5 text-amber-500" />
                <div>
                  <p className="text-sm text-gray-400">Equipment</p>
                  <p className="text-white font-medium">{project.equipment}</p>
                </div>
              </div>
            )}
            
            {project.software && (
              <div className="flex items-center space-x-3">
                <Monitor className="h-5 w-5 text-amber-500" />
                <div>
                  <p className="text-sm text-gray-400">Software</p>
                  <p className="text-white font-medium">{project.software}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {/* Video Player for Video Projects */}
          {project.category === 'video' && project.videoUrl && (
            <div className="relative aspect-video bg-zinc-900 rounded-lg overflow-hidden">
              <video
                controls
                className="w-full h-full object-cover"
                poster={project.coverImage}
              >
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {/* Image Gallery for Photo Projects */}
          {project.images && (
            <div className="space-y-8">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <img
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    className="w-full rounded-lg"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="py-16 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <Link to={`/project/${prevProject.id}`} className="group">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-cover bg-center rounded-lg" 
                     style={{ backgroundImage: `url(${prevProject.coverImage})` }} />
                <div>
                  <p className="text-sm text-gray-400 group-hover:text-amber-500 transition-colors">Previous</p>
                  <p className="text-white font-medium group-hover:text-amber-500 transition-colors">{prevProject.title}</p>
                </div>
              </div>
            </Link>

            <Link to={`/project/${nextProject.id}`} className="group">
              <div className="flex items-center space-x-4 text-right">
                <div>
                  <p className="text-sm text-gray-400 group-hover:text-amber-500 transition-colors">Next</p>
                  <p className="text-white font-medium group-hover:text-amber-500 transition-colors">{nextProject.title}</p>
                </div>
                <div className="w-16 h-16 bg-cover bg-center rounded-lg"
                     style={{ backgroundImage: `url(${nextProject.coverImage})` }} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};