import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Users, Star, MessageCircle, Calendar } from "lucide-react";

export default function Notifications() {
  const [notificacoes, setNotificacoes] = useState({
    equipes: [],
    avaliacoes: [],
    conexoes: [],
    sistema: [],
  });

  useEffect(() => {
    setNotificacoes({
      equipes: [
        {
          id: 1,
          titulo: "Convite para equipe",
          mensagem: "Você foi convidado para a equipe Infinity APP.",
          hora: "Há 2 horas",
        },
      ],
      avaliacoes: [
        {
          id: 2,
          titulo: "Nova avaliação recebida",
          mensagem: "Malu Costa avaliou você: ⭐ 5 - Excelente trabalho em equipe!",
          hora: "Há 5 horas",
        },
      ],
      conexoes: [
        {
          id: 3,
          titulo: "Nova conexão",
          mensagem: "Pedro Lima começou a seguir você.",
          hora: "Ontem",
        },
      ],
      sistema: [
        {
          id: 4,
          titulo: "Evento próximo",
          mensagem: "Hackathon CESAR School começa em 5 dias!",
          hora: "Ontem",
        },
      ],
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
          <h1 className="text-xl font-bold text-blue-600">MediaSocial</h1>
          <nav className="space-x-6 text-gray-700 font-medium">
            <Link to="/home" className="hover:text-blue-600">Home</Link>
            <Link to="/minharede" className="hover:text-blue-600">Minha Rede</Link>
            <Link to="/teams" className="hover:text-blue-600">Equipes</Link>
            <Link to="/notifications" className="text-blue-600 border-b-2 border-blue-600 pb-1">Notificações</Link>
            <Link to="/profile/1" className="hover:text-blue-600">Perfil</Link>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO */}
      <main className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl">
        <div className="flex items-center mb-8">
          <Bell className="text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">Notificações</h2>
        </div>

        {/* SEÇÃO EQUIPES */}
        <Section
          icon={<Users className="text-blue-600" />}
          title="Equipes e Projetos"
          items={notificacoes.equipes}
          color="blue"
        />

        {/* SEÇÃO AVALIAÇÕES */}
        <Section
          icon={<Star className="text-yellow-500" />}
          title="Avaliações e Feedbacks"
          items={notificacoes.avaliacoes}
          color="yellow"
        />

        {/* SEÇÃO CONEXÕES */}
        <Section
          icon={<MessageCircle className="text-green-600" />}
          title="Conexões e Interações"
          items={notificacoes.conexoes}
          color="green"
        />

        {/* SEÇÃO SISTEMA / EVENTOS */}
        <Section
          icon={<Calendar className="text-indigo-600" />}
          title="Eventos e Sistema"
          items={notificacoes.sistema}
          color="indigo"
        />
      </main>
    </div>
  );
}

/* --- COMPONENTE DE SEÇÃO --- */
function Section({ icon, title, items, color }) {
  if (!items.length) return null;

  return (
    <div className="mb-8">
      <div className="flex items-center mb-3">
        {icon}
        <h3 className="ml-2 text-lg font-semibold text-gray-700">{title}</h3>
      </div>
      <div className="border-l-4 pl-4 rounded-md bg-gray-50 border-gray-200">
        {items.map((n) => (
          <div
            key={n.id}
            className="mb-3 p-3 border rounded-lg hover:bg-gray-100 transition"
          >
            <p className="font-medium text-gray-800">{n.titulo}</p>
            <p className="text-sm text-gray-600">{n.mensagem}</p>
            <p className="text-xs text-gray-400 mt-1">{n.hora}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
