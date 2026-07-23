const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
        <div className="flex items-center justify-between">
            <div className="text-white text-lg font-semibold">
                <a href="/">ChatDoc</a>
            </div>
            <div className="flex space-x-4">
                <a href="/signIn" className="text-gray-300 hover:text-white">Se connecter</a>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;