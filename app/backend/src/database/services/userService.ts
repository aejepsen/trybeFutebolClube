import User from '../models/userModel';

class UserService {
  static getLogin = async (email: string) => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g;
    if (!regex.test(email)) {
      return 0;
    }
    const newLogin = await User.findOne({
      where: { email }, raw: true,
    });
    if (!newLogin) {
      return 0;
    }
    return newLogin;
  };
}

export default UserService;
