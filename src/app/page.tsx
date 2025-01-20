import Testimonials from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { features, howItWorks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
        <div className="lg:w-1/2">
          <h1 className="text-7xl font-extrabold pb-6 gradient-title">
            Simplify Your Scheduling{" "}
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            MeetSync helps you manage your time effectively. Create events, set
            your availablity and let others book time with you seamlessly.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="text-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full aspect-square max-w-2xl">
            <Image
              src="/poster.png"
              alt="illustration"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      {/* features */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 capitalize">
          key features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <Card key={feat.id} className={cn("text-center")}>
              <CardHeader>
                <feat.icon className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
                <CardTitle>{feat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* carousel */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 capitalize">
          what our users say
        </h2>
        <Testimonials />
      </div>

      {/* how it works */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 capitalize">
          how it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {howItWorks.map((item) => (
            <div className="text-center" key={item.id}>
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center m-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">
                  {item.id}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.step}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* start for free banner */}
      <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
        <p className="capitalize text-3xl font-bold mb-4">Ready to simplify your scheduling?</p>
        <p className="text-xl mb-6">
          Join thousands of professionals who trust MeetSync for efficient time
          management.
        </p>
        <Link href="/dashboard">
          <Button size="lg" variant={"secondary"} className="text-blue-600 capitalize">
            start for free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
