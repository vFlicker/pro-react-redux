import axios from 'axios';
import { useEffect, useState } from 'react';

import { Timer } from '../Timer';

export function UserDetails({ selectedUser }) {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const url = `https://api.github.com/users/${selectedUser.login}`;
      const { data } = await axios.get(url);
      setUserDetails(data);
    };

    if (selectedUser) fetchUserDetails();
  }, [selectedUser]);

  if (!userDetails) return null;

  return (
    userDetails && (
      <>
        <Timer id={userDetails.id} callback={() => setUserDetails(null)} />
        <h2>{userDetails.login}</h2>
        <img src={userDetails.avatar_url} alt={userDetails.login} />
        <div>
          {userDetails.login}, followers: {userDetails.followers}
        </div>
      </>
    )
  );
}
