import React from "react";
import { Auth } from "./types";

const AuthContext = React.createContext<Auth>(null as any);

export default AuthContext;
