import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transaction/TransactionHistory';

import user from '../JSON/user.json';
import data from '../JSON/data.json';
import friends from '../JSON/friends.json';
import transactions from '../JSON/transactions.json';



export const App = () => {
    return (
        <div>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />;
            <Statistics title="Upload stats" stats={data} />;
            <FriendList friends={friends} />;
            <TransactionHistory items={transactions} />;
        </div>
    )
};