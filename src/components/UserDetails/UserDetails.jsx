import { useEffect, useState } from "react";
import axios from "axios";

import { Timer } from "../Timer";

export function UserDetails({ selectedUser }) {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (selectedUser) {
      axios
        .get(`https://api.github.com/users/${selectedUser.login}`)
        .then(({ data }) => setUserDetails(data));
    }
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
