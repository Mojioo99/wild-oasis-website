import { auth } from "../_lib/auth";

export const metadata = {
  title: "account",
};
export default async function Page() {
  const session = await auth();
  return (
    <>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        welcome , {session.user.name.split(" ")[0]}
      </h2>
    </>
  );
}
