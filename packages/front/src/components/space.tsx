export const Space = () => (
  <div className="z-[-1] fixed inset-0 bg-primary overflow-hidden ntb-space">
    {[...Array(4)].map((_, i) => (
      <div key={`ntb-space__stars-${i}`} className="ntb-space__stars" />
    ))}
  </div>
);

export default Space;
