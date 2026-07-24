import "./globals.css";
import type { Metadata } from "next";
import { sans, mono, display } from "./fonts";
import { OSProvider } from "@/lib/os-context";
import { SidebarProvider } from "@/lib/sidebar-context";
import { Sidebar } from "@/components/Sidebar";
import { MobileMenu } from "@/components/MobileMenu";

export const metadata: Metadata = {
  title: "Design Engineer Roadmap",
  description: "From designer to design engineer — build and ship with Claude Code.",
};

// Applies a saved theme before paint so a light-mode learner sees no dark flash.
const themeScript = `try{var t=localStorage.getItem('der-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${sans.variable} ${mono.variable} ${display.variable}`}
    >
      <body className="bg-bg font-sans text-fg antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <OSProvider>
          <SidebarProvider>
            <div className="flex">
              <Sidebar />
              <div className="min-w-0 flex-1">{children}</div>
            </div>
            <MobileMenu />
          </SidebarProvider>
        </OSProvider>
      </body>
    </html>
  );
}
