import { Mail } from './mail';
import { Direccion } from './direccion';
import { Telefono } from './telefono';

export class Persona {
  nombre: string;
  apellidos: string;
  edad: number;
  dni: string;
  cumpleanos: string;
  colorFavorito: string;
  sexo: string;
  direcciones: Direccion[];
  mails: Mail[];
  telefonos: Telefono[];
  notas: string;

  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    dni: string,
    cumpleanos: string,
    colorFavorito: string,
    sexo: string,
    direcciones: Direccion[],
    mails: Mail[],
    telefonos: Telefono[],
    notas: string
  ) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.dni = dni;
    this.cumpleanos = cumpleanos;
    this.colorFavorito = colorFavorito;
    this.sexo = sexo;
    this.direcciones = direcciones;
    this.mails = mails;
    this.telefonos = telefonos;
    this.notas = notas;
  }

  getNombre(): string {
    return this.nombre;
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  getApellidos(): string {
    return this.apellidos;
  }

  setApellidos(apellidos: string): void {
    this.apellidos = apellidos;
  }

  getEdad(): number {
    return this.edad;
  }

  setEdad(edad: number): void {
    this.edad = edad;
  }

  getDni(): string {
    return this.dni;
  }

  setDni(dni: string): void {
    this.dni = dni;
  }

  getCumpleanos(): string {
    return this.cumpleanos;
  }

  setCumpleanos(cumpleanos: string): void {
    this.cumpleanos = cumpleanos;
  }

  getColorFavorito(): string {
    return this.colorFavorito;
  }

  setColorFavorito(colorFavorito: string): void {
    this.colorFavorito = colorFavorito;
  }

  getSexo(): string {
    return this.sexo;
  }

  setSexo(sexo: string): void {
    this.sexo = sexo;
  }

  getDirecciones(): Direccion[] {
    return this.direcciones;
  }

  setDirecciones(direcciones: Direccion[]): void {
    this.direcciones = direcciones;
  }

  getMails(): Mail[] {
    return this.mails;
  }

  setMails(mails: Mail[]): void {
    this.mails = mails;
  }

  getTelefonos(): Telefono[] {
    return this.telefonos;
  }

  setTelefonos(telefonos: Telefono[]): void {
    this.telefonos = telefonos;
  }

  getNotas(): string {
    return this.notas;
  }

  setNotas(notas: string): void {
    this.notas = notas;
  }

  mostrarDatos(): void {
    console.log('Nombre: ', this.getNombre(), 'Apellidos: ', this.getApellidos(), 'Edad: ', this.getEdad(), 'DNI: ', this.getEdad(), 'Cumpleaños: ', this.getCumpleanos(), 'Color Favorito: ', this.getColorFavorito(), 'Sexo: ', this.getSexo(), 'Direcciones: ', this.getDirecciones(), 'Mail: ', this.getMails(), 'Teléfono: ', this.getTelefonos(), 'Notas: ', this.getNotas());
   }

   busquedaDni(dni: string): boolean {
    return dni === this.dni;
   }

}
