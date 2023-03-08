export class Auto {
    private marca: string;
    private modelo: string;
    private motor: number;
    private patente: string;
    private nroChasis: number;
    private nroMotor: number;

    constructor(marca: string,  modelo: string, motor: number, patente: string,  nroChasis: number, nroMotor: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.patente = patente;
        this.nroChasis = nroChasis;
        this.nroMotor = nroMotor;
    }
}