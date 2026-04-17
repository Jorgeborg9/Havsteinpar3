interface PartnerLogoCardProps {
  name: string;
  logo: string;
}

export function PartnerLogoCard({ name, logo }: PartnerLogoCardProps) {
  return (
    <article className="partner-card">
      <img className="partner-card__logo" src={logo} alt={name} />
    </article>
  );
}
