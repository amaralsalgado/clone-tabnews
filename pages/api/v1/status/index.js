function status(request, response) {
  return response.status(200).json({ chave: "Olá Mundão!" });
}

export default status;