import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Notifications() {
  const [notificacoes, setNotificacoes] = useState([]);

  useEffect(() => {
    setNotificacoes([
      {
        id: 1,
        tipo: "Equipe",
        titulo: "Novo convite para equipe",
        mensagem: "Você foi convidado a participar da equipe Infinity APP.",
        hora: "Há 2 horas",
      },
      {
        id: 2,
        tipo: "Avaliação",
        titulo: "Nova avaliação recebida",
        mensagem: "Malu Costa avaliou você: ⭐ 5 - Excelente trabalho em equipe!",
        hora: "Há 5 horas",
      },
      {
        id: 3,
        tipo: "Conexão",
        titulo: "Nova conexão",
        mensagem: "Pedro Lima começou a seguir você.",
        hora: "Ontem",
      },
      {
        id: 4,
        tipo: "Sistema",
        titulo: "Evento próximo",
        mensagem: "Hackathon CESAR School começará em 5 dias!",
        hora: "Ontem",
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
          <h1 className="text-xl font-bold text-blue-600">MediaSocial</h1>
          <nav className="space-x-6 text-gray-700 font-medium">
            <Link to="/home" className="hover:text-blue-600">Início</Link>
            <Link to="/minharede" className="hover:text-blue-600">Minha Rede</Link>
            <Link to="/teams" className="hover:text-blue-600">Equipes</Link>
            <Link to="/notifications" className="text-blue-600 border-b-2 border-blue-600 pb-1">Notificações</Link>
            <Link to="/profile/1" className="hover:text-blue-600">Perfil</Link>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO */}
      <main className="max-w-4xl mx-auto p-6 mt-6 bg-white shadow-md rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Notificações</h2>

        <ul className="divide-y divide-gray-200">
          {notificacoes.map((n) => (
            <li key={n.id} className="py-4 hover:bg-gray-50 transition">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">{n.titulo}</h3>
                  <p className="text-sm text-gray-600">{n.mensagem}</p>
                  <span className="text-xs text-gray-400">{n.hora}</span>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    n.tipo === "Equipe"
                      ? "bg-blue-100 text-blue-600"
                      : n.tipo === "Avaliação"
                      ? "bg-yellow-100 text-yellow-700"
                      : n.tipo === "Conexão"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {n.tipo}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {notificacoes.length === 0 && (
          <p className="text-center text-gray-500">Nenhuma notificação no momento.</p>
        )}
      </main>
    </div>
  );
}
