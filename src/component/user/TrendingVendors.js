import React, { useState, useEffect } from 'react';
import UserItems from './UserItems';
import { get } from '../../axios/Fetchre'
import { trendingVendors } from '../../Services/user';

const TrendingVendors = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    trendingVendors().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <div>
      <UserItems data={data} title={"Trending Vendors"} />
    </div>
  );
}

export default TrendingVendors;
