import React from 'react'
import { HotProductsData } from '../../utils/Items'
import UserItems from './UserItems'
import { get } from '../../axios/Fetchre'
import { hotProduct } from '../../Services/user'


const HotProducts = () => {

  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    hotProduct().then((response) => {
      setData(response);
    });
  }, []);
    return (
        <div>
            <UserItems data={data} title="Hot Products"/>
        </div>
    )
}

export default HotProducts