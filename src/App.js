import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";

function App() {
  const [name, setName] = useState("Widur");

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const backend_url = "http://localhost:3001/api/v1/razorpay/payment/request";

    // <============ Collectxn ============>
    // const { data } = await fetch(
    //   // "https://backend.collectxn.store/api/v1/razorpay/orders/products/18", // Order single product
    //   // "https://backend.collectxn.store/api/v1/razorpay/orders/carts", // Order from cart
    //   "http://3.109.34.101:3000/api/v1/razorpay/orders/carts", // Order from cart
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization:
    //         "Bearer " +
    //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IkpheSBKZXRoYXZhIiwiZW1haWwiOiJqYXlqZXRoYXZhLnRzdEBnbWFpbC5jb20iLCJtb2JpbGUiOjkxOTkyNDE3MDg0MCwiZGVsZXRlZEF0IjoiMTk3MC0wMS0wMVQwMDowMDowMC4wMDBaIiwiY3JlYXRlZEF0IjoiMjAyMy0wMS0wM1QwOTozMzo0Ny4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMy0wMS0wM1QxMDowMDowMC4wMDBaIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2NzMyNjM5NTB9.NdKIyU0VkGaKUe7vdkw2idroTZ77OJ2hD8-tdKMX7-I",
    //     },
    //     // Pass cole and size when order a single product
    //     body: JSON.stringify({
    //       // color: "Red",
    //       // size: "24",
    //       addressId: 1,
    //     }),
    //   }
    // )
    //   .then((t) => t.json())
    //   .catch((err) => console.error(err));

    // <============ Khelnet ============>
    // const { data } = await fetch(
    //   "https://backend.khelnet.in/api/v1/razorpay/add/money",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization:
    //         "Bearer " +
    //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6IlVzZXIiLCJpYXQiOjE2NjkzNjA0NDcsImV4cCI6MTY3MTk1MjQ0N30.eAaUl66fdlANpZooFXNjNoOkRrOgBoViugJQ8e6CaOc",
    //     },
    //     // Pass cole and size when order a single product
    //     body: JSON.stringify({
    //       amount: 50,
    //     }),
    //   }
    // )
    //   .then((t) => t.json())
    //   .catch((err) => console.log(err));

    // <============ Hotelcom ============>
    // const { data } = await fetch(
    //   "https://backend.hotelcom.live/api/v1/razorpay/order/subscription",

    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization:
    //         "Bearer " +
    //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3RlbElkIjoxLCJlbWFpbCI6ImhvdGVsQGdtYWlsLmNvbSIsInJvbGUiOiJob3RlbGllciIsImlhdCI6MTY3MjcyNDQ2OH0.8Lae3MXF0UKJjKuBarxsx0KJBHtnr5PCp50rZEaMork",
    //     },
    //     body: JSON.stringify({
    //       planId: 1,
    //       hotelId: 1,
    //     }),
    //   }
    // )
    //   .then((t) => t.json())
    //   .catch((err) => res.send(err));

    // ==================================

    // <=========== Magma =========>
    const { data } = await fetch(backend_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IkpheSBKZXRoYXZhIiwiZW1haWwiOiJqYXlqZXRoYXZhLnRzdEBnbWFpbC5jb20iLCJtb2JpbGUiOjkxOTkyNDE3MDg0MCwiZGVsZXRlZEF0IjoiMTk3MC0wMS0wMVQwMDowMDowMC4wMDBaIiwiY3JlYXRlZEF0IjoiMjAyMy0wMS0wM1QwOTozMzo0Ny4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMy0wMS0wM1QxMDowMDowMC4wMDBaIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2NzMyNjM5NTB9.NdKIyU0VkGaKUe7vdkw2idroTZ77OJ2hD8-tdKMX7-I",
      },
      // Pass cole and size when order a single product
      body: JSON.stringify({
        planId: 1,
      }),
    })
      .then((t) => t.json())
      .catch((err) => console.error(err));
    console.log(data);
    // return;
    const options = {
      // key: __DEV__ ? 'rzp_test_uGoq5ABJztRAhk' : 'PRODUCTION_KEY',
      // key: "rzp_test_OX9EATEc8ErSIM",
      key: data.RAZORPAY_KEY_ID,
      currency: data.order.currency,
      amount: data.order.amount,
      order_id: data.order.id,
      name: "Test",
      description: "Thank you for nothing. Please give us some money",
      // image: 'http://localhost:1337/logo.svg',
      notes: data.order.notes,

      handler: function (response) {
        console.log("res from handler\n", response);
        console.log(response);
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: "Jay Jethava",
        email: "jayjethva2018@gmail.com",
        phone_number: "9924170840",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          onClick={displayRazorpay}
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate $5
        </a>
      </header>
    </div>
  );
}

export default App;
