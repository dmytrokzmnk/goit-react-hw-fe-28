import React from "react";
import PropTypes from "prop-types";
import classes from "./Profile.module.css";
const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <>
      <div className={classes.Profile}>
        <div className={classes.Description}>
          <img src={avatar} alt={name} className={classes.Avatar} />
          <p className={classes.Name}>{name}</p>
          <p className={classes.Tag}>@{tag}</p>
          <p className={classes.Location}>{location}</p>
        </div>

        <ul className={classes.Stats}>
          <li>
            <span className={classes.Label}>Followers </span>
            <span className={classes.Quantity}>{stats.followers}</span>
          </li>
          <li>
            <span className={classes.Label}>Views </span>
            <span className={classes.Quantity}>{stats.views}</span>
          </li>
          <li>
            <span className={classes.Label}>Likes </span>
            <span className={classes.Quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
export default Profile;
