import { CategoryDto, ImageMedia } from './common';

export type AlbumDto = {
  capacity: number;
  discount_percent: null;
  discount_price: number;
  discount_type: number;
  full_info: string;
  id: number;
  image_media: ImageMedia[];
  included_courses: number[];
  included_courses_count: number;
  package: number;
  points: number;
  price: number;
  remain_capacity: number;
  short_info: string;
  show: number;
  show_fa: number;
  title_fa: string;
};
export type AlbumsResponse = {
  non_package_courses: AlbumDto[];
  package_courses: [];
  status: number;
};

export type PublicAlbumDto = {
  capacity: number;
  count_chapters: number;
  discount_percent: null;
  discount_price: number;
  discount_type: number;
  full_info: string;
  id: number;
  image_media: ImageMedia[];
  included_courses: number[];
  included_courses_count: number;
  package: number;
  points: number;
  price: number;
  priority: number;
  remain_capacity: number;
  short_info: string;
  show: number;
  show_fa: number;
  title_fa: string;
};
export type PublicAlbumsResponse = {
  category: CategoryDto;
  non_package_courses: PublicAlbumDto[];
  package_courses: PublicAlbumDto[];
  status: number;
};
