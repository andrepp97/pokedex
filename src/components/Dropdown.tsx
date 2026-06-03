export const Dropdown = ({ options }: any) => {
  return (
    <div className="w-full max-w-xs">
      <div className="relative">
        <select className="w-full font-medium tracking-wider text-sm border text-slate-200 border-gray-600 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-500 shadow-sm focus:shadow-md appearance-none cursor-pointer">
          {options.map((option: any) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-primary text-slate-200"
            >
              {option.label}
            </option>
          ))}
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.2"
          stroke="currentColor"
          className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-200"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </div>
    </div>
  );
};
