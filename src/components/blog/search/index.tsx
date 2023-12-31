"use client";

const Search = ({ setSearchQuery }) => {
  return (
    <div
      className="relative text-black max-w-md mx-auto py-10"
      id="search-container"
    >
      <span className="absolute left-6 top-0 flex h-full items-center justify-center border-none bg-transparent p-0 text-slate-500 cursor-default">
        <svg
          width={18}
          height={18}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.75068 11.3405C1.65161 9.23359 1.65161 5.80439 3.75068 3.69748C4.76756 2.67681 6.11976 2.11292 7.55689 2.11292C8.99619 2.11292 10.3484 2.67681 11.3653 3.69748C13.4622 5.80439 13.4622 9.23359 11.3653 11.3405C9.2662 13.4452 5.84975 13.4452 3.75068 11.3405ZM18 16.4548L13.595 12.0333C15.7986 9.06529 15.5874 4.8471 12.9047 2.15226C10.0479 -0.715235 5.06587 -0.719606 2.21121 2.15226C-0.737072 5.10937 -0.737072 9.9286 2.21121 12.8857C3.68536 14.3654 5.62112 15.1041 7.55906 15.1041C9.14861 15.1041 10.7229 14.5752 12.0555 13.5785L16.4605 18L18 16.4548Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="search"
        name="q"
        placeholder="Search articles"
        className="text-primary bg-primary border-secondary focus:bg-secondary w-full appearance-none rounded-full border py-3 pl-14 pr-6 text-lg font-medium hover:border-team-current focus:border-team-current focus:outline-none"
        defaultValue=""
      />
    </div>
  );
};

export default Search;
