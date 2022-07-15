import { useState } from "react";

export default function Home() {
  const peopleTwo = [
    { name: "David", age: "30" },
    { name: "Xavier", age: "31" },
    { name: "Julie", age: "24" }
  ];

  const [people, setPeople] = useState([
    {
      name: "John",
      age: 30
    },
    {
      name: "Jane",
      age: 25
    },
    {
      name: "Bob",
      age: 20
    },
    {
      name: "Mary",
      age: 15
    }
  ]);

  // Set people names here
  const [peopleNames, setPeopleNames] = useState([]);

  // Combile peopleOne and peopleTwo in people state

  return (
    <div className="w-full h-screen bg-slate-200 flex justify-center">
      <section className="max-w-7xl bg-white h-full w-full p-10">
        <div>
          {/* PUT a text on left and image on right */}
          {/* Use this Figma design: https://www.figma.com/file/5J4sP3KPHX3mzmgxYoQWXW/Tech-Assessment?node-id=0%3A1 */}
        </div>
        <ul className="bg-slate-500 text-white font-bold flex gap-10">
          <li className="py-2 px-4">Combine Them</li>
          <li className="py-2 px-4">Only Names</li>
        </ul>
        <ul>{/* List people state as a list here with ages */}</ul>
      </section>
    </div>
  );
}
