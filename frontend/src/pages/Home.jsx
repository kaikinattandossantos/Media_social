import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [notificacoes, setNotificacoes] = useState([]);
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    setNotificacoes([
      {
        id: 1,
        tipo: "equipe",
        texto: "Sua equipe DataWizards foi mencionada em um novo projeto Oracle AI Challenge!",
      },
      {
        id: 2,
        tipo: "avaliacao",
        texto: "Você recebeu uma nova avaliação de Malu Costa: “Excelente colaboração em equipe!”",
      },
      {
        id: 3,
        tipo: "conexao",
        texto: "Pedro Lima começou a seguir você.",
      },
    ]);

    setEventos([
      {
        id: 101,
        nome: "Hackathon CESAR School 2025",
        data: "20/11/2025",
        local: "Recife, PE",
        descricao: "Crie soluções de IA com impacto social em 48h.",
      },
      {
        id: 102,
        nome: "Tech Meetup - Cloud & Data",
        data: "28/11/2025",
        local: "Porto Digital",
        descricao: "Networking e palestras sobre dados e cloud.",
      },
      {
        id: 103,
        nome: "Infinity Hack Week",
        data: "05/12/2025",
        local: "Online",
        descricao: "Desafios técnicos com prêmios e certificações.",
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
          <h1 className="text-xl font-bold text-blue-600">MediaSocial</h1>
          <nav className="space-x-6 text-gray-700 font-medium">
            <Link to="/home" className="hover:text-blue-600">Início</Link>
            <Link to="/minharede" className="hover:text-blue-600">Minha Rede</Link>
            <Link to="/teams" className="hover:text-blue-600">Equipes</Link>
            <Link to="/profile/1" className="hover:text-blue-600">Perfil</Link>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-0">
        {/* FEED PRINCIPAL */}
        <section className="md:col-span-3 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Eventos e Projetos</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {eventos.map(ev => (
                <div key={ev.id} className="border rounded-xl p-4 hover:shadow-md transition">
                  <h3 className="font-semibold text-lg text-blue-700">{ev.nome}</h3>
                  <p className="text-sm text-gray-500 mb-2">{ev.local} • {ev.data}</p>
                  <p className="text-gray-700 text-sm">{ev.descricao}</p>
                  <button className="mt-3 bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700">
                    Participar
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Sugestões para você</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {["Hackathon B3", "Infinity APP", "Manguesol"].map((nome, i) => (
                <div key={i} className="p-4 border rounded-xl flex flex-col items-center hover:shadow-md transition">
                  <img
                    src={`https://api.dicebear.com/8.x/shapes/svg?seed=${nome}`}
                    alt={nome}
                    className="w-20 h-20 mb-2"
                  />
                  <h3 className="font-semibold text-gray-700">{nome}</h3>
                  <p className="text-xs text-gray-500">Projeto em alta</p>
                  <button className="mt-3 text-sm bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">
                    Ver detalhes
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COLUNA DIREITA */}
        <aside className="bg-white p-6 rounded-2xl shadow-md h-fit">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Notificações Recentes</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            {notificacoes.map(n => (
              <li key={n.id} className="border-b pb-2">
                <p>{n.texto}</p>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Tendências</h2>
          <ul className="space-y-2 text-sm text-blue-600">
            <li>#InteligênciaArtificial</li>
            <li>#HackathonB3</li>
            <li>#CesarSchool</li>
            <li>#InfinityApp</li>
          </ul>
        </aside>
      </main>
    </div>
  );
}
