import React from 'react';
import Link from 'next/link';
import InteractiveFocusSimulator from '@/interactive-focus-simulator';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function SimulatorPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <div className="container mx-auto px-4 py-6">
        <Link href="/" passHref>
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <InteractiveFocusSimulator />
      </div>
    </div>
  );
}