import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as changeCase from "change-case";
import Navigation from "./Navigation/Navigation";
import axios from "axios";
import { Skeleton } from "@mui/material";

interface User {
  login: string;
  name: string;
}

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
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "https://api.github.com/users/artuuuuuuuuuur"
      );
      setUser(response.data);
    } catch (error) {
      console.error("ops! ocorreu um erro: " + error);
    }
  };

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {}, [user]);

  return (
    <header className="border-b border-b-[#1E2D3D] flex text-[#607B96] px-5 space-x-20">
      {user && user.login ? (
        <span className="my-4 min-w-fit mr-4 font-medium">
          {changeCase.kebabCase(user.name)}
        </span>
      ) : (
        <Skeleton height={50} width={200} />
      )}

      <div className="flex justify-between w-full max-lg:hidden">
        <div className="py-4 border-r border-r-[#1E2D3D]">
          {links.map((link) =>
            link.key < 3 ? (
              <Link key={link.key} to={link.to}>
                <span className="border-l border-l-[#1E2D3D] py-4 px-5">
                  {link.label}
                </span>
              </Link>
            ) : (
              ""
            )
          )}
        </div>
        <div className="py-4 ">
          <Link to={links[3].to}>
            <span className="border-l border-l-[#1E2D3D] py-4 pl-5">
              {links[3].label}
            </span>
          </Link>
        </div>
      </div>
      <div className="lg:hidden w-full text-right">
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
