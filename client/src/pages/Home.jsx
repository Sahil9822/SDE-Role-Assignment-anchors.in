import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    
    <div className='flex flex-col gap-4 flex-1 p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>URL Shortener Application</h1>
      <Link className='bg-green-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95' to={'/sign-in'}>Get Start</Link>
    </div>
  )
}
