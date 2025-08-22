import { requestApi } from '.';
import { endpoints } from './endpoints';
import { PublicCoursesResponse } from './types/course';

export const getPublicCourses = () =>
  requestApi<PublicCoursesResponse>(endpoints.courses).json();
export const getPublicAlbums = () => requestApi(endpoints.albums).json();
