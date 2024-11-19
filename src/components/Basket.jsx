/*

* Deliveroo frontend

* Basket component

*/

function Basket({ basket, setBasket }) {
  //
  let subTotal = 0;
  let deliveryCost = 2.5;

  return (
    <>
      <section className="basket">
        <div className="basket-button">Valider mon panier</div>

        {/* Meals list */}
        {basket.map((elem) => {
          //
          //Sub-total update
          subTotal = subTotal + elem.price * elem.counter;

          //Return and print
          return (
            <>
              <div key={elem.id} className="basket-list">
                <div className="counter">
                  {/* Delete a meal */}
                  <button
                    onClick={() => {
                      for (let i = 0; i < basket.length; i++) {
                        // Basket update if counter >0
                        if (basket[i].id === elem.id && elem.counter > 1) {
                          const newTab = [...basket];
                          newTab[i].counter = basket[i].counter - 1;
                          setBasket(newTab);
                        }

                        // Basket update if counter =0
                        else {
                          const newTab = [...basket];
                          newTab.splice(i, 1);
                          setBasket(newTab);
                        }
                      }
                    }}
                  >
                    <i className="fa-solid fa-circle-minus"></i>
                  </button>
                  <p>{elem.counter}</p>
                  <button
                    onClick={() => {
                      for (let i = 0; i < basket.length; i++) {
                        // Basket update if counter >0
                        if (basket[i].id === elem.id) {
                          const newTab = [...basket];
                          newTab[i].counter = basket[i].counter + 1;
                          setBasket(newTab);
                        }
                      }
                    }}
                  >
                    <i className="fa-solid fa-circle-plus"></i>
                  </button>
                </div>

                <div>{elem.title}</div>
                <div>{(elem.price * elem.counter).toFixed(2)}€</div>
              </div>
            </>
          );
        })}

        {/* Empty basket management */}
        {basket.length === 0 ? (
          <div className="empty-basket">Votre panier est vide</div>
        ) : (
          <>
            {/* Sub-total and delivery cost */}
            <div className="sub-total">
              <div>
                <p>Sous-total</p>
                <p>{subTotal.toFixed(2)} €</p>
              </div>

              <div>
                <p>Frais de livraison</p>
                <p>{deliveryCost.toFixed(2)} €</p>
              </div>
            </div>
            {/* Total */}
            <div className="total">
              <p>Total</p>
              <p>{(subTotal + deliveryCost).toFixed(2)} €</p>
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default Basket;