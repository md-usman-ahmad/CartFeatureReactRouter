import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MainLayout } from "./mainLayout";

export function ProductPage() {
  const { categoryName, productId } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  console.log("productDetails = ", productDetails);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:4500/getProducts/singleProduct",
      params: {
        categoryName,
        productId,
      },
    })
      .then((response) => {
        console.log("response.data = ", response.data);
        setProductDetails(response.data);
      })
      .catch((error) => {
        console.log("error = ", error);
      });
  }, []);

  return (
    <>
    <MainLayout>
      {productDetails.length > 0 && (
        <div id="variation-3" class="variation  zen-layout">
          <div class="max-w-4xl mx-auto py-2">
            {/* <div class="text-center mb-16">
        <h1 id="zen-title" class="text-5xl font-thin text-gray-800 mb-8 tracking-wide">Premium Wireless Headphones</h1>
        <div class="w-16 h-px bg-gray-300 mx-auto mb-8"></div>
        <p id="zen-slogan" class="text-lg font-light text-gray-600 max-w-lg mx-auto">Experience crystal-clear audio like never before</p>
        </div> */}
            <div class="product-image h-72 mb-8 mx-auto max-w-lg rounded-lg overflow-hidden">
              <img src={productDetails[0].imgsrc} alt="" className="w-full h-full object-contain" />
            </div>
            <div class="text-center mb-12">
              <span id="zen-price" class="text-5xl font-thin text-gray-800 me-3">
                {productDetails[0].title}
              </span>
              <span id="zen-price" class="text-2xl font-thin text-gray-800">
                ₹{productDetails[0].price}
              </span>
              <div class="mt-4">
                <span class="text-yellow-400">★★★★★</span>{" "}
                <span class="text-sm font-light text-gray-500 ml-2">(4.8)</span>
              </div>
            </div>
            <div class="max-w-2xl mx-auto text-center mb-5">
              <p
                id="zen-description"
                class="text-lg font-light text-gray-600 leading-relaxed"
              >
                {productDetails[0].slogan}
              </p>
            </div>
            <div class="flex justify-center space-x-8">
              <button class="px-12 py-4 border border-gray-800 text-gray-800 font-light hover:bg-gray-800 hover:text-white transition-all duration-500">
                Add to Cart
              </button>{" "}
              <button class="px-12 py-4 text-gray-600 font-light hover:text-gray-800 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
      </MainLayout>
    </>
  );
}
