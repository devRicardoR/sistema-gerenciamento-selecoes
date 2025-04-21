import { consulta } from "../database/conexao.js";


class SelecaoRepository {
    // CRUD
    create(selecao) {
        const execSql = "INSERT INTO selecoes SET ?;"
        return consulta(execSql, selecao, 'Não foi possivel cadastrar a seleção!!')
    };

    findAll() {
        const execSql = "SELECT * FROM selecoes;"
        return consulta(execSql, 'Não foi possivel localizar!')
    };

    findById(id) {
        const execSql = "SELECT * FROM selecoes WHERE id=?;"
        return consulta(execSql, id, 'Não foi possivel localizar a seleção!!')
    };


    update(id, selecao) {
        const execSql = "UPDATE selecoes SET ? WHERE id=?";
        return consulta(execSql, [selecao, id], 'Não foi possivel atualizar a seleção!!')
    };

    delete(id) {
        const execSql = "DELETE FROM selecoes WHERE id=?;"
        return consulta(execSql, id, 'Não foi possivel deletar a seleção!')
    };
};

export default new SelecaoRepository()
