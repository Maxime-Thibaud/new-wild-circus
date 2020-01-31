import React from 'react'
import './Contact.css'

function Contact() {
  return(
    <div>
      <h2 className="contact-title">Contact</h2>
      <form>
        <label>
          Nom :
          <input type="text"/>
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  )
}

export default Contact;