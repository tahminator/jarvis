import RootPage from "@/app/RootPage.page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
]);
