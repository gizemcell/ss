import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import { cn } from "../components/ui/utils";
import {
  Brain,
  TrendingUp,
  Clock,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  PlayCircle,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Dashboard() {
  const stats = [
    {
      label: "Active Sessions",
      value: "12",
      change: "+3 this week",
      icon: Brain,
      color: "text-accent",
    },
    {
      label: "Skills Improved",
      value: "8",
      change: "+2 this month",
      icon: TrendingUp,
      color: "text-accent",
    },
    {
      label: "Training Hours",
      value: "24.5",
      change: "+6.5 this week",
      icon: Clock,
      color: "text-accent",
    },
    {
      label: "Goals Achieved",
      value: "5/8",
      change: "On track",
      icon: Target,
      color: "text-accent",
    },
  ];
  

  const recentSessions = [
    {
      title: "Leadership Communication",
      agent: "Executive Coach AI",
      progress: 75,
      status: "In Progress",
      time: "2 hours ago",
    },
    {
      title: "Conflict Resolution",
      agent: "Mediation AI",
      progress: 100,
      status: "Completed",
      time: "1 day ago",
    },
    {
      title: "Active Listening",
      agent: "Communication AI",
      progress: 45,
      status: "In Progress",
      time: "3 days ago",
    },
  ];

  const upcomingSessions = [
    {
      title: "Emotional Intelligence",
      agent: "EQ Coach AI",
      scheduledFor: "Today, 3:00 PM",
      duration: "45 min",
    },
    {
      title: "Team Building",
      agent: "Collaboration AI",
      scheduledFor: "Tomorrow, 10:00 AM",
      duration: "60 min",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/95 to-primary/90 p-8 text-primary-foreground lg:p-12">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="text-sm uppercase tracking-wider text-accent">
              AI-Powered Learning
            </span>
          </div>
          <h1 className="mb-4 text-4xl lg:text-5xl">
            Welcome back, Alex
          </h1>
          <p className="mb-6 text-lg text-primary-foreground/80">
            Continue your journey to master essential soft skills with personalized
            AI coaching and real-time feedback.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <PlayCircle className="mr-2 h-5 w-5" />
              Continue Learning
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20">
              View All Modules
            </Button>
          </div>
        </div>
        <div className="absolute -right-8 -top-8 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-12 -right-12 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6 transition-all hover:shadow-lg">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="mt-2 text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.change}</p>
                </div>
                <div className="rounded-lg bg-accent/10 p-3">
                  <Icon className={cn("h-6 w-6", stat.color)} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Recent Sessions */}
        <Card className="lg:col-span-2 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl">Recent Sessions</h2>
              <p className="text-sm text-muted-foreground">
                Track your ongoing training progress
              </p>
            </div>
            <Button variant="ghost" size="sm">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            {recentSessions.map((session, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-xl border bg-card p-4 transition-all hover:bg-muted/50 sm:flex-row sm:items-center"
              >
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="font-medium">{session.title}</h3>
                    <Badge
                      variant={session.status === "Completed" ? "default" : "secondary"}
                      className={
                        session.status === "Completed"
                          ? "bg-accent text-accent-foreground"
                          : ""
                      }
                    >
                      {session.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    with {session.agent}
                  </p>
                  <div className="mt-3">
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{session.progress}%</span>
                    </div>
                    <Progress value={session.progress} className="h-2" />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground sm:flex-col sm:items-end">
                  <Clock className="h-4 w-4" />
                  <span>{session.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Upcoming Sessions */}
        <Card className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl">Upcoming</h2>
            <p className="text-sm text-muted-foreground">Scheduled sessions</p>
          </div>
          <div className="space-y-4">
            {upcomingSessions.map((session, index) => (
              <div
                key={index}
                className="rounded-xl border bg-accent/5 p-4 transition-all hover:bg-accent/10"
              >
                <div className="mb-3 flex items-start gap-2">
                  <div className="rounded-lg bg-accent/20 p-2">
                    <Sparkles className="h-4 w-4 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{session.title}</h3>
                    <p className="text-sm text-muted-foreground">{session.agent}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {session.scheduledFor}
                  </span>
                  <span className="font-medium text-accent">{session.duration}</span>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              Schedule New Session
            </Button>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-br from-accent/5 to-accent/10 p-6">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-accent/20 p-4">
              <Brain className="h-8 w-8 text-accent" />
            </div>
            <div>
              <h3 className="text-xl">Need personalized guidance?</h3>
              <p className="text-sm text-muted-foreground">
                Our AI agents are ready to help you improve your soft skills
              </p>
            </div>
          </div>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            <Sparkles className="mr-2 h-5 w-5" />
            Start AI Session
          </Button>
        </div>
      </Card>
    </div>
  );
}