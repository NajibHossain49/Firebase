import React from 'react';

const Orders = () => {
  const orders = [
    {
      id: 1,
      name: 'Ergonomic Office Chair',
      price: 199.99
    },
    {
      id: 2,
      name: 'High-Definition Webcam', 
      price: 79.99
    },
    {
      id: 3,
      name: 'Bluetooth Wireless Headphones',
      price: 99.99
    },
    {
      id: 4,
      name: 'Mechanical Gaming Keyboard',
      price: 149.99
    },
    {
      id: 5,
      name: 'Portable Bluetooth Speaker',
      price: 59.99
    }
  ];

  return (
    <div>
      <h2 className="text-2xl text-center font-bold mb-4">My Orders</h2>
      <ul className="space-y-4">
        {orders.map((order) => (
          <li key={order.id} className="bg-gray-600 rounded-lg shadow-md p-4">
            <h3 className="text-lg font-medium">{order.name}</h3>
            <p className="text-gray-200 font-medium">Price: ${order.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
