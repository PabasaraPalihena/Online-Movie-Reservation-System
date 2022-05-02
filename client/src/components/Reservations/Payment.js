import { Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./Payment.css";
import Swal from "sweetalert2";

export default function Payment(props) {
  const {
    handleClose,
    cardNumber,
    cardName,
    cardExpiry,
    cardCvc,
    setCardNumber,
    setCardName,
    setCardExpiry,
    setCardCvc,
    totalPrice,
    DoReservation,
  } = props;

  const [focus, setfocus] = useState(false);

  const PayNow = () => {
    if (
      cardNumber.length !== 0 ||
      cardExpiry.length !== 0 ||
      cardCvc.length !== 0 ||
      cardName.length !== 0
    ) {
      handleClose();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Payment Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      DoReservation();
    }
  };

  return (
    <div>
      <div className="PaymentForm">
        <div>
          <Cards
            cvc={cardCvc}
            expiry={cardExpiry}
            focused={focus}
            name={cardName}
            number={cardNumber}
          />
        </div>
        <div className="payment__form">
          <FormControl fullWidth>
            <TextField
              className="payment__form__input"
              id="outlined-basic"
              label="Card Number"
              value={cardNumber}
              variant="outlined"
              sx={{ margin: "7px" }}
              onChange={(event) => {
                setCardNumber(event.target.value);
              }}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              className="payment__form__input"
              id="outlined-basic"
              value={cardName}
              label="Name"
              variant="outlined"
              sx={{ margin: "7px" }}
              onChange={(event) => {
                setCardName(event.target.value);
              }}
            />
          </FormControl>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <FormControl fullWidth>
                <TextField
                  className="payment__form__input"
                  id="date"
                  value={cardExpiry}
                  label="Valid Thru"
                  sx={{ width: "220px", margin: "7px" }}
                  onChange={(event) => {
                    setCardExpiry(event.target.value);
                  }}
                />
              </FormControl>
            </div>
            <div>
              <FormControl fullWidth>
                <TextField
                  className="payment__form__input"
                  id="outlined-basic"
                  label="CVC"
                  value={cardCvc}
                  variant="outlined"
                  sx={{ width: "110px", margin: "7px" }}
                  onChange={(event) => {
                    setCardCvc(event.target.value);
                  }}
                />
              </FormControl>
            </div>
          </div>
        </div>
      </div>
      <div className="PaymentForm_bottom">
        <h3>Payment Amount</h3>
        <span>LKR {totalPrice}</span>
        <Button variant="contained" onClick={PayNow}>
          Pay Now
        </Button>
      </div>
    </div>
  );
}
