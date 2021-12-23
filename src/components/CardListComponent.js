import React from "react";

export default function CardListComponent({ listsurah }) {
  //   console.log(listsurah);
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center mt-6">
        {listsurah.map((surah) => {
          return (
            <div
              className=" bg-gray-400 w-80 h-32 rounded-md mx-auto mb-4"
              key={surah.number}
            >
              <div className="mt-6">
                <p className="font-bold text-xl pl-2">
                  {surah.name.transliteration.id}
                </p>
                <p className="font-extrabold text-2xl float-right pr-2">
                  {surah.name.short}
                </p>
                <p className="font-semibold mt-5 pl-2">
                  {surah.name.translation.id}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
