import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
  Sparkles,
  Brain,
  MessageSquare,
  Users,
  Target,
  Heart,
  Lightbulb,
  Shield,
  TrendingUp,
  Zap,
  BookOpen,
  Mic,
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export default function AIAgents() {
  const agents = [
    {
      name: "Executive Coach AI",
      specialty: "Leadership Development",
      description:
        "Specialized in C-suite communication, strategic thinking, and executive presence. Leverages decades of leadership research and best practices.",
      capabilities: [
        "Strategic Communication",
        "Decision Making",
        "Stakeholder Management",
        "Executive Presence",
      ],
      sessions: 1243,
      rating: 4.9,
      icon: Brain,
      gradient: "from-accent/20 via-accent/10 to-transparent",
      image: "https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhaSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzA0ODI4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Communication AI",
      specialty: "Interpersonal Skills",
      description:
        "Expert in active listening, persuasive speaking, and non-verbal communication. Provides real-time feedback on communication patterns.",
      capabilities: [
        "Active Listening",
        "Persuasive Speaking",
        "Body Language",
        "Presentation Skills",
      ],
      sessions: 2156,
      rating: 4.8,
      icon: MessageSquare,
      gradient: "from-accent/20 via-accent/10 to-transparent",
      image: "https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhaSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzA0ODI4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "EQ Coach AI",
      specialty: "Emotional Intelligence",
      description:
        "Focuses on self-awareness, empathy, and emotional regulation. Uses advanced sentiment analysis to provide personalized guidance.",
      capabilities: [
        "Self-Awareness",
        "Empathy Development",
        "Emotion Regulation",
        "Relationship Building",
      ],
      sessions: 1876,
      rating: 4.9,
      icon: Heart,
      gradient: "from-accent/20 via-accent/10 to-transparent",
      image: "https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhaSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzA0ODI4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Collaboration AI",
      specialty: "Team Dynamics",
      description:
        "Enhances teamwork, conflict resolution, and collaborative problem-solving. Trained on high-performing team patterns.",
      capabilities: [
        "Team Building",
        "Conflict Resolution",
        "Collaborative Decision Making",
        "Trust Building",
      ],
      sessions: 1567,
      rating: 4.7,
      icon: Users,
      gradient: "from-accent/20 via-accent/10 to-transparent",
      image: "https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhaSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzA0ODI4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Negotiation AI",
      specialty: "Deal Making & Persuasion",
      description:
        "Masters the art of negotiation, influence, and persuasive communication. Simulates real-world negotiation scenarios.",
      capabilities: [
        "Strategic Negotiation",
        "Influence Techniques",
        "Win-Win Solutions",
        "Objection Handling",
      ],
      sessions: 1089,
      rating: 4.8,
      icon: Target,
      gradient: "from-accent/20 via-accent/10 to-transparent",
      image: "https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhaSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzA0ODI4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Innovation AI",
      specialty: "Creative Problem Solving",
      description:
        "Cultivates creative thinking, innovation, and adaptive problem-solving skills. Encourages out-of-the-box thinking.",
      capabilities: [
        "Design Thinking",
        "Creative Problem Solving",
        "Innovation Methods",
        "Adaptive Thinking",
      ],
      sessions: 892,
      rating: 4.8,
      icon: Lightbulb,
      gradient: "from-accent/20 via-accent/10 to-transparent",
      image: "https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhaSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzA0ODI4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const features = [
    {
      title: "Multi-Agent Collaboration",
      description:
        "Multiple AI agents work together to provide comprehensive coaching",
      icon: Users,
    },
    {
      title: "Real-Time Feedback",
      description:
        "Instant analysis and actionable suggestions during your practice sessions",
      icon: Zap,
    },
    {
      title: "Adaptive Learning",
      description: "AI adapts to your learning style and progress over time",
      icon: TrendingUp,
    },
    {
      title: "Privacy First",
      description: "All sessions are encrypted and your data remains secure",
      icon: Shield,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent p-8 lg:p-12">
        <div className="relative z-10">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-accent" />
            <span className="text-sm uppercase tracking-wider text-accent">
              Multi-Agent AI System
            </span>
          </div>
          <h1 className="mb-4 text-4xl">AI Coaching Agents</h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Meet your team of specialized AI coaches. Each agent brings unique
            expertise and adapts to your learning style for personalized skill
            development.
          </p>
        </div>
        <div className="absolute -right-8 top-8 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      {/* Features Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="p-6">
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <Icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          );
        })}
      </div>

      {/* Agents Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {agents.map((agent, index) => {
          const Icon = agent.icon;
          return (
            <Card
              key={index}
              className="group overflow-hidden transition-all hover:shadow-xl"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="relative h-48 lg:h-auto lg:w-1/3">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${agent.gradient}`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-2xl bg-accent/20 p-6 backdrop-blur-sm">
                      <Icon className="h-12 w-12 text-accent" />
                    </div>
                  </div>
                  <div className="absolute right-4 top-4">
                    <Badge className="bg-accent/90 text-accent-foreground backdrop-blur-sm">
                      <Sparkles className="mr-1 h-3 w-3" />
                      AI Agent
                    </Badge>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6">
                  <div className="mb-3">
                    <h2 className="mb-1 text-2xl">{agent.name}</h2>
                    <p className="text-sm text-accent">{agent.specialty}</p>
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {agent.description}
                  </p>

                  {/* Capabilities */}
                  <div className="mb-4">
                    <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
                      Key Capabilities
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {agent.capabilities.map((capability, capIndex) => (
                        <Badge key={capIndex} variant="secondary" className="text-xs">
                          {capability}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mb-4 flex gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      <span>{agent.sessions.toLocaleString()} sessions</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <TrendingUp className="h-4 w-4" />
                      <span>{agent.rating} rating</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-accent hover:bg-accent/90">
                      <Mic className="mr-2 h-4 w-4" />
                      Start Session
                    </Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* CTA Section */}
      <Card className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 p-8 text-primary-foreground lg:p-12">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="max-w-2xl">
            <h2 className="mb-3 text-3xl">Ready to accelerate your growth?</h2>
            <p className="text-lg text-primary-foreground/80">
              Our AI agents are available 24/7 to provide personalized coaching and
              real-time feedback on your soft skills development journey.
            </p>
          </div>
          <Button
            size="lg"
            className="shrink-0 bg-accent hover:bg-accent/90"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Schedule AI Session
          </Button>
        </div>
      </Card>
    </div>
  );
}
