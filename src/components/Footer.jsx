import React from 'react'

function Footer() {
  return (
    <div className='bg-black p-2 text-white'>
        <h1 className='font-bold'>BE THE FIRST TO KNOW</h1>
        <p className='py-2'>Lorem Ipsum is simply dummy text Of the printing and
        typesetting industry. this is simply dummy text.</p>
        
        <div className='text-lg flex flex-row justify-start'>
            <input type='text'
            placeholder='Enter your e-mail....'/>
            <button className='border-solid border border-white mx-5 px-2 text-gray-500 font-bold rounded-md text-xl py-2'>SUBSCIRBE</button>
        </div>
        <hr className='my-5 h-px bg-white'/>
        <div className=''>
        <h1 className='font-bold'>CALL US</h1>
        <div className='flex flex-row text-xs py-2'>
            <p>+44 221133 5360</p>
        <ul className='list-disc px-5'>
            <li>customercare@mettamuse.com</li>
        </ul></div>
        </div>
        <hr className='my-5 h-px bg-white'/>
        <div className=''>
        <h1 className='font-bold'>CURRENCY</h1>
        <div className='flex flex-row text-xs py-2'>
            <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1a7b7aba-445c-44d8-b3d7-1465de190b00/d6uf7tm-1d6b1540-b1ff-4889-8f15-1fe3f9ec2b0c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFhN2I3YWJhLTQ0NWMtNDRkOC1iM2Q3LTE0NjVkZTE5MGIwMFwvZDZ1Zjd0bS0xZDZiMTU0MC1iMWZmLTQ4ODktOGYxNS0xZmUzZjllYzJiMGMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oDgHgBoXo_89oHCDOv62wPOdz5SZF-Y-9KQTaNRVtFk' className='w-5 rounder-2xl'/>
        <ul className='list-disc px-5'>
            <li>USD</li>
        </ul></div>
        </div>
        <hr className='my-5 h-px bg-white'/>

    </div>
  )
}

export default Footer