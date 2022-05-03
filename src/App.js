import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
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
  // const [touchedFields, setTouchedFields] = useState({ all: false })
  
  // const setFieldTouched = (event) => {
  //   setTouchedFields((touchedFields) => (
  //     {...touchedFields, [event.target.name]: true}
  //   ))
  // }
  
  return (
    <div className="container">
      <form
        onSubmit = {(event) => {
          event.preventDefault()
          const formData = new FormData(event.target)
          const data = Object.fromEntries(formData.entries())
          console.log(data) 
        }}
      >
        <fieldset>
          <label htmlFor="name">Name *</label>
          <input 
            id="name" 
            name="name" 
            type="text"           
            // onBlur={setFieldTouched}
            // data-touched={touchedFields.name}
            {...bindField("name")}
            required
            />
          <div className="form-required-message">A name is required.</div>
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email *</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            // onBlur={setFieldTouched}
            // data-touched={touchedFields.email}
            {...bindField("email")}
            required  
          />
          <div className="form-required-message">A valid email is required.</div>
        </fieldset>
        <fieldset>
          <label htmlFor="tel">Phone *</label>
          <input 
            id="tel" 
            name="tel" 
            type="tel" 
            // onBlur={setFieldTouched}
            // data-touched={touchedFields.tel}                    
            {...bindField("tel")}
            required 
          />
          <div className="form-required-message">A valid phone number is required.</div>
        </fieldset>
        <fieldset>
          <label htmlFor="message">Message *</label>
          <textarea 
            id="message" 
            name="message" 
            type="textarea" 
            rows="3" 
            // onBlur={setFieldTouched}
            // data-touched={touchedFields.message}
            {...bindField("message")}
            required 
          />
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
