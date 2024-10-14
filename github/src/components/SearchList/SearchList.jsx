import { useState } from 'react';

import { Search } from '../Search';
import { UserList } from '../UserList';

const DEFAULT_USER_NAME = 'user';

export function SearchList({ selectedUser, setSelectedUser }) {
  const [searchTerm, setSearchTerm] = useState(DEFAULT_USER_NAME);

  return (
    <>
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
    </>
  );
}
