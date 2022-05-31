import { Form } from "../../components"
import { AppContextProvider } from "../../shared"

export const Home = () => {
  return (
    <AppContextProvider>
      <Form />
    </AppContextProvider>
  )
}

