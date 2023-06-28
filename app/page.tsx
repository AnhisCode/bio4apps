import List from '@/app/components/List';
import CarouselComponent from '@/app/components/Carousel';
import {BuildingOffice2Icon, EnvelopeIcon} from '@heroicons/react/20/solid';
import Image from 'next/image';
import React from "react";

const images = ['/location.jpeg', '/location2.jpeg', '/location3.jpeg'];

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

const intlComittee = [
    {
        name: 'Toshihiro Itoh',
        location: 'The University of Tokyo, Japan',
    },
    {
        name: 'Chengkuo Lee',
        location: 'National University of Singapore, Singapore',
    },
    {
        name: 'Kohji Mitsubayashi',
        location: 'Tokyo Medical and Dental University, Japan',
    },
    {
        name: 'Renshi Sawada',
        location: 'Kyushu University, Japan',
    },
];

const Person = ({name, location}: { name: string; location: string }) => (
    <div className={`w-full flex flex-col items-center justify-center space-y-3 p-4 `}>
        <span className={'text-4xl font-bold text-gray-900 font-infant'}>{name}</span>
        <span className={'text-lg font-light text-gray-900 font-jura'}>{location}</span>
    </div>
);

export default function Home() {
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
            <div className={"text-white bg-blue font-bold text-2xl text-center w-full mb-14"}> CALL FOR PAPERS</div>
            {/*body*/}
            <div className={"bg-white w-full text-black"}>
                <div className={"grid md:grid-cols-2 grid-cols-1 gap-4 mb-14 xl:px-40 md:px-20 px-10"}>
                    <div className={"flex items-center"}>
                        <div>
                            <div className={"text-4xl font-bold mb-4 text-red-600"}> ABOUT</div>
                            <p className={"italic"}>
                                Bio4Apps 2023 is an international conference for researchers,
                                scientists, and engineers throughout the world to present their
                                latest findings, ideas, and applications in the areas of
                                biosensors, bioelectronics, biomedical devices, and
                                bioMEMS/NEMS.
                            </p>
                        </div>
                    </div>
                    <div className={"flex items-center justify-center"}>
                        <Image src={"/image_2.png"} alt="Gold Coast Logo" width={500} height={500}
                               className={"object-cover rounded-2xl"}/>
                    </div>
                </div>

                <div className={"grid md:grid-cols-2 grid-cols-1 gap-4 xl:px-40 md:px-20 px-10 pb-14"}>
                    <div className={"flex justify-center text-center"}>
                        <div className={"bg-gray-200 px-8 rounded-2xl w-[300px] py-4"}>
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
                        <div className={"bg-gray-200 px-8 rounded-2xl w-[300px] py-4"}>
                            <div className={"text-red-600 text-2xl font-bold mb-2"}>
                                Important Dates
                            </div>
                            <p>
                                November 15, 2023
                                Abstract submission
                            </p>
                            <p>
                                (2 pages)
                            </p>
                            <a href="https://forms.gle/LCXdEJMw8zigQEt4A"
                            className={"underline text-blue"}
                               target="_blank"
                            >
                                Submit Now
                            </a>
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
                    <Image src={"/Image_4.png"} alt={"Gold Coast Beach"} width={2000} height={1000}/>
                </div>

                <div className={"pt-14 xl:px-40 md:px-20 px-10 pb-14"}>
                    <div className={"text-4xl font-bold mb-4 text-red-600"}> ORGANISERS</div>

                    <div className={"text-2xl text-blue"}>
                        General Chair
                    </div>
                    <div className={"md:flex text-xl mb-4 my-1"}>
                        <p className={"font-bold mr-8"}>
                            Professor Dzung Viet Dao
                        </p>
                        <p>
                            Griffith University, Australia
                        </p>
                    </div>

                    <div className={"text-2xl text-blue"}>
                        Steering Committee Chairs
                    </div>
                    <div className={"text-xl mb-4"}>
                        <div className={"md:flex"}>
                            <p className={"font-bold mr-8 my-1"}>
                                Professor Nam-Trung Nguyen
                            </p>
                            <p>
                                Griffith University, Australia
                            </p>
                        </div>
                        <div className={"md:flex mb-4 "}>
                            <p className={"font-bold mr-8"}>
                                Professor Yusuke Yamauchi
                            </p>
                            <p>
                                The University of Queensland
                            </p>
                        </div>
                    </div>

                    <div className={"text-2xl text-blue"}>
                        International Steering Committee Chairs
                    </div>
                    <div className={"text-xl mb-4"}>
                        <div className={"md:flex my-1"}>
                            <p className={"font-bold mr-8"}>
                                Professor Toshihiro Itoh
                            </p>
                            <p>
                                The University of Tokyo, Japan
                            </p>
                        </div>
                        <div className={"md:flex my-1"}>
                            <p className={"font-bold mr-8"}>
                                Professor Chengkuo Lee
                            </p>
                            <p>
                                National University of Singapore, Singapore
                            </p>
                        </div>
                        <div className={"md:flex my-1"}>
                            <p className={"font-bold mr-8"}>
                                Professor Kohji Mitsubayashi
                            </p>
                            <p>
                                Tokyo Medical and Dental University, Japan
                            </p>
                        </div>
                        <div className={"md:flex my-1"}>
                            <p className={"font-bold mr-8"}>
                                Assistant Professor Hirofumi Nogami
                            </p>
                            <p>
                                Kyushu University, Japan
                            </p>
                        </div>
                    </div>
                </div>

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


            {/*  <section*/}
            {/*      className="min-h-screen mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center  flex flex-col gap-y-24 items-center justify-center h-full font-infant uppercase">*/}
            {/*      <div>*/}
            {/*          <span className={'font-jura text-xl'}>Date of conference</span>*/}
            {/*          <h1 className={`text-4xl font-extrabold text-gray-900 sm:text-6xl`}>13-15 December 2023</h1>*/}
            {/*      </div>*/}

            {/*      <div className="w-1/2 h-[1px] bg-black mt-4"></div>*/}

            {/*      <div className="bg-white ">*/}
            {/*          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">*/}
            {/*              <div*/}
            {/*                  className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">*/}
            {/*                  <CarouselComponent images={images}/>*/}
            {/*                  <div className="absolute inset-0 bg-gray-900/80 mix-blend-multiply"/>*/}
            {/*                  <div className="absolute -left-80 -top-56 transform-gpu blur-3xl" aria-hidden="true">*/}
            {/*                      <div*/}
            {/*                          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-rose-50 to-rose-700 opacity-[0.45]"*/}
            {/*                          style={{*/}
            {/*                              clipPath:*/}
            {/*                                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',*/}
            {/*                          }}*/}
            {/*                      />*/}
            {/*                  </div>*/}
            {/*                  <div*/}
            {/*                      className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"*/}
            {/*                      aria-hidden="true"*/}
            {/*                  >*/}
            {/*                      <div*/}
            {/*                          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-rose-300 to-red-800 opacity-25"*/}
            {/*                          style={{*/}
            {/*                              clipPath:*/}
            {/*                                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',*/}
            {/*                          }}*/}
            {/*                      />*/}
            {/*                  </div>*/}
            {/*                  <div className="relative mx-auto max-w-2xl lg:mx-0 gap-y-5 flex flex-col">*/}
            {/*                      <span className={'font-jura text-xl text-white'}>Venue</span>*/}
            {/*                      <h1 className={`text-xl font-medium text-white sm:text-2xl normal-case`}>*/}
            {/*                          Griffith University, Gold Coast Campus. 1 Parklands Drive, Southport, QLD 4215.*/}
            {/*                      </h1>*/}
            {/*                  </div>*/}
            {/*              </div>*/}
            {/*          </div>*/}
            {/*      </div>*/}
            {/*  </section>*/}
            {/*  <div className="relative min-h-screen bg-gray-950">*/}
            {/*      <svg*/}
            {/*          className="absolute inset-0 z-0 h-full w-full stroke-gray-50/50 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"*/}
            {/*          aria-hidden="true"*/}
            {/*      >*/}
            {/*          <defs>*/}
            {/*              <pattern*/}
            {/*                  id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"*/}
            {/*                  width={200}*/}
            {/*                  height={200}*/}
            {/*                  x="50%"*/}
            {/*                  y={-64}*/}
            {/*                  patternUnits="userSpaceOnUse"*/}
            {/*              >*/}
            {/*                  <path d="M100 200V.5M.5 .5H200" fill="none"/>*/}
            {/*              </pattern>*/}
            {/*          </defs>*/}
            {/*          <svg x="50%" y={-64} className="overflow-visible fill-red-900/20">*/}
            {/*              <path*/}
            {/*                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"*/}
            {/*                  strokeWidth={0}*/}
            {/*              />*/}
            {/*          </svg>*/}
            {/*          <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"/>*/}
            {/*      </svg>*/}
            {/*      <section*/}
            {/*          className="overflow-hidden relative min-h-screen mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-y-4 items-start justify-center h-full font-infant uppercase">*/}
            {/*          <h1 className={`absolute top-10 md:top-20 text-lg  font-jura text-gray-200`}>Topics this year</h1>*/}
            {/*          <List topics={data}/>*/}
            {/*      </section>*/}
            {/*  </div>*/}
            {/*  <section*/}
            {/*      className=" mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center min-h-screen flex flex-col gap-y-20 py-24 md:py-40 items-center justify-center h-full font-infant uppercase">*/}
            {/*      <div>*/}
            {/*          <h1 className={`text-4xl font-extrabold text-gray-900 sm:text-4xl font-infant`}>Organisers</h1>*/}
            {/*          <div className="w-full md:scale-x-150 h-[1px] bg-black my-10"></div>*/}
            {/*      </div>*/}

            {/*      <div className="flex flex-col items-center gap-y-14">*/}
            {/*          <h2 className="text-lg font-jura  capitilize text-gray-400">General Chair</h2>*/}
            {/*          <Person name={'Dung Viet Dao'} location={'Griffith University, Australia'}/>*/}
            {/*      </div>*/}
            {/*      /!* TODO ??   *!/*/}
            {/*      /!*<h2 className="text-lg font-jura  capitilize text-gray-400">Steering Committee Chairs</h2>*!/*/}
            {/*      <div className={'flex flex-col gap-y-14'}>*/}
            {/*          <h2 className="text-lg font-jura  capitilize text-gray-400">International Steering Committee*/}
            {/*              Chairs</h2>*/}
            {/*          <div className={'flex flex-col gap-y-8'}>*/}
            {/*              {intlComittee.map((person, index) => (*/}
            {/*                  <Person key={`${index}-${person.name}`} name={person.name} location={person.location}/>*/}
            {/*              ))}*/}
            {/*          </div>*/}
            {/*      </div>*/}
            {/*  </section>*/}
            {/*  <footer className="relative isolate bg-gray-950">*/}
            {/*      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">*/}
            {/*          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">*/}
            {/*              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">*/}
            {/*                  <div*/}
            {/*                      className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 ">*/}
            {/*                      <svg*/}
            {/*                          className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"*/}
            {/*                          aria-hidden="true"*/}
            {/*                      >*/}
            {/*                          <defs>*/}
            {/*                              <pattern*/}
            {/*                                  id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"*/}
            {/*                                  width={200}*/}
            {/*                                  height={200}*/}
            {/*                                  x="100%"*/}
            {/*                                  y={-1}*/}
            {/*                                  patternUnits="userSpaceOnUse"*/}
            {/*                              >*/}
            {/*                                  <path d="M130 200V.5M.5 .5H200" fill="none"/>*/}
            {/*                              </pattern>*/}
            {/*                          </defs>*/}
            {/*                          <svg x="100%" y={-1} className="overflow-visible fill-red-900/10">*/}
            {/*                              <path d="M-470.5 0h201v201h-201Z" strokeWidth={0}/>*/}
            {/*                          </svg>*/}
            {/*                          <rect width="100%" height="100%" strokeWidth={0}*/}
            {/*                                fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"/>*/}
            {/*                      </svg>*/}
            {/*                      <div*/}
            {/*                          className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"*/}
            {/*                          aria-hidden="true"*/}
            {/*                      >*/}
            {/*                          <div*/}
            {/*                              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-red-400 to-rose-800 opacity-10"*/}
            {/*                              style={{*/}
            {/*                                  clipPath:*/}
            {/*                                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',*/}
            {/*                              }}*/}
            {/*                          />*/}
            {/*                      </div>*/}
            {/*                  </div>*/}
            {/*                  <h2 className="text-3xl font-bold tracking-tight text-white ">Get in touch</h2>*/}
            {/*                  <p className="mt-6 text-lg leading-8 text-gray-300">*/}
            {/*                      Any questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond*/}
            {/*                      as soon as*/}
            {/*                      possible.*/}
            {/*                  </p>*/}
            {/*                  <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">*/}
            {/*                      <div className="flex gap-x-4">*/}
            {/*                          <dt className="flex-none">*/}
            {/*                              <span className="sr-only">Address</span>*/}
            {/*                              <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true"/>*/}
            {/*                          </dt>*/}
            {/*                          <dd>*/}
            {/*                              Griffith University, Nathan Campus <br/>*/}
            {/*                              Nathan QLD 4111*/}
            {/*                          </dd>*/}
            {/*                      </div>*/}

            {/*                      <div className="flex gap-x-4">*/}
            {/*                          <dt className="flex-none">*/}
            {/*                              <span className="sr-only">Email</span>*/}
            {/*                              <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true"/>*/}
            {/*                          </dt>*/}
            {/*                          <dd>*/}
            {/*                              <a className="hover:text-white" href="mailto:bio4apps2023@gmail.com">*/}
            {/*                                  bio4apps2023@gmail.com*/}
            {/*                              </a>*/}
            {/*                          </dd>*/}
            {/*                      </div>*/}
            {/*                  </dl>*/}
            {/*              </div>*/}
            {/*          </div>*/}
            {/*          /!*center this and on the right*!/*/}
            {/*          <div*/}
            {/*              className="*/}
            {/*   flex-col items-center justify-center gap-y-10 hidden lg:flex*/}
            {/*"*/}
            {/*          >*/}
            {/*              <Image*/}
            {/*                  className="border bg-gray-50 p-10  rounded-lg"*/}
            {/*                  src={'griffith-university.svg'}*/}
            {/*                  alt={''}*/}
            {/*                  width={300}*/}
            {/*                  height={300}*/}
            {/*              />*/}
            {/*          </div>*/}
            {/*      </div>*/}
            {/*  </footer>*/}
        </main>
    );
}
