
import { Calendar, Clock, LinkIcon } from "lucide-react";
import { Feature, Works, Testimonials } from "./types";

export const features: Feature[] = [
    {
        id: "events",
        icon: Calendar,
        title: "Create Events",
        description: "Easily set up and customize your event types",
    },
    {
        id: "availability",
        icon: Clock,
        title: "Manage Availability",
        description: "Define your availability to streamline scheduling",
    },
    {
        id: "links",
        icon: LinkIcon,
        title: "Custom Links",
        description: "Share your personalized scheduling link",
    },
];

export const howItWorks: Works[] = [
    { id: "1", step: "Sign Up", description: "Create your free MeetSync account" },
    {
        id: "2", 
        step: "Set Availability",
        description: "Define when you're available for meetings",
    },
    {
        id: "3", 
        step: "Share Your Link",
        description: "Send your scheduling link to clients or colleagues",
    },
    {
        id: "4", 
        step: "Get Booked",
        description: "Receive confirmations for new appointments automatically",
    },
];

export const testimonials: Testimonials[] = [
    {
        name: "Sarah Johnson",
        role: "Marketing Manager",
        content:
            "MeetSync has transformed how I manage my team's meetings. It's intuitive and saves us hours every week!",
        image: "https://i.pravatar.cc/150?img=1",
    },
    {
        name: "David Lee",
        role: "Freelance Designer",
        content:
            "As a freelancer, MeetSync helps me stay organized and professional. My clients love how easy it is to book time with me.",
        image: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Emily Chen",
        role: "Startup Founder",
        content:
            "MeetSync streamlined our hiring process. Setting up interviews has never been easier!",
        image: "https://i.pravatar.cc/150?img=3",
    },
    {
        name: "Michael Brown",
        role: "Sales Executive",
        content:
            "I've seen a 30% increase in my meeting bookings since using MeetSync. It's a game-changer for sales professionals.",
        image: "https://i.pravatar.cc/150?img=4",
    },
];
