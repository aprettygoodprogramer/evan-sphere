import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Home: React.FC = () => {
  const handleLoginSuccess = (credentialResponse: any) => {
    console.log("Login Success:", credentialResponse);

    const idToken = credentialResponse.credential;

    fetch("http://evan-spherejournalbackend.railway.internal/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_token: idToken }),
    }).catch((error) => console.error("failed git gud:", error));
  };

  const handleLoginFailure = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
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
console.log("Google Client ID:", import.meta.env.VITE_GOOGLE_CLIENT_ID);

export default Home;
