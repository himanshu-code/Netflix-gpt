import React, { Suspense } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./Loader";
import MoviePage from "./MoviePage";
import GptSearch from "./GptSearch";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/gptSearch",
      element: <GptSearch />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movies/:id",
      element: (
        <Suspense fallback={<Loader />}>
          <MoviePage />
        </Suspense>
      ),
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
