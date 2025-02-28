import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Home: React.FC = () => {
  const handleLoginSuccess = (credentialResponse: any) => {
    console.log("Login Success:", credentialResponse);
  };

  const handleLoginFailure = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId="169031639605-7nkqs7vod1cpfqs1i57k6v0h8thj058i.apps.googleusercontent.com">
      <div>
        <h1>Hello World</h1>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Home;
