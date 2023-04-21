import React from "react";
import BankDashborad from "./BankDadhborad";
import RequestsToBank from "./RequestsToBank";
import SidebarLayout from "../../SidebarLayout";
import UpdateData from "./UpdateData";
import { Route, Routes, useParams } from "react-router";

function BloodBank() {
  const { path } = useParams();
  return (
    <SidebarLayout>
      {path === "dashboard" && <BankDashborad />}
      {path === "blood_requests" && <RequestsToBank />}
      {path === "update_data" && <UpdateData />}
    </SidebarLayout>
  );
}

export default BloodBank;
