export const Header = () => {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <img
            className="h-8 w-auto"
            src="https://ui-avatars.com/api/?name=Atanas+Todorov&background=0D8ABC&color=fff&rounded=true"
            alt=""
          ></img>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">LINKS</div>
      </nav>
    </header>
  );
};
