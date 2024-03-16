import React, { useState } from 'react';
import { Auth, HeaderItems } from '../../utils/Items';
import { Link, useNavigate } from 'react-router-dom';
import { DeleteOutlined, HomeOutlined, MinusCircleFilled, PlusCircleFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { useAppContext } from '../../context/ContextApi';
import { Badge, Button, Drawer, Image, message, } from 'antd';
import Order from '../../component/user/Order';
import { Token, name } from '../../utils/Storage';
import Userprofile from './Userprofile';

const Index = () => {
    const { appState, updateState } = useAppContext();
    const [myOrder, setMyOrder] = React.useState([]);
    const { token, name } = Token()
    console.log('myOrder', token, Token())

    const [open, setOpen] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();
    const handleClick = (e) => {
        navigate(e);
    };
    const showDrawer = () => {
        if (myOrder.length > 0) {
            setOpen(true);
        }
    };
    const onClose = () => {
        setOpen(false);
    };



    const handelAdd = (id) => {
        console.log('hh', myOrder)
        const updateAdddata = myOrder?.map((item) => {
            if (id === item.id) {
                return {
                    ...item,
                    qty: item.qty + 1,

                }
            } else {
                return {
                    ...item
                }
            }
        })
        setMyOrder(updateAdddata)
        console.log(id, 'plus')

    }
    const handleMinus = (id) => {
        const updatedData = myOrder.map((item) => {
            if (id === item.id) {
                return {
                    ...item,
                    qty: Math.max(item.qty - 1, 1),
                };
            } else {
                return {
                    ...item,
                };
            }
        });
        setMyOrder(updatedData);
    };



    const removeItem = (itemId) => {
        const updatedOrder = myOrder.filter((item) => item.id !== itemId);
        setMyOrder(updatedOrder);
        // updateState({ addtocart: updatedOrder });
    };

    console.log(myOrder, " appkkkkp")

    const showModal = () => {
        if (token) {
            setIsModalOpen(true);
        } else {
            message.info('You are not login , Please login to Place your Order')
        }

    };
    const handleDeleteAll = () => {
        setMyOrder([]);
        // setCartCount (0); 
        onClose();
    };

    const sumNetTotal = myOrder?.reduce((sum, service) => {
        console.log('sum', sum, service)
        return sum + parseFloat(service.price * service.qty);

    }, 0)
    console.log('sumNetTotal', sumNetTotal)

    const sumQty = myOrder?.reduce((sum, service) => {
        return sum + parseFloat(service.qty);

    }, 0)
    console.log('sumQty', sumQty)

    React.useEffect(() => {
        const updatedMyOrder = [...new Set(appState.addtocart)].map((item) => ({
            ...item,
            qty: 1,
        }));
        setMyOrder(updatedMyOrder);
    }, [appState.addtocart]);


    return (
        <div className="flex justify-between">
            <div class="cursor-pointer"
                onClick={() => handleClick('/')}>
                <HomeOutlined />
            </div>
            <div className="flex gap-20">
                {HeaderItems?.map((item) => (
                    <div key={item.link} className="text-white font-bold"
                        onClick={() => handleClick(item.link)}>
                        {item.name}
                    </div>
                ))}
            </div>


            <div className="flex items-center gap-3">
                <div className="mt-[5px]">
                    <Badge
                        showZero
                        count={myOrder?.length} >
                        <ShoppingCartOutlined
                            className="text-white text-2xl ml-auto"
                            onClick={showDrawer}
                        />
                    </Badge>
                </div>

                {open && (
                    <div>
                        <Drawer title="Your Item's" onClose={onClose} open={open}>
                            <Button
                                type="primary"
                                danger
                                onClick={handleDeleteAll}
                                className="absolute top-0 right-0 mt-2 mr-2"
                            >
                                Delete All
                            </Button>

                            <div className="gap-4 grid">
                                {myOrder?.map((item, index) => (
                                    <div key={item.id} className="flex items-center gap-3">
                                        <div className="w-20 h-20">
                                            <Image src={item.image} alt="noimage" />
                                        </div>
                                        <div>
                                            <div>Name: {item.name}</div>
                                            <div>Qty: {item.qty}</div>
                                            <div>Total Price: {item.price * item.qty}</div>

                                            {/* <div>Price: {item.price}</div> */}
                                            <div> Brand: {item.brand}</div>
                                            <div> View: {item.view}</div>
                                            {/* <div> StockItem: {item.stokeItems}</div> */}
                                            <div>
                                                <div className="flex gap-3">
                                                    <button >
                                                        <PlusCircleFilled
                                                            onClick={() => handelAdd(item.id)} />
                                                    </button>
                                                    <button>
                                                        <MinusCircleFilled onClick={() => handleMinus(item.id)} />
                                                    </button>
                                                    <Button
                                                        type="primary"
                                                        danger
                                                        icon={<DeleteOutlined />}
                                                        onClick={() => removeItem(item.id)}>

                                                    </Button>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>

                            <div className="w-full">
                                <Button type="pramiry" className="bg-[green] w-full"
                                    onClick={showModal}>
                                    Order Now
                                </Button>
                            </div>
                            {
                                isModalOpen && (
                                    <Order isModalOpen={isModalOpen}
                                        setIsModalOpen={(e) => setIsModalOpen(e)}
                                        sumNetTotal={sumNetTotal}
                                        sumQty={sumQty}
                                        myOrder={myOrder} />
                                )
                            }
                        </Drawer>
                    </div>
                )}

                <div className='flex items-center'>
                    {token && < Userprofile />}
                    <div>{name}</div>
                </div>
                {
                    !token && (
                        <div className='flex items-center gap-2'>
                            {Auth?.map((item) => (
                                <div key={item.link}
                                    className="text-white font-bold"
                                    onClick={() => handleClick(item.link)}>
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Index;
