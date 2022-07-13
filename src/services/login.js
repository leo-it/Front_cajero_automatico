import clientAxios from "./base";

export const login = (value) => {

  return clientAxios
    .post("/auth/login", {
      username: value.DNI,
      password: value.pass,
      headers: {
        "Content-Type": "application/json",
      },
    })
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
};
