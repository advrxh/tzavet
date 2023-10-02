import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import "./layout.css";

const Layout = ({ children }) => {
    return (
        <>
            <nav>
                <div id="logo-container">
                    <a href="/">
                        <StaticImage
                            src="../../images/lily.png"
                            alt="logo"
                            className="w-[128px]"
                            placeholder="tracedSVG"
                        ></StaticImage>
                        <h1>tzavet</h1>
                    </a>
                    <br />

                    <a href="/what-is-tzavet">
                        <p>(sæv-ɛt)</p>
                    </a>

                    <p className="text-xl">
                        by{" "}
                        <a href="https://advrxh.tech" target="_blank">
                            @advrxh
                        </a>
                    </p>
                </div>
            </nav>
            {children}
            <footer class="mt-5 w-full flex flex-row justify-center align-middle py-5 font-montserrat text-[#A37871]">
                <div class="w-10/12 sm:w-4/12 flex flex-row justify-evenly items-center">
                    <div class="mx-5 w-auto">
                        logo by{" "}
                        <a
                            target="_blank"
                            class="hover:underline hover:text-[#BDADEA]"
                            href="https://instagram.com/tharun_arumughan_"
                        >
                            @tharunarumughan
                        </a>
                    </div>
                    <div class="w-1 h-full bg-[#BDADEA] border-0"></div>
                    <div class="mx-2 flex flex-row justify-start items-center w-1/3 h-full">
                        <a
                            class="hover:underline hover:text-[#BDADEA]"
                            target="_blank"
                            href="https://gh.advrxh.tech/tzavet"
                        >
                            source
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Layout;
