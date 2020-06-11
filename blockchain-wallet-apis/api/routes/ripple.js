const express    = require("express");
const router     = express.Router();
const controller = require('../controllers/rippleControllers');

router.post("/transaction/send",controller.sendTransaction);

router.get("/transaction/info/:txid",controller.getTransaction);

router.get("/user/balance/:address",controller.getUserBalance);

router.get("/user/address/generate",controller.generateUserAddress);

module.exports = router;
