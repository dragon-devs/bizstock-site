'use client';

import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

export default function NotFound(
  {
    tag = "Page",
    description = "The page you're looking for doesn't exist or has been moved.",
  }: any
) {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className=" mx-auto text-center relative">
        {/* Animated glitch effect background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 animate-pulse rounded-lg blur-2xl" />

        {/* Main content container */}
        <div className="relative ">
          {/* Animated 404 text */}
          <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 animate-gradient mb-4">
            404
          </h1>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            {tag} Not Found
          </h2>

          <p className="text-muted-foreground mb-8">
            {description}
          </p>

          {/* Navigation buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant={"outline"}
              onClick={() => router.back()}
            >
              <ArrowLeft  />
              Go Back
            </Button>

            <Button
              onClick={() => router.push('/')}
            >
              <Home  />
              Return Home
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-20 sm:-left-20 left-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 sm:-right-20 right-0 w-40 h-40 bg-green-500/20 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
}