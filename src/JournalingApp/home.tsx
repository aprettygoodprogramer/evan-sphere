import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Split from "react-split";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:12345";

const Home: React.FC = () => {
  const handleLoginSuccess = (credentialResponse: any) => {
    console.log("Login Success:", credentialResponse);

    const idToken = credentialResponse.credential;

    fetch(`${API_BASE_URL}/auth/google`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_token: idToken }),
    }).catch((error) => console.error("Request failed:", error));
  };

  const handleLoginFailure = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Split className="split-container" sizes={[40, 60]}>
        <div className="left-panel">
          <h1>Your Journey Starts Here</h1>
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginFailure}
          />
        </div>
        <div className="right-panel">
          <p>Welcome to your journey with this journaling program!</p>
        </div>
      </Split>
    </GoogleOAuthProvider>
  );
};

console.log("Google Client ID:", import.meta.env.VITE_GOOGLE_CLIENT_ID);
console.log("API Base URL:", API_BASE_URL);

export default Home;
