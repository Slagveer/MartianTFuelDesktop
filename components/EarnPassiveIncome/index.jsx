import React from "react";
import "./EarnPassiveIncome.css";

function EarnPassiveIncome(props) {
  const { children, className } = props;

  return <p className={`x5-of-transaction-fe verdana-normal-fuscous-gray-16px ${className || ""}`}>{children}</p>;
}

export default EarnPassiveIncome;
