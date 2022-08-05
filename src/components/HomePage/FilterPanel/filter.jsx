import CheckBox from '../../CheckBox/checkbox'
import React from 'react'

const FilterPanel = ({
    diets,
    changeChecked,
}) => {
  return (
    <div>
        {/*Calories*/}
<div className="input-group">
    <p className='label'>Calories</p>
</div>

        {/*Ingredients*/}
        {/*Diet*/}
        <div className="input-group">
        <p className='label'>Diet</p>
        {diets.map((diet) =>(
        <CheckBox 
        key={diet.id} 
        diet={diet}
        changeChecked={changeChecked}
        />
        ))}
        </div>
        {/*Allergies*/}
        </div>
  )
}

export default FilterPanel