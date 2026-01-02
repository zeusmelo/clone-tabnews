function status(request, response) {
  response.status(200).json({ retorno: "o retorno da requisição foi correto" });
}

export default status;
