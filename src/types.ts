export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
  fullDetails: string;
}

export interface Region {
  name: string;
  coverage: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  alt: string; // Used as image alt and primary legend
  category: string;
  title?: string; // Optional title
  seoLink?: string; // Custom link for SEO
  seoAnchorText?: string; // Custom anchor text for SEO
  socialMediaName?: string; // Network name (Instagram, etc)
  socialMediaUrl?: string; // Network link
}

export interface DogReview {
  id: string;
  dogName: string;
  ownerName: string;
  breed: string;
  comment: string;
  rating: number;
}
