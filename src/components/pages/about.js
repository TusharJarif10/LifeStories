import React from "react";
import about from "../../assets/12.png"
const AboutUs = () => {
    return (
        <section id="about" class="py-10 sm:py-10 lg:py-15 w-full bg-gradient-to-b from-[#ffffff] to-[#ff9b49]">
            <div class=" p-4 min-h-screen">
                <div class="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6">
                    <div class="md:w-2/3 lg:w-1/2">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gray-700">
                            <path fill-rule="evenodd"
                                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <h2 class="my-8 text-2xl font-bold text-gray-700 md:text-4xl">About</h2>
                        <p class="text-gray-700">We follow our process to get you started as quickly as possible</p>
                    </div>
                    <div
                        class="mt-16 grid divide-x divide-y  divide-gray-300 overflow-hidden rounded-3xl border text-gray-700  sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
                        <div class="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                            <div class="relative space-y-8 py-12 p-8">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.33333,5.33333)"><path d="M44,24c0,11.045 -8.955,20 -20,20c-11.045,0 -20,-8.955 -20,-20c0,-11.045 8.955,-20 20,-20c11.045,0 20,8.955 20,20z" fill="#198cff"></path><rect x="22" y="12" width="4" height="4" fill="#ffffff"></rect><rect x="19" y="19" width="7" height="4" fill="#ffffff"></rect><rect x="22" y="19" width="4" height="17" fill="#ffffff"></rect><rect x="18" y="32" width="12" height="4" fill="#ffffff"></rect><rect x="22" y="19" width="4" height="4" fill="#ffffff"></rect><rect x="22" y="32" width="4" height="4" fill="#ffffff"></rect></g></g>
                                </svg>
                                
                                <div class="space-y-2">
                                    <h5 class="text-xl font-semibold text-gray-700 transition">About LifeStories</h5>
                                    <p class="text-gray-700">We will have discussions on the requirements to ensure your MVP (Minimum Viable
                                        Product) is ready for the initial launch</p>
                                </div>
                            </div>
                        </div>
                        <div class="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                        
                            <div class="relative space-y-8 py-12 p-8">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.33333,5.33333)"><path d="M44,24c0,11.045 -8.955,20 -20,20c-11.045,0 -20,-8.955 -20,-20c0,-11.045 8.955,-20 20,-20c11.045,0 20,8.955 20,20z" fill="#ff9d19"></path><rect x="22" y="12" width="4" height="4" fill="#ffffff"></rect><rect x="19" y="19" width="7" height="4" fill="#ffffff"></rect><rect x="22" y="19" width="4" height="17" fill="#ffffff"></rect><rect x="18" y="32" width="12" height="4" fill="#ffffff"></rect><rect x="22" y="19" width="4" height="4" fill="#ffffff"></rect><rect x="22" y="32" width="4" height="4" fill="#fff2f7"></rect></g></g>
                                </svg>
                                
                                <div class="space-y-2">
                                    <h5 class="text-xl font-semibold text-gray-700 transition group-hover:text-secondary">Vision</h5>
                                    <p class="text-gray-700">Once we agree on what to build, We will start working on it right away.</p>
                                </div>
                            </div>
                        </div>
                        <div class="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                            <div class="relative space-y-8 py-12 p-8">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                    <path fill="#6c19ff" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><rect width="4" height="4" x="22" y="12" fill="#7debf5"></rect><rect width="7" height="4" x="19" y="19" fill="#7debf5"></rect><rect width="4" height="17" x="22" y="19" fill="#7debf5"></rect><rect width="12" height="4" x="18" y="32" fill="#7debf5"></rect><rect width="4" height="4" x="22" y="19" fill="#7debf5"></rect><rect width="4" height="4" x="22" y="32" fill="#3dd9eb"></rect>
                                </svg>
                                <div class="space-y-2">
                                    <h5 class="text-xl font-semibold text-gray-700 transition group-hover:text-secondary">Mission</h5>
                                    <p class="text-gray-700">We will develop your product MVP in 15 days (more time required depending on the
                                        complexity of the project)</p>
                                </div>
                            </div>
                        </div>
                        <div class="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                            <div class="relative space-y-8 py-12 p-8">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.33333,5.33333)"><path d="M44,24c0,11.045 -8.955,20 -20,20c-11.045,0 -20,-8.955 -20,-20c0,-11.045 8.955,-20 20,-20c11.045,0 20,8.955 20,20z" fill="#7f304b"></path><rect x="22" y="12" width="4" height="4" fill="#ffffff"></rect><rect x="19" y="19" width="7" height="4" fill="#ffffff"></rect><rect x="22" y="19" width="4" height="17" fill="#ffffff"></rect><rect x="18" y="32" width="12" height="4" fill="#ffffff"></rect><rect x="22" y="19" width="4" height="4" fill="#ffffff"></rect><rect x="22" y="32" width="4" height="4" fill="#ffffff"></rect></g></g>
                                </svg>
                                <div class="space-y-2">
                                    <h5 class="text-xl font-semibold text-gray-700 transition group-hover:text-secondary">Achievement
                                    </h5>
                                    <p class="text-gray-700">We love Celebrations. We will celebrate your launch on our Social Profiles.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AboutUs;
































