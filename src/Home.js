import React from "react";
import "./Home.css";
import Product from "./Product";

import shop from "./shop2.jpg";
import teslaboard from "./teslaboard.jpeg";
import pic4 from "./pic4.jpg";
import origin from "./origin1.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Home() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="home">
      {/**/}
      <div className="home_container"></div>

      <div className="home_row">
        <h1>Products</h1>
        <hr/>
        <Product id="1" title="Tesla Board" price={999} image={teslaboard} />
      </div>

      <br />
    </div>
  );
}

export default Home;
