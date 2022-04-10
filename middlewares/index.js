const verifyMovieReqBody = require("./verifyMovieReqBody");
const verifyTheatreReqBody = require("./verifyTheatreReqBody");
const authJwt = require("./authjwt");
const verifyUserReqBody = require("./verifyUserReqBody");
const verifyBookingReqBody = require("./verifyBookingReqBody");

module.exports = {
    verifyMovieReqBody,
    authJwt,
    verifyTheatreReqBody,
    verifyUserReqBody,
    verifyBookingReqBody
};