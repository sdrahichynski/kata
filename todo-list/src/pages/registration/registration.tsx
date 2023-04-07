import * as React from "react";

interface LoginProps {}

const Registration: React.FC<LoginProps> = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<null | string>(null);

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && <div style={{ color: "red" }}>{error}</div>}

      <button type={"submit"}>Sign Up!</button>
    </form>
  );
};

export default Registration;
