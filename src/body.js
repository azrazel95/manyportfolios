function body(cards){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Employee sheet</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./Assets/style.css"/>
    </head>
    <body>
    <nav class="navbar bg-danger bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand  mb-0 h1">Our Team</span>
  </div>
</nav>
${cards}
</body>
</html>`

}; module.exports = body