import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

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
console.log("API Base URL:", API_BASE_URL);

export default Home;
