const expressCallback = (controller) => {
  return (req, res) => {
    const httpRequest = {
      pathParams: req.params,
      body: req.body,
      query: req.query,
      method: req.method,
      user: req.user,
      ip: req.ip,
      headers: {
        'Content-Type': req.get('Content-Type'),
        Referer: req.get('Referer'),
        'User-Agent': req.get('User-Agent'),
        'x-auth-token': req.get('x-auth-token')
      }
    }
    controller(httpRequest)
      .then((httpResponse) => {
        if (httpResponse.headers) {
          res.set(httpResponse.headers)
        }

        res.type('json')
        res.status(httpResponse.statusCode).send(httpResponse.data)
      })
      .catch((error) => res.status(error.statusCode || 500).send(error.message))
  }
}

export default expressCallback
