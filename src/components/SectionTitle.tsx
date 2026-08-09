type SectionTitleProps = {
  eyebrow: string;
  heading?: string;
};

/**
 * Small "eyebrow" label with an optional heading underneath.
 * Used for the recurring section headers on the homepage
 * (Work, About, Contact).
 */
function SectionTitle({ eyebrow, heading }: SectionTitleProps) {
  return (
    <>
      <p className="eyebrow">{eyebrow}</p>
      {heading && <h2>{heading}</h2>}
    </>
  );
}

export default SectionTitle;
