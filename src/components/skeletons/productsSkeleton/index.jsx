export function ProductsSkeleton() {
    const skeletonCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
    return (
      <>
        <div className='flex flex-wrap animate-pulse justify-center mx-1 mt-[148px] lg:mx-28 lg:mt-[160px]'>
          {skeletonCount.map((_, index) => (
            <div key={index} className="flex flex-col w-36 mx-1 mb-6 lg:w-60 lg:mx-3 lg:mb-11">
                <div className="flex justify-center items-center rounded-sm bg-light w-full h-48 lg:h-80">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-12 w-12 text-dark"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                    </svg>
                </div>
                <div className="mb-2 mt-2 h-2 w-28 rounded-full bg-light lg:w-full" />
                <div className="mb-2 mt-2 h-2 w-28 rounded-full bg-light lg:w-3/4" />
            </div>
            ))}
        </div>
        </>
    )
}
