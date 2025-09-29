import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { data } from '../data'

const Breadcrumb = () => {
  const location = useLocation()
  const pathArr = location.pathname.split('/')
  const pathArrWithoutHome = pathArr.filter((path) => path !== "")

  // Faqat ruxsat etilgan sahifalar
  const allowedPages = ["film", "serial", "anime", "multfilm","favourite", "allfilm","sozlamalar"]

  // Birinchi path elementini tekshirish
  const firstPath = pathArrWithoutHome[0]

  return (
    <ul className={`${data.Container} flex items-center gap-x-2 py-5`}>
      {/* Bosh sahifa */}
      <li className='text-[#0F8055] flex items-center italic'>
        <Link to='/'>Bosh sahifa</Link>
        {allowedPages.includes(firstPath) && <div className='mx-2'>/</div>}
      </li>

      {/* Faqat ruxsat etilgan sahifa turi */}
      {allowedPages.includes(firstPath) && (
        <li>
          <span className='text-[#6C674D] italic capitalize'>{firstPath}</span>
        </li>
      )}
    </ul>
  )
}

export default Breadcrumb
