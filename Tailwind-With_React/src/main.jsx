import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import About from "./components/About.jsx";
// import Contact from "./components/Contact.jsx";
// import Home from "./components/Home.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => wait(0).then(() => import("./components/Home")));
const About = lazy(() => wait(0).then(() => import("./components/About")));
const Contact = lazy(() =>
  wait(0).then(() =>
    import("./components/Contact").then((module) => ({
      default: module.Contact,
    }))
  )
);

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
