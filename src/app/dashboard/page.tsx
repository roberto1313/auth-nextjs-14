
import { getServerSession } from "next-auth"
import Image from "next/image";
import { redirect } from "next/navigation";
import ButtonLogout from "./buttonLogout";

export default async function DashboardPage() {
    const session = await getServerSession();

    if (!session) {
        redirect("/")
    }
    return (
        <>
            <main className="flex justify-around items-center p-2 bg-cyan-950 ">
                <div className="text-cyan-50 font-bold">Dashboard</div>
                {session &&
                    <div className="flex items-center gap-1">
                        <Image
                            className="w-[25px] rounded-full"
                            src={session.user?.image ?? ""}
                            alt="Avatar" width={25}
                            height={25} />
                        <span className="text-xs text-cyan-600 font-semibold"> {session.user?.name}</span>
                        <ButtonLogout />
                    </div>
                }
            </main>
            <div className="flex justify-center items-center h-screen text-cyan-900 font-bold text-2xl bg-cyan-200 p-5">Introduction basic -  auth with Github</div>
        </>
    )
}
