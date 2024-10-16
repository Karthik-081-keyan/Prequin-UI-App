import React from "react";
import { CommitmentsInfo } from "../model/investor";
import BootstrapTable from "react-bootstrap-table-next";

type Props = {
  info: CommitmentsInfo[];
};

const CommitmentInfo = ({ info }: Props) => {
  const columns = [
    {
      dataField: "id",
      text: "Id ",
      width: 100,
    },
    {
      dataField: "assetName",
      text: "Asset Name",
      width: 100,
    },
    {
      dataField: "currency",
      text: "Currency",
      width: 100,
    },
    {
      dataField: "totalAmount",
      text: "Amount Invested",
      width: 10,
    },
  ];
  return (
    <div style={{ padding: "2rem" }}>
      <BootstrapTable
        keyField="id"
        data={info}
        columns={columns}
        classes="investor-table"
        striped
      />
    </div>
  );
};

export default CommitmentInfo;
