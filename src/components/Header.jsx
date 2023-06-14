import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import { cn } from '../utils/cn';
function Header() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoading(true);
      axios.get('/api/v2/quote')
        .then(response => {
          setData(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
      }, 4000);
      setLoading(false);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={cn(
      'w-full',
      'h-[200px]',
      'bg-masjid',
      'bg-cover',
      'p-5',
      'flex',
      'justify-center',
      'items-center'
    )}>
      <div>
        {!loading && <div><h1 className={cn(
          'text-black',
          'text-xl',
          'font-medium',
          'text-center'
        )}>Perintahkanlah keluargamu mendirikan sholat dan bersabarlah kamu dalam mengerjakannya. Kami tidak meminta rezeki kepadamu, Kamilah yang memberi rezeki kepadamu. Akibat (yang baik) itu adalah bagi orang yang bertakwa.</h1>
        <p className={cn(
          'text-center',
          'text-black',
          'text-lg'
        )}>(Q.S Thaha: 132)</p></div>}
        <h1 className={cn(
          'text-black',
          'text-xl',
          'font-medium',
          'text-center'
        )}>{data.text}</h1>
        <p className={cn(
          'text-center',
          'text-black',
          'text-lg'
        )}>{data.reference}</p>
      </div>
    </div>
  )
}

export default Header