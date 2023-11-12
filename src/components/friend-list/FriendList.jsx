import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../friend-list/FriendListItem';
import styles from './Friend.module.css';

const FriendList = ({ friends }) => (
<ul className={styles.friendList}>
    {friends.map(friend => (
    <FriendListItem key={friend.id} {...friend} />
    ))}
</ul>
);

FriendList.propTypes = {
friends: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    })
).isRequired,
};

export default FriendList;
