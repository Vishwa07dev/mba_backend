const theatreController = require("../controllers/theatre.controller");



/**
 * Routes for the movie resource
 */

module.exports = function (app) {
    app.get("/mba/api/v1/theatres", theatreController.getAllTheatres);
    app.get("/mba/api/v1/theatres/:id", theatreController.getTheatre);
    app.post("/mba/api/v1/theatres", theatreController.createTheatre);
    app.put("/mba/api/v1/theatres/:id", theatreController.updateTheatre);
    app.delete("/mba/api/v1/theatres/:id", theatreController.deleteTheatre);
    app.put("/mba/api/v1/theatres/:id/movies", theatreController.addMoviesToATheater); 
    app.get("/mba/api/v1/theatres/:theatreId/movies/:movieId", theatreController.checkMovieInsideATheatre);   
}