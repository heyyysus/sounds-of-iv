import Link from 'next/link';
import { FC } from 'react';
import { anton } from '../_util/fonts';
import MenuIcon from '@mui/icons-material/Menu';

const Nav: FC = () => {
  return (
    <nav className='flex p-8 bg-tan-brown flex-row justify-between'>
        <div>
            <Link href='/' className={anton.className}>
                <span className={`text-6xl opacity-75`}>Sounds of IV</span>
                <span className={`text-2xl opacity-75 ml-4`}>Long live the IV music scene</span>
            </Link>
        </div>
        <div>
            <MenuIcon className={`text-8xl`} />
        </div>
    </nav>
  );
};

export default Nav;