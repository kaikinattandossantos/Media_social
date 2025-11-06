import { useState } from "react";
import FeedbackCard from "../components/FeedbackCard";

export default function Dashboard() {
  const [feedbacks] = useState([
    {
      id: 1,
      autor: "Kaiki Nattan",
      alvo: "Brenno Souza",
      categoria: "Trabalho em equipe",
      mensagem: "Excelente colega, sempre disposto a ajudar!",
      nota: 5,
      dataCriacao: new Date().toISOString(),
    },
    {
      id: 2,
      autor: "Malu Costa",
      alvo: "Kaiki Nattan",
      categoria: "Comunicação",
      mensagem: "Comunica-se bem, entrega os resultados no prazo.",
      nota: 4,
      dataCriacao: new Date().toISOString(),
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Feedbacks Recentes</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbacks.map(f => (
          <FeedbackCard key={f.id} feedback={f} />
        ))}
      </div>
    </div>
  );
}
