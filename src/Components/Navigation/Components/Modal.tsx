import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../../Footer";

interface User {
  login: string;
  name: string;
}

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
  user: User | null;
}

function Modal({ show, onClose, children }: ModalProps) {
  if (!show) {
    return null;
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          animate={{
            x: "-100%",
          }}
          transition={{ duration: "0.15" }}
          className="fixed inset-0"
        >
          <div className="h-screen w-screen p-10 absolute -right-full">
            <div className="h-full w-full rounded-md  flex flex-col bg-[#011627]  border-[#1E2D3D] border">
              <div className="flex-grow ">
                {children}
                <div className="w-full md-hidden text-white">
                  {links.map((link) => (
                    <Link key={link.key} to={link.to} onClick={onClose}>
                      <span className="border-b border-[#1E2D3D] py-4 flex px-5">
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
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

export default Modal;
