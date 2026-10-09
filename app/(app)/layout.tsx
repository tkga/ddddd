import { redirect } from "next/navigation";
import Nav from "@/components/Nav";
import { ToastProvider } from "@/components/toast";
import { isAuthed } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  if (!(await isAuthed())) redirect("/login");
  return (
    <ToastProvider>
      <Nav />
      <div className="md:pl-56">
        <main className="mx-auto w-full max-w-5xl px-4 pb-28 pt-5 md:px-8 md:pb-12 md:pt-8">{children}</main>
      </div>
    </ToastProvider>
  );
}
