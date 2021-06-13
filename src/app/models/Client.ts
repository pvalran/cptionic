export class Client {
    public id_client: number;
    public name: string;
    public apellidoPaterno: string;
    public apellidoMaterno: string;
    public fechaNacimiento: Date;
    public curp: string;
    public rfc: string;
    public edad: number;
    public estadoNacimiento: number;
    public email: string;
    public numInterior: string;
    public calle: string;
    public numero: string;
    public colonia: string;
    public genero: Genero;
}

export interface Genero {
    id: number;
    text: string;
  }