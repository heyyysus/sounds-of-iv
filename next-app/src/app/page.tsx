import Image from 'next/image'
import { HomeButton } from './_components/HomeButton'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-black">
      <div className='flex flex-row justify-center w-full'>
        <HomeButton label={['Video', 'Archive']} icon={
          <OndemandVideoIcon className={`text-8xl opacity-75 text-white`}  />
        } />

        <HomeButton label={['Active', 'Bands']} icon={
          <OndemandVideoIcon className={`text-8xl opacity-75 text-white`}  />
        } />

        <HomeButton label={['New IV', 'Releases']} icon={
          <OndemandVideoIcon className={`text-8xl opacity-75 text-white`}  />
        } />

      </div>
      
    </main>
  )
}
