import React from "react";
import HeaderComponent from "../components/HeaderComponent";

export default function Layout({ children }) {
  return (
    <div>
      <HeaderComponent />
      {children}
    </div>
  );
}
