import { useState } from 'react'
import Form from '../../components/Form/Form'
import { useTranslation } from 'react-i18next'
import { ChartNoAxesCombined, MapPin, Users } from 'lucide-react'
import Brends from './Brends/Brends'
import Comment from './Comment/Comment'

function About() {

  const { t } = useTranslation()

  return (
    <div className=' pt-[200px] container'>
      <h1 className=' text-center text-green-700 text-[55px] font-semibold mb-5'>{t("biz.b1")}</h1>
      <p className=' text-center text-gray-500 text-[25px] mb-8'>{t("biz.b2")}</p>
      <div className=' grid grid-cols-3 mb-5'>
        <article className=' flex items-center'>
          <ChartNoAxesCombined className=' stroke-green-700 size-[60px]' />
          <p className=' text-[20px] font-bold dark:text-white'>{t("biz.b3")}</p>
        </article>
        <article className=' flex items-center'>
          <MapPin className=' stroke-green-700 size-[60px]' />
          <p className=' text-[20px] font-bold dark:text-white'>{t("biz.b4")}</p>
        </article>
        <article className=' flex items-center'>
          <Users className=' stroke-green-700 size-[60px]' />
          <p className=' text-[20px] font-bold dark:text-white'>{t("biz.b5")}</p>
        </article>
      </div>
      <Brends />
      <Form />
      <Comment/>
    </div>
  )
}

export default About
