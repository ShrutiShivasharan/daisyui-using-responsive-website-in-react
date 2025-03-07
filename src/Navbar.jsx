'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { FiAlignJustify } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { themes, themeColors, applyTheme } from "./theme";

const navigation = [
  { name: 'All Product', href: '/product' },
  { name: 'Categories', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function Navbar({ setTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5 text-3xl">
              Shruti098
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            >
              <span className="sr-only">Open main menu</span>
              <FiAlignJustify />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-l font-semibold">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">Themes ⬇️</div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                {themes.map((t) => (
                  <li>
                    <button
                      key={t}
                      className={`px-4 py-2 rounded-lg border ${themeColors[t]}`}
                      onClick={() => {
                        setTheme(t);
                        applyTheme(t);
                        window.location.reload();
                      }}
                    >
                      {t}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5 text-black text-3xl">
                Shruti098
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <FaXmark />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Themes ⬇️</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                      {themes.map((t) => (
                        <li>
                          <button
                            key={t}
                            className={`px-4 py-2 rounded-lg border ${themeColors[t]}`}
                            onClick={() => {
                              setTheme(t);
                              applyTheme(t);
                              window.location.reload();
                            }}
                          >
                            {t}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  )
}


//
// const Navbar = ({ setTheme }) => (
//   <nav className="p-4 flex justify-between items-center">
//     <h1 className="text-2xl font-bold">Navbar</h1>
//     <div className="flex gap-2">
// {themes.map((t) => (
//   <button
//     key={t}
//     className={`px-4 py-2 rounded-lg border ${themeColors[t]}`}
//     onClick={() => {
//       setTheme(t);
//       applyTheme(t);
//       window.location.reload();
//     }}
//   >
//     {t}
//   </button>
// ))}
//     </div>
//   </nav>
// );
// export default Navbar;



