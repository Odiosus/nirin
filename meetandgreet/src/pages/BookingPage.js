import React, { useContext } from "react";
import BookingComponent from "../components/BookingComponent";
import { MyContext } from "../Context";
import { Redirect } from "react-router-dom";
export default function BookingPage({ history, location }) {
  const context = useContext(MyContext);
  return (
    <div className="container">
      <BookingComponent />
    </div>
  );
}
