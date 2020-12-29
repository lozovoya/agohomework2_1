db.users.find({_id: ObjectId('5feb2b9068fd73abc5c9cc51')});

db.users.updateOne({_id: ObjectId('5feb2b9068fd73abc5c9cc51')}, {
        $set: {'payments.1.icon': 'icon1000'}
        }
    );

db.users.updateOne(
    {},{$push: {payments: {'icon': 'icon1000'}}
    }
);

db.users.updateOne(
    {_id: ObjectId('5feb2b9068fd73abc5c9cc51')},{$pull: {payments: {icon: 'icon1000'}}
    }
);