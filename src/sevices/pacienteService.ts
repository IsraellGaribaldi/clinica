import type { Paciente, PacienteDTO } from "../types/paciente.js";
import prisma from "../prisma.js";

export async function listar() {
    return prisma.paciente.findMany();
}
export async function buscarPorId(id: number) {
    return prisma.paciente.findUnique({ where: { id } });
}
export async function cadastrar(dados: PacienteDTO) {
    return prisma.paciente.create({ data: dados });
}
export async function atualizar(id: number, dados: PacienteDTO) {
    return prisma.paciente.update({ where: { id }, data: dados });
}
export async function deletar(id: number) {
    return prisma.paciente.delete({ where: { id } });
}