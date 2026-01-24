import React from 'react'
import LeftContent from './LeftContent'

import RightContent from './RightContent';
const Page1Content = (props) => {
  return (
    <div className='py-3 px-18 h-[90vh] py-10 flex justify-between items-center gap-10'>
        <LeftContent />
        <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content