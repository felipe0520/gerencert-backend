import mongoose, { ConnectionOptions } from "mongoose";
import config from "../config/config";

export abstract class BaseDataBase {
  private static dbOptions: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };

  protected getConnection() {
    return mongoose.connect(config.DB.URI as string, BaseDataBase.dbOptions);
  }

  public async destroyConnection(): Promise<void> {
    await mongoose.connection.close();
  }
}
