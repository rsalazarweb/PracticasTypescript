class Transporte
{
    private velocidad: number;
    private formaDeMovilidad: string;

    constructor(velocidad:number, formaDeMovilidad:string)
    {
        this.velocidad = velocidad;
        this.formaDeMovilidad = formaDeMovilidad;
    }

    //Getter y Setter
    getVelocidad()
    {
        return this.velocidad;
    }

    setVelocidad(velocidad: number)
    {
        this.velocidad = velocidad;
    }

    getFormaDeMovilidad()
    {
        return this.formaDeMovilidad;
    }

    setFormaDeMovilidad(formaDeMovilidad: string)
    {
        this.formaDeMovilidad = formaDeMovilidad;
    }
}

const transporte: Transporte = new Transporte(20, 'suelo');

class Auto extends Transporte
{
    private cantidadPuertas: number;

    constructor(velocidad:number, formaDeMovilidad:string, cantidadPuertas:number)
    {
        //Constructor heredado del padre Transporte,
        //para poder hacer uno del mismo se utiliza super() que toma automáticamente el constructor de la clase padre
        super(velocidad, formaDeMovilidad);
        this.cantidadPuertas = cantidadPuertas;
    }

    getVelocidad()
    {
        return super.getVelocidad() + 10;
    }

    getCantidadDePuertas()
    {
        return this.cantidadPuertas;
    }

    setCantidadDePuertas(cantidadPuertas: number)
    {
        this.cantidadPuertas = cantidadPuertas;
    }
}

const auto: Auto = new Auto(20, 'suelo', 5)
