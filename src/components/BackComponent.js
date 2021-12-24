import React from "react";
import { Link } from "react-router-dom";

export default function BackComponent() {
  return (
    <div>
      <div className="mt-3">
        <Link to="/" className="text-blue-500 font-bold text-lg underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
