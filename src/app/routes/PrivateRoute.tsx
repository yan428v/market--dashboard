import React from "react";
import { Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import {authStore} from "../../store/AuthStore.ts";

export const PrivateRoute = observer(
  ({ children }: { children: React.ReactNode }) => {
    return authStore.tokenValid ? children : <Navigate to="/signin" replace />;
  }
);
