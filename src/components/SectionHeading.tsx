interface SectionHeadingProps {
  title: string;
  description: string;
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-label">Havstein Par3</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}
