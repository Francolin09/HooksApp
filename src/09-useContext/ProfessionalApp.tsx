import { RouterProvider } from "react-router"
import { appRouter } from "./router/app.router"
import { UserContextProvider } from "./context/UserContextProvider"


export const ProffesionalApp = () => {
  return (
    
    <UserContextProvider>
      <div className="bg-gradient flex flex-col gap-4">
          <RouterProvider router={appRouter} />
      </div>

    </UserContextProvider>
  )
}
