class UserService {
    constructor(model) {
        this.model = model;
    }
    async getAllUsers() {
        const users = await this.model.users.find().sort({ createdAt: -1 });
        return users;
    }

    async addUserData(data) {
        console.log(data, "data")
        const doc = await this.model.users(data);
        const user = await doc.save();
        return user;
    }
}

module.exports = UserService;
