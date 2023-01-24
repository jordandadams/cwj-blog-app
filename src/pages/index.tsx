import React from 'react'
import { IoReorderThreeOutline } from 'react-icons/io5'
import { BsBell } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'
import { MdOutlineDarkMode } from 'react-icons/md'
import { MdDarkMode } from 'react-icons/md'
import { CiSearch } from 'react-icons/ci'
import { HiChevronDown } from 'react-icons/hi'

const HomePage = () => {
  return (
    <div className='flex flex-col w-full h-screen'>
      <header className='flex h-20 w-full flex-row justify-around items-center bg-white border-b-[1px] border-gray-300'>
        <div>
          <IoReorderThreeOutline className='text-2xl text-gray-600' />
        </div>
        <div className='font-thin text-xl'>CWJ BLOG</div>
        <div className='flex items-center space-x-4'>
          <div><MdOutlineDarkMode className='text-2xl text-gray-600' /></div>
          {/* TODO: ENABLE DARK MODE AND USE MdDarkMode ICON */}
          <div>
            <BsBell className='text-2xl text-gray-600' />
          </div>
          <div>
            <div className='w-5 h-5 bg-gray-600 rounded-full'></div>
          </div>
          <div>
            <button className='flex transition hover:border-gray-900 hover:text-gray-900 rounded items-center px-4 py-2.5 space-x-3 border border-gray-200'>
              <div>Write</div>
              <div><FiEdit /></div>
            </button>
          </div>
        </div>
      </header>

      <section className='grid grid-cols-12 place-items-center w-full h-full'>
        <main className='col-span-8 border-r border-gray-300 h-full w-full px-24'>
          <div className='flex flex-col space-y-8 w-full border-gray-300 py-10'>
            <div className='flex space-x-4 items-center w-full'>
              <label htmlFor="search" className='relative w-full rounded-lg border border-gray-800'>
                {/* HACK TO CENTER */}
                <div className='absolute left-2 h-full flex items-center'>
                  <CiSearch />
                </div>
                <input type="text" name='search' id='search' placeholder='Search...' className='rounded-lg outline-none w-full text-sm py-1 px-2 pl-7 placeholder:text-gray-300 placeholder:text-xs' />
              </label>
              <div className='flex items-center w-full space-x-4 justify-end'>
                <div>
                  My topics:
                </div>
                <div className='flex space-x-2 items-center'>
                  {/* HOW WE FETCH DATA FROM BACKEND */}
                  {/* Array.from generating fake UI by iterating length */}
                  {
                    Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className='rounded-3xl bg-gray-200/50 px-4 py-3'>tag {i}</div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className='w-full justify-between flex items-center border-b border-gray-300 pb-8'>
              <div>Articles</div>
              <div>
                <button className='flex space-x-2 font-semibold items-center rounded-3xl border border-gray-800 px-4 py-1.5'>
                  <div>Following</div>
                  <div>
                    <HiChevronDown className='text-xl' />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col justify-center space-y-4'>
            {/* HOW WE FETCH DATA FROM BACKEND */}
            {/* Array.from generating fake UI by iterating length */}
            {
              Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className='flex group flex-col space-y-4 border-b border-gray-300 pb-8 last:border-none'>
                  <div className='flex w-full items-center space-x-2'>
                    <div className='h-10 w-10 rounded-full bg-gray-400'></div>
                      <div>
                      <p className='font-semibold'>
                        Jordan Adams &#x2023; 23 Jan. 2023
                      </p>
                      <p className='text-sm'>
                        Software Developer
                      </p>
                      </div>
                  </div>
                  <div className='grid w-full grid-cols-12 gap-4'>
                    <div className='col-span-8 flex flex-col space-y-2'>
                      <p className='text-2xl font-bold text-gray-800 group-hover:underline decoration-cyan-700'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, voluptatum?
                      </p>
                      <p className='text-sm text-gray-500 break-words'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nulla delectus
                        tempore sunt hic laboriosam architecto. Quod error fugiat a quasi nostrum quidem
                        quia in atque amet consequuntur voluptatibus odit id ipsam, obcaecati provident
                        asperiores repudiandae necessitatibus deleniti nulla optio aperiam quae temporibus
                        esse. Doloribus totam quae excepturi repudiandae libero quia quibusdam rem magni!
                        Consectetur officia ab error saepe dicta?
                      </p>
                    </div>
                    <div className='col-span-4'>
                      <div className='bg-gray-300 w-full h-full rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl'></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center w-full space-x-4 justify-start'>
                      <div className='flex space-x-2 items-center'>
                        {/* HOW WE FETCH DATA FROM BACKEND */}
                        {/* Array.from generating fake UI by iterating length */}
                        {
                          Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className='rounded-2xl bg-gray-200/50 px-6 py-3'>
                              tag {i}
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </main>
        <aside className='col-span-4 h-full w-full'>this is used for sidebar</aside>
      </section>
    </div>
  )
}

export default HomePage