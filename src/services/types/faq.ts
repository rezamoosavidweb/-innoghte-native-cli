import { PaginationDto } from './common';

export type Datum = {
  active: string;
  created_at: Date;
  faqs: FAQ[];
  id: number;
  title: string;
  updated_at: Date;
};
export type FAQ= {
    answer:     string;
    created_at: Date;
    id:         number;
    question:   string;
    updated_at: Date;
}

export type FaqResponse = {
  data: Datum[];
  message: string;
  pagination: PaginationDto;
};
