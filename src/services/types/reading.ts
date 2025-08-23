import { CategoryDto, ImageMedia, RedirectLink } from './common';

export type  PublicReadingDatum= {
    author:      string;
    author_fa:   string;
    full_info:   string;
    id:          number;
    image_media: ImageMedia[];
    points:      number;
    show:        number;
    show_fa:     number;
    tags:        null;
    title:       string;
    title_fa:    string;
}

export type PublicReadingItems = {
        current_page:   number;
    data:           PublicReadingDatum[];
    first_page_url: string;
    from:           number;
    last_page:      number;
    last_page_url:  string;
    links:          RedirectLink[];
    next_page_url:  string;
    path:           string;
    per_page:       number;
    prev_page_url:  null;
    to:             number;
    total:          number;
};



export type PublicReadingResponse = {
  category: CategoryDto;
  items: PublicReadingItems;
  status: number;
};

export type ReadingDto = {
  author: string;
  author_fa: string;
  full_info: string;
  id: number;
  image_media: ImageMedia[];
  points: number;
  show: number;
  show_fa: number;
  tags: null;
  title: string;
  title_fa: string;
};

export type ReadingResponse = {
  items: ReadingDto[];
  status: number;
};
