class UserService {
    constructor(model) {
        this.model = model;
    }
    async getAllUsers() {
        const users = await this.model.users.find().sort({ createdAt: -1 });
        return users;
    }

    async addUserData(data) {
        const doc = await this.model.users(data);
        const user = await doc.save();
        return user;
    }

    async getUserData(id) {
        const user = await this.model.users.findById(id);
        return user;
    }

    async setUserAvatar(id, avatar) {
        const user = await this.model.users.findByIdAndUpdate(
            id,
            { avatar },
            { new: true },
        );
        return user;
    }
}

module.exports = UserService;
