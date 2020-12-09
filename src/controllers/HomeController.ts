import * as express from "express";
import { Request, Response } from "express";
import { createConnection } from "typeorm";
import { Usuarios } from "../entity/User";
import ControllerBase from "../interfaces/ControllerBase.interface";

class HomeController implements ControllerBase {
  public path = "/";
  public router = express.Router();
  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.post(this.path, this.createUser);
  }

  public createUser(req: Request, res: Response) {
    createConnection().then(async (connection) => {
      const body = req.body;
      const userRepository = connection.getRepository(Usuarios);

      let user: Usuarios = new Usuarios();
      user.email = body.email;
      user.nombre = body.nombre;
      user.apellido_materno = body.apellido_materno;
      user.apellido_paterno = body.apellido_paterno;
      user.fecha_nacimiento = body.fecha_nacimiento;
      user.genero = body.genero;

      userRepository.save(user);
      res.status(200).json({ "message": "ok" });
    }).catch((e) => {
      console.log(e);
    });
  }
}

export default HomeController;
