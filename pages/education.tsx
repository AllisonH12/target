import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Eye, Target, Crosshair, BookOpen, Lightbulb, Brain, FileText } from 'lucide-react';

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <div className="container mx-auto px-4 py-6">
        <Link href="/" passHref>
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Vision Science for Target Shooters</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Understanding the unique visual demands of precision shooting and how to optimize your vision
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader className="pb-2 bg-blue-50">
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-blue-700" />
                <CardTitle>The Visual System in Shooting</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-lg mb-2">Visual Hierarchy in Shooting</h3>
                  <p className="text-gray-700 mb-2">
                    Precision shooting creates a unique visual challenge: simultaneously focusing on multiple objects at different distances. The human eye can only truly focus at one distance at a time.
                  </p>
                  <p className="text-gray-700">
                    For most shooters, the optimal visual hierarchy is:
                  </p>
                  <ol className="list-decimal pl-5 mt-2 space-y-1">
                    <li><span className="font-medium">Front sight</span> - Should be in sharpest focus</li>
                    <li><span className="font-medium">Rear sight</span> - Slightly blurred but aligned</li>
                    <li><span className="font-medium">Target</span> - Blurred but visible enough for positioning</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Accommodation and Presbyopia</h3>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Accommodation</span> is the eye's ability to change focus from distant to near objects. This ability naturally diminishes with age, a condition called <span className="font-medium">presbyopia</span>, typically beginning around age 40-45.
                  </p>
                  <p className="text-gray-700">
                    For shooters with presbyopia, maintaining clear front sight focus becomes increasingly difficult, making specialized vision correction essential for continued accuracy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2 bg-blue-50">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-700" />
                <CardTitle>Vision Correction Options</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-lg mb-2">Single Vision Correction</h3>
                  <p className="text-gray-700 mb-2">
                    Traditional single vision lenses correct for one specific distance. For shooters, this typically means:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><span className="font-medium">Advantages:</span> Clearest possible front sight focus</li>
                    <li><span className="font-medium">Disadvantages:</span> Target may be extremely blurry, making target acquisition difficult</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Multifocal Options</h3>
                  <p className="text-gray-700 mb-2">
                    Modern multifocal corrections can provide a balance between sight and target clarity:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><span className="font-medium">Multifocal contact lenses:</span> Provide simultaneous vision at multiple distances</li>
                    <li><span className="font-medium">Monovision:</span> One eye corrected for sights, one for target</li>
                    <li><span className="font-medium">Bifocal/progressive lenses:</span> Different zones for different distances</li>
                  </ul>
                  <p className="text-gray-700 mt-2">
                    The optimal solution varies by individual and shooting discipline. Our simulator helps visualize these options.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="pb-2 bg-blue-50">
              <div className="flex items-center gap-2">
                <Crosshair className="h-5 w-5 text-blue-700" />
                <CardTitle className="text-base">Dominant Eye Considerations</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-700 mb-3">
                Most people have a dominant eye that the brain preferentially uses for aiming tasks. This may or may not match your dominant hand.
              </p>
              <h3 className="font-medium mb-2">Quick Dominant Eye Test:</h3>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>Extend your arms and create a small triangle with your hands</li>
                <li>With both eyes open, center a distant object in the triangle</li>
                <li>Close one eye at a time</li>
                <li>The eye that keeps the object centered is your dominant eye</li>
              </ol>
              <p className="text-gray-700 mt-3">
                For cross-dominant shooters (dominant eye opposite to dominant hand), specialized vision strategies may be necessary.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2 bg-blue-50">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-blue-700" />
                <CardTitle className="text-base">Lighting and Pupil Size</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-700 mb-3">
                Lighting conditions significantly impact shooting vision through their effect on pupil size:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium">Smaller pupil (bright light):</span> Increased depth of focus, reduced aberrations</li>
                <li><span className="font-medium">Larger pupil (dim light):</span> Decreased depth of focus, more visual aberrations</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Many competitive shooters use iris apertures or tinted lenses to optimize pupil size regardless of ambient lighting.
              </p>
              <p className="text-gray-700 mt-3">
                Practice in various lighting conditions to build adaptability for competitions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2 bg-blue-50">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-blue-700" />
                <CardTitle className="text-base">Visual Training Techniques</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-700 mb-3">
                The visual system can be trained to perform better for shooting-specific tasks:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-medium">Front sight focus drills:</span> Practice shifting and maintaining focus on the front sight</li>
                <li><span className="font-medium">Transitional focus:</span> Practice quickly shifting between target acquisition and sight focus</li>
                <li><span className="font-medium">Peripheral awareness:</span> Develop ability to use peripheral vision for target awareness</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Regular visual training, combined with proper correction, can significantly improve shooting performance.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader className="pb-2 bg-blue-50">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-700" />
              <CardTitle>Adaptation to New Vision Corrections</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-lg mb-2">The Adaptation Process</h3>
                <p className="text-gray-700 mb-3">
                  When switching to a new vision correction, especially multifocal options, your visual system needs time to adapt:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Initial adaptation typically takes 1-2 weeks</li>
                  <li>Full neural adaptation may take 4-6 weeks</li>
                  <li>The brain gradually learns to interpret the new visual input</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  During adaptation, you may experience temporary visual fluctuations, mild headaches, or eye fatigue. These symptoms typically resolve as adaptation progresses.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-2">Structured Adaptation Protocol</h3>
                <p className="text-gray-700 mb-3">
                  Follow this progressive approach when adapting to new shooting vision correction:
                </p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li><span className="font-medium">Dry fire practice</span> - Begin with sight alignment and trigger control without live fire</li>
                  <li><span className="font-medium">Short distance practice</span> - Start at reduced distances (5m) with large targets</li>
                  <li><span className="font-medium">Progressive distance</span> - Gradually increase to competition distances</li>
                  <li><span className="font-medium">Varied lighting</span> - Practice in different lighting conditions</li>
                  <li><span className="font-medium">Competition simulation</span> - Add time pressure and match conditions</li>
                </ol>
                <p className="text-gray-700 mt-3">
                  Document your progress and work closely with your vision care provider to make any necessary adjustments.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <h2 className="text-xl font-bold text-blue-800 mb-4">Ready to Visualize Different Vision Corrections?</h2>
          <div className="flex justify-center gap-4">
            <Link href="/simulator" passHref>
              <Button size="lg" className="gap-2">
                <Eye className="h-5 w-5" />
                Try the Simulator
              </Button>
            </Link>
            <Link href="/report" passHref>
              <Button size="lg" variant="outline" className="gap-2">
                <FileText className="h-5 w-5" />
                View Sample Report
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}