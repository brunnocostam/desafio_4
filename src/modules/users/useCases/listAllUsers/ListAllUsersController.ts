import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    const users = this.listAllUsersUseCase.execute({
      user_id: String(user_id),
    });
    return response.status(201).json(users);
  }
}

export { ListAllUsersController };
