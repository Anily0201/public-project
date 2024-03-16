import React from 'react'
import HotProducts from './HotProducts'
import TrendingVendors from './TrendingVendors'
import Carousel from './Carousel'

const UserDashboard = () => {
  return (
    <div>
    <div>
    <Carousel/>
      <h2><HotProducts/></h2>
      <h2><TrendingVendors/></h2>
    </div>
    <div>
      
    </div>
    </div>
  )
}

export default UserDashboard