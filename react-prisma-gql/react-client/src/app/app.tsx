import * as C from "../components";
import * as T from "types";

const USERS_MOCK: T.User[] = [
  {
    name: "Prisma Fan",
    messages: [
      {
        body: "Prisma rocks!!",
      },
      {
        body: "Did I mention I love Prisma?",
      },
    ],
  },
];

function App() {
  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p4 gap-y-12">
      {USERS_MOCK.map((user, i) => (
        <C.UsersDisplay user={user} key={i} />
      ))}
    </div>
  );
}

export default App;
