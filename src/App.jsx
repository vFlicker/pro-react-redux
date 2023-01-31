import { useState } from "react";

import { UserDetails } from "./components/UserDetails";
import { Search } from "./components/Search";
import { UserList } from "./components/UserList";
import styles from "./App.module.css";

const DEFAULT_USER_NAME = "IT-KAMASUTRA";

export function App() {
  const [searchTerm, setSearchTerm] = useState(DEFAULT_USER_NAME);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className={styles.container}>
      <div>
        <Search
          value={searchTerm}
          onFind={setSearchTerm}
          onReset={() => setSearchTerm(DEFAULT_USER_NAME)}
        />
        <UserList
          searchTerm={searchTerm}
          selectedUser={selectedUser}
          onUserSelect={setSelectedUser}
        />
      </div>
      <div>
        <UserDetails selectedUser={selectedUser} />
      </div>
    </div>
  );
}
