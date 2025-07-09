import {home, getTodaysDate, getMonthNames, getPeople} from "../controllers/controller.js"

const routes = (app) => {
    app.route("/").get(home);
    app.route("/home").get(home);
    app.route("/today").get(getTodaysDate);
    app.route("/months").get(getMonthNames);
    app.route("/people").get(getPeople);
}

export default routes;
