export type AudioMedia = {
  course_id: number;
  duration: string;
  id: number;
  urls: MediaUrl[];
}
export type CategoryDto = {
  active: boolean;
  created_at: Date;
  deleted_at: null;
  demo: null;
  id: number;
  image: string;
  list_info: string;
  list_questions_and_answers: [];
  list_title: string;
  meta_description: null;
  meta_keywords: null;
  order: number;
  parent_id: number;
  slug: null;
  title: string;
  title_en: string;
  updated_at: Date;
};
export type ImageMedia = {
  course_id: number;
  id: number;
  src: string;
};
export type MediaDto = {
  course_id: number;
  id: number;
  src: string;
  type: 'audio' | 'image' | 'video';
};
export type MediaUrl = {
    id:       number;
    media_id: number;
    url:      string;
}
export type PaginationDto = {
  current_page: number;
  fist: string;
  last: string;
  next: string;
  per_page: number;
  prev: string;
  total_items: number;
  total_pages: number;
};

export type RedirectLink = {
  active: boolean;
  label: string;
  url: null | string;
};
