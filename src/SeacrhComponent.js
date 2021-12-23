import React from "react";

export default function SeacrhComponent() {
  return (
    <div>
      <div className="flex w-9/12 justify-center mx-auto mt-4">
        <input
          type="text"
          className=" bg-gray-100 w-full p-2 rounded-lg focus:ring-pink-500 focus:border-pink-500"
          placeholder="Cari surat..."
        />
      </div>
    </div>
  );
}
