import { useState } from 'react';

import { SearchList } from '../components/SearchList';
import { UserDetails } from '../components/UserDetails';
import classes from './App.module.css';

export function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className={classes.container}>
      <div>
        <SearchList
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      </div>
      <div>
        <UserDetails selectedUser={selectedUser} />
      </div>
    </div>
  );
}
