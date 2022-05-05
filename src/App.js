import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import 'https://fb.me/react-with-addons-0.14.7.js';

function useTouchedFields() {
  const [touchedFields, setTouchedFields] = useState({ all: false })
  
  const setFieldTouched = (event) => {
    setTouchedFields((touchedFields) => ({
      ...touchedFields, 
      [event.target.name]: true
    }))
  }
  
  const setAllFieldsTouched = (event) => {
    setTouchedFields({ all: true })
  }
  
  const bindField = (fieldName) => ({
    "data-touched": touchedFields.all || touchedFields[fieldName],
    onBlur: setFieldTouched,   
  })
  
  return [bindField, setAllFieldsTouched]
}

const ContactForm = () => {
  const [bindField, setAllFieldsTouched] = useTouchedFields()
  
  const handleFocus = e => {
    e.target.classList.add("inputFocus");
  };

  const handleBlur = e => {
    e.target.classList.remove("inputFocus");
  };

  return (
    <div className='container'>
      <form
        onSubmit = {(event) => {
          event.preventDefault()
          const formData = new FormData(event.target)
          const data = Object.fromEntries(formData.entries())
          console.log(data)
        }}
      >
        <fieldset className="text-input">
          <input 
            id="name" 
            name="name" 
            type="text"
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...bindField("name")}
            required
            />
            <label htmlFor="name">Name *</label>
          <div className="form-required-message">A name is required.</div>
        </fieldset>
        <fieldset className="text-input">
          <input 
            id="email" 
            name="email" 
            type="email" 
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...bindField("email")}
            required  
          />
          <label htmlFor="email">Email *</label>
          <div className="form-required-message">A valid email is required.</div>
        </fieldset>
        <fieldset className="text-input">
          <input 
            id="password" 
            name="password" 
            type="password" 
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...bindField("password")}
            required  
          />
          <label htmlFor="password">Password *</label>
          <div className="form-required-message">A valid password is required.</div>
        </fieldset>
        <fieldset className="text-input">
          <input 
            id="tel" 
            name="tel" 
            type="tel"          
            onFocus={handleFocus}
            onBlur={handleBlur}     
            {...bindField("tel")}
            required 
          />
          <label htmlFor="tel">Phone *</label>
          <div className="form-required-message">A valid phone number is required.</div>
        </fieldset>
        <fieldset className="text-input">
          <textarea 
            id="message" 
            name="message" 
            type="textarea" 
            rows="3"
            {...bindField("message")}
            required 
          />
          <label htmlFor="message">Message *</label>
          <div className="form-required-message">A message is required.</div>
        </fieldset>
        <button onClick={() => setAllFieldsTouched()} type="submit">
          Send message
        </button>
      </form>
    </div>
  )
}

export default ContactForm;
