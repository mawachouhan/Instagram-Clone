import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";
import { signOut, useSession } from "next-auth/react";

export default function Feed() {
  const { data: session } = useSession();
  return (
    <main
      className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:m-w-6xl mx-auto ${
        !session && "!grid-cols-1 !max-w-3xl"
      }`}
    >
      {/*Section */}
      <section className="col-span-2">
        <Stories />
        <Posts />

        {/*Posts */}
      </section>

      {session && (
        <section className="hidden xl:inline-grid md:col-span-1">
          <div className="fixed ">
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}
