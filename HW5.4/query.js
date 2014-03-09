db.zips.aggregate([
	{
		$match: {city: {$regex: /^\d+/}}
	}, {
		$group: {
			_id: null, 
			total: {$sum: '$pop'}
		}
	}
])
