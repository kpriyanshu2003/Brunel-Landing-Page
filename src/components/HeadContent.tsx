function HeadContent({
  subtitle,
  title1,
  title2,
}: {
  subtitle: string;
  title1: string;
  title2: string;
}) {
  return (
    <div className="text-center">
      <span className="covGrace text-green-400 text-xl">{subtitle}</span>
      <br />
      <span className="text-5xl font-semibold">
        {title1} <br /> {title2}
      </span>
    </div>
  );
}

export default HeadContent;
