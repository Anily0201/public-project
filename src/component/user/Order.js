import { Avatar, Descriptions, Modal, Table } from 'antd'
import React from 'react'
import { Post } from "./Esewa";
// import { config } from "./Khalti";
// import KhaltiCheckout from "khalti-checkout-web";


const Order = ({ isModalOpen, setIsModalOpen, sumNetTotal, sumQty, myOrder }) => {
    console.log('av', myOrder)
    const [ispayment, setPayment] = React.useState(false);
    // let checkout = new KhaltiCheckout(config);

    var path = "https://uat.esewa.com.np/epay/main";
    var params = {
        amt: sumNetTotal,
        psc: 0,
        pdc: 0,
        txAmt: 0,
        tAmt: sumNetTotal,
        pid: "ee2c3ca1-696b-4cc5-a6be-2c40d929d453",
        scd: "EPAYTEST",
        su: "http://merchant.com.np/page/esewa_payment_success",
        fu: "http://merchant.com.np/page/esewa_payment_failed",
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handlePaymentMethod = (id) => {
        if (id === "2") {
            setPayment(id);
        } 
        // else if (id === "3") {
        //     setPayment(id); 
        //     checkout.show({ amount: 1000 });
        // }
    };




    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Qty',
            dataIndex: 'qty',
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
    ]
    const Paymentmethod = [
        {
            name: 'Cash on delivery',
            id: 1,
            icon: (<Avatar className="w-16 h-16" icon={<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFyENsTn4eVemlBBSGo7P3dq8DZWtFp1HSSQ&usqp=CAU' alt="/" />} />),
        },
        {
            name: ' Esewa ',
            id: 2,
            icon: (<Avatar className="w-16 h-16" icon={<img src='https://esewa.com.np/common/images/esewa-icon-large.png' alt="/" />} />),
        },
        {
            name: 'Khalti',
            id: 3,
            icon: (<Avatar className="w-16 h-16" icon={<img src='https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082018/untitled-1_110.png?NUSEVyMKG.6mmq9Jwutfm3zYrezAp4gA&itok=nwwsDR-M' alt="/" />} />),
        },
        {
            name: 'IME Pay',
            id: 4,
            icon: (<Avatar className="w-16 h-16" icon={<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAY9HYRI0VSUkAav5OYWiLU7hEXrEIsOqef4aw48n4qA&s' alt="/" />} />),
        },
        {
            name: 'Connect ips',
            id: 5,
            icon: (<Avatar className="w-16 h-16" icon={<img src='https://connectips.com/images/logo_connectIPS.png' alt="/" />} />),
        },


    ]



    return (
        <div>
            <div>
                <Modal title="Payment Methods"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <div className='flex gap-3'>
                        {Paymentmethod?.map((item) => (
                            <div
                                key={item.id}
                                className={`border-8 border-current ${item.id === ispayment
                                    ? "border-red-800"
                                    : "border-current"
                                    } cursor-pointer`}
                                onClick={() => handlePaymentMethod(item.id)}
                            >
                                <div>{item.icon}</div>
                                <div>{item.name}</div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <Table columns={columns}
                            dataSource={myOrder}
                        // pagination={false} 
                        />

                    </div>
                    <div>
                        <Descriptions title="User Info">
                            <Descriptions.Item label="Total price">{sumNetTotal}</Descriptions.Item>
                            <Descriptions.Item label="Qty">{sumQty}</Descriptions.Item>
                        </Descriptions>
                    </div>
                </Modal>
            </div>
            {ispayment === "1" && Post(path, params)}

        </div>
    )
}

export default Order
