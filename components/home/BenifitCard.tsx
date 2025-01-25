import { Benefit } from '@/types/data';
import React from 'react';
import P from '../ui/customized/P';

const BenifitCard = ({data}:{data:Benefit}) => {
    const {icon,title,description,numberIcon}=data
    return (
        <div className='space-y-'>
            <div className='flex items-center gap-[20px]'>{icon} <P className='mb-2'>{title}</P></div>
            <div className='flex items-center gap-[35px]'>
                {numberIcon}
                <p className='text-[14px] text-[#CCCCCC] text-justify' >{description}</p>
            </div>
            
        </div>
    );
};

export default BenifitCard;