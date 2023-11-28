const pool = require('../../db');

const getUsers = (req, res) => 
	{
		pool.query(SELECT * FROM USER WHERE user_name="Alice Smith", (error, results)=>
		{
			if (error) throw error;
			res.status(200).json(results.rows);
		})
	}

const geAccountDetails = (req,req) =>
	{
		pool.query(SELECT * FROM ACCOUNT, (error,results)=>
		{
			if (error) throw error;
			res.status(200).json(results.rows);
		})
	}

const getConsent = (req,req) =>
	{
		pool.query(SELECT * FROM CONSENT, getUsers WHERE CONSENT.user_id=getUSERS.user_id, (error,results)=>
		{
			if (error) throw error;
			res.status(200).json(results.rows);
		})
	}
			
		


module.exports = {getUsers, getAccountDetails, getConsent};
