import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";

export const App = () => {

  return (

    <div>

<nav>
  <NavLink to="/">Home</NavLink>
  {/* <NavLink to="/about">About</NavLink>
  <NavLink to="/products">Products</NavLink> */}
</nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
