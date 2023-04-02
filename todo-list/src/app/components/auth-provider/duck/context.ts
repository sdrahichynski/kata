import React from "react";
import { Auth, SetAuth } from "./types";

const AuthContext = React.createContext<[Auth, SetAuth]>(null as any);

export default AuthContext;
