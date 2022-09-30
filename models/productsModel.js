const pool = require("../db");
async function getDiscografia() {
    const query = "SELECT * FROM discografia";
    const rows = await pool.query(query);
    return rows;
}

module.exports = { getDiscografia };