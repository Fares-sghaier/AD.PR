import { useState } from "react";
import * as React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css"
const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/api/auth/validate";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div>
        <h2 className="etafakna-titl">Welcome</h2>
        <p className="etafakna-paragraphe">Lets starts by adding your account<br/>Have fun</p>
    <div className="login_containerr">
       
       
      <div className="login_form_containerr">
        <div className="leftt">
          <form className="form_containerr" onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="inputt"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="inputt"
            />
            {error && <div className="error_msgg">{error}</div>}
            <button type="submit" className="green">
              Sing In
            </button>
          </form>
        </div>
        <div className="ri">
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className="white">
              Sing Up
            </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
