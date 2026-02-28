"use client"; // Required for usePathname()

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brain, BookOpen, Users, TrendingUp, Sparkles } from "lucide-react";
// Note: You might need to adjust this path depending on where your utils are
import { cn } from "@/lib/shadcn/utils"; 

export function RootLayoutUI({ children }: { children: React.ReactNode }) {
  // useLocation() is replaced by usePathname() in Next.js
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "Dashboard", icon: Brain },
    { path: "/training-modules", label: "Training", icon: BookOpen },
    { path: "/ai-agents", label: "AI Agents", icon: Sparkles },
    { path: "/progress", label: "Progress", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto flex h-16 items-center px-4 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
              <Brain className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg tracking-tight text-foreground">SkillForge</span>
              <span className="text-xs text-muted-foreground">AI-Powered Training</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="ml-auto flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;
              return (
                // <Link to> is replaced by <Link href>
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="ml-4 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 lg:px-8">
        {/* <Outlet /> is replaced by {children} */}
        {children}
      </main>
    </div>
  );
}