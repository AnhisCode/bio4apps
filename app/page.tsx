"use client"
import List from '@/app/components/List';
import CarouselComponent from '@/app/components/Carousel';
import {BuildingOffice2Icon, EnvelopeIcon} from '@heroicons/react/20/solid';
import Image from 'next/image';
import React from "react";
import {Organisers} from "@/app/components/organisers";
import Link from "next/link";



const data: {
    title: string;
    list: string[];
}[] = [
    {
        title: 'Biosensors',
        list: [
            'Miniaturized diagnostic medical devices',
            'Nanophotonics/THz sensing',
            'Novel bioelectric sensing methods',
            'Physiological monitoring',
        ],
    },
    {
        title: 'Bioelectronics',
        list: [
            'Biomedical signal processing',
            'Body area sensor networks',
            'Circuits for biomedical applications/devices',
            'Flexible electronics',
            'Implantable electronics',
        ],
    },
    {
        title: 'Biomedical devices',
        list: [
            'Biocompatible material',
            'Packaging bioimaging technology',
            'Implantable medical devices',
            'Prosthesis and Neural probes',
            'Surgical robots',
        ],
    },
    {
        title: 'BioMEMS / BioNEMS',
        list: [
            'Drug delivery',
            'Energy harvesting technology',
            'Lab-on-chip',
            'MEMS/NEMS for biomedical applications',
            'Microfluidics for biomedical applications',
        ],
    },
];



export default function Home() {

    const handleDownload = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = '/Bio4Apps2023Abstract_template.docx'; // Path to the .docx file in the public folder
        downloadLink.download = 'Bio4Apps2023Abstract_template.docx'; // Name for the downloaded file
        downloadLink.click();
    };

    return (
        <main className="bg-white">
            {/*Header*/}
            <div className={"w-full grid-cols-1 md:grid-cols-2 grid"}>
                <div className={"bg-white text-center flex justify-center items-center relative"}>
                    <div className={"scale-[80%] md:scale-100 xl:mx-32 md:mx-16"}>
                        <div className={"flex justify-center"}>
                            <Image src={"/GC_icon.png"} alt="Gold Coast Logo" width={200} height={200}/>
                        </div>
                        <div className={"text-blue text-5xl font-bold"}>
                            BIO4APPS 2023
                        </div>
                        <div className={"text-center text-white bg-blue font-bold"}>
                            GOLD COAST, AUSTRALIA | DEC 13 - 15, 2023
                        </div>
                    </div>
                </div>
                <div className={"container bg-cover h-[300px] bg-repeat bg-center bg-[url('/Image_1.png')]"}/>
            </div>
            <div className={"text-white bg-blue font-bold text-2xl text-center w-full mb-14"}> WELCOME TO BIO4APPS 2023</div>
            {/*body*/}
            <div className={"bg-white w-full text-black"}>
                <div className={"grid md:grid-cols-2 grid-cols-1 gap-4 mb-14 xl:pl-40 md:pl-20 pl-10"}>
                    <div className={"flex items-center"}>
                        <div>
                            <div className={"text-4xl font-bold mb-4 text-red-600"}> ABOUT</div>
                            <p className={"italic"}>
                                Bio4Apps is an international conference series for researchers, scientists, and engineers throughout the world to present their latest findings, ideas, and applications in the areas of biosensors, bioelectronics, biomedical devices, and BioMEMS/NEMS. The first Bio4Apps conference was held in the National University of Singapore (2012), then Tokyo Medical and Dental University (2013), Shanghai Jiao Tong University (2014), Kyushu University (2015), Griffith University (2016), the University of Tokyo (2017), Harbin Institute of Technology (2018), and Kagoshima University (2019). Between 2020 and 2022, the Bio4Apps conference was not held due to the Covid-19 pandemic.
                                This year, the 9th Bio4Apps (Bio4Apps2023) will come back to Griffith University, Gold Coast - one of the beautiful coastal cities in Australia. So welcome to the 9th Bio4Apps!
                            </p>
                        </div>
                    </div>
                    <div className={"flex items-center justify-center"}>
                        <Image src={"/image_2.png"} alt="Gold Coast Logo" width={900} height={900}
                               className={"object-cover rounded-l-2xl"}/>
                    </div>
                </div>

                <div className={"grid md:grid-cols-2 grid-cols-1 gap-4 xl:px-40 md:px-20 px-10 pb-14"}>
                    <div className={"flex justify-center text-center"}>
                        <div className={"bg-gray-200 px-8 rounded-2xl w-[400px] py-4"}>
                            <div className={"text-red-600 text-2xl font-bold mb-2"}>
                                Venue
                            </div>
                            <p>
                                Griffith University,
                                Gold Coast Campus.
                                1 Parklands Drive,
                                Southport, QLD 4215.
                            </p>
                        </div>
                    </div>

                    <div className={"flex justify-center text-center"}>
                        <div className={"bg-gray-200 px-8 rounded-2xl w-[400px] py-4"}>
                            <div className={"text-red-600 text-2xl font-bold mb-2"}>
                                Important Dates
                            </div>
                            <p>
                                15th October: Abstract submission due
                            </p>
                            <div className={"mb-1 justify-center"}>

                                <Link href={"https://submit.jotform.com/232381366009050"}
                                            className={"underline text-blue mr-2"}
                                            target="_blank">
                                    Submit Now (1 page)
                                </Link>
                                <button onClick={handleDownload} className={"text-blue underline"}>
                                    Download template
                                </button>
                            </div>
                            <p>
                                25th October: Notification of acceptance
                            </p>
                        </div>
                    </div>


                    <div className={"flex justify-center text-center"}>
                        <div className={"bg-gray-200 px-8 rounded-2xl w-[400px] py-4"}>
                            <div className={"text-red-600 text-2xl font-bold mb-2"}>
                                Program
                            </div>
                            <p>
                                TBC
                            </p>
                        </div>
                    </div>

                    <div className={"flex justify-center text-center"}>
                        <div className={"bg-gray-200 px-8 rounded-2xl w-[400px] py-4"}>
                            <div className={"text-red-600 text-2xl font-bold mb-2"}>
                                Registration fee
                            </div>
                            <p>
                                General participants: <span className={"font-bold"}>AU$400</span> per person</p>
                               <p> Student participants: <span className={"font-bold"}>AU$200</span> per person</p>
                            <div>
                                (The fee includes: Conference materials,
                                <Link href={"https://seaworldcruises.com.au/daily-cruises/dinner-cruise/"} target="_blank" className={"underline text-blue"}> Dinner cruise banquet</Link>
                                , lunches, coffee, etc)
                            </div>
                        </div>
                    </div>

                </div>

                <div className={"w-full "}>
                    <Image src={"/Image_3.png"} alt={"Gold Coast Beach"} width={2000} height={1000}/>
                </div>

                <div className={"pt-14 xl:px-40 md:px-20 px-10 pb-14"}>
                    <div className={"text-4xl font-bold mb-4 text-red-600"}> TOPICS</div>
                    <List topics={data}/>
                </div>

                <div className={"w-full "}>
                    <Image src={"/image_4.png"} alt={"Gold Coast Beach"} width={2000} height={1000}/>
                </div>
                <div className={"pt-14 xl:px-40 md:px-20 px-10 pb-14"}>

                    <div className={"text-4xl font-bold mb-4 text-red-600"}> SPEAKERS</div>

                    <div className={"text-2xl text-blue"}>
                        Keynote Speaker
                    </div>

                    <div className={"text-xl mb-4"}>
                        <div className={"md:flex my-1"}>
                            <p className={"font-bold mr-8"}>
                                Prof. Shimoyama
                            </p>
                            <p>
                                President, Toyama Prefecture University, Japan
                            </p>
                        </div>
                        <div className={"md:flex my-1"}>
                            <p className={"font-bold mr-8"}>
                                Prof Nam-Trung Nguyen
                            </p>
                            <p>
                                Australian Laureate Fellow 2023
                            </p>
                        </div>
                    </div>


                    <div className={"text-2xl text-blue"}>
                        Invited Speakers
                    </div>
                    <div className={"text-xl mb-4"}>
                        <div className={"md:flex my-1"}>
                            <p className={"font-bold mr-8"}>
                                Prof. Niwa
                            </p>
                            <p>
                                Vice President, Saitama University, Japan
                            </p>
                        </div>
                        <div className={"md:flex my-1"}>
                            <p className={"font-bold mr-8"}>
                                Prof. Toshihiro Itoh
                            </p>
                            <p>
                                The University of Tokyo, Japan
                            </p>
                        </div>
                        <div className={"md:flex my-1"}>
                            <p className={"font-bold mr-8"}>
                                Dr Kiyotaka Sasagawa
                            </p>
                            <p>
                                Nara Institute of Science and Technology, Japan
                            </p>
                        </div>
                        <span className={"font-bold"}>Presentation title</span> - Miniaturized CMOS image sensors for brain functional imaging
                    </div>

                </div>


                <div className={"w-full h-[400px] overflow-hidden"}>
                    <Image className={"lg:-translate-y-[200px]"} src={"/Image_5.png"} alt={"Gold Coast Beach"} width={2000} height={1000}/>
                </div>

                <Organisers/>

                <div className={"w-full bg-blue flex justify-center text-center"}>
                    <div className={"text-white py-2"}>
                        <p>
                            For more information and paper submission, please visit the conference website at:
                        </p>
                        <p>
                            http://www.bio4apps2023.com or contact us via email: bio4apps2023@gmail.com
                        </p>
                    </div>
                </div>
            </div>

        </main>
    );
}
