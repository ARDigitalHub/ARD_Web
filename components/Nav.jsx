
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function Nav() {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggelDropdown, setToggelDropdown] = useState(false);

  useEffect(() => {
    // const setProviders = async () => {
    //   const response = await getProviders();
    //   setProviders(response);
    // };
    setProviders();
  },[]);
  const navigation = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'Team', href: '/team', current: false },
    { name: 'Projects', href: '/projects', current: false },
    { name: 'Calendar', href: '/calendar', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  return (
    <nav className="w-full flex-between mb-16 pt-3">
      <Link href="/" className="flex gap-2  flex-center">
        <Image
          src="ard.png"
          alt="Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">ARDigital</p>
      </Link>
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link className="black_btn" href="/create-post">
              New post
            </Link>
            <button type="button" className="outline_btn" onClick={signOut}>
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src="ard.png"
                alt="Profile"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              alt="Profile"
              width={30}
              height={30}
              className="rounded-full"
              onClick={() => setToggelDropdown(!toggelDropdown)}
            />

            {toggelDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggelDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggelDropdown(false)}
                >
                  New Post
                </Link>
                <button
                  type="button"
                  className="mt-5 w-full black_btn"
                  onClick={() => {
                    setToggelDropdown(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
        
      </div>
    </nav>
  );
}
