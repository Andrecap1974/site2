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
  alt: string;
  category: string;
}

export interface DogReview {
  id: string;
  dogName: string;
  ownerName: string;
  breed: string;
  comment: string;
  rating: number;
}
