import Catalog from "./Catalog";

function ProductsPage(props) {
  console.log(this.props.location);
  return (
    // <div>
    //   {Catalog.filter(
    //     product)product.route.includes(this.props.location)).map(
    //       (filteredProduct) => <div>{props.name}</div>
    //     )
    //   )}
    // </div>

    <div>
      {Catalog.filter((product) =>
        product.route.includes(this.props.location)
      ).map((filteredProduct) => {
        <div>{filteredProduct.name}</div>;
      })}
    </div>
  );
}
//   return (
//     <div>
//       <div>Products page</div>
//       <div>{props.name}</div>
//     </div>
//   );

export default ProductsPage;
