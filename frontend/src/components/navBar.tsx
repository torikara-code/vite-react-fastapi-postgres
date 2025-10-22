import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "ユーザー管理", path: "/user" },
];

const NavBar: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md w-screen fixed top-0 h-16">
      <nav className="w-full mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">MyApp</div>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`hover:text-gray-200 text-gray-50  ${
                  location.pathname === item.path || location.pathname === "/"
                    ? "underline underline-offset-4"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
