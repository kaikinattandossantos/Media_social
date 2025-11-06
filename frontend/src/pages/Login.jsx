import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const user = usuarios.find(u => u.email === email && u.senha === senha);

    if (user) {
      localStorage.setItem("usuarioLogado", JSON.stringify(user));
      navigate("/home");
    } else {
      setErro("Email ou senha incorretos.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-md w-96">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h1>
        {erro && <p className="text-red-500 text-sm mb-4">{erro}</p>}

        <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
        <input
          type="email"
          className="w-full mb-4 p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <label className="block text-sm font-medium text-gray-600 mb-1">Senha</label>
        <input
          type="password"
          className="w-full mb-6 p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          required
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Entrar
        </button>

        <p className="text-sm text-center mt-4 text-gray-600">
          Não tem conta?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </form>
    </div>
  );
}
