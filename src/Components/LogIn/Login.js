import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <div className="nav_link">
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    )
  );
};
