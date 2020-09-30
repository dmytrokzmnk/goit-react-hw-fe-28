import React from "react";
import PropTypes from "prop-types";
import { ListItem, ListStatus, ListAvatar, ListName } from "./FriendListItem.styles";

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <ListItem>
      <ListStatus isOnline={isOnline} />
      <ListAvatar src={avatar} alt={name} />
      <ListName>{name}</ListName>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
