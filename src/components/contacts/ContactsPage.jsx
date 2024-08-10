import Button from "../Button"

const Contacts = () => {
  return (
    <div>
      <Button label="Back" action={()=> history.back()}/>   
      <h1>Contacts Page</h1>
    </div>
  )
}

export default Contacts
