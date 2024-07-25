import { Link } from "react-router-dom";

const links = [
  {
    label: "_hello",
    to: "/",
    key: 0,
  },
  {
    label: "_about-me",
    to: "/about",
    key: 1,
  },
  {
    label: "_projects",
    to: "/projects",
    key: 2,
  },
  {
    label: "_contact-me",
    to: "/contact",
    key: 3,
  },
];

function Header() {
  return (
    <header className="border-b border-b-[#1E2D3D] flex text-[#607B96] px-5 space-x-20">
      <span className="my-2 min-w-fit mr-4">artur-de-maria</span>

      <div className="flex justify-between w-full">
        <div className="py-2 border-r border-r-[#1E2D3D]">
          {links.map((link) =>
            link.key < 3 ? (
              <Link key={link.key} to={link.to}>
                <span className="border-l border-l-[#1E2D3D] py-2 px-5">
                  {link.label}
                </span>
              </Link>
            ) : (
              ""
            )
          )}
        </div>
        <div className="py-2 ">
          <Link to={links[3].to}>
            <span className="border-l  border-l-[#1E2D3D] py-2 pl-5">
              {links[3].label}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
