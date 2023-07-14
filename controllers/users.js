const usersController = (req,res) =>{
    res.json({
        userNames:['user1', 'user2', 'user3']
    })
};

module.export = usersController; 