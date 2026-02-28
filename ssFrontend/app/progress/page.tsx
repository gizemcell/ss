"use client";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Progress as ProgressBar } from "../../components/ui/progress";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  Award,
  Target,
  Calendar,
  Clock,
  CheckCircle2,
  Zap,
  Star,
} from "lucide-react";

export default function Progress() {
  const overallStats = [
    {
      label: "Overall Progress",
      value: "68%",
      change: "+12% this month",
      icon: TrendingUp,
      progress: 68,
    },
    {
      label: "Skills Mastered",
      value: "8/12",
      change: "3 in progress",
      icon: Award,
      progress: 67,
    },
    {
      label: "Total Hours",
      value: "124.5",
      change: "+24.5 this week",
      icon: Clock,
      progress: 0,
    },
    {
      label: "Achievements",
      value: "23",
      change: "5 new this month",
      icon: Star,
      progress: 0,
    },
  ];

  const weeklyProgress = [
    { day: "Mon", hours: 3.5, engagement: 85 },
    { day: "Tue", hours: 2.0, engagement: 78 },
    { day: "Wed", hours: 4.5, engagement: 92 },
    { day: "Thu", hours: 3.0, engagement: 88 },
    { day: "Fri", hours: 2.5, engagement: 75 },
    { day: "Sat", hours: 1.5, engagement: 70 },
    { day: "Sun", hours: 2.0, engagement: 80 },
  ];

  const skillsRadar = [
    { skill: "Communication", score: 85, industry: 75 },
    { skill: "Leadership", score: 72, industry: 68 },
    { skill: "Emotional IQ", score: 88, industry: 70 },
    { skill: "Teamwork", score: 78, industry: 72 },
    { skill: "Problem Solving", score: 82, industry: 74 },
    { skill: "Adaptability", score: 75, industry: 69 },
  ];

  const monthlyTrend = [
    { month: "Sep", score: 45 },
    { month: "Oct", score: 52 },
    { month: "Nov", score: 58 },
    { month: "Dec", score: 62 },
    { month: "Jan", score: 68 },
    { month: "Feb", score: 68 },
  ];

  const skillBreakdown = [
    {
      name: "Effective Communication",
      progress: 85,
      level: "Advanced",
      hoursSpent: 24,
      lastSession: "2 days ago",
    },
    {
      name: "Leadership Presence",
      progress: 72,
      level: "Intermediate",
      hoursSpent: 18,
      lastSession: "1 day ago",
    },
    {
      name: "Emotional Intelligence",
      progress: 88,
      level: "Advanced",
      hoursSpent: 28,
      lastSession: "Today",
    },
    {
      name: "Team Collaboration",
      progress: 78,
      level: "Advanced",
      hoursSpent: 22,
      lastSession: "3 days ago",
    },
    {
      name: "Conflict Resolution",
      progress: 82,
      level: "Advanced",
      hoursSpent: 20,
      lastSession: "1 week ago",
    },
  ];

  const recentAchievements = [
    {
      title: "Communication Master",
      description: "Completed 20 communication training sessions",
      date: "2 days ago",
      icon: Award,
    },
    {
      title: "Week Warrior",
      description: "Maintained 7-day learning streak",
      date: "5 days ago",
      icon: Zap,
    },
    {
      title: "Perfect Score",
      description: "Achieved 100% in Emotional Intelligence assessment",
      date: "1 week ago",
      icon: Target,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 text-4xl">Progress & Analytics</h1>
        <p className="text-lg text-muted-foreground">
          Track your soft skills development journey with detailed insights
        </p>
      </div>

      {/* Overall Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {overallStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="mt-1 text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.change}</p>
                </div>
                <div className="rounded-lg bg-accent/10 p-2">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
              </div>
              {stat.progress > 0 && (
                <ProgressBar value={stat.progress} className="h-2" />
              )}
            </Card>
          );
        })}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Weekly Activity */}
        <Card className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl">Weekly Activity</h2>
            <p className="text-sm text-muted-foreground">
              Your training hours and engagement this week
            </p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyProgress}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="day" stroke="#64748B" />
              <YAxis stroke="#64748B" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "0.75rem",
                }}
              />
              <Legend />
              <Bar dataKey="hours" fill="#8B5CF6" name="Hours" radius={[8, 8, 0, 0]} />
              <Bar
                dataKey="engagement"
                fill="#64748B"
                name="Engagement %"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Skills Radar */}
        <Card className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl">Skills Assessment</h2>
            <p className="text-sm text-muted-foreground">
              Your skills vs. industry average
            </p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={skillsRadar}>
              <PolarGrid stroke="#E2E8F0" />
              <PolarAngleAxis dataKey="skill" stroke="#64748B" />
              <PolarRadiusAxis stroke="#64748B" />
              <Radar
                name="Your Score"
                dataKey="score"
                stroke="#8B5CF6"
                fill="#8B5CF6"
                fillOpacity={0.6}
              />
              <Radar
                name="Industry Avg"
                dataKey="industry"
                stroke="#64748B"
                fill="#64748B"
                fillOpacity={0.3}
              />
              <Legend />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "0.75rem",
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Progress Trend */}
      <Card className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl">Progress Over Time</h2>
          <p className="text-sm text-muted-foreground">
            Your overall skill score progression
          </p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis dataKey="month" stroke="#64748B" />
            <YAxis stroke="#64748B" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "0.75rem",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#8B5CF6"
              strokeWidth={3}
              dot={{ fill: "#8B5CF6", r: 6 }}
              name="Overall Score"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Skill Breakdown */}
        <Card className="lg:col-span-2 p-6">
          <div className="mb-6">
            <h2 className="text-2xl">Skill Breakdown</h2>
            <p className="text-sm text-muted-foreground">
              Detailed progress across all skills
            </p>
          </div>
          <div className="space-y-6">
            {skillBreakdown.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{skill.name}</h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Badge variant="secondary" className="text-xs">
                        {skill.level}
                      </Badge>
                      <span>•</span>
                      <span>{skill.hoursSpent}h spent</span>
                      <span>•</span>
                      <span>Last: {skill.lastSession}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium">{skill.progress}%</p>
                  </div>
                </div>
                <ProgressBar value={skill.progress} className="h-2" />
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Achievements */}
        <Card className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl">Achievements</h2>
            <p className="text-sm text-muted-foreground">Recent milestones</p>
          </div>
          <div className="space-y-4">
            {recentAchievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="rounded-xl border bg-accent/5 p-4 transition-all hover:bg-accent/10"
                >
                  <div className="mb-3 flex items-start gap-3">
                    <div className="rounded-lg bg-accent/20 p-2">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{achievement.title}</h3>
                      <p className="text-xs text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{achievement.date}</p>
                </div>
              );
            })}
          </div>
          <Button variant="outline" className="mt-4 w-full">
            View All Achievements
          </Button>
        </Card>
      </div>

      {/* Insights Section */}
      <Card className="bg-gradient-to-br from-accent/10 to-accent/5 p-8">
        <div className="flex flex-col items-center gap-6 lg:flex-row">
          <div className="rounded-xl bg-accent/20 p-4">
            <TrendingUp className="h-10 w-10 text-accent" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h3 className="mb-2 text-xl">You're making excellent progress!</h3>
            <p className="text-sm text-muted-foreground">
              You're 12% ahead of your monthly goal and outperforming 78% of learners
              in your cohort. Keep up the great work!
            </p>
          </div>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Get Personalized Tips
          </Button>
        </div>
      </Card>
    </div>
  );
}
