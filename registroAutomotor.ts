import {Auto} from './claseAuto';
import * as fs from "fs";

const baseDeDatosAutos: string [] = [];

export class RegistroAutomotor{
    actualizacion(baseDeDatosAutos: Auto) {
        console.log(baseDeDatosAutos);       
    } 

    anadeAutos(baseDeDatosAutos, nuevoAuto: Auto) {
        if(baseDeDatosAutos.push(nuevoAuto)) {
            this.arrayAJason(baseDeDatosAutos)
            console.log(`The car data has been successfully added.`, nuevoAuto);
        } else {
            console.log(`The car data has not been added.`);
        }
    }

    consultaBaseDeDatos(nombre: string, baseDeDatosAutos) {
        const autoEncontrado = baseDeDatosAutos.filter(baseDeDatosAutos => baseDeDatosAutos.nombre == nombre)
        if (autoEncontrado) {
            console.log(`The car you are looking for is in the database.`);
            } else {
            console.log(`The required data were not found.`);
        }
    }

    // modificaArchivo(nombre: string, baseDeDatosAutos, dato: string) {
    //     let archivoModificado = this.consultaBaseDeDatos(nombre, baseDeDatosAutos);
    //     if (archivoModificado) {
    //         archivoModificado.marca = dato;
    //         console.log(`The database has been modified: It can be find as: "${dato}".`);
    //     } else {
    //         console.log(`The database could not be modified`);                            
    //     }
    // }

    eliminaArchivo(nombre: string, baseDeDatosAutos) {
        const archivoEliminado = baseDeDatosAutos.filter(element => element.nombre === nombre);
        if(archivoEliminado){  
            console.log(`The datafile has been deleted`);
            } else {
                return `The datafile could not be deleted`;
            }
        }

    arrayAJason(baseDeDatosAutos:Auto[]) {
        const updateCar= JSON.stringify(baseDeDatosAutos);
        fs.writeFileSync('./registro autos.json', updateCar, 'utf-8')
        }
    }
    