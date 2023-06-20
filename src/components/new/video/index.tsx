import { ROOT_URL } from '@/constants/urls';
import { useCopy } from '@/hooks/use-copy';
import { UploadedFile } from '@/state/reducers/app-reducer';
import Indicators from './indicators';
import useTextDownloader from '@/hooks/use-download-text';

type Props = {
  file: UploadedFile;
  transformLoading?: boolean;
};

export default function Video({ file, transformLoading }: Props) {
  const copyToClipboard = useCopy();
  const downloadText = useTextDownloader();

  const isVideo = file?.file.endsWith('.mp4');

  const src = file?.file.startsWith('/') ? ROOT_URL + file.file : file?.file;

  return (
    <div className="w-full bg-[#101214] text-white py-4 px-4 rounded-md mt-5">
      {isVideo ? (
        <video src={src} width="100%" style={{ maxHeight: '500px' }} controls />
      ) : (
        <audio src={src} controls muted />
      )}
      <Indicators title={file.title} transformLoading={transformLoading} />
      <div className="text-base font-medium border-[1px] border-[#212528] p-2 my-2">
        <div className="mb-2 text-sm">Transcript</div>
        <p className="text-sm">{file.transcript}</p>
      </div>
      <button
        onClick={() => copyToClipboard(file?.transcript)}
        className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 ml-3 text-sm text-white rounded transition duration-500 ease-in-out hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 fill-current" fill="currentColor">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="currentColor"
              d="M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"
            ></path>
            <path
              fill="currentColor"
              d="M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"
            ></path>
          </g>
        </svg>
        Copy
      </button>
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 ml-3 text-sm text-white rounded transition duration-500 ease-in-out hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        onClick={() => downloadText(file?.transcript)}
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
              <g id="download">
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
                      points="7.9 12.3 12 16.3 16.1 12.3"
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
                      y1="2.7"
                      y2="14.2"
                    ></line>{' '}
                  </g>{' '}
                </g>{' '}
              </g>{' '}
            </g>{' '}
          </g>
        </svg>
        Download
      </button>
    </div>
  );
}
