import InstagramIcon from "./assets/ig-icon.svg";
import LinkedinIcon from "./assets/linkedin-icon.svg";
import GithubIcon from "./assets/github-icon.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Skeleton } from "@mui/material";

interface User {
  login: string;
  name: string;
}

function Footer() {
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

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <footer className="border-t border-[#1E2D3D] flex text-[#607B96] px-5 font-medium max-sm:px-0">
        <div className="flex sm:justify-between w-full px-2 max-sm:hidden">
          <div className="flex w-full">
            <span className="border-r py-2 pr-4 border-[#1E2D3D]">
              find me in:
            </span>
            <a
              href="https://www.instagram.com/artuuuuuuuuuur_/"
              className="py-2 px-3 border-r border-[#1E2D3D]
              self-center flex justify-center
              "
            >
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/de-maria/"
              className="py-2 px-3 border-r border-[#1E2D3D] self-center flex justify-center"
            >
              <img src={LinkedinIcon} alt="LinkedIn" />
            </a>
          </div>
          <div className="justify-center text-center border-l border-[#1E2D3D] px-5 self-center">
            {user && user.login ? (
              <a href={`https://github.com/${user.login}`}>
                <span className="text-center my-2 font-medium flex">
                  <span className="max-sm:hidden"> @{user.login}</span>
                  <img src={GithubIcon} alt="GitHub" className="ml-2" />
                </span>
              </a>
            ) : (
              <Skeleton
                variant="rectangular"
                height={30}
                width={190}
                animation={"wave"}
              />
            )}
          </div>
        </div>

        <div className="w-full sm:hidden">
          <div className="flex w-full">
            <a
              href="https://www.instagram.com/artuuuuuuuuuur_/"
              className="py-2 border-r border-[#1E2D3D]
              self-center flex justify-center
              flex-grow
              "
            >
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/de-maria/"
              className="py-2 border-r border-[#1E2D3D] self-center flex justify-center
              flex-grow"
            >
              <img src={LinkedinIcon} alt="LinkedIn" />
            </a>
            {user && user.login ? (
              <a
                href={`https://github.com/${user.login}`}
                className="self-center flex justify-center flex-grow"
              >
                <span className="text-center my-2 font-medium ">
                  <img src={GithubIcon} alt="GitHub" className="" />
                </span>
              </a>
            ) : (
              <span className="text-center my-2 font-medium self-center flex justify-center flex-grow">
                <Skeleton
                  variant="rectangular"
                  height={25}
                  width={1}
                  animation={"wave"}
                />
              </span>
            )}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
