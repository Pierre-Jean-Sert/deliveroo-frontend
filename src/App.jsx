/*

* Deliveroo frontend

* App function

*/

//! Style import
import "./App.css";

//! Libraries import
import axios from "axios";

//! Components import
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Products from "./components/Products";
import Basket from "./components/Basket";
import Footer from "./components/Footer";

//! Hooks import
import { useState, useEffect } from "react";

//* APP FUNCTION
//
function App() {
  //
  //States
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);

  //useEffect hook to recover data from backend with Axios
  useEffect(() => {
    const fetchData = async () => {
      //

      try {
        // Axios request
        const response = await axios.get(
          "https://site--backend-deliveroo--zs7p5ywqkq9f.code.run/"
        );

        //Response.data stocked in data state
        setData(response.data);

        //isLoading => false
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    //fetchData calling
    fetchData();
  }, []);

  return (
    <>
      {/* HEADER */}
      <Header></Header>

      {/* Dynamic components */}
      {isLoading ? (
        <span>En cours de chargement...</span>
      ) : (
        <>
          {/* RESTAURANT */}
          <div className="container">
            <Restaurant
              name={data.restaurant.name}
              description={data.restaurant.description}
              picture={data.restaurant.picture}
            ></Restaurant>{" "}
          </div>

          {/* MAIN */}
          <div className="grey">
            <div className="container main-bloc">
              {/* PRODUCTS */}
              <div className="left-main">
                <Products
                  categories={data.categories}
                  basket={basket}
                  setBasket={setBasket}
                ></Products>
              </div>
              {/* BASKET */}
              <div className="right-main">
                <Basket basket={basket} setBasket={setBasket}></Basket>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <Footer></Footer>
        </>
      )}
    </>
  );
}

export default App;
