interface Interface1
{
    prop1: number;
}

interface Interface2
{
    prop2: number;
    prop3: number;
}

interface Interface3
{
    prop2: number;
}

type Interfacemix = Interface1 & Interface2 & Interface3;


const Interfacemix: Interfacemix = 
{
    prop1:2,
    prop2:3,
    prop3:5
}