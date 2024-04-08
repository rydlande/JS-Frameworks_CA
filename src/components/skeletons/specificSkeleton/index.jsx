export function SpecificSkeleton() {
    return (
        <div className="animate-pulse">
          <div className="hidden md:block mt-44">
            <div className="flex flex-row mt-10 justify-center">
              <div className="relative w-1/2 flex justify-center items-center">
                <div className="absolute w-[350px] h-[450px] bg-light blur xl:w-[500px] xl:h-[400px] rounded-sm"></div>
                <div className="relative z-10 bg-light w-52 h-64 rounded-sm xl:w-80 xl:h-64"></div>
              </div>
              <div className="w-1/2 flex flex-col px-10">
                <div className="h-8 bg-light w-3/4 rounded-md"></div>
                
                <div className="h-4 bg-light w-full rounded mt-4"></div>
                <div className="flex justify-between items-center mt-8">
                  <div className="h-8 bg-light w-1/4 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden flex flex-col">
            <div className="absolute w-full h-72 bg-light blur"></div>
            <div className="flex flex-col justify-center mx-7">
              <div className="relative z-10 m-auto bg-light w-40 h-52 mt-8 rounded-sm"></div>
              <div>
                <div className="h-6 bg-light w-full rounded mt-24"></div>
                <div className="h-4 bg-light w-full rounded mt-1.5"></div>
                <div className="h-8 bg-light w-1/2 rounded mt-8"></div>
              </div>
            </div>
          </div>
        </div>
      );
    }