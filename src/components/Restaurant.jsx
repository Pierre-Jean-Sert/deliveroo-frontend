/*

* Deliveroo frontend

* Restaurant component

*/

function Restaurant({ name, description, picture }) {
  return (
    <>
      <section className="restaurant">
        <div className="left-bloc">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div className="right-bloc">
          <img src={picture} alt="Restaurant picture" />
        </div>
      </section>
    </>
  );
}

export default Restaurant;
