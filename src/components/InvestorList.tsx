import React, { useEffect, useState } from "react";
import { Investor } from "../model/investor";
import BootstrapTable from "react-bootstrap-table-next";
import { format } from "date-fns";
import { Link } from "react-router-dom";

type Props = {};

const InvestorList = (props: Props) => {
  const [investors, setInvestors] = useState<Investor[]>([]);
  const fetchInvestors = () => {
    const apiUrl = process.env.REACT_APP_API_URL; // Access environment variable
    fetch(`${apiUrl}/api/investors/all`)
      .then((res) => res.json())
      .then((data) => setInvestors(data));
  };

  useEffect(() => {
    fetchInvestors();
  }, []);

  const linkFormatter = (cell: any, row: any) => {
    console.log({ cell, row });
    return <Link to={`/investor/${row.name}`}>{cell}</Link>;
  };

  const investorColumns = [
    {
      dataField: "id",
      text: "id",
    },
    {
      dataField: "name",
      text: "Name",
    },
    {
      dataField: "type",
      text: "Type",
    },
    {
      dataField: "dateAdded",
      text: "Date Added",
      formatter: (cell: any) => format(cell, "d MMMM , yyyy "),
    },
    {
      dataField: "address",
      text: "Country",
    },
    {
      dataField: "totalAmount",
      text: "Total Commitment",
      formatter: linkFormatter,
    },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h3>InvestorList</h3>
      {investors && (
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={investors}
          columns={investorColumns}
          classes="investor-table"
          striped={true}
        />
      )}
      {}
    </div>
  );
};

export default InvestorList;
