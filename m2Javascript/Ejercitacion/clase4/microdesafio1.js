/*Ejercitación correspondiente a la clase N° 4*/
/*Microdesafío 1*/
let perfil = 'Administrador'
if(perfil === ''){
    console.log('Debe especificar el perfil del usuario');
}else if(perfil === 'administrador' || 'Administrador' || 'ADMINISTRADOR'){
    console.log('Usted tiene todos los privilegios de uso del sistema');
}else if(perfil === 'asistente' || 'Asistente' || 'ASISTENTE'){
    console.log('Usted solo tiene permisos de registrar, modificar y consultar datos');
}else if(perfil === 'invitado' || 'Invitado' || 'INVITADO'){
    console.log('Usted solo tiene los permisos de consultar datos')
}else{
    'Debe especificar un perfil válido'
};