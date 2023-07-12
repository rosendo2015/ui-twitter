import { createBrowserRouter } from "react-router-dom";
import { Status } from "./pages/Status";
import { Timeline } from "./pages/Timeline";
import { Default } from "./layouts/Default";

export const router = createBrowserRouter([
{
  path: '/',
  element: <Default />,
  children: [
    {
      path: '/',
      element: <Timeline />
    },
    {
      path: '/status',
      element: <Status />
    },
  ]
}

])