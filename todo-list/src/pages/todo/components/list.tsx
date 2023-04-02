import * as React from "react";
import * as T from "../../../types";
import { Link } from "react-router-dom";
import * as H from "hooks";

const LIST: T.ToDo[] = [
  {
    id: "1",
    title: "Develop resource",
    content: "Provide resource to handle CRUD",
  },
  {
    id: "2",
    title: "AUTH",
    content: "Provide Auth",
  },
  {
    id: "3",
    title: "Mock API",
    content: "Provide Auth",
  },
];

interface ListProps {}

const List: React.FC<ListProps> = () => {
  const [auth] = H.useAuth();

  return (
    <div style={{ textAlign: "center" }}>
      <h3>User: {auth.user?.userName}</h3>
      {LIST.map((todo) => (
        <div
          style={{
            width: "200px",
            padding: "20px",
            margin: "20px auto",
            borderRadius: "5px",
            boxShadow: "2px 2px 8px rgba(0,0,0,.1)",
          }}
        >
          <h3 style={{ marginTop: "0" }}>{todo.title}</h3>
          <p>{todo.content}</p>
          <Link to={`todos/${todo.id}`}>Show</Link>
        </div>
      ))}
    </div>
  );
};

export default List;
