import Image from 'next/image';
import List from '@/app/components/List';

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

const Person = ({ name, location }: { name: string; location: string }) => (
  <div className={`w-full flex flex-col items-center justify-center space-y-3 p-4 `}>
    <span className={'text-4xl font-bold font-infant'}>{name}</span>
    <span className={'text-lg font-light font-jura'}>{location}</span>
  </div>
);

export default function Home() {
  return (
    <main className="bg-white">
      <div style={{}} className={'bg-hero-pattern bg-cover bg-no-repeat bg-slate-50 '}>
        <div className={'backdrop-blur-sm'}>
          <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center min-h-screen flex flex-col gap-y-4 items-center justify-center h-full font-infant uppercase ">
            <h3 className="text-3xl font-jura font-extrabold text-gray-900 ">2023</h3>
            <h1 className={`text-6xl font-extrabold text-gray-900 sm:text-8xl`}>BIO4APPS</h1>
            <p className="font-jura mt-4 text-lg text-black">
              Bio4Apps 2023 is an international conference for researchers, scientists, and engineers throughout the
              world to present their latest findings, ideas, and applications in the areas of biosensors,
              bioelectronics, biomedical devices, and bioMES /NEMS.
            </p>
            <button
              className={`font-sans mt-8 w-48 px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-800  transition-colors duration-200 ease-in-out 
          `}
            >
              SUBMIT NOW
            </button>
            <span className={'font-jura'}>(Due by 15 November 2023)</span>
          </section>
        </div>
      </div>

      <section className="min-h-screen mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center  flex flex-col gap-y-24 items-center justify-center h-full font-infant uppercase">
        <div>
          <span className={'font-jura text-xl'}>Date of conference</span>
          <h1 className={`text-4xl font-extrabold text-gray-900 sm:text-6xl`}>15-17 November 2023</h1>
        </div>

        <div className="w-1/2 h-[1px] bg-black mt-4"></div>
        <div>
          <span className={'font-jura text-xl'}>Venue</span>
          <h1 className={`text-xl font-medium text-gray-900 sm:text-2xl normal-case`}>
            Griffith University, Gold Coast Campus. 1 Parklands Drive, Southport, QLD 4215.
          </h1>
        </div>
      </section>
      <div className="relative min-h-screen bg-gray-950">
        <svg
          className="absolute inset-0 z-0 h-full w-full stroke-gray-50/50 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-64}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-64} className="overflow-visible fill-red-900/20">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
        </svg>
        <section className="overflow-hidden relative min-h-screen mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-y-4 items-start justify-center h-full font-infant uppercase">
          <h1 className={`absolute top-10 md:top-20 text-lg  font-jura text-gray-200`}>Topics this year</h1>
          <List topics={data} />
        </section>
      </div>
      <section className=" mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center min-h-screen flex flex-col gap-y-20 py-24 md:py-40 items-center justify-center h-full font-infant uppercase">
        <div>
          <h1 className={`text-4xl font-extrabold text-gray-900 sm:text-4xl font-infant`}>Organisers</h1>
          <div className="w-full md:scale-x-150 h-[1px] bg-black my-10"></div>
        </div>

        <div className="flex flex-col items-center gap-y-14">
          <h2 className="text-lg font-jura  capitilize text-gray-400">General Chair</h2>
          <Person name={'Dung Viet Dao'} location={'Griffith University, Australia'} />
        </div>
        <h2 className="text-lg font-jura  capitilize text-gray-400">Steering Committee Chairs</h2>
        <div className={'flex flex-col gap-y-14'}>
          <h2 className="text-lg font-jura  capitilize text-gray-400">International Steering Committee Chairs</h2>
          <div className={'flex flex-col gap-y-8'}>
            {intlComittee.map((person, index) => (
              <Person key={`${index}-${person.name}`} name={person.name} location={person.location} />
            ))}
          </div>
        </div>
      </section>
      <div className="bg-gray-950">
        <footer className="w-full text-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-y-4 items-center justify-center h-full font-infant uppercase">
          <div className="py-24 h-full flex w-full flex-col gap-y-3">
            <h1 className={`text-4xl font-extrabold text-white sm:text-4xl font-inter`}>Contact Us</h1>
            <span className={'lowercase font-inter'}>bio4apps2023@gmail.com</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
