import { h } from "preact";
import { signal } from "@preact/signals";
import { _UserStore } from "../store/user-store";
import { useStore } from "@nanostores/preact";

export default function HomeFormComponent() {
  const nameSignal = signal("");
  const ageSignal = signal("");

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    console.log("Name:", nameSignal.value);
    console.log("Age:", ageSignal.value);

    const user = {
      name: nameSignal.value,
      age: ageSignal.value,
    };
    console.log("User:", user);
    _UserStore.set(user)
    

  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Update Name and Age</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            onInput={(event) => nameSignal.value = event.currentTarget.value}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="age" className="block font-medium mb-1">
            Age
          </label>
          <input
            type="number"
            id="age"
            onInput={(event) => ageSignal.value = ''+ event.currentTarget.value}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Update
        </button>
      </form>
    </div>
  );
}
