import React, { useState, useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Split from "react-split";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:12345";

interface AuthResponse {
  success: boolean;
  message: string;
  session_id: string;
  sub: string;
}

interface VerifyRequest {
  session_id: string;
  sub: string;
}

const Home: React.FC = () => {
  const [authMessage, setAuthMessage] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(
    localStorage.getItem("session_id")
  );
  const [userSub, setUserSub] = useState<string | null>(
    localStorage.getItem("user_sub")
  );

  useEffect(() => {
    const verifySession = async () => {
      console.log("Verifying session...");
      console.log(sessionId, userSub);
      if (!sessionId || !userSub) return;

      try {
        const verifyBody: VerifyRequest = {
          session_id: sessionId,
          sub: userSub,
        };

        const response = await fetch(`${API_BASE_URL}/auth/verify`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(verifyBody),
        });

        const data = await response.json();
        console.log("Verification response:", data);
        if (!data.success) {
          localStorage.clear();
          setSessionId(null);
          setUserSub(null);
        }
      } catch (error) {
        console.error("Verification failed:", error);
      }
    };

    verifySession();
  }, []);

  const handleLoginSuccess = async (credentialResponse: any) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_token: credentialResponse.credential }),
      });

      const data: AuthResponse = await response.json();

      if (data.success) {
        const sessionId = data.session_id.toString();

        const sub = data.sub.toString();

        localStorage.setItem("session_id", sessionId);
        localStorage.setItem("user_sub", sub);
        setSessionId(sessionId);
        setUserSub(sub);
        setAuthMessage(data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
      setAuthMessage("Login failed - please try again");
    }
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Split className="split-container" sizes={[40, 60]}>
        <div className="left-panel">
          <h1>Your Journey Starts Here</h1>
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => setAuthMessage("Login Failed")}
          />
          {authMessage && <p>{authMessage}</p>}
        </div>
        <div className="right-panel">
          <p>Welcome to your journaling program!</p>
          {sessionId && (
            <>
              <p>Session: {sessionId}</p>
              {userSub && <p>User ID: {userSub}</p>}
            </>
          )}
        </div>
      </Split>
    </GoogleOAuthProvider>
  );
};

export default Home;
