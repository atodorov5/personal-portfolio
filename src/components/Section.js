export const Section = (props) => {
  return (
    <div className="flex flex-col w-9/12 items-center bg-beige rounded-xl mb-5 border-2 border-darkGreen justify-between gap-2.5 py-3">
      <p className="text-3xl text-darkGreen">{props.title}</p>
      {props.children}
    </div>
  );
};
