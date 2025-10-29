import axios from "axios";
import { useRef } from "react";
import { MainLayout } from "./mainLayout";

export function AddProduct() {
  const imgsrcRef = useRef();
  const titleRef = useRef();
  const sloganRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();

  function addingProductIntoDB() {
    console.log(
      imgsrcRef.current.value,
      titleRef.current.value,
      sloganRef.current.value,
      priceRef.current.value,
      categoryRef.current.value
    );
    axios
      .post("http://localhost:4500/addProduct", {
        imgsrc: imgsrcRef.current.value,
        title: titleRef.current.value,
        slogan: sloganRef.current.value,
        price: priceRef.current.value,
        category: categoryRef.current.value,
      })
      .then(function (response) {
        console.log("response = ", response);
        alert(response.data);
      })
      .catch(function (error) {
        console.log("error = ", error);
        alert(error.response.data);
      });

    imgsrcRef.current.value = "";
    titleRef.current.value = "";
    sloganRef.current.value = "";
    priceRef.current.value = "";
    categoryRef.current.value = "";
  }

  return (
    <>
      <MainLayout>
        <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl max-h-[88vh] mx-auto bg-white rounded-2xl shadow-xl p-6 overflow-y-auto">
          <div className="flex flex-col gap-3">
            {/* Image Source */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2.5 rounded-xl">
              <label className="flex items-center text-blue-700 font-semibold mb-1 text-sm">
                📸 Image Source
              </label>
              <input
                ref={imgsrcRef}
                type="url"
                placeholder="https://..."
                className="w-full p-2 border-2 border-blue-200 rounded-lg focus:border-blue-500 transition-colors text-sm"
              />
            </div>

            {/* Title */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-2.5 rounded-xl">
              <label className="flex items-center text-green-700 font-semibold mb-1 text-sm">
                ✨ Title
              </label>
              <input
                ref={titleRef}
                type="text"
                placeholder="Product name..."
                className="w-full p-2 border-2 border-green-200 rounded-lg focus:border-green-500 transition-colors text-sm"
              />
            </div>

            {/* Slogan */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-2.5 rounded-xl">
              <label className="flex items-center text-yellow-700 font-semibold mb-1 text-sm">
                💭 Slogan
              </label>
              <input
                ref={sloganRef}
                type="text"
                placeholder="Catchy phrase..."
                className="w-full p-2 border-2 border-yellow-200 rounded-lg focus:border-yellow-500 transition-colors text-sm"
              />
            </div>

            {/* Price */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-2.5 rounded-xl">
              <label className="flex items-center text-red-700 font-semibold mb-1 text-sm">
                💰 Price
              </label>
              <input
                ref={priceRef}
                type="text"
                placeholder="0.00"
                className="w-full p-2 border-2 border-red-200 rounded-lg focus:border-red-500 transition-colors text-sm"
              />
            </div>

            {/* Category */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-2.5 rounded-xl">
              <label className="flex items-center text-indigo-700 font-semibold mb-1 text-sm">
                🏷️ Category
              </label>
              <input
                ref={categoryRef}
                type="text"
                placeholder="Category..."
                className="w-full p-2 border-2 border-indigo-200 rounded-lg focus:border-indigo-500 transition-colors text-sm"
              />
            </div>
          </div>

          <button
            className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2.5 rounded-xl transition-colors text-sm"
            onClick={() => {
              addingProductIntoDB();
            }}
          >
            Save Product
          </button>
        </div>  
      </MainLayout>
    </>
  );
}
