import { useEffect, useState } from "react";
import MenuIcon from "../assets/menu-icon.svg";
import CloseMenu from "../assets/close-menu.svg";
import Modal from "./Components/Modal";

import * as changeCase from "change-case";
import axios from "axios";

interface User {
  login: string;
  name: string;
}

function Navigation() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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

  return (
    <div className="">
      <button onClick={handleOpenModal} className="py-5">
        <img src={MenuIcon} />
      </button>

      <Modal show={showModal} onClose={handleCloseModal} user={user}>
        <header className="border-b border-b-[#1E2D3D] flex px-5 space-x-20">
          <div className="w-full flex justify-between items-center">
            {user && user.login && (
              <span className="my-4 min-w-fit mr-4 font-medium">
                {changeCase.kebabCase(user.name)}
              </span>
            )}
            <button
              onClick={handleCloseModal}
              className="mt-4 py-1 mb-4 bg-[#011627] pl-2"
            >
              <img src={CloseMenu} alt="Close menu" />
            </button>
          </div>
        </header>
      </Modal>
    </div>
  );
}

export default Navigation;
