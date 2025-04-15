import { MMKV } from "react-native-mmkv";
import { IStorage } from "./interface.utl";

const mmkv = new MMKV();

/**
 * Stores data in the MMKV storage
 * @param {string} key - The key to store the data under
 * @param {object | string} data - The data to store (can be an object or string)
 * @returns {Promise<void>}
 */
const keep = async (key: string, data: object | string): Promise<void> => {
  try {
    const value = typeof data === "object" ? JSON.stringify(data) : data;
    mmkv.set(key, value);
  } catch (error) {
    console.error("Error storing data:", error);
  }
};

/**
 * Fetches raw string data from storage
 * @param {string} key - The key to fetch data for
 * @returns {Promise<string | null>} The stored string value or null if not found
 */
const fetch = async (key: string): Promise<string | null> => {
  try {
    return mmkv.getString(key) ?? null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

/**
 * Fetches and parses JSON data from storage
 * @param {string} key - The key to fetch JSON data for
 * @returns {Promise<any | null>} The parsed JSON data or null if not found/invalid
 */
const getJSON = async (key: string): Promise<any | null> => {
  try {
    const data = await fetch(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
};

/**
 * Checks if a key exists in storage
 * @param {string} key - The key to check
 * @returns {Promise<boolean>} True if the key exists, false otherwise
 */
const exists = async (key: string): Promise<boolean> => {
  try {
    return mmkv.contains(key);
  } catch (error) {
    console.error("Error checking key:", error);
    return false;
  }
};

/**
 * Updates existing data in storage, merging if object
 * @param {string} key - The key to update
 * @param {object | string} newData - The new data to update with
 * @returns {Promise<void>}
 */
const update = async (key: string, newData: object | string): Promise<void> => {
  try {
    const existing = await getJSON(key);
    const updated =
      typeof newData === "object" && existing
        ? { ...existing, ...newData }
        : newData;
    await keep(key, updated);
  } catch (error) {
    console.error("Error updating data:", error);
  }
};

/**
 * Merges new object data with existing stored object
 * @param {string} key - The key to merge data for
 * @param {object} newData - The new object data to merge
 * @returns {Promise<void>}
 */
const merge = async (key: string, newData: object): Promise<void> => {
  try {
    const existing = await getJSON(key);
    const merged = { ...(existing ?? {}), ...newData };
    await keep(key, merged);
  } catch (error) {
    console.error("Error merging data:", error);
  }
};

/**
 * Removes data for a specific key from storage
 * @param {string} key - The key to remove
 * @returns {Promise<void>}
 */
const remove = async (key: string): Promise<void> => {
  try {
    mmkv.delete(key);
  } catch (error) {
    console.error("Error removing data:", error);
  }
};

/**
 * Clears all data from storage
 * @returns {Promise<void>}
 */
const clearAll = async (): Promise<void> => {
  try {
    mmkv.clearAll();
  } catch (error) {
    console.error("Error clearing storage:", error);
  }
};

/**
 * Stores multiple items in storage
 * @param {Array<{key: string, data: object | string}>} items - Array of key-value pairs to store
 * @returns {Promise<void>}
 */
const multiKeep = async (
  items: { key: string; data: object | string }[]
): Promise<void> => {
  try {
    for (const { key, data } of items) {
      const value = typeof data === "object" ? JSON.stringify(data) : data;
      mmkv.set(key, value);
    }
  } catch (error) {
    console.error("Error storing multiple items:", error);
  }
};

/**
 * Fetches multiple items from storage
 * @param {string[]} keys - Array of keys to fetch
 * @returns {Promise<{[key: string]: any | null}>} Object containing key-value pairs of fetched data
 */
const multiFetch = async (
  keys: string[]
): Promise<{ [key: string]: any | null }> => {
  try {
    const result: { [key: string]: any } = {};
    for (const key of keys) {
      const value = mmkv.getString(key);
      result[key] = value ? JSON.parse(value) : null;
    }
    return result;
  } catch (error) {
    console.error("Error fetching multiple items:", error);
    return {};
  }
};

/**
 * Removes multiple items from storage
 * @param {string[]} keys - Array of keys to remove
 * @returns {Promise<void>}
 */
const multiRemove = async (keys: string[]): Promise<void> => {
  try {
    for (const key of keys) {
      mmkv.delete(key);
    }
  } catch (error) {
    console.error("Error removing multiple items:", error);
  }
};

const storage: IStorage = {
  keepData: keep,
  fetchData: fetch,
  getJSON,
  exists,
  updateData: update,
  mergeData: merge,
  removeData: remove,
  clearAll,
  multiKeep,
  multiFetch,
  multiRemove,
};

export default storage;
