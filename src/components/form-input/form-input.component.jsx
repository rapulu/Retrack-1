import React from 'react'
import './form-input.styles.scss';

const FormInput = ({handleChange, label, group, ...otherProps}) => (
    <div className= {`${group ? 'two-group' : '' } group`}>
        <input onChange={handleChange} className='form-input' {...otherProps} />
        
        {label ?
         (<label className={`${otherProps.value.length ? 'shrink' : '' } form-input-label`}  >
             {label}
            
         </label>):
        null
        }
    </div>
);

export const TextArea = ({handleChange, label, placeholder, row, ...otherProps}) => (
    <div className='group' >
        <textarea placeholder={placeholder} row={row} onChange={handleChange} className='form-input' {...otherProps}></textarea>
        
        {label ?
         (<label className={`${otherProps.value.length ? 'shrink' : '' } form-input-label`}  >
             {label}
            
         </label>):
        null
        }
    </div>
)

export default FormInput;