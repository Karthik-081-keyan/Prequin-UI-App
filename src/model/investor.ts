import { format } from "date-fns";

export interface Investor {
  id: number;
  name: string;
  type: string;
  address: string;
  dateAdded: string;
  totalAmount: string;
}

