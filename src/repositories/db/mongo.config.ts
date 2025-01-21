import { connect } from "mongoose"


const enviromentVariables = {
  db_user: process.env.DB_USER as string,
  db_name: process.env.DB_NAME as string,
  db_pass: process.env.DB_PASS as string
}
const { db_name, db_pass, db_user } = enviromentVariables

export const connectionMongo = async () => {
  await connect(`mongodb+srv://${db_user}:${db_pass}@cluster0.csaok.mongodb.net/${db_name}?retryWrites=true&w=majority&appName=Cluster0`)
}