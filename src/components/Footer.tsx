import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const footer = ["Discover", "Special Deals", "Services", "Community","About us"]
    const footer1 = ["About us", "Blog & Articles", "Term and Condition","Privacy Policy","Contact us"]
    const footer2 = ["Address: Jl.Codelaras No.205A", "Kediri, Pare AG17", "Phone: 123 456 7890","Email: myagungperdana@gmail.com","Maps: Kediri, East java"]
  return (
    <div className='bg-[#295943] pb-10 pt-10 text-white'>
        <div className="container  flex flex-wrap items-center justify-between gap-10 md:gap-16">
            <div className="flex flex-col max-w-[281px] gap-3">
                <h1 className='text-[33px] font-normal'>travelaja</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel</p>
            </div>
            <div className="flex flex-col gap-9 md:flex-row md:gap-40">
            <ul className='flex flex-col gap-3 '>
                    <h1 className='font-bold text-[19px] mb-3.5'>Links</h1>
                {
              footer?.map((el, index) => (<li key={index} className=" text-sm hover:cursor-pointer hover:text-slate-400 hover:underline"><a href="#">{el}</a></li>))
            }
                </ul>
                <ul className='flex flex-col gap-3'>
                    <h1 className="font-bold text-[19px] mb-3.5">Services</h1>
                {
              footer1?.map((el, index) => (<li key={index} className=" text-sm hover:cursor-pointer hover:text-slate-400 hover:underline"><a href="#">{el}</a></li>))
            }
                </ul>
                <ul className='flex flex-col gap-3'>
                    <h1 className="font-bold text-[19px] mb-3.5">Contact</h1>
                {
              footer2?.map((el, index) => (<li key={index} className=" text-sm hover:cursor-pointer hover:text-slate-400 hover:underline"><a href="#">{el}</a></li>))
            }
                </ul>
            </div>   
            </div>
        </div>
  )
}

export default Footer