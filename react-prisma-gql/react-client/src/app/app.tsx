import * as C from "../components";
import { useQuery } from "urql";
import { GetUsersDocument } from "../graphql/generated";

function App() {
  const [result] = useQuery({
    query: GetUsersDocument,
    variables: {},
  });

  console.log(result.data);

  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p4 gap-y-12">
      {result.data?.users.map((user, i) => (
        <C.UsersDisplay user={user} key={i} />
      ))}
    </div>
  );
}

export default App;
