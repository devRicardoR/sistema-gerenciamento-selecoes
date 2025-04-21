import mysql2 from 'mysql2';
import dotenv from 'dotenv';
dotenv.config(); // carrega o .env

const conexao = mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

conexao.connect();

/**
 * Executa um código SQL com ou sem valores.
 * @param {string} execSql Instrução SQL a ser executada.
 * @param {string|array} valores Valores a serem passados ao SQL.
 * @param {string} mensagemReject Mensagem a ser exibida em caso de erro.
 * @returns {Promise<any>} Objeto da Promise com os resultados.
 */
export const consulta = (execSql, valores = '', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(execSql, valores, (erro, resultado) => {
            if (erro) return reject(mensagemReject);
            const row = JSON.parse(JSON.stringify(resultado));
            return resolve(row);
        });
    });
};

export default conexao;