import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Eye, FileText } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Vision Optimization for Target Shooters</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized tools for optometrists to help target shooters achieve optimal visual performance
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Target className="h-6 w-6 text-blue-700" />
                <CardTitle>Interactive Focus Simulator</CardTitle>
              </div>
              <CardDescription>
                Visualize how different vision corrections affect sight picture
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 pb-6">
              <p className="text-gray-600 mb-6">
                This interactive tool helps demonstrate to patients exactly how different vision correction options will affect their sight picture when shooting. Adjust focus points, correction types, and more.
              </p>
              <Link href="/simulator" passHref>
                <Button className="w-full">
                  Open Simulator
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-blue-700" />
                <CardTitle>Prescription Report</CardTitle>
              </div>
              <CardDescription>
                Generate specialized vision reports for shooters
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 pb-6">
              <p className="text-gray-600 mb-6">
                Create professional reports for your patients that explain their specialized vision correction for shooting sports. Includes detailed recommendations and adaptation protocols.
              </p>
              <Link href="/report" passHref>
                <Button className="w-full">
                  View Sample Report
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-blue-800 mb-4">Why Vision Matters for Target Shooters</h2>
          <p className="text-gray-600 mb-8">
            Target shooting requires unique visual demands that differ from everyday vision needs. Presbyopic shooters especially benefit from specialized corrections that optimize front sight focus while maintaining adequate target visibility.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="h-5 w-5 text-blue-700" />
                <h3 className="font-medium">Sight Clarity</h3>
              </div>
              <p className="text-sm text-gray-600">
                Optimized front sight focus is critical for consistent sight alignment and accuracy.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-5 w-5 text-blue-700" />
                <h3 className="font-medium">Target Visibility</h3>
              </div>
              <p className="text-sm text-gray-600">
                Maintaining adequate target visibility while focusing on sights improves performance.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-5 w-5 text-blue-700" />
                <h3 className="font-medium">Customized Solutions</h3>
              </div>
              <p className="text-sm text-gray-600">
                Each shooter needs personalized vision correction based on their specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Vision Optimization for Target Shooters</p>
          <p className="mt-1">A specialized tool for optometrists and vision care professionals</p>
        </div>
      </footer>
    </div>
  );
}