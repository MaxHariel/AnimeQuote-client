export default function Card({ quote }) {
  return (
    <div class="bg-white p-4 rounded mt-4">
      <p class="font-semibold">{quote.character}</p>
      <p class="italic my-1">"{quote.quote}"</p>
      <p>{quote.anime}</p>
    </div>
  );
}
