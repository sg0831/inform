module.exports = {
    connectStart() {
        const mysql = require("mysql");
        const connection = mysql.createConnection({
            host: "127.0.0.1",
            user: "root",
            password: "root",
            database: "siloam"
        });
        connection.connect();
        return connection;
    },
    getAllList(req, res) {
        const connection = this.connectStart();
        connection.query("SELECT * FROM usecar_diary", (error, rows, fields) => {
            if (error) throw error;
            res.json(rows);
        }
        );
    }
};