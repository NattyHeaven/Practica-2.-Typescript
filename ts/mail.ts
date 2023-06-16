export class Mail {
    direccion: string;
    tipo: string;

    constructor(direccion: string, tipo: string){
        this.direccion = direccion;
        this.tipo = tipo;
    }

    getDireccion(): string {
        return this.direccion;
    }
    setDireccion(direccion: string): void{
        this.direccion = direccion;
    }

    getTipo(): string {
        return this.tipo;
    }
    setTipo(tipo: string): void{
        this.tipo = tipo;
    }

    mostrarDatos(): void {
        console.log('Tipo: ', this.getTipo(), 'Dirección: ', this.getDireccion())
    }
}