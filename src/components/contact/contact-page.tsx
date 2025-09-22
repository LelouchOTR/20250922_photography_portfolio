import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation, fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

export const ContactPage: React.FC = () => {
  const { toast } = useToast();
  const { ref, mainControls } = useScrollAnimation();
  
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactForm) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    form.reset();
  };

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
            className="text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Work Together
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to bring your vision to life? I'd love to hear about your project 
              and discuss how we can create something extraordinary together.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-8">
                Send Me a Message
              </motion.h2>
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <motion.div variants={fadeInUp}>
                  <Input
                    placeholder="Your Name"
                    {...form.register('name')}
                    className="bg-zinc-900 border-zinc-700 text-white placeholder-gray-400 focus:border-amber-500"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-400 text-sm mt-1">{form.formState.errors.name.message}</p>
                  )}
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    {...form.register('email')}
                    className="bg-zinc-900 border-zinc-700 text-white placeholder-gray-400 focus:border-amber-500"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-400 text-sm mt-1">{form.formState.errors.email.message}</p>
                  )}
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={6}
                    {...form.register('message')}
                    className="bg-zinc-900 border-zinc-700 text-white placeholder-gray-400 focus:border-amber-500 resize-none"
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-400 text-sm mt-1">{form.formState.errors.message.message}</p>
                  )}
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={form.formState.isSubmitting}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold"
                  >
                    {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-12"
            >
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-amber-500" />
                    <span className="text-gray-300">hello@photographer.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-amber-500" />
                    <span className="text-gray-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-amber-500" />
                    <span className="text-gray-300">Los Angeles, California</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-bold text-white mb-4">Follow My Work</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors group">
                    <Instagram className="h-5 w-5 text-gray-300 group-hover:text-black" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors group">
                    <Twitter className="h-5 w-5 text-gray-300 group-hover:text-black" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors group">
                    <Linkedin className="h-5 w-5 text-gray-300 group-hover:text-black" />
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
                <p className="text-gray-300">
                  I typically respond to all inquiries within 24 hours. For urgent projects, 
                  feel free to call me directly.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};