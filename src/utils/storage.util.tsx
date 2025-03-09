import AsyncStorage from "@react-native-async-storage/async-storage";
import { IStorage } from "./interface.utl";


const keep = async (key: string, data: object | string): Promise<void> => {
  try {
    const value = typeof data === "object" ? JSON.stringify(data) : data;
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error("Error storing data:", error);
  }
};

const fetch = async (key: string): Promise<string | null> => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? data : null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const remove = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing data:", error);
  }
};

const clearAll = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error("Error clearing AsyncStorage:", error);
  }
};

const storage: IStorage = {
  keepData: keep,
  fetchData: fetch,
  removeData: remove,
  clearAll,
};

export default storage;
