import React from "react";

export default function SeacrhComponent({ handleChange }) {
  return (
    <div>
      <div className="flex w-9/12 justify-center mx-auto mt-4">
        <input
          type="text"
          className=" bg-slate-200 w-full p-2 rounded-lg focus:ring-pink-500 focus:border-pink-500 placeholder:text-gray-600"
          placeholder="Cari surat..."
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
