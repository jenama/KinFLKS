'use client'

import React from 'react'
// import InfoForm from './info-form/page'
import Popup from '@/app/insight/signupPopup/page';
import QuestionPage from './questionnaire/page';
import hairAndScalpData from './questionnaire/data/hair-and-scalp-data/page';

export default function SignupPage() {
  return (
    <div className="flex justify-center  h-screen m-2.5 p-2">
      {/* <InfoForm/> */}
      <Popup/>
      <QuestionPage />
    </div>
  )
}
