import { EntityRepository, Repository } from 'typeorm';
import UserToken from '../entities/UserToken';

@EntityRepository(UserToken)
class UserRepository extends Repository<UserToken> {
  public async findByToken(token: string): Promise<UserToken | undefined> {
    const user = await this.findOne({
      where: {
        token,
      },
    });

    return user;
  }

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = await this.create({
      user_id,
    });
    await this.save(userToken);

    return userToken;
  }
}

export default UserRepository;
