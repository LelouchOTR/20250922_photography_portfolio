import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'urban-nights',
    title: 'Urban Nights',
    category: 'photo',
    coverImage: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=800&h=1200&fit=crop',
    description: 'A moody exploration of city life after dark, capturing the interplay between artificial light and shadow.',
    role: 'Photographer, Creative Director',
    equipment: 'Sony A7R V, 35mm f/1.4',
    date: '2024',
    client: 'Personal Project',
    images: [
      'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1519227355453-8f982e425321?w=1200&h=800&fit=crop',
    ],
    story: [
      {
        type: 'text',
        content: 'The city transforms at night. What was familiar becomes mysterious, what was ordinary becomes extraordinary.',
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=1200&h=800&fit=crop',
        caption: 'Neon reflections on wet pavement',
      },
    ],
  },
  {
    id: 'cinematic-portraits',
    title: 'Cinematic Portraits',
    category: 'video',
    coverImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=1200&fit=crop',
    coverVideo: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    description: 'A series of intimate portrait films exploring human emotion through cinematic storytelling.',
    role: 'Director, Cinematographer',
    equipment: 'RED Komodo, Sigma Art Lenses',
    software: 'DaVinci Resolve, After Effects',
    date: '2024',
    client: 'Independent Film',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
  },
  {
    id: 'fashion-editorial',
    title: 'Fashion Editorial',
    category: 'photo',
    coverImage: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&h=1200&fit=crop',
    description: 'High fashion editorial combining dramatic lighting with bold styling choices.',
    role: 'Fashion Photographer',
    equipment: 'Canon 5D Mark IV, Profoto Lighting',
    date: '2023',
    client: 'Vogue Italia',
    images: [
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=1200&h=800&fit=crop',
    ],
  },
  {
    id: 'brand-film',
    title: 'Brand Film',
    category: 'video',
    coverImage: 'https://images.unsplash.com/photo-1551651767-5a23ac847b7d?w=800&h=1200&fit=crop',
    description: 'A compelling brand narrative showcasing innovative design and craftsmanship.',
    role: 'Creative Director, DP',
    equipment: 'ARRI Alexa Mini, Zeiss Supreme Primes',
    software: 'Premiere Pro, After Effects',
    date: '2023',
    client: 'Nike',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
  },
];

export const featuredProjects = projects.slice(0, 4);