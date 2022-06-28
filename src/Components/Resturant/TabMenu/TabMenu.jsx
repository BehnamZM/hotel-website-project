import React, { useState, useEffect } from 'react';
import './TabMenu.css'
import menuDatas from './menuDatas';

 const allCategories = [...new Set(menuDatas.map(menuData => menuData.category))]

function TabMenu() {
  const [foodInfos, setFoodInfos] = useState(menuDatas)
 
  const [categories, setCategories] = useState(allCategories)
  const [mainCategory, setMainCategory] = useState('غذای اصلی')



  const filterMenusHandler = category => {
    let filteredMenu = menuDatas.filter(menuData => menuData.category === category)
    setFoodInfos(filteredMenu)
  }

  useEffect(() => {
    filterMenusHandler('غذای اصلی')
  }, [])


  return (
    <>
      <div className="tabmenu-part">
        <div className="container tabmenu">
          <div className="tabmenu-title">
            <h5>هتل لوکس</h5>
            <h3>منوی رستوران</h3>
          </div>

          <div className="tabs-part">
            {
              categories.map(category => (
                <div
                  className={category === mainCategory ? "tab-item tab-item-active" : "tab-item"} 
                  key={category}
                  onClick={() => {
                    setMainCategory(category)
                    filterMenusHandler(category)
                  }}>
                  {category}
                </div>
              ))
            }

          </div>
          <div className="tab-body">
            <div className="foodslist">
              {
                foodInfos.map(foodInfo => (
                  <div className="fooditem" key={foodInfo.id}>
                    <div className="food-title">
                      <div className="food-name">
                        {foodInfo.name}
                      </div>
                      <div className="food-price">
                        {`${foodInfo.price} هزارتومان `}
                      </div>
                    </div>
                    <div className="food-inner">
                      {foodInfo.material}
                    </div>
                  </div>
                ))
              }

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TabMenu