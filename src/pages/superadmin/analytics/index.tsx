import DashboardLayout from '@/components/layouts/DashboardLayout'
import AnalyticsPage from '@/components/pages/analytics'
import React from 'react'

const Analytics = () => {
  return (
    <AnalyticsPage />
  )
}

// Define layoutProps for this page
Analytics.layoutProps = {
  title: "Analytics",
  searchBarProp: "Search anaytics ..",
};

export default Analytics