import React from "react";

const Cart = ({ carts, setCarts }) => {
  console.log(carts);
  return (
    <div className="max-w-300 mx-auto shadow-sm mt-10">
      <div>
        <div className="p-10">
          <h2 className="text-2xl font-bold">Your Cart</h2>
        </div>

        <div>
          {carts.map((cart) => (
            <div key={cart.id}>
              <div className="px-10">
                <div className="bg-zinc-100 flex justify-between items-center p-5 rounded-lg border-zinc-200 mb-5">
                  <div className="flex items-center gap-3">
                    <img className="w-8 h-8" src={cart.icon} alt="" />

                    <div>
                      <h3 className="text-5 font-semibold text-[#101727]">
                        {cart.name}
                      </h3>
                      <p className="text-4 text-[#627382]">${cart.price}</p>
                    </div>
                  </div>

                  <div>
                    <button className="btn text-red-600">Remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
