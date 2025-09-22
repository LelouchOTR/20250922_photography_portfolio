export interface Project {
  id: string;
  title: string;
  category: 'photo' | 'video';
  coverImage: string;
  coverVideo?: string;
  description: string;
  role: string;
  equipment?: string;
  software?: string;
  date: string;
  client?: string;
  images?: string[];
  videoUrl?: string;
  story?: {
    type: 'image' | 'video' | 'text';
    content: string;
    caption?: string;
  }[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}