import React, {useEffect, useState} from 'react'
import axios from '../api/axios';
import { cn } from '../utils/cn';

function DoaHarian() {
  const [data, setData] = useState([]);
  const [jumlah, setJumlah] = useState(10);

  useEffect(() => {
    axios.get('/api/v2/doaharian')
    .then(response => {
      setData(response.data.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, [])

  const total = () => {
    setJumlah(jumlah + 10);
  }

  return (
    <div className={cn(
      'mt-5',
      'mb-5'
    )}>
      <h1 className={cn(
        'text-2xl',
        'font-bold',
        'text-white',
        'text-center'
      )}>Doa Harian</h1>
      <ul className={cn(
        'flex',
        'flex-col',
        'gap-5',
      )}>
        {data.slice(0, jumlah).map((item) => (<li key={item.number} className={cn(
          'w-full',
          'bg-[#2B2730]',
          'rounded-lg',
          'p-3',
          'text-white',
          'flex',
          'flex-col',
          'gap-3',
        )}>
          <div className={cn(
            'flex',
            'gap-3'
          )}>
            <h3 className='xl:text-xl'>{item.number}.</h3>
            <h1 className='xl:text-xl'>{item.name}</h1>
          </div>
          <h3 className={cn(
           'text-4xl',
           'font-arab',
           'leading-snug',
           'text-end',
           'xl:text-5xl'
          )}>{item.arabic}</h3>
          <p className={cn(
            'text-start',
            'text-slate-400',
            'xl:text-lg'
          )}>{item.latin}</p>
          <p className={cn(
            'text-slate-200',
            'xl:text-lg'
          )}>Artinya : {item.translation}</p>
        </li>))}
      </ul>
      <button onClick={total} className={cn(
          'mx-auto',
          'mt-3',
          'bg-blue-500',
          'px-4',
          'py-2',
          'rounded-lg',
          'flex',
          'justify-center',
          'items-center',
          'hover:bg-blue-700',
          'hover:text-white'
        )}>Tambah</button>
    </div>
  )
}

export default DoaHarian