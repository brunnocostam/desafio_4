import { AppError } from "../../../../errors/AppError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const nameAlreadyExists = this.usersRepository.findByEmail(email);

    if (nameAlreadyExists) {
      throw new AppError("Email already exists!");
    }

    const user = this.usersRepository.create({
      name,
      email,
    });
    return user;
  }
}

export { CreateUserUseCase };
