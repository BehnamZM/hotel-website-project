import React, { useEffect, useState } from 'react'
import './Structures.css'
import ButtonStyle from '../../ButtonStyle/ButtonStyle'
import structuresDatas from './StructuresDatas'

// import Aos from 'aos'
// import 'aos/dist/aos.css'


function Structures() {
  const [structuresInfo, setStructuresInfo] = useState(structuresDatas)



  // useEffect(() => {
  //   Aos.init({duration:2000})
  // }, []);


// data-aos={structureInfo.aosImg}

// data-aos={structureInfo.aosTitle}

  return (
    <>
      <div className="container structures-container" >
        {
          structuresInfo.map(structureInfo => (
            <div className="structures-boxes" dir={structureInfo.dir}>
              <div className="structures-img" >
                <img src={structureInfo.img} alt="" />
              </div>
              <div className="structures-introduction" >
                <h5>{structureInfo.title}</h5>
                <h3>{structureInfo.name}</h3>
                <p>{structureInfo.explain}</p>
                <ButtonStyle>
                  <p>آشنایی بیشتر</p>
                </ButtonStyle>
              </div>
            </div>
          ))
        }


      </div>
    </>
  )
}

export default Structures