import React, { useState, useEffect } from 'react'
import axios from '../api/axios';
import { cn } from '../utils/cn';

function AsmahulHusna() {
  const [data, setData] = useState([]);
  const [jumlah, setJumlah] = useState(12);

  useEffect(() => {
    axios.get('/api/v2/asmaulhusna')
    .then(response => {
      setData(response.data.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, [])

  const total = () => {
    setJumlah(jumlah + 12);
  }

  return (
    <div>
      <h1 className={cn(
        'text-2xl',
        'font-bold',
        'text-white',
        'text-center'
      )}>Asmaul Husna</h1>
      <ul className={cn(
        'grid',
        'grid-cols-1',
        'md:grid-cols-2',
        'xl:grid-cols-3',
        'gap-3',
        'mb-5'
      )}>
        {data.slice(0, jumlah).map((item) => (<li className={cn(
          'bg-[#2B2730]',
          'text-white',
          'flex',
          'flex-col',
          'gap-3',
          'p-3',
          'rounded-lg'
        )} key={item.number}>
          <div className={cn(
            'flex',
            'items-center',
            'gap-3',
          )}>
            <h3 className='xl:text-xl'>{item.number}.</h3>
            <h1 className='xl:text-xl'>{item.latin}</h1>
          </div>
          <h1 className={cn(
            'text-4xl',
            'font-arab',
            'leading-snug',
            'text-end',
            'xl:text-5xl'
          )}>{item.arabic}</h1>
          <p className='text-slate-200 xl:text-lg'>Artinya : {item.id_translation}</p>
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

export default AsmahulHusna