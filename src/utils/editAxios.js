import axios from "axios";
import { useRouter } from "next/router";

export const editAxios = (id, token, newCredit, amount, redirect) => {
  axios
    .put(
      `http://localhost:4000/products/${id.replace(/"/g, "", "")}`,
      {
        amount: newCredit,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.replace(/"/g, "", "")}`,
        },
      }
    )
    .then((response) => {
      localStorage.setItem("amount", JSON.stringify(parseInt(newCredit)));
      localStorage.setItem("operation", JSON.stringify("extraccion"));
      localStorage.setItem("operationAmount", JSON.stringify(parseInt(amount)));
      setInterval(() => {
      redirect();
    }, 3000);
    })
    .catch(function (error) {
      console.error(error);
    });
};
