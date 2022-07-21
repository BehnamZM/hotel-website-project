import React, { useEffect, useState } from 'react'
import './Structures.css'
import ButtonStyle from '../../ButtonStyle/ButtonStyle'
import structuresDatas from './StructuresDatas'
import { useInView } from 'react-intersection-observer';



function Structures() {
  const [structuresInfo, setStructuresInfo] = useState(structuresDatas)
  const { ref: structureRef, inView: visibleStructures, entry } = useInView()



  return (
    <>
      <div className="container structures-container" ref={structureRef}>
        {
          structuresInfo.map(structureInfo => (
            <div className="structures-boxes" dir={structureInfo.dir} key={structureInfo.id}>
              <div className={visibleStructures ? "structures-img left-element show-elements" : "structures-img left-element"}>
                <img src={structureInfo.img} alt="structureImage" />
              </div>
              <div className={ visibleStructures ? "structures-introduction right-element show-elements" : "structures-introduction right-element"} >
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