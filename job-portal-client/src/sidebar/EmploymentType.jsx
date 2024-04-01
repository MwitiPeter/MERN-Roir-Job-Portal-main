import React from 'react'
import InputField from '../components/InputField'

const EmploymentType = ({handleChange}) => {
  return (
    <div>
      <h4 className="text-1g font-medium mb-2">Type of Employment</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any Type
        </label>

        <InputField
          handleChange={handleChange}
          value="full-time"
          title="Full-time"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="temporary"
          title="Temporary"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="part-time"
          title="Part-time"
          name="test"
        />
                
      </div>
    </div>
  )
}

export default EmploymentType