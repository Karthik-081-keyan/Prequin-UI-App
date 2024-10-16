import { format } from "date-fns";

export interface Investor {
  id: number;
  name: string;
  type: string;
  address: string;
  dateAdded: string;
  totalAmount: string;
}

export interface InvestorData {
  commitments: Commitment[];
  commitmentsInfo: CommitmentsInfo[];
}

export interface Commitment {
  type: string;
  total: string;
}

export interface CommitmentsInfo {
  id: number;
  assetName: string;
  currency: string;
  totalAmount: string;
}
