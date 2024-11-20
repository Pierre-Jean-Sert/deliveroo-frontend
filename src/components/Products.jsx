/*

* Deliveroo frontend

* Products component

*/

function Products({ categories, basket, setBasket }) {
  //

  return categories.map((elem) => {
    //If meal !== empty
    if (elem.meals.length !== 0) {
      return (
        <>
          {/* Meal list */}
          <section key={elem.name}>
            <h2>{elem.name}</h2>

            <div className="left-container">
              {elem.meals.map((meals) => {
                return (
                  <>
                    <article
                      key={meals.id}
                      className="meals"
                      //  Onclick
                      onClick={() => {
                        for (let i = 0; i <= basket.length; i++) {
                          // Basket update if basket is not empty and meal already in basket
                          if (basket.length > 0 && basket[i].id === meals.id) {
                            const newTab = [...basket];
                            newTab[i].counter = basket[i].counter + 1;
                            setBasket(newTab);
                          }

                          // Basket update if new meal in basket
                          else {
                            const newTab = [...basket];
                            newTab.push({
                              id: meals.id,
                              title: meals.title,
                              price: Number(meals.price),
                              counter: 1,
                            });
                            setBasket(newTab);
                          }
                        }

                        console.log("basket", basket);
                      }}
                    >
                      <div className="meal-description">
                        <h3>{meals.title}</h3>

                        {/* Description */}
                        <p>{meals.description}</p>

                        {/* Price and popular */}
                        <div className="price">
                          <span>{meals.price} €</span>

                          {meals.popular && (
                            <span className="popular">
                              <i className="fa-solid fa-star"></i> Populaire
                            </span>
                          )}
                        </div>
                      </div>

                      {meals.picture && (
                        <img src={meals.picture} alt="Meal picture" />
                      )}
                    </article>
                  </>
                );
              })}
            </div>
          </section>
        </>
      );
    }
  });
}

export default Products;
