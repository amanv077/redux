import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "./State/index";

const Shop = () => {
  const dispatch = useDispatch();
  const { withdrawMoney, depositeMoney } = bindActionCreators(
    ActionCreators,
    dispatch
  );
  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          withdrawMoney(100);
        }}
      >
        -
      </button>
      Add To Cart
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          depositeMoney(100);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Shop;
