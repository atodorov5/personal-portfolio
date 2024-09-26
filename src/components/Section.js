export const Section = (props) => {
  return (
    <div className="flex flex-col w-9/12 items-center bg-green-200 rounded-xl mb-5 border-2 border-green-900 justify-between gap-2.5 bg-opacity-30 py-3">
      <p className="text-3xl">{props.title}</p>
      {props.children}
    </div>
  );
};
