'use client';
import { useRouter } from 'next/router';

export default function SignIn() {
  const router = useRouter();

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a
          href="/"
          className="flex items-center text-xl font-semibold text-gray-900 dark:text-white gap-1"
        >
          <img
            width="32"
            height="32"
            className="bg-black rounded-full"
            src="https://img.icons8.com/wired/64/ffffff/voice-recognition-scan.png"
            alt="voice-recognition-scan"
          />
          ECHO
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your Echo account
            </h1>
            <form className="group" action="/app" noValidate>
        <div className="flex flex-col items-start space-y-8">
          {/* <h1 className="text-xl font-medium text-gray-800">Log in to your account</h1> */}

          <div className="flex w-full flex-col items-start space-y-2">
            <label htmlFor="email" className="block text-sm font-normal text-gray-500">Email</label>
            <input type="email" id="email" className="peer block w-full rounded-md border border-gray-200 bg-white p-2.5 text-sm text-gray-900 placeholder:text-xs placeholder:font-light placeholder:text-gray-400 focus:border-none focus:outline-none focus:ring-1 focus:ring-indigo-500 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" placeholder="example@mail.com" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">Please enter a valid email address </span>
          </div>

          <div className="flex w-full flex-col items-start space-y-2">
            <div className="flex w-full flex-row items-center justify-between">
              <label htmlFor="password" className="block text-sm font-normal text-gray-500">Password</label>
            </div>

            <input type="password" id="email" className="peer block w-full rounded-md border border-gray-200 bg-white p-2.5 text-sm text-gray-900 placeholder:text-xs placeholder:font-light placeholder:text-gray-400 focus:border-none focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="*********" required pattern=".{7,}" />
            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">Please enter a valid password</span>
          </div>

          <div className="flex w-full">
            <button className=" w-full cursor-pointer rounded-lg bg-indigo-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 group-invalid:pointer-events-none group-invalid:opacity-60">Submit</button>
          </div>
        </div>
      </form>
    </div>
    </div>
    </div>
    </section>
  );
}
