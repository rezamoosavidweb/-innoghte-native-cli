import { CategoryDto, ImageMedia, RedirectLink } from './common';

export type PublicWritingDatum = {
    full_info:   string;
    id:          number;
    image_media: ImageMedia[];
    points:      number;
    show:        number;
    show_fa:     number;
    tags:        null;
    title_fa:    string;
};

export type PublicWritingItems = {
  current_page: number;
  data: PublicWritingDatum[];
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

export type PublicWritingResponse = {
  category: CategoryDto;
  items: PublicWritingItems;
  status: number;
};

export type WritingDto = {
  full_info: string;
  id: number;
  image_media: ImageMedia[];
  points: number;
  show: number;
  show_fa: number;
  tags: null;
  title_fa: string;
};

export type WritingResponse = {
  items: WritingDto[];
  status: number;
};
