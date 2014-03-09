db.zips.aggregate([
	{
		$match: {
			$or: [
				{state: 'CA'}, 
				{state: 'NY'}
			]
		}
	}, {
		$group: {
			_id: {
				state: '$state', 
				city: '$city'
			}, 
			pop : {$sum: '$pop'}
		}
	}, {
		$match: {
			pop: {$gt: 25000}
		}
	}, {
		$group: {
			_id: null, 
			'avg_pop': {$avg: '$pop'}
		}
	}
])
