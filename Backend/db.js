import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: 'postgresql://my_db_raye_user:cWkrYjsR7FRMSlz0pGRFNilunUh56HUE@dpg-d08h1qqli9vc739qhls0-a.singapore-postgres.render.com/my_db_raye',
  user: 'postgres',
  host: 'localhost',
  database: 'portfolio',
  password: '1234',
  port: 5432,
});

export default pool;
