import React from 'react'

const TempCards = ({data,title}) => {
  return (
    <div>
    {data.map((c,i) => (
        <link className='w-[25vh]'
         key={i}>
          <img className='w-[40vh]' src="" alt="" />
            {c.name ||
            c.title ||
            c.original_name ||
            c.original_title}
    </link>))}


</div>
  )
}

export default TempCards