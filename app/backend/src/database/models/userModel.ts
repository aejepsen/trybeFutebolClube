import { Model, STRING } from 'sequelize';
import db from '.';

class User extends Model {
  id?: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

User.init({
  username: STRING,
  role: STRING,
  email: STRING,
  password: STRING,
}, {
  underscored: true,
  tableName: 'users',
  sequelize: db,
  timestamps: false,
});

export default User;
