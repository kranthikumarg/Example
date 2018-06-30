const User = require('../models/user');


module.exports = {
    // index:(req, res, next) => {
    //     User.find({},(err,users) =>{
    //         if(err)
    //         {
    //             next(err);
    //         }
    //         res.status(200).json(users);
    //     }) 
    // },

    index:(req, res, next) => {
        User.find({})
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
              next(err);
        });
    },

    // newUser: (req, res, next) => {
    //      const newUser = new User(req.body);
    //      newUser.save((err, user) => {
    //          if(err)
    //          {
    //              next(err);
    //          }
    //          res.status(201).json(user);
    //      });
    // },
    newUser : (req, res, next) => {
        const newUser = new User(req.body);
        newUser.save()
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            next(err);
        })
    }
};




/*
1) Call back
2) Promises
3) Async/Await
*/