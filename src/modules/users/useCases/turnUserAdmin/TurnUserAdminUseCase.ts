import { AppError } from "../../../../errors/AppError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    let user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User does not exist!", 404);
    }

    user = this.usersRepository.turnAdmin(user);
    return user;
  }
}

export { TurnUserAdminUseCase };
