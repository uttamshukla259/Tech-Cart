import React from "react";

const Confirmation = () => {
  const orderDetails = JSON.parse(localStorage.getItem("orderDetails"));

  return (
    <div>
      <h2>Order Confirmation</h2>
      <p>Thank you for your purchase!</p>
      <p>Delivery Address: {orderDetails.address}</p>
      <p>Contact Number: {orderDetails.contact}</p>
      <p>Payment Method: {orderDetails.paymentMethod}</p>
    </div>
  );
};

export default Confirmation;
