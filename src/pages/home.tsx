import React from 'react';
import { Hero } from '@/components/home/hero';
import { FeaturedWork } from '@/components/home/featured-work';

export const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedWork />
    </div>
  );
};