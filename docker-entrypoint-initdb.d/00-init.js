db.createUser({
    user: "app",
    pwd: "pass",
    roles: [
        {
            role: "readWrite",
            db: "db",
        }
    ]
});


db.createCollection('users', {
        validator: {
            $jsonSchema: {
                bsonType: 'object',
                required: ['name', 'payments'],
                properties: {
                    name: {
                        bsonType: 'string'
                    },
                    payments: {
                        bsonType: 'array',
                        items: {
                            bsonType: 'object',
                            required: ['icon', 'title', 'www'],
                            properties: {
                                _id: {},
                                icon: {
                                    bsonType: 'string'
                                },
                                title: {
                                    bsonType: 'string'
                                },
                                www: {
                                    bsonType: 'string'
                                }
                            }
                        }
                    }
                }
            }
        }
    }
);

db.users.insertOne ({
        name: 'user2',
        payments: [
            {icon: 'icon2', title: 'title1', www: 'http://link2'},
            {icon: 'icon3', title: 'title3', www: 'http://link3'},
            {icon: 'icon4', title: 'title4', www: 'http://link4'},
            {icon: 'icon5', title: 'title5', www: 'http://link5'},
        ]
    }
);

db.users.insertOne ({
        name: 'user3',
        payments: [
            {icon: 'icon6', title: 'title10', www: 'http://link21'},
            {icon: 'icon7', title: 'title39', www: 'http://link32'},
            {icon: 'icon8', title: 'title46', www: 'http://link43'},
            {icon: 'icon9', title: 'title53', www: 'http://link54'},
        ]
    }
);

db.users.insertOne ({
        name: 'user4',
        payments: [
            {icon: 'icon3', title: 'title101', www: 'http://link212'},
            {icon: 'icon2', title: 'title392', www: 'http://link323'},
            {icon: 'icon5', title: 'title463', www: 'http://link434'},
            {icon: 'icon1', title: 'title534', www: 'http://link545'},
        ]
    }
);