import React from "react";
import { Commitment } from "../model/commitment";

type Props = {
  data: Commitment;
  isSelected: boolean;
  setAssetType: (data: string) => void;
};

const AssetInfo = ({ data, isSelected, setAssetType }: Props) => {
  return (
    <div
      className={isSelected ? "asset-item-selected" : "asset-item"}
      onClick={() => setAssetType(data.type)}
    >
      <span>{data.type}</span> <br />
      <span>{data.total}</span>
    </div>
  );
};

export default AssetInfo;
