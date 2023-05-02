/** Database setup for BizTime. */

const { Client } = require("pg");

/* Trying to connect to a database this way does not work. 

const client = new Client({
	connectionString: "postgresql:///biztime",
});

*/

const client = new Client({
	host: "/var/run/postgresql/",
	database: "biztime",
});

client.connect();

module.exports = client;
