import { lazy } from "react";

const routes = [
  {
    path: "/",
    component: lazy(() => import("@pages/Home/Home")),
  },

  {
    path: "*",
    component: lazy(() => import("@pages/NotFound/NotFound")),
  },
];

export default routes;
