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

//! Hooks import
import { useState, useEffect } from "react";

//* APP FUNCTION
//
function App() {
  //
  //States
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  //useEffect hook to recover data from backend with Axios
  useEffect(() => {
    const fetchData = async () => {
      //

      try {
        // Axios request
        const response = await axios.get(
          "https://site--backend-deliveroo--zs7p5ywqkq9f.code.run/"
        );

        //Response stocked in data state
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

          <div className="grey">
            {/* PRODUCTS */}
            <div className="container">
              <Products categories={data.categories}></Products>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
