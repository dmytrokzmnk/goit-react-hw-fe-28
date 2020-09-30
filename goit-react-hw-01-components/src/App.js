import React from "react";

import Profile from "./Components/Profile/Profile.jsx";
import user from "./Data/user.json";
import Statistics from "./Components/Statistics/Statistics";
import statisticalArr from "./Data/statistical-data.json";
import FriendList from "./Components/FriendList/FriendList";
import friendsArr from "./Data/friends.json";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import transactionsArr from "./Data/transactions.json";
const App = () => {
  return (
    <>
      <Profile name={user.name} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <Statistics title="upload stats" stats={statisticalArr} />
      <FriendList friends={friendsArr} />
      <TransactionHistory items={transactionsArr} />
    </>
  );
};

export default App;
