import React from "react";
import BankDashborad from "./BankDadhborad";
import RequestsToBank from "./RequestsToBank";
import BankDashboardLayout from '../Layout/BankDashboardLayout'
import UpdateData from "./UpdateData";
import { Route, Routes, useParams } from "react-router";

function BloodBank() {
  const { path } = useParams();
  return (
    <BankDashboardLayout>
      {path === "dashboard" && <BankDashborad />}
      {path === "blood_requests" && <RequestsToBank />}
      {path === "update_data" && <UpdateData />}
    </BankDashboardLayout>
  );
}

export default BloodBank;
