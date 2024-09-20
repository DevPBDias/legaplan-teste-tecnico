import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./_base.scss";
import Header from "@/components/header/Header";
import { ModalProvider } from "../context/modal-provider";
import { TaskProvider } from "@/context/task-provider";

const inter_tight = Inter_Tight({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Focal Point",
  description: "Task List Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter_tight.className}>
        <Header />
        <ModalProvider>
          <TaskProvider>{children}</TaskProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
