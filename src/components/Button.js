export const Button = ({ text, icon, url }) => {
  return (
    <a href={url}>
      <button
        type="button"
        className="text-green-900 bg-gray-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 border-2"
      >
        {icon}
        {text}
      </button>
    </a>
  );
};
