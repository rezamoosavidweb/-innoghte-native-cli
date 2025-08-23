import { AudioMedia, CategoryDto, ImageMedia, RedirectLink } from './common';

export type MeditationDto = {
  audio_media: AudioMedia[];
  author_fa: string;
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

export type MeditationResponse = {
  items: MeditationDto[];
  status: number;
};

export type PublicMeditationDatum = {
  audio_media: AudioMedia[];
  author_fa: string;
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

export type PublicMeditationItems = {
  current_page: number;
  data: PublicMeditationDatum[];
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

export type PublicMeditationResponse = {
  category: CategoryDto;
  items: PublicMeditationItems;
  status: number;
};
