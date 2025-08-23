import { RedirectLink } from './common';

export type OrderCourse = {
  discount_price: null | number;
  id: number;
  included_course_ids: null;
  package: number;
  pivot: Pivot;
  title_fa: string;
};

export type OrderDatum = {
  courses: OrderCourse[];
  discount_amount: null | string;
  discount_code: null;
  id: number;
  order_number: string;
  order_status: string;
  payment: Payment;
  total: null | string;
  totalPayable: null | string;
  user_id: number;
};

export type Orders = {
  current_page: number;
  data: OrderDatum[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: RedirectLink[];
  next_page_url: null;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
};

export type OrdersResponse = {
  orders: Orders;
  status: number;
};

export type Payment = {
  amount: null | number;
  amount_fa: null | number;
  authority: null | string;
  id: number;
  method: number;
  order_id: string;
  payment_from: null;
  payment_method: string;
  payment_status: string;
  ref_id: null | string;
  user_id: string;
}

export type Pivot = {
  course_id: number;
  created_at: Date;
  order_id: number;
  updated_at: Date;
};
