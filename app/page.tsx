import Chat from "@/components/Chat";

export default function Home() {
  return (
    <main
      className={`flex h-screen flex-col gap-3 items-start bg-transparent overflow-y-auto shadow-sm`}
    >
      <Chat />
    </main>
  );
}
