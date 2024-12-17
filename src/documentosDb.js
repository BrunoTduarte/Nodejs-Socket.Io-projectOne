import { documentosColecao } from "./dbConect.js";

function obterDocumentos() {
  const documentos = documentosColecao.find().toArray();
  return documentos
}

function adcionarDocumento(nome) {
  const resultado = documentosColecao.insertOne({
    nome,
    texto: ""
  });

  return resultado;
}

function encontrarDocumento(nome) {
  const documento = documentosColecao.findOne({
    nome,
  });

  return documento;
}

function atualizaDocumento(nome, texto) {
  const atualizacao = documentosColecao.updateOne(
    {
      nome,
    },
    {
      $set: {
        texto,
      },
    }
  );

  return atualizacao;
}

async function excluirDocumento(nome) {
  const resultado = await documentosColecao.deleteOne({ nome });
  return Promise.resolve(resultado); // ou return resultado; se já for uma promise
}

export { encontrarDocumento, atualizaDocumento, obterDocumentos, adcionarDocumento, excluirDocumento };