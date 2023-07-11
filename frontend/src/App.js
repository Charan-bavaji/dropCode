import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/Login';
import Signin from './components/Signin';
import Home from './components/Home';
function App() {

  const validation = (username, password) => {
    if (username === "admin" && password === "1234") {
      console.log("loginned")
    } else {
      console.log("invalied")
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home>
      </Home>
    },
    {
      path: "/login",
      element: <Login
        validation={validation}
      ></Login>
    },
    {
      path: "/sigin",
      element: <Signin>
      </Signin>
    }
  ])
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
