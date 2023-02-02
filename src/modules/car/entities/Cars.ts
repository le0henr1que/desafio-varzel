import { uuid } from "uuidv4";

export class DataCar {
  public readonly id!: string;
  public name!: string;
  public brand!: string;
  public model!: string;
  public image!: string;

  constructor(props: Omit<DataCar, "id">, id?: string) {
    //Passa todas as propriedades de Product para this
    Object.assign(this, props);
    //Não deixar a responsabilidade do uuid para o Banco de dados, passando um uuid caso não exista
    if (!id) {
      this.id = uuid();
    }
  }
}
