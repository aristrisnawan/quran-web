import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackComponent from "./BackComponent";

export default function DetailSurah() {
  let surat = useParams();
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  // const ayat = detail.verses;

  useEffect(async () => {
    try {
      const response = await axios.get(
        `https://api.quran.sutanlab.id/surah/${surat.id}`
      );
      // const { data } = response.data;
      const hasil = response.data.data.verses;
      setDetail(hasil);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [axios]);

  return (
    <div className="container mx-auto pl-20 pr-20 mb-7">
      {loading && (
        <div class=" flex justify-center items-center h-screen">
          <div class="animate-spin rounded-full h-12 w-12 border-b-4 border-gray-900"></div>
        </div>
      )}
      {!loading && (
        <div>
          <div className="mt-6">
            {detail.map((ayat) => {
              return (
                <div key={ayat.number.inSurah}>
                  <div className="">
                    <div className=" p-3 bg-black w-11 rounded-lg text-white">
                      {ayat.number.inSurah}
                    </div>
                    <h1></h1>
                    <p className=" float-right mb-5 mt-4 font-bold text-2xl">
                      {ayat.text.arab}
                    </p>
                  </div>
                  <div className="ml-5 mt-4">
                    <audio controls className="mt-9 mb-6">
                      <source src={ayat.audio.primary} />
                    </audio>
                    <p className="mb-5 font-semibold">
                      {ayat.text.transliteration.en}
                    </p>
                    <p className="mb-4 font-semibold">{ayat.translation.id}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <BackComponent />
        </div>
      )}
    </div>
  );
}
