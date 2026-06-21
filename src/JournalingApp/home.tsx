import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import PageShell from "../components/PageShell";

const Home: React.FC = () => {
  const handleLoginSuccess = (credentialResponse: any) => {
    console.log("Login Success:", credentialResponse);

    const idToken = credentialResponse.credential;

    fetch("http://localhost:3000/auth/google", {
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
      <PageShell backTo="/" backLabel="home" show3D>
        <p className="es-eyebrow">journaling</p>
        <h1 className="es-title">Journaling</h1>
        <p className="es-subtitle">
          Sign in with Google to start journaling.
        </p>
        <div style={{ marginTop: "1rem" }}>
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginFailure}
          />
        </div>
      </PageShell>
    </GoogleOAuthProvider>
  );
};

export default Home;
