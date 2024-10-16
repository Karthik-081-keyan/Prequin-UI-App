export interface CommitmentData {
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
