import React from "react";

export default function FooterComponent() {
  return (
    <div className="flex flex-row mb-4">
      <p className="mx-auto">
        created by{" "}
        <a href="https://github.com/aristrisnawan/" className=" text-blue-700">
          aristrisnawan
        </a>{" "}
        and api from{" "}
        <a
          href="https://github.com/sutanlab/quran-api"
          className=" text-blue-700"
        >
          sutanlab
        </a>
      </p>
    </div>
  );
}
