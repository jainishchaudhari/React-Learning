import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const {userid} = useParams()
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-7xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              One Piece Is Real
              <span className="hidden sm:block text-4xl">-ODA</span>
            </h2>
            <h2 className="text-4xl font-bold sm:text-5xl">
              <div >User: {userid}</div>
            </h2>

            
          </div>
        </div>
        <img
          className="w-90"
          src="https://i.pinimg.com/736x/d5/b0/1c/d5b01cdd72756e0fc241fa1e7f7abbf9.jpg"
          alt="image1"
        />
      </aside>

      <div className="grid  place-items-center sm:mt-20">
        <img
          className="sm:w-90 w-48"
          src="https://i.pinimg.com/736x/f6/54/f6/f654f6717b6f01a712e1f3b5030fa560.jpg"
          alt="image2"
        />
      </div>
    </div>
  );
}

export default User;
