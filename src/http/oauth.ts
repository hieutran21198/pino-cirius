import axios from "axios";
import { API } from "constants/http";

export const loginViaGoogle = async (): Promise<void> => {
  try {
    await axios.get(API.loginViaGoogleUrl);
  } catch (e: unknown) {}
};
