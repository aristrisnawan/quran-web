import React from "react";

export default function CardListComponent() {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center mt-6">
        <div className=" bg-gray-400 w-80 h-32 rounded-md mx-auto mb-4">
          <div className="mt-6">
            <p className="font-bold text-xl pl-2">Al-baqarah</p>
            <p className="font-extrabold text-2xl float-right pr-2">
              Tulisan Arab
            </p>
            <p className="font-semibold mt-5 pl-2">Sapi Betina</p>
          </div>
        </div>
        <div className=" bg-gray-400 w-80 h-32 rounded-md mx-auto mb-4">
          <div className="mt-6">
            <p className="font-bold text-xl pl-2">Al-baqarah</p>
            <p className="font-extrabold text-2xl float-right pr-2">
              Tulisan Arab
            </p>
            <p className="font-semibold mt-5 pl-2">Sapi Betina</p>
          </div>
        </div>
        <div className=" bg-gray-400 w-80 h-32 rounded-md mx-auto mb-4">
          <div className="mt-6">
            <p className="font-bold text-xl pl-2">Al-baqarah</p>
            <p className="font-extrabold text-2xl float-right pr-2">
              Tulisan Arab
            </p>
            <p className="font-semibold mt-5 pl-2">Sapi Betina</p>
          </div>
        </div>
      </div>
    </div>
  );
}
