import Hoodie from "../Assets/hoodie.jpg";

function Homepage() {
  return (
    <main className="homepage">
      <div>
        <h1>Unnecessary Products</h1>
        <div>
          View our catalog for the most pointless innovations you will have the
          privilege of viewing.
        </div>
        <a href="/shop">
          <button type="button">Shop Now</button>
        </a>
        <div />
      </div>

      <div>
        <img src={Hoodie} alt="umbrella shoes" />
      </div>
    </main>
  );
}

export default Homepage;
