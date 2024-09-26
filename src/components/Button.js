export const Button = ({ text, icon, url }) => {
  return (
    <a href={url}>
      <button
        type="button"
        className="text-darkGreen bg-lightGrey font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 border-darkGreen border-2"
      >
        <div className="w-4 h-4 me-2">{icon}</div>
        {text}
      </button>
    </a>
  );
};
