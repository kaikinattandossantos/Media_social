import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import FeedbackCard from "../components/FeedbackCard";

export default function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    api.get(`/users/${id}`).then(res => setUser(res.data));
    api.get(`/feedbacks/alvo/${id}`).then(res => setFeedbacks(res.data));
  }, [id]);

  if (!user) return <p>Carregando...</p>;

  return (
    <div className="p-8">
      <div className="bg-white rounded-2xl shadow p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{user.nome}</h1>
        <p className="text-gray-500">{user.email}</p>
        <p className="mt-2 text-gray-600">CPF: {user.cpf}</p>
      </div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Feedbacks recebidos</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {feedbacks.map(f => (
          <FeedbackCard key={f.id} feedback={f} />
        ))}
      </div>
    </div>
  );
}
