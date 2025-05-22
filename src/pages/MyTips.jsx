import React, { use, useEffect, useState } from "react";
import { AuthContex } from "../provider/AuthProvider";

const MyTips = () => {
  const { user } = use(AuthContex);
  // console.log(user.email)
  const [tips, setTips] = useState([]);
  console.log(tips);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/mygardens/${user.email}`)
        .then((res) => res.json())
        .then((data) => setTips(data));
    }
  }, [user]);
  return (
    <div>
      <h1>My Tips</h1>
    </div>
  );
};

export default MyTips;
