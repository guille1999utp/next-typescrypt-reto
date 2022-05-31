import { GetStaticProps, NextPage } from "next"
import { Home } from "../src/layout"

const HomePage: NextPage = (props) => {
  console.log(props);
  return (
    <Home />
  )
}

export default HomePage

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://my-json-server.typicode.com/luisforerop/type-of-positions/db");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data:"hola"
    }, // will be passed to the page component as props
  }
}