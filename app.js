import React, { useState } from "react";

const BASE_URL = "http://static-lordsoul.vercel.app";

function App() {
  const [registerData, setRegisterData] = useState({
    userId: "", nickName: "", password: "", telephone: ""
  });

  const [loginData, setLoginData] = useState({
    userId: "", password: ""
  });

  const [registerMsg, setRegisterMsg] = useState("");
  const [loginMsg, setLoginMsg] = useState("");

  const handleRegister = async () => {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerData),
    });
    const data = await res.json();
    setRegisterMsg(data.message || "Đăng ký thất bại");
  };

  const handleLogin = async () => {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });
    const data = await res.json();
    setLoginMsg(data.message || "Đăng nhập thất bại");
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h2>Đăng ký</h2>
      <input placeholder="User ID" onChange={(e) => setRegisterData({ ...registerData, userId: e.target.value })} />
      <input placeholder="Nickname" onChange={(e) => setRegisterData({ ...registerData, nickName: e.target.value })} />
      <input type="password" placeholder="Mật khẩu" onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} />
      <input placeholder="Số điện thoại" onChange={(e) => setRegisterData({ ...registerData, telephone: e.target.value })} />
      <button onClick={handleRegister}>Đăng ký</button>
      <p>{registerMsg}</p>

      <hr />

      <h2>Đăng nhập</h2>
      <input placeholder="User ID" onChange={(e) => setLoginData({ ...loginData, userId: e.target.value })} />
      <input type="password" placeholder="Mật khẩu" onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
      <button onClick={handleLogin}>Đăng nhập</button>
      <p>{loginMsg}</p>
    </div>
  );
}

export default App;
