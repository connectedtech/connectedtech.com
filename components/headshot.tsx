"use client";

import Image from "next/image";
import { useState } from "react";

export function Headshot() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-primary/20 bg-primary/10">
        <span className="text-2xl font-bold text-primary">SD</span>
      </div>
    );
  }

  return (
    <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-primary/20">
      <Image
        src="/headshot.jpg"
        alt="Scott Danforth"
        fill
        className="object-cover"
        onError={() => setError(true)}
      />
    </div>
  );
}
