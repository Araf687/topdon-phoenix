import { Benefit } from '@/types/data';
import React from 'react';
import Description from '../ui/customized/Description';
import P from '../ui/customized/P';

const BenifitCard = ({data}:{data:Benefit}) => {
    const {icon,title,description}=data
    return (
        <div className='flex gap-2'>
            <div>{icon}</div>
            <div>
                <P>{title}</P>
                <Description color="#CCCCCC">{description}</Description>
            </div>
            
        </div>
    );
};

export default BenifitCard;