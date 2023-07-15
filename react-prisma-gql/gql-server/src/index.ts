import { schema } from "./schema";
import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";

const port = Number(process.env.API_PORT) || 4000;

const yoga = createYoga({ schema });

const server = createServer(yoga);

server.listen(port, () => {
  console.info(`Server is running on http://localhost:${port}/graphql`);
});
