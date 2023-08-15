import React from "react";
import Image from "next/image";
import { PaperClipIcon } from "@heroicons/react/20/solid";
const ProfileCard = (variation) => {
  return (
    <>
      <figure className="md:flex rounded-xl md:p-0">
        <Image
          className="w-24 h-24 md:w-48 md:h-auto rounded-full mx-auto"
          src="../ard.png"
          alt=""
          width="384"
          height="384"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              laudantium, exercitationem dolorum quo, molestiae itaque corporis
              blanditiis nihil soluta cum porro, veniam vitae doloremque ad
              pariatur quas corrupti vel odit nisi mollitia rem? Veniam sunt
              dolorem.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Hitendra Patel</div>
            <div className="text-slate-700 dark:text-slate-500">
              System Engineer, Infosys
            </div>
          </figcaption>
        </div>
      </figure>
      <div className="">
        <div className="px-4 sm:px-0">
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-400">
            Please find my CV attached
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="">
            <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-500">
                Attachments
              </dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul
                  role="list"
                  className="divide-y divide-gray-100 rounded-md border border-gray-200"
                >
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <div className="ml-4 flex min-w-0 flex-1 gap-2 text-gray-400">
                        <span className="truncate font-medium">
                          resume_web_developer.pdf
                        </span>
                        <span className="flex-shrink-0 text-indigo-400">
                          2.4mb
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <div className="ml-4 flex min-w-0 flex-1 gap-2 text-gray-400">
                        <span className="truncate font-medium">
                          coverletter_web_developer.pdf
                        </span>
                        <span className="flex-shrink-0 text-indigo-400">
                          4.5mb
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
