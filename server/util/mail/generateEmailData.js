const welcome = require("./templates/welcome/welcomeTemplate");
const purchase = require("./templates/purchase/purchaseTemplate");

const getEmailData = (to, name, token, template, actionData) => {
  let data = null;

  switch (template) {
    case "welcome":
      data = {
        from: '"Waves 👻" <waves.guitars.shop@gmail.com>', // sender address
        to,
        subject: `Welcome to waves ${name} ✔`, // Subject line

        html: welcome(),
      };
      break;
    case "purchase":
      data = {
        from: '"Waves 👻" <waves.guitars.shop@gmail.com>', // sender address
        to,
        subject: `Thanks for shopping with us ${name} ✔`, // Subject line

        html: purchase(actionData),
      };
      break;
    default:
      return data;
  }

  return data;
};

module.exports = { getEmailData };
