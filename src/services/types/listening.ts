import { AudioMedia, CategoryDto, ImageMedia, RedirectLink } from './common';

export type ListeningDto = {
  audio_media: AudioMedia[];
  author_fa: string;
  from_album: string;
  full_info: string;
  id: number;
  image_media: ImageMedia[];
  points: number;
  show: number;
  show_fa: number;
  tags: string;
  title: string;
  title_fa: string;
};

export type ListeningResponse = {
  items: ListeningDto[];
  status: number;
};

export type PublicListeningDatum = {
  audio_media: AudioMedia[];
  author_fa: string;
  from_album: string;
  full_info: string;
  id: number;
  image_media: ImageMedia[];
  points: number;
  show: number;
  show_fa: number;
  tags: string;
  title: string;
  title_fa: string;
};

export type PublicListeningItems = {
  current_page: number;
  data: PublicListeningDatum[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: RedirectLink[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
};

export type PublicListeningResponse = {
  category: CategoryDto;
  items: PublicListeningItems;
  status: number;
};
