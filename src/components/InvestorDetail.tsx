import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AssetInfo from "./Asset";
import CommitmentInfo from "./CommitmentInfo";
import { CommitmentData } from "../model/commitment";

const initialData: CommitmentData = { commitments: [], commitmentsInfo: [] };
const InvestorDetail = () => {
  const { name } = useParams();
  const [investorDetail, setInvestorDetail] =
    useState<CommitmentData>(initialData);
  const [assetType, setAssetType] = useState("All");
  const getInvestorDetail = () => {
    const apiUrl = process.env.REACT_APP_API_URL; // Access environment variable
    fetch(`${apiUrl}/api/commitments/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setInvestorDetail(data);
      });
  };
  useEffect(() => {
    getInvestorDetail();
  }, []);

  const filteredInfo = useMemo(() => {
    const { commitmentsInfo } = investorDetail;
    return assetType === "All"
      ? commitmentsInfo
      : commitmentsInfo.filter((c) => c.assetName.includes(assetType));
  }, [assetType, investorDetail]);
  return (
    <div>
      <div className="commitment-title">
        <h3>Commitments:{name}</h3> <Link to="/">Back to List</Link> <br />
      </div>

      <div className="asset-container">
        {investorDetail.commitments &&
          investorDetail.commitments.map((c, ind) => (
            <AssetInfo
              data={c}
              isSelected={assetType === c.type}
              setAssetType={setAssetType}
            />
          ))}
      </div>
      {filteredInfo && <CommitmentInfo info={filteredInfo} />}
    </div>
  );
};

export default InvestorDetail;
