import { RouterProvider } from "react-router"
import { appRouter } from "./router/app.router"


export const ProffesionalApp = () => {
  return (
    <div className="bg-gradient flex flex-col gap-4">
      {/* 2 acá hacemos uso del provider del router y como propiedad router le pasamos nuestro router donde hemos definido nuestras rutas. fin */}
        <RouterProvider router={appRouter} />
    </div>
  )
}
