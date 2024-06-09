import axios from "axios";
import { registerType } from "@/schema/customTypte";
import { LoginSchemaType } from "@/schema/validation";

export const registerUser = async (credentials: registerType): Promise<any> => {
  const res = await axios.post("/api/auth/register", credentials);
  return res.data;
};


export const login = async(credential:LoginSchemaType)=>{
  const res = await axios.post( `/api/auth/login`, credential)
  return res.data;
}