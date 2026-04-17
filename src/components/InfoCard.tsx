interface InfoCardProps {
  title: string;
  value: string;
  detail?: string;
}

export function InfoCard({ title, value, detail }: InfoCardProps) {
  return (
    <article className="info-card">
      <p className="info-card__title">{title}</p>
      <p className="info-card__value">{value}</p>
      {detail ? <p className="info-card__detail">{detail}</p> : null}
    </article>
  );
}
