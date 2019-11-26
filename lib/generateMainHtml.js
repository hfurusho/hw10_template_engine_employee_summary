const generateCard = require("./generateCard.js");

function generateMainHtml(team) {
  let cardsHtml = "";
  for (let member of team) {
    cardsHtml += generateCard(member);
  }
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Merienda|Ubuntu&display=swap"
      rel="stylesheet"
    />
    <script
      src="https://kit.fontawesome.com/b89a55f4ba.js"
      crossorigin="anonymous"
    ></script>
    <style>
      .card-header {
        background-color: #b82d17;
        color: white;
      }
      .container-fluid h2 {
        font-family: "Merienda", cursive;
        font-weight: bold;
      }
      .card {
        font-family: "Ubuntu", sans-serif;
      }
    </style>
  </head>
  <body>
    <div class="container-fluid bg-info text-center text-light py-4">
      <div class="row d-flex justify-content-around">
        <div class="col-12"><h2>My Team</h2></div>
      </div>
    </div>
    <div class="container">
      <div class="row">
      ${cardsHtml}
      </div>
    </div>
  </body>
</html>
`;
}

module.exports = generateMainHtml;
