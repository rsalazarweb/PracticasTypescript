function activar(//parámetro obligatorio 
                quien:string,
                //parametro por defecto
                objeto:string = "Batiseñal",
                //Parametro opcional
                momento?:string)
{
    let mensaje:string;
    
    if( momento )
    {
        mensaje = `${ quien } activó la ${ objeto } en la ${ momento }`;
    }
    else 
    {
        mensaje = `${ quien } activó la ${ objeto }`;
    }
    return mensaje;

}

console.log(activar("Gordon", "Batiseñal", "Noche"));