export interface IImportResponse<T> {
  //  0 - 성공
  //  1 - 누락된 파라메터가 있음
  // -1 - 실패함
  code: 0 | 1 | -1;
  message: null | string;
  response: null | T;
}

export interface ICardPaymentResponse {
  imp_uid: string;
  merchant_uid: string;

  name: string;
  amount: number;
  currency: string;
  apply_num: string;

  pg_id: string;
  pg_provider: string;
  pg_tid: string;

  card_code: string;
  card_name: string;
  card_number: string;
  card_quota: number;
  card_type: number;

  buyer_addr: null | string;
  buyer_email: null | string;
  buyer_name: null | string;
  buyer_postcode: null | string;
  buyer_tel: null | string;

  status: "failed" | "paid" | "cancelled";
  started_at: number;

  pay_method: string;
  paid_at: number;

  fail_reason: null | string;
  failed_at: number;

  cancel_amount: number;
  cancel_history: any[];
  cancel_reason: null | any;
  cancelled_at: number;
}

export interface ICardEditResponse {
  card_code: string;
  card_name: string;
  card_number: string;
  customer_uid: string;
  customer_name: string;
  customer_addr: null | string;
  customer_email: null | string;
  customer_postcode: null | string;
  customer_tel: null | string;
  inserted: number;
  updated: number;
}
