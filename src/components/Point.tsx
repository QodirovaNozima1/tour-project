import React from 'react'
import IMG from "../assets/img1.png"

const Point = () => {
  return (
    <div className='container'>
        <div className="flex gap-10 pt-17 pb-10 flex-col lg:flex-row">
            <div>
                <img src={IMG.src} alt="" />
            </div>
            <div className="flex flex-col gap-12 max-w-[570px]">
                <div className="flex flex-col gap-8">
                <p className='text-[18px] font-bold text-[#295943]'>Travelers Point</p>
                <h1 className='text-[27px] font-extrabold'>We help to find your dream place</h1>
                <p className='font-normal line-clamp-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <span className='text-[27px] font-bold text-[#295943]'>100+</span>
                        <p className='text-[14px] font-medium'>Holiday Package</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className='text-[27px] font-bold text-[#295943]'>172</span>
                        <p className='text-[14px] font-medium'>Hotels</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className='text-[27px] font-bold text-[#295943]'>68</span>
                        <p className='text-[14px] font-medium'>Elite Transportation</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className='text-[27px] font-bold text-[#295943]'>32M+</span>
                        <p className='text-[14px] font-medium'>we help to find your dream place</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default React.memo(Point)