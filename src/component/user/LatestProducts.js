import React from 'react';

const LatestProduct = () => {
  const products = [
    {
      id: 1,
      name: ' Limbu Traditional Dresses',
      price: 'Rs.999',
      image: 'https://folkbazar.com/cdn/shop/products/LIMBU_DRESS_720x.jpg?v=1681459135',
    },
    {
      id: 2,
      name: 'The Heaven & Earth Grocery',
      price: 'Rs.100',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81AHTyq2wVL._AC_UL254_SR254,254_.jpg',
    },
    {
      id: 3,
      name: 'Rich Dad Poor Dad',
      price: 'Rs.499',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81BE7eeKzAL._AC_UL254_SR254,254_.jpg',
    },
  ];

  return (
    <div className='container mx-auto my-8'>
      <h2 className='text-3xl font-semibold mb-4'>Latest Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {products.map((product) => (
          <div key={product.id} className='bg-white p-4 rounded-lg shadow-md'>
            <img src={product.image} alt={product.name} className='w-full h-32 object-cover mb-4' />
            <h3 className='text-lg font-semibold mb-2'>{product.name}</h3>
            <p className='text-gray-600'>{product.price}</p>
            {/* Add more product details or actions as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProduct;
