import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Dashboard({ setAuth }) {
  const [name, setName] = useState("");

  const getProfile = async () => {
    try {

      //proxy 

      const response = await fetch("/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();
      setName(parseRes.user_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
    toast.success("Logged out");
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <Fragment>
      <h1>Hello {name}</h1>
      <button className="btn btn-primary" onClick={(e) => logout(e)}>
        Logout
      </button>
    </Fragment>
  );
}

export default Dashboard;
