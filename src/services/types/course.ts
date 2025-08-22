import { ImageMedia, MediaDto, PaginationDto } from './common';

export type CourseDto = {
  capacity: number;
  count_chapters: number;
  discount_percent: null;
  discount_price: number;
  discount_type: number;
  full_info: string;
  id: number;
  image_media: ImageMedia;
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
export type CoursesResponse = {
  non_package_courses: CourseDto[];
  package_courses: [];
  status: number;
};

export type PublicCourseDto = {
  author_fa: string;
  capacity: number;
  created_at: Date;
  demo: null;
  discount_percent: number;
  discount_price: number;
  discount_type: string;
  full_info: string;
  id: number;
  included_course_ids: number[];
  is_package: number;
  is_show: number;
  medias: MediaDto[];
  price: number;
  priority: number;
  remain_capacity: number;
  requirements: null;
  short_info: string;
  tags: string;
  title_fa: string;
  updated_at: Date;
};
export type PublicCoursesResponse = {
  data: PublicCourseDto[];
  message: string;
  pagination: PaginationDto;
};
