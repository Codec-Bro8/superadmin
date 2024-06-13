import DonationsPage from '@/components/pages/donation'
import React from 'react'

const Donations = () => {
  return (
    <DonationsPage />
  )
}

Donations.layoutProps = {
  title: "Donation Dashboard",
  searchBarProp: "Search donation...",
};

export default Donations