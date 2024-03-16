import { Card, Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/ContextApi'

const UserItems = ({ data, title }) => {
    console.log('datatata',data)
    const { appState, updateState } = useAppContext();
    const navigate = useNavigate();

    const handleClick = (item) => {
        updateState({
            ...appState, detail: item
        });
        navigate(`/UserDetail/${item.id}`)



    }

    const addToCart = (item) => {
        console.log(item , "itm" )
        updateState({...appState , addtocart :[...appState.addtocart,...[item ]]})
    }

    

    return (
        <div style={{ paddingLeft: "25px" }}>
            <div className="text-xl font-bold p-2">{title}</div>

            <div className="flex justify-start gap-7">
                {data?.map((item) => (
                    <div key={item.id}>
                        <Card
                            hoverable
                            style={{
                                width: 260,
                            }}
                        >
                            <Card
                                style={{}}
                                cover={
                                    <img className="h-[200px]" alt="example" src={item.image} />
                                }
                                onClick={() => handleClick(item)}
                            >
                                <div>Name:{item.name}</div>
                                <div>Price:{item.price}</div>
                                <div>Brand:{item.brand}</div>
                            </Card>
                            <div>
                                <Button className="w-full bg-slate-900 text-white"
                                    onClick={() => addToCart(item)}
                                >Add to Cart</Button>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserItems;