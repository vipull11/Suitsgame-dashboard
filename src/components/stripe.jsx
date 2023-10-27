import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useUser } from '../services/useContext';
import '../style/style.css';



const Stripe = () => {
  const { userData } = useUser();
 
  const [amount, setAmmount] = useState(0);

  const handleAmmountChange = (e) => {
    setAmmount(parseInt(e.target.value, 10)); // Convert the input value to an integer
  };

  const submitHandler = async (e) => {
    const buyCoin = [{ id: 1, name: "Game coins", amount, qunt: 1 }];
    e.preventDefault();
    const user_id = userData.data._id;
    const stripe = await loadStripe(
      "pk_test_51HyRkvC0Ko8dUs4YH83O1LfkibqIpeR11ic1KpVhyvGVqhkwaovzY4RCTdpCewHN3t0q8cI4rjhr9P2Q6pvxCgQZ009l99yXBz"
    );

    const body = {
      products: buyCoin,
      userID: user_id,
    };

    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "https://api.suitscardgame.com/api/v1/auth/buy-coins",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
    //->30 //db sec->exp //api hit /for increase coin after buy coin
  };

  return (
    <div className="payment-box">
      <form style={{display:'flex' , flexDirection: 'column' , alignItems: 'center'}} onSubmit={submitHandler}>
        <label htmlFor="ammount" >Enter amount</label>
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={handleAmmountChange}
        />

        <button
          type="submit"
          style={{
            width: "100px",
            height: "50px",
            backgroundColor: "darkgreen",
            color: "white",
            borderRadius: "10px",
            marginTop: "10px",
          }}
        >
          Buy
        </button>
      </form>
    </div>
  );
};

export default Stripe;