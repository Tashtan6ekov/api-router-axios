import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";

const Users = () => {
  const API = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);

  const [clicked, setClicked] = useState(false);

  async function getUsers() {
    let res = await axios.get(API);
    setUsers(res.data);
  }
  useEffect(() => {
    getUsers();
    // когда массив зависимостей пустой, то код внутри useEffect выполняется один раз при загрузке страницы
  }, []);

  useEffect(() => {
    console.log("STATE CHANGED");
    // когда в массиве есть какая-то переменная(состояние), крд внутри useEffect выполняется тогда, когда меняется это состояние
  }, [clicked]);

  useEffect(() => {
    // перед самым исчезновением компонента можно выполнить какой-нибудь код с помощью return другой функции
    return () => {
      console.log("прощай");
    };
  }, []);

  //   console.log(users);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {users.map((item) => (
        <UserCard
          key={item.id}
          item={item}
          clicked={clicked}
          setClicked={setClicked}
        />
      ))}
    </div>
  );
};

export default Users;
