import React from "react";
import ListingTable from "../../utils/ListingTable";

export default function AdminDashboard() {
  let tableData = [];
  const desktopHeaders = {
    "Channel Partner Company Name": "fieldName",
    "City Where Registered": "fieldValue",
    "Channel Partner Name": "parentId",
    "Channel Partner Mobile number": "channel partner mobile number",
    Listings: "listings",
    Approved: "approved",
    Pending: "pending",
    "View Details": "view detail",
  };
  const mobileHeaders = {
    "Channel Partner Company Name": "fieldName",
    "City Where Registered": "fieldValue",
    "Channel Partner Name": "parentId",
    "Channel Partner Mobile number": "channel partner mobile number",
    Listings: "listings",
    Approved: "approved",
    Pending: "pending",
    "View Details": "view detail",
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <ListingTable
        data={tableData}
        headersDesktop={desktopHeaders}
        headersMobile={mobileHeaders}
      ></ListingTable>
    </div>
  );
}
