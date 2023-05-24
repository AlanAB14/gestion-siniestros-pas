export interface SiniestroRes {
    NroSiniestro:    string;
    FechaOcurrencia: string;
    NroPoliza:          string;
    Asegurado:       string;
    Riesgo:          string;
    Rama:            number;
}

export interface Rama {
    idRama: number,
    rama: string
}
