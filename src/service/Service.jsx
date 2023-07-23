const Service = () => {
    return (
        <div class="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 bg-gray-50" id="features">
        <div class="max-w-screen-xl mx-auto">
          <h3 class="leading-none font-black text-3xl">
            Service
          </h3>

          <div class="flex flex-col items-center flex-wrap lg:flex-row lg:items-stretch lg:flex-no-wrap lg:justify-between">
            <div class="w-full max-w-sm mt-6 lg:mt-8 bg-gray-100 rounded shadow-lg p-12 lg:p-8 lg:mx-4 xl:p-12">
              <div class="p-4 inline-block bg-indigo-200 rounded-lg">
                <svg class="text-indigo-500 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
              </div>
              <div class="mt-4 font-extrabold text-2xl tracking-wide">
               WEB Development
              </div>
              <div class="text-sm">
              In developing web based application using React js for frontend and Node js/PHP/SQL Server for backednd with clean and reausable codes.
              </div>
            </div>

            <div class="w-full max-w-sm mt-8 bg-gray-100 rounded shadow-lg p-12 lg:p-8 lg:mx-4 xl:p-12">
              <div class="p-4 inline-block bg-green-200 rounded-lg">
                <svg class="text-green-500 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div class="mt-4 font-extrabold text-2xl tracking-wide">
                WEB Designing
              </div>
              <div class="text-sm">
              Here to offer you custom web designs that fit your needs. Identifying your needs, determine the scope, create sitemaps and wireframes, determine the type of content, finalize the visual elements, and test and launch the website. 
              </div>
            </div>

            <div class="w-full max-w-sm mt-8 bg-gray-100 rounded shadow-lg p-12 lg:p-8 lg:mx-4 xl:p-12">
              <div class="p-4 inline-block bg-red-200 rounded-lg">
                <svg class="text-red-500 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path xmlns="http://www.w3.org/2000/svg" d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line xmlns="http://www.w3.org/2000/svg" x1="12" y1="9" x2="12" y2="13"/>
                  <line xmlns="http://www.w3.org/2000/svg" x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <div class="mt-4 font-extrabold text-2xl tracking-wide">
                Project Management
              </div>
              <div class="text-sm">
              In keeping track of the story and bugs. Assigning the work to right resources and keeping a friendly and workable enviroment in the team
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}
export default Service;