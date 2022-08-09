import { AppError } from "../../../../errors/AppError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User does not exist!");
    }
    if (user.admin !== true) {
      throw new AppError("User is not admin!");
    }
    const list = this.usersRepository.list();

    return list;
  }
}

export { ListAllUsersUseCase };
