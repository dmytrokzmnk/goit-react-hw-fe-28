import React from "react";
import PropTypes from "prop-types";
import { List } from "./FriendList.styles";
import FriendListItem from "../FriendListItem/FriendListItem";
const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map((el) => (
        <FriendListItem key={el.id} {...el} />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired).isRequired,
};

export default FriendList;
