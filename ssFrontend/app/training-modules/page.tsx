"use client"
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import {
  Search,
  BookOpen,
  Clock,
  Users,
  Target,
  Star,
  TrendingUp,
  MessageSquare,
  Heart,
  Lightbulb,
  Briefcase,
  PlayCircle,
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export default function TrainingModules() {
  const categories = [
    { id: "all", label: "All Modules", count: 24 },
    { id: "communication", label: "Communication", count: 8 },
    { id: "leadership", label: "Leadership", count: 6 },
    { id: "teamwork", label: "Teamwork", count: 5 },
    { id: "emotional", label: "Emotional Intelligence", count: 5 },
  ];

  const modules = [
    {
      title: "Effective Communication Mastery",
      description:
        "Learn to convey ideas clearly and persuasively in any professional setting",
      category: "Communication",
      duration: "6 weeks",
      level: "Intermediate",
      students: 1243,
      rating: 4.8,
      progress: 45,
      icon: MessageSquare,
      color: "text-accent",
      image: "https://images.unsplash.com/photo-1621533463397-f292bd0745f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lbnRvciUyMGNvYWNoaW5nfGVufDF8fHx8MTc3MDU1Njg1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Executive Leadership Presence",
      description:
        "Develop the confidence and gravitas needed for senior leadership roles",
      category: "Leadership",
      duration: "8 weeks",
      level: "Advanced",
      students: 892,
      rating: 4.9,
      progress: 0,
      icon: Briefcase,
      color: "text-accent",
      image: "https://images.unsplash.com/photo-1758518730083-4c12527b6742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MDU1Njg1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Emotional Intelligence at Work",
      description:
        "Master self-awareness, empathy, and relationship management skills",
      category: "Emotional Intelligence",
      duration: "5 weeks",
      level: "Intermediate",
      students: 2156,
      rating: 4.7,
      progress: 75,
      icon: Heart,
      color: "text-accent",
      image: "https://images.unsplash.com/photo-1621533463397-f292bd0745f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lbnRvciUyMGNvYWNoaW5nfGVufDF8fHx8MTc3MDU1Njg1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Conflict Resolution & Negotiation",
      description:
        "Transform workplace conflicts into opportunities for collaboration",
      category: "Communication",
      duration: "4 weeks",
      level: "Intermediate",
      students: 1567,
      rating: 4.6,
      progress: 100,
      icon: Target,
      color: "text-accent",
      image: "https://images.unsplash.com/photo-1758518730083-4c12527b6742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MDU1Njg1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Building High-Performance Teams",
      description: "Foster collaboration and drive results through effective teamwork",
      category: "Teamwork",
      duration: "6 weeks",
      level: "Advanced",
      students: 1089,
      rating: 4.8,
      progress: 0,
      icon: Users,
      color: "text-accent",
      image: "https://images.unsplash.com/photo-1621533463397-f292bd0745f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lbnRvciUyMGNvYWNoaW5nfGVufDF8fHx8MTc3MDU1Njg1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Critical Thinking & Problem Solving",
      description:
        "Develop systematic approaches to complex business challenges",
      category: "Leadership",
      duration: "5 weeks",
      level: "Intermediate",
      students: 1834,
      rating: 4.7,
      progress: 20,
      icon: Lightbulb,
      color: "text-accent",
      image: "https://images.unsplash.com/photo-1758518730083-4c12527b6742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MDU1Njg1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 text-4xl">Training Modules</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive soft skills training powered by advanced AI coaching
        </p>
      </div>

      {/* Search and Filter */}
      <Card className="p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search modules..."
              className="bg-input-background pl-10"
            />
          </div>
          <Tabs defaultValue="all" className="w-full lg:w-auto">
            <TabsList className="grid w-full grid-cols-5 lg:w-auto">
              {categories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id} className="text-xs lg:text-sm">
                  {cat.label.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </Card>

      {/* Stats Overview */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-3">
              <BookOpen className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-2xl">24</p>
              <p className="text-sm text-muted-foreground">Total Modules</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-3">
              <TrendingUp className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-2xl">8</p>
              <p className="text-sm text-muted-foreground">In Progress</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-accent/10 p-3">
              <Target className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-2xl">5</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Modules Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module, index) => {
          const Icon = module.icon;
          return (
            <Card
              key={index}
              className="group overflow-hidden transition-all hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <ImageWithFallback
                  src={module.image}
                  alt={module.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-accent text-accent-foreground">
                    {module.category}
                  </Badge>
                </div>
                {module.progress > 0 && (
                  <div className="absolute bottom-4 right-4">
                    <div className="rounded-full bg-card/90 px-3 py-1 text-xs font-medium">
                      {module.progress}%
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-start gap-3">
                  <div className="rounded-lg bg-accent/10 p-2">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 text-lg leading-tight">{module.title}</h3>
                  </div>
                </div>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                  {module.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{module.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{module.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-accent text-accent" />
                    <span>{module.rating}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    className="flex-1 bg-accent hover:bg-accent/90"
                    size="sm"
                  >
                    <PlayCircle className="mr-2 h-4 w-4" />
                    {module.progress > 0 ? "Continue" : "Start"}
                  </Button>
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
