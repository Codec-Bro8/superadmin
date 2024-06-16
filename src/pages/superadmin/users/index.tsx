import DashboardLayout from '@/components/layouts/DashboardLayout'
import UserPage from '@/components/pages/users'
import React from 'react'

const Users = () => {
  return (
    <UserPage />
  )
}
// Define layoutProps for this page
Users.layoutProps = {
  title: "Users",
  searchBarProp: "Search Users...",
};

export default Users;