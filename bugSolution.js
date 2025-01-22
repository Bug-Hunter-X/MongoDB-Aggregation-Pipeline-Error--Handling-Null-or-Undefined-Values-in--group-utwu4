```javascript
//Correct aggregation pipeline
db.collection.aggregate([
  {
    $match: { /*some filter*/ }
  },
  {
    $addFields: {
      field: {
        $ifNull: [ "$field", 0 ] // Replace null with 0
      }
    }
  },
  {
    $group: { 
      _id: "$field", 
      count: { $sum: 1}
    }
  },
  {
    $sort: {count: -1}
  },
  {
    $limit: 10}
])
```