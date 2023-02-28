import { Redirect, Route } from 'react-router-dom';
import Calls from './Calls';
import Chats from './Chats';
import Settings from './Profile';

const NavTabs: React.FC = () => {
    return (
        <>
            <Route exact path="/app/calls" component={Calls} />
            <Route exact path="/app/chats" component={Chats} />
            <Route exact path="/app/settings" component={Settings} />
            <Route exact path="/app"><Redirect to="/app/chats" /></Route>
        </>
    );
};
  
export default NavTabs;