export interface Siniestro {
    NroSiniestro:    string;
    FechaOcurrencia: string;
    NroPoliza:          string;
    Asegurado:       string;
    Riesgo:          string;
    Rama:            number;
}

export interface Rama {
    nroRama: number,
    Rama: string
}
