"use client";

import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useState } from "react";

const NavigationMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-right">
      <div className="inset-0 flex items-center justify-center">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          onClick={() => setIsOpen((value) => !value)}
        >
          <svg
            aria-hidden="true"
            className="h-3.5 w-3.5 overflow-visible stroke-white"
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
          >
            <path
              d="M0 1H14M0 7H14M0 13H14"
              className="origin-center transition"
            />
            <path
              d="M2 2L12 12M12 2L2 12"
              className="origin-center transition scale-90 opacity-0"
            />
          </svg>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-90 blur-sm" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="text-center w-full max-w-md transform overflow-hidden rounded-2xl p-6 align-middle shadow-xl transition-all bg-black">
                  <div className="px-1 py-1 ">
                    <div>
                      <a
                        className="outline-none inline-block rounded-lg py-1 px-2 text-2xl font-bold text-white hover:bg-slate-100 hover:text-slate-900"
                        href="/#services"
                        onClick={() => setIsOpen(false)}
                      >
                        Services
                      </a>
                    </div>
                  </div>
                  <div className="px-1 py-1 ">
                    <div>
                      <a
                        className="outline-none inline-block rounded-lg py-1 px-2 text-2xl font-bold text-white hover:bg-slate-100 hover:text-slate-900"
                        href="/#team"
                        onClick={() => setIsOpen(false)}
                      >
                        Team
                      </a>
                    </div>
                  </div>
                  <div className="px-1 py-1 ">
                    <div>
                      <a
                        className="outline-none inline-block rounded-lg py-1 px-2 text-2xl font-bold text-white hover:bg-slate-100 hover:text-slate-900"
                        href="/#mission"
                        onClick={() => setIsOpen(false)}
                      >
                        Mission
                      </a>
                    </div>
                  </div>
                  <div className="px-1 py-1 ">
                    <div>
                      <a
                        className="outline-none inline-block rounded-lg py-1 px-2 text-2xl font-bold text-white hover:bg-slate-100 hover:text-slate-900"
                        href="/blog"
                        onClick={() => setIsOpen(false)}
                      >
                        Blog
                      </a>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default NavigationMobileMenu;
