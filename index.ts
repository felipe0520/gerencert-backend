import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  {
    fullName: "Bruno José da Silva",
    cpf: "100-200-300-40",
    birthday: "10/01/1991",
    contactPhone: "99999-9999",
    contactEmail: "brunojose@email.com",
    status: true,
  },
  {
    fullName: "Bruno José da Silva",
    cpf: "100-200-300-40",
    birthday: "10/01/1991",
    contactPhone: "99999-9999",
    contactEmail: "brunojose@email.com",
    status: true,
  },
  {
    fullName: "Bruno José da Silva",
    cpf: "100-200-300-40",
    birthday: "10/01/1991",
    contactPhone: "99999-9999",
    contactEmail: "brunojose@email.com",
    status: true,
  },
  {
    fullName: "Bruno José da Silva",
    cpf: "100-200-300-40",
    birthday: "10/01/1991",
    contactPhone: "99999-9999",
    contactEmail: "brunojose@email.com",
    status: true,
  },
];

const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});

app.get("/users", async function (req: Request, res: Response) {
  res.status(200).send({ users });
});
