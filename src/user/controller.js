const pool = require('../../db');

const getUsers = (req, res) => 
	{
		console.log(req);
		res.send(200, req.id);
		pool.query(`SELECT * FROM USER WHERE user_id=${req.id}`, (error, results)=>
		{
			if (error) throw error;
			res.status(200).json(results.rows);
		})
	}

const getAccountDetails = (req,res) =>
	{
		pool.query(`SELECT * FROM ACCOUNT`, (error,results)=>
		{
			if (error) throw error;
			res.status(200).json(results.rows);
		})
	}

const getConsent = (req,res) =>
	{
		pool.query(`SELECT * FROM CONSENT, USER WHERE CONSENT.user_id=USER.user_id`, (error,results)=>
		{
			if (error) throw error;
			res.status(200).json(results.rows);
		})
	}
			
		
module.exports = {getUsers, getAccountDetails, getConsent};
