import type { PersistentEvent } from "@nanostores/persistent";
import { _UserStore } from "../store/user-store";
import { useStore } from "@nanostores/preact";

export default function UserInfo() {
    const user = useStore(_UserStore);
  return (
    <div>
      <p>Current User age: {user.age}</p>
      <p>Current User name: {user.name}</p>
    </div>
  );
}
