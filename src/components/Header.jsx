function Header() {
  return (
    <header className="flex flex-wrap justify-evenly items-center p-4">
      <h1 className="text-4xl font-bold text-white">Anonime</h1>
      <nav className="flex space-x-12 mt-4 sm:mt-0">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          List anime
        </a>
      </nav>
      <input
        type="text"
        placeholder="Search anime or movie"
        className="bg-gray-700 text-white rounded-full px-4 py-2 mt-4 sm:mt-0 focus:outline-none"
      />
    </header>
  );
}

export default Header;
