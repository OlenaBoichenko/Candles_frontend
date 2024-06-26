import { useAuth0 } from "@auth0/auth0-react";

const Account = () => {
     const { user, isAuthenticated } = useAuth0();

    return ( 
        isAuthenticated&& (
        <div>
            <h2>My account</h2>
            <p>{user.nickname}</p>
            <p>{user.email}</p>
        </div>
     ));
}
 
export default Account;