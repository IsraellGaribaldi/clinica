import { Request, Response } from "express";
import * as service from "../sevices/pacienteService.js";
export async function listar(req, res) {
    const pacientes = await service.listar();
    res.json(pacientes);
}
;
export async function buscarPorId(req, res) {
    const id = Number(req.params.id);
    const paciente = await service.buscarPorId(id);
    res.json(paciente);
}
;
export async function cadastrar(req, res) {
    const dados = req.body;
    const paciente = await service.cadastrar(dados);
    res.status(201).json(paciente);
}
;
export async function atualizar(req, res) {
    const id = Number(req.params.id);
    const dados = req.body;
    const paciente = await service.atualizar(id, dados);
    res.json(paciente);
}
;
export async function deletar(req, res) {
    const id = Number(req.params.id);
    await service.deletar(id);
    res.status(204).send();
}
;
//# sourceMappingURL=pacienteController.js.map