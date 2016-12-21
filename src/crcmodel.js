/**
 * Created by Johannes Rudolph on 09.12.2016.
 */

function CrcModel (width, name, polynomial, initial, finalXor, inputReflected, resultReflected) {
    this.width = width;
    this.name = name;
    this.polynomial = polynomial;
    this.initial = initial;
    this.finalXor = finalXor;
    this.inputReflected = inputReflected;
    this.resultReflected = resultReflected;
}