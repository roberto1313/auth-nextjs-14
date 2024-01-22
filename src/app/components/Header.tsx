import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import ButtonLogout from "../dashboard/buttonLogout";

export default async function Header() {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }

  return (
    <main className="fixed flex justify-center items-center p-2 bg-cyan-950 w-screen">
      {session && (
        <div className="flex items-center justify-between  gap-10 w-3/4">
            <div className="text-cyan-50 font-bold">Dashboard</div>
          <div className="flex items-center gap-4 w-96">
            <Image
              className="w-[25px] rounded-full"
              src={session.user?.image ?? ""}
              alt="Avatar"
              width={25}
              height={25}
            />
            <span className="text-xs text-cyan-600 font-semibold">
              {" "}
              {session.user?.name}
            </span>
            <ButtonLogout />
          </div>
        </div>
      )}
    </main>
  );
}
