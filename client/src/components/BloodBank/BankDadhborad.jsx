import React from 'react'
import BankDashboardLayout from '../Layout/BankDashboardLayout'
import InnerContent from "./InnerContent.jsx";
import BankReuestsCheck from './BankReuestsCheck';
const BankDadhborad = () => {
  return (
    <BankDashboardLayout>
    
     {/* <InnerContent/> */}
    <BankReuestsCheck/>
    </BankDashboardLayout>
  )
}

export default BankDadhborad
