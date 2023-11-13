import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/images/tryning-pink.webp";
import { useAuthContext } from "@hooks/useAuthContext";
import { ImagePerfil } from "@components/ImagePerfil";

export function Header() {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { SignOut } = useAuthContext();

  function handleClick() {
    setOpen(!open);
  }

  const handleSignOut = () => {
    setShowModal(true);
  };

  const confirmSignOut = () => {
    SignOut();
    setShowModal(false);
  };

  const cancelSignOut = () => {
    setShowModal(false);
  };

  return (
    <header className="relative inset-x-0 top-0 z-50 bg-white pointer-events-auto">
      <nav
        className="flex items-center justify-between px-6 py-6 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img className="h-6 w-auto" src={logo} alt="" />
          </Link>
        </div>
        <div
          id="openNavBar"
          onClick={() => handleClick()}
          className="flex lg:hidden"
        >
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/home"
            className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
          >
            Inicio
          </Link>
          <Link
            to="/routines"
            className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
          >
            Rutinas
          </Link>
          <Link
            to="/become-trainer"
            className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
          >
            Volverse entrenador
          </Link>
          <Link
            to="/support"
            className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
          >
            Contacto
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center gap-5 ">
          <div
            className="text-sm font-semibold leading-6 text-[#f00] hover:underline cursor-pointer"
            onClick={() => handleSignOut()}
          >
            Cerrar sesion
          </div>
          <ImagePerfil className="border-[var(--color-primary)]" />
        </div>
      </nav>
      <div
        id="navBar"
        className={`${!open ? "hidden" : ""} lg:hidden`}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 z-50"></div>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-6 w-auto" src={logo} alt="" />
            </Link>
            <button
              id="closeNavBar"
              onClick={() => handleClick()}
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contacto
                </Link>
              </div>
              <div className="py-6">
                <div
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#f00] hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleSignOut()}
                >
                  Cerrar sesion
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 text-center bg-[#00000099]">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">
              Confirmar cierre de sesión
            </h2>
            <p className="text-[var(--color--dark-gray)] mb-4">
              ¿Seguro que quieres cerrar sesión?
            </p>

            <div className="flex justify-center gap-5">
              <button
                className="bg-[var(--color-primary)] text-[var(--color-white)] px-4 py-2 rounded-lg hover:opacity-80"
                onClick={() => confirmSignOut()}
              >
                Confirmar
              </button>
              <button
                className="bg-[var(--color-gray)] text-[var(--color-dark-gray)] px-4 py-2 rounded-lg hover:opacity-80"
                onClick={() => cancelSignOut()}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
