//2 creamos una interface con los datos que queremos
export interface User {
    id:number;
    name:string;
    location:string;
    role:string;
}
//3 y un metodo que simulará una peticion para eso usaremos una promesa y retornamos un objeto con campos random
export const getUserAction = async (id: number) => {
    await new Promise ((res => setTimeout(res,2000)));

    return {
        id,
        name:"Francolin bombim",
        location:'Santiago de chule',
        role:"Amo del universo"
    }
} //4 volvamos al ClientInformation