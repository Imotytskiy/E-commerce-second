import React, { useEffect, useState } from "react";

const OrdersProduct = () => {
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDeliveries = async () => {
      try {
        const response = await fetch("http://localhost:4000/delivery");
        if (!response.ok) {
          throw new Error("Failed to fetch deliveries");
        }
        const data = await response.json();
        setDeliveries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDeliveries();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Orders</h1>
      <div>
        {deliveries.map((delivery) => (
          <div key={delivery._id} className="border p-4 mb-4">
            <h2>Order ID: {delivery._id}</h2>
            <p>
              Name: {delivery.name} {delivery.surname}
            </p>
            <p>Email: {delivery.email}</p>
            <p>
              Address: {delivery.address}, {delivery.city}, {delivery.country}
            </p>
            <p>Postal Code: {delivery.postalCode || "N/A"}</p>
            <p>Phone: {delivery.phone}</p>
            <p>Building: {delivery.building || "N/A"}</p>
            <p>Apartment: {delivery.appartment || "N/A"}</p>
            <p>Cart Items:</p>
            <ul>
              {JSON.parse(delivery.cartData).map((item, index) => (
                <li key={index}>
                  Product ID: {item._id}, Size: {item.size}, Quantity:{" "}
                  {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersProduct;
