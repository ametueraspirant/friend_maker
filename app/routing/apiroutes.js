let friend_data = require("../data/friends");

module.exports = function(app)
{
	app.get("/api/friends", function(req, res)
	{
		res.json(friend_data);
	});

	// app.post("/api/friends", function(req, res)
	// {
	// 	friend_data.push(req.body);
    // 	res.json(true);
	// });
}