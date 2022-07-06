const accountService = require("../services/account.service");

module.exports.login = async (req, res, next) => {
  try {
    const user = await accountService.login(
      req.params.email,
      req.params.password
    );
    if(!user){
        res.status(400).json({msg:`member with id ${req.params.id} not found!`})
    }
    else res.json(user);
  } catch (err) {
    next(err);
  }
};
