import Button from "../Button";

const ShoppingPage = () => {
  return (
    <div>
        <Button label="Back" action={()=> history.back()}/>
      <h1>Welcome to shopping Page</h1>
    </div>
  )
}

export default ShoppingPage
