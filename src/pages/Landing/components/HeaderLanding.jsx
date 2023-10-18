import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/images/tryning-pink.webp";
import { PublicRoutes } from "@common/constants/routes";

export function HeaderLanding() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <header className="relative inset-x-0 top-0 z-50  pointer-events-auto">
      <nav
        className="flex items-center justify-between px-6 py-6 md:px-8 "
        aria-label="Global"
      >
        <div className="flex md:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img className="h-6 w-auto" src={logo} alt="" />
          </Link>
        </div>
        <div
          id="openNavBar"
          onClick={() => handleClick()}
          className="flex md:hidden"
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
        <div className="hidden md:flex md:gap-x-2">
          <a
            href={`${PublicRoutes.TRAINER}`}
            className={`bg-transparent text-[var(--color-primary-trainer)] px-5 py-3 flex items-center shadow-md border border-[var(--color-primary-trainer)] rounded-full h-10 text-sm font-semibold hover:opacity-90 hover:scale-101`}
          >
            Soy entrenador
          </a>
          <Link
            to={`/${PublicRoutes.LOGIN}`}
            className={`bg-[var(--color-primary)] text-white px-5 py-3 flex items-center shadow-md border border-[var(--color-primary)] rounded-full h-10 text-sm font-semibold hover:opacity-90 hover:scale-101`}
          >
            Inicia Sesion
          </Link>
        </div>
      </nav>
      <div
        id="navBar"
        className={`${!open ? "hidden" : ""} md:hidden`}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 z-50"></div>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
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
                <a
                  href={`${PublicRoutes.TRAINER}`}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[var(--color-primary-trainer)] hover:bg-gray-50"
                >
                  Soy entrenador
                </a>
              </div>
              <div className="py-6 flex flex-col gap-4 items-start">
                <Link
                  to={`${PublicRoutes.LOGIN}`}
                  className={`bg-[var(--color-primary)] text-white px-5 py-3 flex items-center shadow-md border border-[var(--color-primary)] rounded-full h-10 text-sm font-semibold hover:opacity-90 hover:scale-101`}
                >
                  Inicia Sesion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
