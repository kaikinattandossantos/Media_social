import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RatingStars from "../components/RatingStars";

export default function Profile() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const user = usuarios.find((u) => u.id === Number(id));
    setUsuario(user);
  }, [id]);

  if (!usuario) return <div className="text-center mt-20 text-gray-600">Carregando perfil...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER FIXO */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
          <h1 className="text-xl font-bold text-blue-600">MediaSocial</h1>
          <nav className="space-x-6 text-gray-700 font-medium">
            <a href="/home" className="hover:text-blue-600">Início</a>
            <a href="/teams" className="hover:text-blue-600">Equipes</a>
            <a href="/minharede" className="hover:text-blue-600">Minha Rede</a>
            <a href="/notifications" className="hover:text-blue-600">Notificações</a>
            <a href="#" className="hover:text-blue-600">Mensagens</a>
            <a href="#" className="hover:text-blue-600">Pesquisa</a>
          </nav>
          <div className="flex items-center space-x-3">
            <img
              src={`https://api.dicebear.com/8.x/avataaars/svg?seed=${usuario.nome}`}
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-semibold text-gray-700">{usuario.nome}</span>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="max-w-6xl mx-auto mt-8 bg-white shadow-md rounded-2xl p-8">
        {/* Cabeçalho visual */}
        <div className="flex items-center space-x-6 border-b pb-6">
          <img
            src={`https://api.dicebear.com/8.x/avataaars/svg?seed=${usuario.nome}`}
            alt="avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{usuario.nome}</h2>
            <p className="text-gray-600">{usuario.email}</p>
            <p className="text-sm text-gray-400">
              Membro desde {new Date(usuario.dataCadastro).toLocaleDateString("pt-BR")}
            </p>
            <div className="mt-2">
              <RatingStars nota={4.8} />
              <p className="text-xs text-gray-500">Reputação média</p>
            </div>
          </div>
        </div>

        {/* Sobre */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Sobre</h3>
          <p className="text-gray-600 leading-relaxed">
            Profissional em constante evolução, apaixonado por tecnologia, dados e inovação.
            Participante de hackathons e projetos que unem backend, IA e impacto social.
          </p>
        </section>

        {/* Comentários da rede */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Comentários da Rede</h3>
          <div className="space-y-4">
            {[
              {
                nome: "Brenno Oliveira",
                equipe: "Hackathon B3 - Equipe DataWizards",
                comentario: "Kaiki foi essencial na integração com o backend e APIs Oracle.",
              },
              {
                nome: "Kathlin Silva",
                equipe: "Projeto Infinity APP",
                comentario: "Extremamente colaborativo e atento aos detalhes no desenvolvimento do sistema interno.",
              },
              {
                nome: "Max Duarte",
                equipe: "CESAR School - Projeto de IA",
                comentario: "Demonstrou domínio em machine learning e apresentou uma solução robusta.",
              },
            ].map((c, i) => (
              <div key={i} className="p-4 border rounded-lg bg-gray-50">
                <p className="text-gray-700">{c.comentario}</p>
                <p className="text-sm text-blue-600 mt-1">— {c.nome}</p>
                <p className="text-xs text-gray-500 italic">{c.equipe}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mapa de Conexões */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Mapa de Conexões</h3>
          <p className="text-gray-600 mb-4">
            Visualize suas interações e conexões baseadas em equipes, interesses e objetivos profissionais.
          </p>

          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 h-64 overflow-hidden">
            {/* Bolhas simuladas */}
            {[
              { nome: "Kaiki", x: "45%", y: "40%", cor: "bg-blue-600 text-white" },
              { nome: "Brenno", x: "20%", y: "20%", cor: "bg-blue-200" },
              { nome: "Kathlin", x: "70%", y: "25%", cor: "bg-indigo-200" },
              { nome: "Max", x: "30%", y: "70%", cor: "bg-blue-300" },
              { nome: "Pedro", x: "65%", y: "70%", cor: "bg-indigo-300" },
            ].map((n, i) => (
              <div
                key={i}
                className={`absolute ${n.cor} rounded-full p-3 text-sm font-medium shadow`}
                style={{ left: n.x, top: n.y }}
              >
                {n.nome}
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-2">
            Bolhas próximas indicam interesses ou equipes em comum.
          </p>
        </section>

        {/* Sociais */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Sociais e Atividade Pública</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-700">Redes Sociais</h4>
              <ul className="text-blue-600 space-y-1 mt-2">
                <li><a href="https://www.linkedin.com/in/kaikinattan/" target="_blank" rel="noreferrer"> LinkedIn</a></li>
                <li><a href="https://github.com/kaikinattandossantos" target="_blank" rel="noreferrer"> GitHub</a></li>
                <li><a href="https://www.instagram.com/kaikinattan/" className="hover:underline"> Instagram</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-700">Status Jurídico e Social</h4>
              <ul className="space-y-1 text-gray-600 mt-2">
                <li> Nenhum processo ativo</li>
                <li> Participa de grupos: Tecnologia, Inovação, Empreendedorismo</li>
                <li> Interesses pessoais: Anime, Filosofia, MMA, IA</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Projetos em Destaque</h3>
          <ul className="space-y-2 text-blue-600">
            <li><a href="https://github.com/kaikinattandossantos/Microsservico_Acoes_B3" target="_blank" rel="noreferrer"> Microsserviço de Ações B3</a></li>
            <li><a href="https://github.com/kaikinattandossantos/Hackathon_NASA" target="_blank" rel="noreferrer"> Projeto Manguesol (NASA Space Apps)</a></li>
            <li><a href="https://github.com/kaikinattandossantos/Infinity_APP" target="_blank" rel="noreferrer"> Plataforma Infinity APP</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
