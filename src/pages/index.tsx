import React from 'react'
import { IoReorderThreeOutline } from 'react-icons/io5'
import { BsBell } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'
import { MdOutlineDarkMode } from 'react-icons/md'
import { MdDarkMode } from 'react-icons/md'

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
            <BsBell className='text-2xl text-gray-600'/>
          </div>
          <div>
            <div className='w-5 h-5 bg-gray-600 rounded-full'></div>
          </div>
          <div>
            <button className='flex transition hover:border-gray-900 hover:text-gray-900 rounded items-center px-4 py-2.5 space-x-3 border border-gray-200'>
              <div>Write</div>
              <div><FiEdit/></div>
            </button>
          </div>
        </div>
      </header>

      <section className='grid grid-cols-12 place-items-center w-full h-full'>
        <main className='col-span-8 border-r border-gray-300 h-full w-full'>
          This is our main screen
        </main>
        <aside className='col-span-4 h-full w-full'>this is used for sidebar</aside>
      </section>
    </div>
  )
}

export default HomePage