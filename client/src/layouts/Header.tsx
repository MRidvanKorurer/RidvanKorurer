import React from 'react'
import HeaderLeft from '../components/Header/HeaderLeft'
import HeaderMidd from '../components/Header/HeaderMidd'
import HeaderRight from '../components/Header/HeaderRight'

const Header: React.FC = () => {
  return (
    <div className=' border-b w-full py-10 border-gray-900 flex justify-between items-center px-40'>
        <HeaderLeft />
        <HeaderMidd />
        <HeaderRight />
    </div>
  )
}

export default Header