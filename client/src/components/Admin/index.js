import React from 'react'
import AdminDashboard from './AdminDashborad'
import DonarRequests from './DonarRequests/DonarRequests'
import SidebarLayout from '../../SidebarLayout'
import { Route, Routes, useParams } from 'react-router'
import ReceiverRequets from './ReceiverRequests/ReceiverRequets'
import Messages from './Messages'
function Admin() {
    const {path} = useParams()
    console.log(path)
    return (
        <SidebarLayout>
          {path === "dashboard" && <AdminDashboard/>}
          {path === "donar_requests" && <DonarRequests/>}
          {path === "receiver_requests" && <ReceiverRequets/>}
          {path === "messages" && <Messages/>}

        </SidebarLayout>
    )
}

export default Admin