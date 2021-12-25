import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SeacrhComponent from "../SeacrhComponent";

export default function CardListComponent({ listsurah }) {
  //   console.log(listsurah);
  const listSurah = listsurah;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    const hasil = e.target.value;
    console.log(hasil);
    setInput(hasil);
  };

  // useEffect(() => {
  //   setOutput(listsurah);
  // });

  useEffect(() => {
    setOutput([]);

    listSurah.filter((val) => {
      if (
        val.name.transliteration.id.toLowerCase().includes(input.toLowerCase())
      ) {
        setOutput((output) => [...output, val]);
        setLoading(false);
      }
    });
  }, [input]);

  return (
    <div>
      <SeacrhComponent handleChange={handleChange} />
      {output.length > 0 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center mt-6">
          {output.map((surah) => {
            return (
              <Link to={`detail/${surah.number}`}>
                <div
                  className=" bg-slate-200 w-80 h-32 rounded-md mx-auto mb-4 hover:drop-shadow-md hover:cursor-pointer"
                  key={surah.number}
                >
                  <div className="mt-6 pt-4">
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
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col mt-24">
          <p className="mx-auto text-lg font-bold">Surah tidak ditemukan ;(</p>
          <p className="mx-auto">
            (Sorry, this website still has bugs, if anyone has just opened this
            website or after refreshing this website, please type something in
            the searcbar)
          </p>
        </div>
      )}
    </div>
  );
}
