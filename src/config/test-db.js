import db from "./db.js";

try {
    const [rows] = await db.query("SELECT 1 AS solution");
    console.log('Connexion MySQL réussie !', rows);
} catch (err) {
    console.error('Erreur MySQL :', err.message);
} finally {
    await db.end()
};