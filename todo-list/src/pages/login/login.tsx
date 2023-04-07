import * as React from "react";
import * as C from "components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import { InputRef } from "antd";
import { useAuth } from "hooks";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const userNameInputRef = React.useRef<InputRef>(null);
  const errRef = React.useRef<HTMLParagraphElement>(null);

  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<null | string>("sdfsdf");

  const navigate = useNavigate();
  const location = useLocation();

  const { setUser } = useAuth();

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    setUser({ userName, id: "3" });
    navigate(location.state.from ?? "/", { replace: true });
  };

  React.useEffect(() => {
    userNameInputRef.current?.focus();
  }, []);

  React.useEffect(() => {
    setError(null);
  }, [userName, password]);

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <C.Form.Item label="Username" required>
        <C.Input
          ref={userNameInputRef}
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </C.Form.Item>

      <C.Form.Item label="Password" required>
        <C.Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </C.Form.Item>

      {error && (
        <p ref={errRef} style={{ color: "red" }}>
          {error}
        </p>
      )}

      <C.Form.Item>
        <C.Button type="primary" htmlType="submit">
          Sign In!
        </C.Button>
      </C.Form.Item>

      <C.Typography.Link onClick={() => navigate("/register")}>
        Sign Up
      </C.Typography.Link>
    </form>
  );
};

export default Login;
