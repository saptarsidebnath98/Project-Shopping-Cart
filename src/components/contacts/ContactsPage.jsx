import LinkButton from "../LinkButton";

const Contacts = () => {
  return (
    <section className="contacts">
    <div className="container contacts-container">
      <h1>Contact Point</h1>
      <ul className="contact-list">

        <li className="contact-items">
          
          <span className="contact-points">
          <i className="fa-solid fa-mobile-screen-button"></i>
            Mobile: </span>
           +91 8918221707
        </li>

        <li className="contact-items">
        
          <span className="contact-points">
            <i className="fa-regular fa-envelope"></i>
            Email: </span>
           <a 
           target="_blank"
           rel="noopener noreferrer"
           href="mailto:debsapt211@gmail.com" className="contact-links">debsapt211@gmail.com</a>
        </li>

        <li className="contact-items">
          <span className="contact-points">
          <i className="fa-brands fa-linkedin"></i>
            Linkedin: </span>
           <a className="contact-links" 
           target="_blank"
           rel="noopener noreferrer"
           href="https://www.linkedin.com/in/debnaths98/">Saptarsi Debnath</a>
        </li>
      </ul>
      <LinkButton path="/home" label="back"/>  
    </div>
    </section>
  )
}

export default Contacts
