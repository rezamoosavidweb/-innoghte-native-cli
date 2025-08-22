export type ProfileDto = {
  avatar: string;
  country_code: null | string;
  email: string;
  full_name: string;
  id: number;
  mobile: string;
  verified: 0 | 1;
};
export type ProfileResponse = {
  data: ProfileDto;
  message: string;
};
