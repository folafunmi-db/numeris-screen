import { AppBody } from "@/components/app-body";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="bg-[#F2F3F9] flex w-full text-[#373B47] min-h-[100svh]">
      <Sidebar />
      <AppBody />
    </div>
  );
}
