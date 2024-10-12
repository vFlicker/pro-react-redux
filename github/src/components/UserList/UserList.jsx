import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./UserList.module.css";

export function UserList({ searchTerm, selectedUser, onUserSelect }) {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    if (selectedUser) document.title = selectedUser.login;
  }, [selectedUser]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/search/users?q=${searchTerm}`)
      .then(({ data }) => setUsers(data.items));
  }, [searchTerm]);

  if (!users) return null;

  return (
    <ul>
      {users.map((user) => (
        <li
          key={user.id}
          className={selectedUser?.id === user.id ? styles.selected : ""}
          onClick={() => onUserSelect(user)}
        >
          {user.login}
        </li>
      ))}
    </ul>
  );
}
