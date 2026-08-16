import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="mono text-5xl font-semibold text-accent">404</p>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight">
        Project not found.
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Button asChild className="mt-8">
        <Link href="/projects">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </Button>
    </Container>
  );
}
