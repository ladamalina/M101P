db.grades.aggregate([
	{
		$unwind: '$scores'
	}, {
		$match: {
			$or: [
				{'scores.type': 'homework'}, 
				{'scores.type': 'exam'}
			]
		}
	}, {
		$group: {
			_id: {
				class_id: '$class_id', 
				student_id: '$student_id'
			}, 
			avg_score: {$avg: '$scores.score'}
		}
	}
])
