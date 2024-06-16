import DashboardLayout from '@/components/layouts/DashboardLayout'
import ChurchesPage from '@/components/pages/churches'
import React from 'react'

const Churches = () => {
  return (
    <ChurchesPage />
  )
}

// Define layoutProps for this page
Churches.layoutProps = {
  title: "Churches",
  searchBarProp: "Search churches",
};

export default Churches