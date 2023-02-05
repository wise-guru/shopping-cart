import { Ring } from "@uiball/loaders";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Catalog from "./Catalog";

function ProductPage(props) {
  const { addProduct } = props;
  const [product, setProduct] = useState();
  const { route } = useParams();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectChecked, setSelectChecked] = useState();

  useEffect(() => {
    const productInfo = Catalog.find((item) => item.route === route);
    setProduct(productInfo);
  });
  return (
    <div className="productPage">
      {product ? (
        <div className="productInfo">
          <div className="left">
            <Link to="/shop">Shop</Link> {">"} {product.name}
          </div>
          <div className="left product-image-box">
            <div>
              <ul className="image-list">
                {product.images.map((image, index) => {
                  const handleCheckedInput = (e) => {
                    setSelectChecked(index);
                    setSelectedImage(e.target.value);
                  };

                  const handleCheckedImage = (e) => {
                    setSelectChecked(index);
                    setSelectedImage(e.target.name);
                  };
                  return (
                    <li className="image-hover" key={image}>
                      <label htmlFor={`image-${index}`} value={index}>
                        <input
                          type="radio"
                          name="image"
                          value={index}
                          id={`image-${index}`}
                          checked={selectChecked === index}
                          onMouseOver={(e) => {
                            handleCheckedInput(e);
                          }}
                          onChange={(e) => {
                            handleCheckedInput(e);
                          }}
                          onFocus={(e) => {
                            handleCheckedInput(e);
                          }}
                        />

                        <img
                          src={image}
                          alt="Product"
                          name={index}
                          onMouseOver={(e) => {
                            handleCheckedImage(e);
                          }}
                          onFocus={(e) => {
                            handleCheckedImage(e);
                          }}
                        />
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
            <img
              className="image-main"
              src={product.images[selectedImage]}
              alt={product.name}
            />
          </div>
          <div className="right">
            <h1 className="name">{product.name}</h1>
            <div className="price">${product.price}</div>
            <p className="description">{product.description}</p>
            <button type="button" onClick={() => addProduct(product)}>
              Add to cart
            </button>
          </div>
        </div>
      ) : (
        <div className="loadingAnimation">
          <Ring />
        </div>
      )}
    </div>
  );
}

export default ProductPage;
