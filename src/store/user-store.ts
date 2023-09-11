import { persistentAtom, persistentMap } from "@nanostores/persistent";
import { atom } from "nanostores";

export type User = {
  name: string;
  age: string;
};

const userMap = persistentAtom<User>(
  "user",
  {
    name: "John",
    age: "0",
  },
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);

export const _UserStore = atom<User>({
  name: userMap.get().name,
  age: userMap.get().age,
});

// on change, persist the user store
_UserStore.subscribe((user) => {
  console.log("user changed", user);
  userMap.set(user);
});
