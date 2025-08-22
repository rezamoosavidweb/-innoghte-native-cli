import { CategoryDto, ImageMedia } from './common';

export type IncludedCourseLiveDetail = {
  course_id: number;
  duration: string;
  id: number;
  questions_and_answers: Record<string, string>;
  start_date: Date;
  start_time: null | string;
};
export type LiveMeetingDto = {
  access_type: string;
  capacity: null | number;
  color: string;
  demo: null | string;
  discount_percent?: null;
  discount_price: number;
  discount_type?: number;
  downloadable: number;
  full_info: string;
  id: number;
  image_media: ImageMedia[];
  included_course_ids: number[];
  included_courses?: [];
  included_courses_count?: number;
  live_detail: IncludedCourseLiveDetail | null;
  package: number;
  points: number;
  price: number;
  remain_capacity: number;
  requirements: string;
  short_info: string;
  show: number;
  show_fa: number;
  tags: null | string;
  title_fa: string;
};
export type LiveMeetingsResponse = {
  non_package_courses: LiveMeetingDto[];
  package_courses: LiveMeetingDto[];
  status: number;
};

export type PublicLiveMeetingsResponse = {
  category: CategoryDto;
  finished_lives: LiveMeetingDto[];
  next_lives: LiveMeetingDto[];
  package_lives: LiveMeetingDto[];
  status: number;
};
