import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  treatment: string;
}

export interface GalleryItem {
  id: number;
  imageUrl: string;
  category: string;
  description: string;
}

export interface Affiliation {
  name: string;
  handle: string;
  role: string;
  description: string;
}