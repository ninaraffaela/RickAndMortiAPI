import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="container mx-auto">
      {/* <marquee behavior="" direction="">
        <div className="animate-spin inline-block text-2xl">🍕</div>
      </marquee> */}
      <nav className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
