import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex-column p-3 mt-5">
      <Link className="btn btn-primary btn-block " to="/login">
        Login
      </Link>
      <Link className="btn btn-primary btn-block" to="/register">
        Register
      </Link>
    </div>
  );
}

export default Home;
