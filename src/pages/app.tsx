'use client';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function AppPage() {
  const router = useRouter();

  return (
    <section className="bg-[url('/bg.png')] bg-center">
      <Head>
        <title>Audio</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h1 className="text-xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl dark:text-white">
          Audio Transcription
        </h1>
        <p className="text-xl mt-5 font-regular leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
          ML-Powered Speech recognition and transcription directly on your browser
        </p>
        <div className="inline-flex rounded-md shadow-sm mt-14" role="group">
          <button
            type="button"
            className=" bg-gradient-to-r w-48 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg  hover:from-blue-400 hover:to-indigo-400 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={() => router.push('/app/upload')}
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-2 fill-current"
              fill="currentColor"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <title></title>{' '}
                <g id="Complete">
                  {' '}
                  <g id="upload">
                    {' '}
                    <g>
                      {' '}
                      <path
                        d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>{' '}
                      <g>
                        {' '}
                        <polyline
                          data-name="Right"
                          fill="none"
                          id="Right-2"
                          points="7.9 6.7 12 2.7 16.1 6.7"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></polyline>{' '}
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="12"
                          x2="12"
                          y1="16.3"
                          y2="4.8"
                        ></line>{' '}
                      </g>{' '}
                    </g>{' '}
                  </g>{' '}
                </g>{' '}
              </g>
            </svg>
            Upload Audio File
          </button>
          <button
            type="button"
            className="inline-flex w-10 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600"
            style={{ cursor: 'default' }}
          ></button>
          <button
            type="button"
            className=" bg-gradient-to-r inline-flex w-48 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md  hover:from-blue-400 hover:to-indigo-400 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={() => router.push('/app/speak')}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mr-2 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.00004 7C7.00004 4.23858 9.23862 2 12 2C14.7615 2 17 4.23858 17 7V11C17 13.7614 14.7615 16 12 16C9.23862 16 7.00004 13.7614 7.00004 11V7ZM12 4C10.3432 4 9.00004 5.34315 9.00004 7V11C9.00004 12.6569 10.3432 14 12 14C13.6569 14 15 12.6569 15 11V7C15 5.34315 13.6569 4 12 4ZM4.49483 14.137C4.97144 13.858 5.58401 14.0182 5.86303 14.4948C7.08977 16.5903 9.37755 18 12 18C14.6225 18 16.9103 16.5903 18.137 14.4948C18.4161 14.0182 19.0286 13.858 19.5053 14.137C19.9819 14.416 20.1421 15.0286 19.863 15.5052C18.4479 17.9225 15.9331 19.6272 13 19.946V22C13 22.5523 12.5523 23 12 23C11.4478 23 11 22.5523 11 22V19.946C8.067 19.6272 5.55218 17.9225 4.13704 15.5052C3.85802 15.0286 4.01821 14.416 4.49483 14.137Z"
                  fill="currentColor"
                ></path>{' '}
              </g>
            </svg>
            Real-Time Transcribe
          </button>
        </div>
      </div>
    </section>
  );
}
