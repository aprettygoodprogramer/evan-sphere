import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Split from "react-split";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:12345";
const Home: React.FC = () => {
  const [authMessage, setAuthMessage] = useState<string | null>(null);

  const handleLoginSuccess = (credentialResponse: any) => {
    const idToken = credentialResponse.credential;
    fetch(`${API_BASE_URL}/auth/google`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id_token: idToken }),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data: { success: boolean; message: string }) => {
        setAuthMessage(data.message);
        console.log(data.success ? "Success:" : "Error:", data.message);
      })
      .catch((error) => {
        setAuthMessage("Login failed - please try again");
        console.error("Login request failed:", error);
      });
  };

  const fetchHello = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/hello`);
      const data = await response.text();
      console.log("/hello response:", data);
    } catch (error) {
      console.error("Error fetching /hello:", error);
    }
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Split className="split-container" sizes={[40, 60]}>
        <div className="left-panel">
          <h1>Your Journey Starts Here</h1>
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => console.log("Login Failed")}
          />
          <button onClick={fetchHello}>Test /hello Endpoint</button>
        </div>
        <div className="right-panel">
          <p>Welcome to your journaling program!</p>
        </div>
      </Split>
    </GoogleOAuthProvider>
  );
};

console.log("Environment Variables:", {
  VITE_GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  VITE_API_BASE_URL: API_BASE_URL,
});

export default Home;
