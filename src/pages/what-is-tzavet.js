import React from "react";
import Layout from "../components/layout";

import Seo from "../components/seo";

import "../styles/what-is-tzavet.css";
const WhatIsTzavet = () => {
    return (
        <Layout>
            <Seo title="what is tzavet" />
            <div className="w-full flex justify-center items-center flex-col">
                <div className="w-11/12 lg:w-3/4 flex justify-center items-center flex-col">
                    <a
                        href="/"
                        class="text-xl my-2 lg:my-10 hover:underline text-[#BDADEA] font-rubik flex flex-row justify-around w-24"
                    >
                        /home{" "}
                    </a>
                    <ul>
                        <li class="about-tag">
                            <h1 class="question">what is tzavet?</h1>
                            <p class="explanation">
                                <a href="https://tzavet.advrxh.tech">
                                    <strong>
                                        <i>tzavet</i>
                                    </strong>
                                </a>{" "}
                                is a curation of writings by Aadil Varsh (
                                <a href="https://advrxh.tech">@advrxh</a>).
                                Often poems.
                            </p>
                        </li>
                        <div class="flex justify-center align-middle">
                            <div class="h-px w-1/2 my-2 lg:my-8 bg-[#BDADEA] border-0"></div>
                        </div>

                        <li class="about-tag">
                            <h1 class="question">
                                what does{" "}
                                <strong>
                                    <i>tzavet</i>
                                </strong>{" "}
                                mean?
                            </h1>
                            <p class="explanation">
                                The word <b>tzavet</b>, is a modified version of
                                `zavet` which orginates from Serbian. Meaning{" "}
                                <span>testament, promise or oath.</span>{" "}
                                Although actual pronounciation may vary, the
                                name of the curation `tzavet` maybe pronounced
                                as 'zah-veh'.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
};

export default WhatIsTzavet;
