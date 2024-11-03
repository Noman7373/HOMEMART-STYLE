import { useSelector } from "react-redux";

import Allnewarrivalitems from "./Allnewarrivalitems";
const Newarrival = () => {
  // Get Data from Cartslice store
  const product = useSelector((state) => state.cart.allProducts);
  
  // Mataching items category the data to the input
  const getAllProducts = product.filter(
    (items) => items.category == "New_Arrival"
  );

  return (
    <div className="py-[50px]">
      <div>
        <h1 className="uppercase my-[20px] p-1 text-center border-b-[4px] border-slate-500 shadow-lg w-fit text-[25px] md:text-[40px]">
          New Arrival
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4 xs:place-items-center">
        {getAllProducts.length > 0 ? (
          getAllProducts.map((items) => {
            return <Allnewarrivalitems key={items.id} items={items} />;
          })
        ) : (
          <p>No Products Available</p>
        )}
      </div>
    </div>
  );
};

export default Newarrival;
