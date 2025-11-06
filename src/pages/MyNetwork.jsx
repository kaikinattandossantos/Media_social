import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MyNetwork() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
    const fakeUsers = [
      { id: 9991, nome: "Ana Beatriz", area: "Design UX", interesses: ["UI", "Figma"] },
      { id: 9992, nome: "Pedro Lima", area: "Backend Java", interesses: ["Spring", "AWS"] },
      { id: 9993, nome: "Luiza Souza", area: "Cientista de Dados", interesses: ["Python", "ML"] },
      { id: 9994, nome: "Gustavo Henrique", area: "Gestão de Projetos", interesses: ["Scrum", "Inovação"] },
    ];
    setUsuarios([...localUsers, ...fakeUsers]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
          <h1 className="text-xl font-bold text-blue-600">MediaSocial</h1>
          <nav className="space-x-6 text-gray-700 font-medium">
            <Link to="/dashboard" className="hover:text-blue-600">Início</Link>
            <Link to="#" className="hover:text-blue-600 font-semibold text-blue-600 border-b-2 border-blue-600">Minha Rede</Link>
            <Link to="#" className="hover:text-blue-600">Equipes</Link>
            <Link to="#" className="hover:text-blue-600">Notificações</Link>
            <Link to="#" className="hover:text-blue-600">Mensagens</Link>
            <Link to="#" className="hover:text-blue-600">Pesquisa</Link>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO */}
      <main className="max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-0">
        {/* ESQUERDA */}
        <aside className="md:col-span-1 bg-white p-5 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Resumo da Rede</h3>
          <ul className="space-y-2 text-gray-700">
            <li> Conexões: <strong>{usuarios.length}</strong></li>
            <li> Equipes: <strong>4</strong></li>
            <li> Interesses: <strong>IA, Backend, Design</strong></li>
          </ul>
        </aside>

        {/* CENTRO */}
        <section className="md:col-span-2 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Sugestões de Conexões</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {usuarios.map((u) => (
              <div key={u.id} className="border rounded-lg p-4 flex flex-col items-center hover:shadow-md transition">
                <img
                  src={`https://api.dicebear.com/8.x/avataaars/svg?seed=${u.nome}`}
                  alt={u.nome}
                  className="w-20 h-20 rounded-full border mb-2"
                />
                <h4 className="font-semibold text-gray-800">{u.nome}</h4>
                <p className="text-sm text-gray-500">{u.area || "Desenvolvedor(a)"}</p>
                <div className="flex flex-wrap justify-center gap-1 mt-2">
                  {(u.interesses || ["Tech"]).map((i, index) => (
                    <span key={index} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">{i}</span>
                  ))}
                </div>

                <div className="flex gap-2 mt-3">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition">
                    Conectar
                  </button>
                  <Link
                    to={`/profile/${u.id}`}
                    className="border border-blue-500 text-blue-600 px-3 py-1 rounded-md text-sm hover:bg-blue-50"
                  >
                    Ver Perfil
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DIREITA */}
        <aside className="md:col-span-1 bg-white p-5 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Sugestões baseadas em equipes</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li> Brenno — Hackathon B3</li>
            <li> Kathlin — Infinity APP</li>
            <li> Max — IA Project</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Sugestões baseadas em interesses</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li> Machine Learning</li>
            <li> Empreendedorismo</li>
            <li> Backend Avançado</li>
          </ul>
        </aside>
      </main>
    </div>
  );
}
