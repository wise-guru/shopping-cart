import Catalog from "./Catalog";

function ProductsPage(props) {
  return (
    // <div>
    //   {Catalog.filter(
    //     product)product.route.includes(this.props.location)).map(
    //       (filteredProduct) => <div>{props.name}</div>
    //     )
    //   )}
    // </div>

    <div>
      {Catalog.filter((product) => product.id.includes(props)).map(
        (filteredProduct) => {
          return <div>{filteredProduct.name}</div>;
        }
      )}
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
