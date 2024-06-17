import  ProfileSchema  from "../schemas/profileSchema"

export const ProfileInfo = {
    name: {
        title: 'Nombre',
        icon: 'clipboard-account-outline',
        color: 'experianPurple',
    },
    lastName: {
        title: 'Apellido',
        icon: 'clipboard-account-outline',
        color: 'experianPink',
    },
    dni: {
        title: 'Nro. de Identificación',
        icon: 'card-account-details-outline',
        color: 'experianBlue',
    },
    email: {
        title: 'Email',
        icon: 'email',
        color: 'experianPink',
    },
    phone: {
        title: 'Celular',
        icon: 'cellphone',
        color: 'experianPurple',
    }
}



export const userData: ProfileSchema = {
    name: 'Mila',
    lastName: 'Bot',
    email: 'mila.bot@me.com',
    phone: '+569 12345678',
    dni: '12345678'
}