import RatingStars from "./RatingStars";

export default function FeedbackCard({ feedback }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
      <h2 className="font-semibold text-lg text-gray-700">{feedback.alvo}</h2>
      <p className="text-sm text-gray-500">por {feedback.autor}</p>
      <RatingStars rating={feedback.nota} />
      <p className="mt-3 text-gray-700">{feedback.mensagem}</p>
      <span className="text-xs text-gray-400 block mt-2">
        {new Date(feedback.dataCriacao).toLocaleDateString()}
      </span>
    </div>
  );
}
