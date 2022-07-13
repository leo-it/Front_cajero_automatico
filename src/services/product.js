import clientAxios from "./base";

export const editCredit = (id, token, newCredit) => {
  return clientAxios.put(
    `/products/${id.replace(/"/g, "", "")}`,
    {
      amount: newCredit,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.replace(/"/g, "", "")}`,
      },
    }
  );
};

export const getUser = (token) => {
  return clientAxios.get("/products", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
/*   axios
      .get("http://localhost:4000/products", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        localStorage.setItem(
          "name",
          JSON.stringify(response.data.products[0].title)
        );
        localStorage.setItem(
          "amount",
          JSON.stringify(response.data.products[0].amount)
        );
        localStorage.setItem(
          "id",
          JSON.stringify(response.data.products[0]._id)
        );
      });
  };
*/
/*  axios
        .post("http://localhost:4000/auth/login", {
          username: value.DNI,
          password: value.pass,
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          localStorage.setItem(
            "token",
            JSON.stringify(response.data.accesss_token)
          );
          getData(response.data.accesss_token);
          router.push("/operations");
        })
        .catch(function (error) {
          alert("pass o DNI incorrectos");
          console.error(error);
        }); */
