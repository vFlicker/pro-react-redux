import axios from 'axios';
import { useEffect, useState } from 'react';

import styles from './UserList.module.css';

export function UserList({ searchTerm, selectedUser, onUserSelect }) {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    if (selectedUser) document.title = selectedUser.login;
  }, [selectedUser]);

  useEffect(() => {
    const fetchUsers = async () => {
      const url = `https://api.github.com/search/users?q=${searchTerm}`;
      const { data } = await axios.get(url);
      setUsers(data.items);
    };

    fetchUsers();
  }, [searchTerm]);

  if (!users) return null;

  return (
    <ul>
      {users.map((user) => (
        <li
          key={user.id}
          className={selectedUser?.id === user.id ? styles.selected : ''}
          onClick={() => onUserSelect(user)}
        >
          {user.login}
        </li>
      ))}
    </ul>
  );
}
