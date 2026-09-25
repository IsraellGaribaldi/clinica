export interface PacienteDTO {
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
}

export interface Paciente extends PacienteDTO {
    id: number;
}