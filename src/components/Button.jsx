const Button = ({ title }) => {
  return (
    <button className="bg-dark-slate-grey text-white p-4 w-full hover:bg-opacity-90 duration-200 rounded-lg">
      {title}
    </button>
  );
};

export { Button };
