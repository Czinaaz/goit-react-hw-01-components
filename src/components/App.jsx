import Profile from '../components/profile/Profile';
import Statistics from '../components/statistics/Statistics';
import FriendList from '../components/friend-list/FriendList';
import TransactionHistory from '../components/transaction-history/TransactionHistory'

import user from '../path/user.json';
import data from '../path/data.json';
import friends from '../path/friends.json';
import transactions from '../path/transactions.json';



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