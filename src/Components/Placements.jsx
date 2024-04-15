import React from 'react'
import deepak from '../assets/deepakaws.png'
import muskan from '../assets/muskancloud-removebg-preview.png'
import PlacementCarousal from './PlacementCarousal'


function Placements() {
  return (
    <section className="relative overflow-hidden py-24">
    <div className="relative mx-auto max-w-7xl px-4">
      <hr  className='mb-[5vh] w-[100%]'/>
      <div className="mx-auto mb-24 max-w-2xl text-center lg:max-w-5xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
        Placement Highlights
        </h1>
        <p className="text-lg text-gray-500">
        HIGHEST SALARY PACKAGES
        </p>
      </div>
      <div className="mx-auto max-w-5xl sm:block hidden">
        <div className="flex flex-wrap items-center">
          <div className="w-full  hover:scale-110 hover:cursor-pointer transition-transform lg:-mr-2 lg:w-1/3">
            <div className="mx-auto max-w-sm rounded-md border border-gray-200 bg-white pb-15 pl-5 pr-8 pt-6 lg:pb-8">
            <img src="https://media.licdn.com/dms/image/C4E03AQHOT6IGmZC-fA/profile-displayphoto-shrink_800_800/0/1641287483407?e=1718841600&v=beta&t=9lwE_XQqeES-8aIlqbwyfHR7-RpGvIHtHELIXyCYTlY" className='h-auto mb-6 rounded-b-xl  bg-cover' />
              <span className="flex items-end">
              <span className="text-4xl font-extrabold leading-none">32.41</span>
                <span className="text-2xl ml-2 font-semibold">LPA</span>
              </span>
              <div className=" border-t border-gray-100 pt-5">
                <ul className="mb-2">
                  <li className="mb-3 flex items-center">
                    <span className="ml-2 text-sm text-gray-900">MADHUR VASHISTHA</span>
                  </li>
                  <li className=" flex items-center">
                    <span className="ml-2 text-sm text-gray-900">B.TECH-IT</span>
                  </li>
                </ul>
                <a href="https://www.akgec.ac.in/"><button
                  type="button"
                  className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  GOOGLE
                </button></a>
              </div>
            </div>
          </div>
          <div className="-mt-4  w-full hover:scale-110 hover:cursor-pointer transition-transform lg:-mt-0 lg:w-1/3">
            <div className="pt-22 relative mx-auto max-w-sm rounded-lg bg-black px-10 pb-16 ">
              <div className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white p-2">
                <div className="flex-shrink-0 rounded-full bg-black px-5 py-3 text-base font-semibold uppercase text-white">
                HIGHEST
                </div>
              </div>
              <img src={deepak} className='h-auto mb-6 rounded-b-md  bg-cover' />
              <span className="flex items-end text-white">
                <span className="text-4xl font-extrabold leading-none">1.13</span>
                <span className="text-2xl ml-2 font-semibold">Crore</span>
              </span>
              <div className="mt-3 border-t border-orange-500 pt-5">
                <ul className="mb-6">
                  <li className="mb-4 flex items-center">
                    <span className="ml-2 text-sm text-white">DEEPAK SHARMA</span>
                  </li>
                  <li className="mb-4 flex items-center">
                    <span className="ml-2 text-sm text-white">B.TECH-CSE</span>
                  </li>
                </ul>
                <a href="https://www.akgec.ac.in/"><button
                  type="button"
                  className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                 AMAZON
                </button></a>
              </div>
            </div>
          </div>
          <div className="-mt-4 w-full hover:scale-110  hover:cursor-pointer transition-transform lg:ml-2 lg:-mt-0 lg:w-1/3">
            <div className="rounded-md mx-auto max-w-sm border border-gray-200 bg-white pb-8 pl-8 pr-5 pt-12 lg:rounded-b-none lg:pt-6">
            <img src={muskan} className='h-auto mb-6 rounded-b-xl  bg-cover' />
              <span className="flex items-end">
              <span className="text-4xl font-extrabold leading-none">28.70</span>
                <span className="text-2xl ml-2 font-semibold">LPA</span>
              </span>
              <div className=" border-t border-gray-100 pt-5">
                <ul className="mb-4">
                <li className="mb-3 flex items-center">
                    <span className="ml-2 text-sm text-gray-900">MUSKAN AGRAWAL</span>
                  </li>
                  <li className=" flex items-center">
                    <span className="ml-2 text-sm text-gray-900">B.TECH-CSE</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  CLOUDERA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    <PlacementCarousal/>

    </div>
  </section>
  )
}

export default Placements


