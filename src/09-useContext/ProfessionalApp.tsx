import { RouterProvider } from "react-router"
import { appRouter } from "./router/app.router"
import { UserContextProvider } from "./context/UserContextProvider"


export const ProffesionalApp = () => {
  return (
    //13 acá pondremos todo nuestro codigo dentro de nuestro provider, de esa forma ya podremos utilizar los estados definidos en el. fin!
    <UserContextProvider>
      <div className="bg-gradient flex flex-col gap-4">
          <RouterProvider router={appRouter} />
      </div>

    </UserContextProvider>
  )
}
