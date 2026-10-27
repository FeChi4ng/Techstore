import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-700">
          TechStore
        </Link>

        <nav
          aria-label="Navegação principal"
          className="flex flex-wrap gap-4 text-sm font-semibold"
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "text-blue-700 underline" : "text-slate-600"
            }
          >
            Início
          </NavLink>

          <NavLink
            to="/produtos"
            className={({ isActive }) =>
              isActive ? "text-blue-700 underline" : "text-slate-600"
            }
          >
            Produtos
          </NavLink>

          <NavLink
            to="/carrinho"
            className={({ isActive }) =>
              isActive ? "text-blue-700 underline" : "text-slate-600"
            }
          >
            Carrinho
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
