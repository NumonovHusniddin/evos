import React from 'react'
import { getBrend } from '../../../constants/Constants'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Brends() {
    const brend = getBrend
    const { t, i18n } = useTranslation()
    return (
        <div className=' mb-10'>
            {brend && brend.map((item, id) => (
                <div key={id} className=' border border-green-700 p-4 rounded-lg mb-3'>
                    <h1 className=' text-[20px] font-bold dark:text-white'>{item.title[i18n.language]}</h1>
                    <p className=' line-clamp-3 mb-3 dark:text-white'>{item.desc1[i18n.language]}</p>
                    <Link to={`/about/${item.id}`}>
                        <button className='py-2 px-6 border border-green-700 rounded-md text-green-700 hover:bg-green-700 hover:text-white transition-all duration-200'>{t("k")}</button>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Brends
