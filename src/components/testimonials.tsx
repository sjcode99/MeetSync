import { testimonials } from "@/lib/constants";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Testimonials() {
  return (
    <div className="container relative mx-auto w-[90%] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(300px*10)] gap-10">
        <CustomCard />
        <CustomCard />
      </div>
    </div>
  );
}

function CustomCard() {
  return (
    <>
      {testimonials.map((t) => (
        <div
          className="slide flex items-center justify-center md:basis-1/2 lg:basis-1/3"
          key={t.name}
        >
          <Card className="h-full">
            <CardContent className="flex flex-col justify-between h-full p-6">
              <p>&quot; {t.content} &quot;</p>
              <div className="flex items-center mt-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={t.image} alt={t.name} />
                  <AvatarFallback>
                    {t.name
                      .split(" ")
                      .map((n) => n.at(0))
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </>
  );
};
