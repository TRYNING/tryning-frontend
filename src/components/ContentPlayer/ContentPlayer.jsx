export function MediaPlayer({ content, category, title, url, videoSrc, left }) {
    return (
      <div className="grid grid-cols-12 items-stretch gap-8">
        <div className="col-span-12 lg:col-span-5 xl:col-span-7">
          <p className="mb-3 text-lg font-semibold uppercase leading-snug tracking-wide text-purple-600">
            {category}
          </p>
          <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 xl:text-6xl">
            {title}
          </h2>
          <p className="mb-6 text-xl font-medium leading-8 text-gray-500 xl:text-2xl xl:leading-10">
            {content}
          </p>
          <a
            href={url}
            className="text-xl font-medium text-purple-600 transition-colors duration-200 hover:text-purple-800 hover:underline xl:text-2xl"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 inline-flex h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
        <div className={`col-span-12 lg:col-span-7 xl:col-span-5 ${left && 'order-first'}`}>
          <div className="mt-4 h-full -translate-x-4 -rotate-2 rounded-3xl bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-500 p-4">
            <div className="h-full translate-x-4 rotate-6 overflow-hidden rounded-3xl shadow-lg transition-transform hover:scale-125">
              <video autoPlay muted loop className="h-full w-full object-cover">
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    )
  }