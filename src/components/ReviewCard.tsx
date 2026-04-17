interface ReviewCardProps {
  rating: number;
  text: string;
  name: string;
}

export function ReviewCard({ rating, text, name }: ReviewCardProps) {
  const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);

  return (
    <article className="review-card">
      <p className="review-card__stars" aria-label={`${rating} av 5 stjerner`}>
        {stars}
      </p>
      <p className="review-card__text">"{text}"</p>
      <div className="review-card__meta">
        <p className="review-card__name">{name}</p>
        <p className="review-card__source">Google</p>
      </div>
    </article>
  );
}
