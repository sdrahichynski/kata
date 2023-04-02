import * as React from "react";
import { AuthContext } from "app/components/auth-provider/duck";

export const useAuth = () => React.useContext(AuthContext);
