import { Persona } from './persona';
import { Mail } from './mail';
import { Direccion } from './direccion';
import { Telefono } from './telefono';

const persona_uno = new Persona(
    
    'Elena', 'Moreno', 41, '54673456T', '30/05', 'azul', 'mujer', [new Direccion('Avenida de la Albufera', 105, 3, 'A', 28028, 'Madrid', 'Madrid')], [new Mail('Personal', 'elena.moreno@gmail.com')], [new Telefono('Movil', 625543987,)], 'Solo WhatsApp');

const persona_dos = new Persona(
    'Santos', 'Garcia', 45, '34568732R', '15/03', 'amarillo', 'hombre', [new Direccion('Calle de Guadaira', 4, 2, 'B', 28018, 'Madrid', 'Madrid')], [new Mail('Personal', 'santos.garcia@gmail.com')], [new Telefono('Movil', 634456732)], 'Nada');


const persona_tres = new Persona(
    'Aurora', 'Munoz', 27, '45981276J', '09/07', 'rojo', 'mujer', [new Direccion('Calle Ciudad de Getafe', 45, 3, 'A', 28003, 'Madrid', 'Madrid')], [new Mail('Personal', 'aurora.munoz@gmail.com')], [new Telefono('Movil', 623339987)], 'Solo por la tarde');

console.log('Datos Personales: ');
console.log(persona_uno);
console.log(persona_dos);
console.log(persona_tres);

const arrayPersonas: Persona[] = [persona_uno, persona_dos, persona_tres];
const dniBusqueda: string = '54673456T';

const personaModificada: Persona = arrayPersonas.find(persona => persona.dni === dniBusqueda) as Persona;

const direccionModificada = new Direccion(
    "Calle de Pedro Laborde", 15, 3, 'B', 28018, 'Madrid', 'Madrid'
)
const mailModificado = new Mail(
    "Personal", "elena.moreno.30.05@gmail.com"
)
const telefonoModificado = new Telefono(
    "Móvil", 638886547
)
personaModificada.mostrarDatos();
personaModificada.mostrarDatos();
personaModificada.mostrarDatos()

console.log('Datos Personales modificados: ');
console.log(persona_uno);
console.log(persona_dos);
console.log(persona_tres);