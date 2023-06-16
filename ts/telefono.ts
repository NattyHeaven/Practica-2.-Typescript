export class Telefono {
    numero: number;
    tipo: string;
    
    constructor(tipo: string, numero: number){
        this.tipo = tipo;
        this.numero = numero;
    }

    getNumero(): number {
        return this.numero;
    }
    setNumero(numero: number): void {
        this.numero = numero;
    }

    getTipo(): string {
        return this.tipo;
    }
    setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    mostrarDatos(): void {
        console.log('Tipo: ', this.getTipo(), 'Direccion: ', this.getNumero())
    }
}