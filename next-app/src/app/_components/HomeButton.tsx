import { FC, ReactNode } from 'react';
import { anton } from '../_util/fonts';

export interface HomeButtonProps { 
    label: string[];
    icon: ReactNode;
 };

export const HomeButton: FC<HomeButtonProps> =  ({ label, icon }) => {
    return (
        <div className='text-white flex flex-col opacity-75 justify-center content-center ml-24'>
            <div className='flex rounded-2xl p-2 border-white border-8 justify-center content-center'>
            {icon}
            </div>
            <div className={ anton.className + ` flex flex-col justify-center items-center mt-2`}>
                { label.map( (l, i) => <span key={i} className='text-3xl mt-1 font-bold'>{l}</span> ) }
            </div>
    </div>
    );
};