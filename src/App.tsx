import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./components/RootLayout";
import CharactersPage from "./pages/CharactersPage";
import DetailPage from "./pages/DetailPage";

const routerPizza = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: HomePage },
      { path: "/characters", Component: CharactersPage },
      { path: "/characters/:id", Component: DetailPage },
    ],
  },
]);

function App() {
  return <RouterProvider router={routerPizza} />;
}

export default App;
