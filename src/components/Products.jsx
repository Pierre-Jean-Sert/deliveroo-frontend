/*

* Deliveroo frontend

* Products component

*/

function Products({ categories }) {
  //
  //*Sub-function description
  function description(description) {
    if (description) {
      //Check description lenght <60
      if (description.length < 60) {
        return (
          <>
            <p>{description}</p>
          </>
        );

        //Else, limit description lenght to 60 letters without cut words
      } else {
        return (
          <>
            <p>
              {description.slice(0, description.lastIndexOf(" ", 60)) + " ..."}
            </p>
          </>
        );
      }
    }

    return description;
  }

  return categories.map((elem) => {
    //If meal !== empty
    if (elem.meals.length !== 0) {
      return (
        <>
          {/* Meal list */}
          <h2>{elem.name}</h2>

          <section className="left-container">
            {elem.meals.map((meals) => {
              return (
                <>
                  <article className="meals">
                    <div className="meal-description">
                      <h3>{meals.title}</h3>

                      {/* Description */}
                      {description(meals.description)}

                      {/* Price and popular */}
                      <div className="price">
                        <span>{meals.price} €</span>
                        <span></span>
                      </div>
                    </div>

                    {meals.picture && (
                      <img src={meals.picture} alt="Meal picture" />
                    )}
                  </article>
                </>
              );
            })}
          </section>
        </>
      );
    }
  });
}

export default Products;
