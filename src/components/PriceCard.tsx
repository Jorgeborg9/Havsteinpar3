interface PriceCardProps {
  tier: string;
  price: string;
  description: string;
}

export function PriceCard({ tier, price, description }: PriceCardProps) {
  return (
    <article className="price-card">
      <div>
        <p className="price-card__tier">{tier}</p>
        <p className="price-card__price">{price}</p>
      </div>
      <p className="price-card__description">{description}</p>
    </article>
  );
}
