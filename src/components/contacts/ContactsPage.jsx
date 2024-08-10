import LinkButton from "../LinkButton";

const Contacts = () => {
  return (
    <section className="Contacts">
    <div className="container contacts-container">
      <h1>Contact Point</h1>
      <ul className="contact-list">

        <li className="contact-items">
          <i className="fa-solid fa-mobile-screen-button"></i>
          <span className="contact-points">Mobile: </span>
           +91 8918221707
        </li>

        <li className="contact-items">
        <i className="fa-regular fa-envelope"></i>
          <span className="contact-points">Email: </span>
           <a 
           target="_blank"
           rel="noopener noreferrer"
           href="mailto:debsapt211@gmail.com" className="contact-links">debsapt211@gmail.com</a>
        </li>

        <li className="contact-items">
        <i className="fa-brands fa-linkedin"></i>
          <span className="contact-points">Linkedin: </span>
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
