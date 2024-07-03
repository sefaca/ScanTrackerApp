import {InMemoryCache} from '@apollo/client';
import {MMKVStorageWrapper, persistCacheSync} from 'apollo3-cache-persist';
import fragmentMatcher from '../../common/data/apollo/generated/fragmentMatcher';
import {storage} from '../../common/data/storage';

const getItem = async (key: string) => storage.getString(key);

const setItem = async (key: string, value: string) => {
  try {
    storage.set(key, value);
    return true;
  } catch {
    return false;
  }
};

const removeItem = async (key: string) => {
  try {
    storage.delete(key);
    return true;
  } catch {
    return false;
  }
};

export const buildCache = () => {
  const cache = new InMemoryCache({...fragmentMatcher});
  const storageWrapper = new MMKVStorageWrapper({getItem, setItem, removeItem});
  persistCacheSync({cache, storage: storageWrapper});
  return cache;
};
