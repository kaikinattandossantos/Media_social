import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Teams() {
  const [filtroTipo, setFiltroTipo] = useState("Todos");
  const [filtroLocal, setFiltroLocal] = useState("Todos");

  const equipes = [
    {
      id: 1,
      nome: "DataWizards",
      tipo: "Hackathon",
      local: "Recife, PE",
      descricao:
        "Equipe premiada na B3, desenvolvendo soluções de IA e Oracle Cloud.",
      tags: ["IA", "Java", "Oracle Cloud"],
      nota: 4.8,
      membros: 5,
    },
    {
      id: 2,
      nome: "Manguesol",
      tipo: "Startup",
      local: "Olinda, PE",
      descricao:
        "Solução ecológica com análise de dados ambientais (NASA Space Apps).",
      tags: ["Python", "Sustentabilidade", "Flask"],
      nota: 4.9,
      membros: 4,
    },
    {
      id: 3,
      nome: "InfinityAPP",
      tipo: "Projeto Acadêmico",
      local: "Recife, PE",
      descricao:
        "Aplicação para gerenciamento de alunos e instrutores da Infinity School.",
      tags: ["Django", "React", "Educação"],
      nota: 4.7,
      membros: 6,
    },
    {
      id: 4,
      nome: "B3Invest",
      tipo: "Hackathon",
      local: "São Paulo, SP",
      descricao:
        "Equipe focada em finanças e análise de mercado com APIs da B3.",
      tags: ["Finanças", "APIs", "Spring Boot"],
      nota: 4.6,
      membros: 5,
    },
  ];

  const tipos = ["Todos", "Hackathon", "Startup", "Projeto Acadêmico"];
  const locais = ["Todos", "Recife, PE", "Olinda, PE", "São Paulo, SP"];

  const equipesFiltradas = equipes.filter(
    (e) =>
      (filtroTipo === "Todos" || e.tipo === filtroTipo) &&
      (filtroLocal === "Todos" || e.local === filtroLocal)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
          <h1 className="text-xl font-bold text-blue-600">MediaSocial</h1>
          <nav className="space-x-6 text-gray-700 font-medium">
            <Link to="/home" className="hover:text-blue-600">
              Início
            </Link>
            <Link
              to="/minharede"
              className="hover:text-blue-600"
            >
              Minha Rede
            </Link>
            <Link
              to="/teams"
              className="text-blue-600 border-b-2 border-blue-600 pb-1"
            >
              Equipes
            </Link>
            <Link to="/notifications" className="hover:text-blue-600">
              Notificações
            </Link>
            <Link to="#" className="hover:text-blue-600">
              Mensagens
            </Link>
            <Link to="#" className="hover:text-blue-600">
              Pesquisa
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
            Explorar Equipes
          </h2>

          <div className="flex gap-3">
            <select
              value={filtroTipo}
              onChange={(e) => setFiltroTipo(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            >
              {tipos.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            <select
              value={filtroLocal}
              onChange={(e) => setFiltroLocal(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            >
              {locais.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </div>
        </div>

        {/* GRID DE EQUIPES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipesFiltradas.map((equipe) => (
            <div
              key={equipe.id}
              className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-800">
                  {equipe.nome}
                </h3>
                <span className="text-sm text-gray-500">{equipe.tipo}</span>
              </div>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {equipe.descricao}
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                {equipe.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500 mb-2">
                📍 {equipe.local}
              </p>
              <p className="text-sm text-gray-500">
                ⭐ {equipe.nota} | 👥 {equipe.membros} membros
              </p>

              <div className="flex gap-2 mt-4">
                <Link
                  to={`/team/${equipe.id}`}
                  className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-blue-700 transition"
                >
                  Ver equipe
                </Link>
                <button className="border border-blue-600 text-blue-600 px-4 py-1.5 rounded-md text-sm hover:bg-blue-50 transition">
                  Participar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* NENHUMA EQUIPE */}
        {equipesFiltradas.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            Nenhuma equipe encontrada com esses filtros.
          </p>
        )}
      </main>
    </div>
  );
}
