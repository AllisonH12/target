import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Eye, Target, Crosshair, GitCompare } from 'lucide-react';

const InteractiveFocusSimulator = () => {
  // Focus states - 0 (target in focus) to 100 (front sight in focus)
  const [focusPoint, setFocusPoint] = useState(50);
  const [correctionType, setCorrectionType] = useState('multifocal');
  const [dominantEye, setDominantEye] = useState('right');
  const [addPower, setAddPower] = useState('1.75');
  const [useBothEyes, setUseBothEyes] = useState(true);

  // Target properties
  const [targetDistance, setTargetDistance] = useState('10');
  const [targetSize, setTargetSize] = useState('medium');
  
  // Light conditions affecting pupil size
  const [lightCondition, setLightCondition] = useState('medium');

  // Calculate blur factors based on settings
  const getBlurFactors = () => {
    // Define correction type as a valid key
    type CorrectionType = 'single' | 'multifocal' | 'monovision' | 'bifocal';
    type LightCondition = 'low' | 'medium' | 'high';
    
    // Base blur values for each correction type
    const blurProfiles = {
      single: { 
        sightBlur: Math.max(0, 80 - focusPoint) / 20, 
        targetBlur: focusPoint / 30 
      },
      multifocal: { 
        sightBlur: Math.max(0, 60 - focusPoint) / 60, 
        targetBlur: Math.max(0, focusPoint - 30) / 60 
      },
      monovision: { 
        sightBlur: useBothEyes ? Math.max(0, 70 - focusPoint) / 30 : (dominantEye === 'right' ? Math.max(0, 70 - focusPoint) / 40 : focusPoint / 20), 
        targetBlur: useBothEyes ? Math.max(0, focusPoint - 20) / 40 : (dominantEye === 'right' ? focusPoint / 40 : Math.max(0, 80 - focusPoint) / 30) 
      },
      bifocal: { 
        sightBlur: Math.max(0, 70 - focusPoint) / 25, 
        targetBlur: focusPoint / 30 
      }
    };

    // Modify blur based on add power
    const addModifier = parseFloat(addPower) / 2;
    const lightModifiers = { low: 1.2, medium: 1.0, high: 0.8 };
    const lightModifier = lightModifiers[lightCondition as LightCondition] || 1.0;
    
    // Apply all modifiers
    return {
      sightBlur: blurProfiles[correctionType as CorrectionType].sightBlur * addModifier * lightModifier,
      targetBlur: blurProfiles[correctionType as CorrectionType].targetBlur * addModifier * lightModifier
    };
  };

  const blurFactors = getBlurFactors();

  // Function to calculate CSS filter for blur effect
  const getBlurFilter = (blurAmount: number): string => {
    return `blur(${Math.min(8, blurAmount * 10)}px)`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 bg-slate-50">
      <header className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-blue-800">Interactive Focus Simulator</h1>
        <p className="text-gray-600">Visualize exactly how your pistol sights and target will appear with different vision corrections</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="relative">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle>Shooting Vision Simulator</CardTitle>
                <div className="flex items-center gap-2">
                  <Eye size={18} className="text-blue-700" />
                  <Select value={useBothEyes ? "both" : "single"} onValueChange={(val) => setUseBothEyes(val === "both")}>
                    <SelectTrigger className="w-32 h-8">
                      <SelectValue placeholder="Eye" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="both">Both Eyes</SelectItem>
                      <SelectItem value="single">Dominant Eye</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="relative h-96 overflow-hidden bg-black rounded-md">
                {/* Target */}
                <div 
                  className="absolute inset-0 flex items-center justify-center transition-all duration-300" 
                  style={{ filter: getBlurFilter(blurFactors.targetBlur) }}
                >
                  <div className="flex flex-col items-center justify-center">
                    <div className="h-56 w-56 rounded-full border-4 border-white bg-gray-900 flex items-center justify-center">
                      <div className="h-44 w-44 rounded-full border-2 border-white bg-gray-900 flex items-center justify-center">
                        <div className="h-32 w-32 rounded-full border-2 border-white bg-gray-900 flex items-center justify-center">
                          <div className="h-20 w-20 rounded-full border-2 border-white bg-gray-900 flex items-center justify-center">
                            <div className="h-8 w-8 rounded-full bg-white"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pistol & Front Sight */}
                <div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-300"
                  style={{ filter: getBlurFilter(blurFactors.sightBlur) }}
                >
                  {/* Pistol silhouette */}
                  <div className="relative w-64 h-32">
                    {/* Gun barrel */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-32 bg-gray-700 rounded-t-md"></div>
                    
                    {/* Gun handle/grip */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 w-32 h-36 bg-gray-800 rounded-t-md skew-y-12 origin-bottom"></div>
                    
                    {/* Front sight */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-3 h-10 bg-gray-600 rounded-t-sm"></div>
                      <div className="w-5 h-2 bg-gray-600 mt-0.5"></div>
                    </div>
                    
                    {/* Rear sight */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                      <div className="relative w-12 h-4 bg-gray-800">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-black"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Focus point indicator */}
                <div className="absolute top-4 left-4 bg-white/70 rounded p-2 text-sm font-medium">
                  {focusPoint < 30 ? (
                    "Target in focus, sights blurred"
                  ) : focusPoint > 70 ? (
                    "Sights in focus, target blurred"
                  ) : (
                    "Balanced focus"
                  )}
                </div>
                
                {/* Correction type indicator */}
                <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 rounded p-2 text-sm font-medium">
                  {correctionType === 'multifocal' && "Multifocal Lens"}
                  {correctionType === 'single' && "Single Vision"}
                  {correctionType === 'monovision' && "Monovision"}
                  {correctionType === 'bifocal' && "Bifocal Lens"}
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <Target size={18} />
                    <span className="font-medium">Focus Point</span>
                  </div>
                  <span className="text-sm text-gray-600">
                    {focusPoint < 30 ? "Target Focus" : 
                     focusPoint > 70 ? "Sight Focus" : 
                     "Intermediate"}
                  </span>
                </div>
                <Slider
                  value={[focusPoint]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(val) => setFocusPoint(val[0])}
                  className="mb-6"
                />

                <div className="grid grid-cols-3 text-center text-sm">
                  <div>
                    <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
                    <p className="mt-1">Target Focus</p>
                  </div>
                  <div>
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                    <p className="mt-1">Intermediate</p>
                  </div>
                  <div>
                    <div className="w-full h-1 bg-gradient-to-l from-blue-500 to-transparent"></div>
                    <p className="mt-1">Sight Focus</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <Button 
                    variant={focusPoint === 10 ? "default" : "outline"} 
                    onClick={() => setFocusPoint(10)}
                    className="text-xs h-8"
                  >
                    Target Clear
                  </Button>
                  <Button 
                    variant={focusPoint === 50 ? "default" : "outline"} 
                    onClick={() => setFocusPoint(50)}
                    className="text-xs h-8"
                  >
                    Balanced
                  </Button>
                  <Button 
                    variant={focusPoint === 90 ? "default" : "outline"} 
                    onClick={() => setFocusPoint(90)}
                    className="text-xs h-8"
                  >
                    Sights Clear
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle>Vision Correction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="correction-type">Correction Type</Label>
                <Select value={correctionType} onValueChange={setCorrectionType}>
                  <SelectTrigger id="correction-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="multifocal">Multifocal Contact Lens</SelectItem>
                    <SelectItem value="single">Single Vision</SelectItem>
                    <SelectItem value="monovision">Monovision</SelectItem>
                    <SelectItem value="bifocal">Bifocal Lens</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dominant-eye">Dominant Eye</Label>
                <Select value={dominantEye} onValueChange={setDominantEye}>
                  <SelectTrigger id="dominant-eye">
                    <SelectValue placeholder="Select eye" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="right">Right Eye</SelectItem>
                    <SelectItem value="left">Left Eye</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="add-power">Add Power</Label>
                <Select value={addPower} onValueChange={setAddPower}>
                  <SelectTrigger id="add-power">
                    <SelectValue placeholder="Select power" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1.00">+1.00 (Low)</SelectItem>
                    <SelectItem value="1.50">+1.50 (Medium)</SelectItem>
                    <SelectItem value="1.75">+1.75 (Medium-High)</SelectItem>
                    <SelectItem value="2.00">+2.00 (High)</SelectItem>
                    <SelectItem value="2.50">+2.50 (Very High)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle>Shooting Conditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="target-distance">Target Distance</Label>
                <Select value={targetDistance} onValueChange={setTargetDistance}>
                  <SelectTrigger id="target-distance">
                    <SelectValue placeholder="Select distance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 meters (Training)</SelectItem>
                    <SelectItem value="10">10 meters (Competition)</SelectItem>
                    <SelectItem value="15">15 meters (Extended)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="light-condition">Lighting Condition</Label>
                <Select value={lightCondition} onValueChange={setLightCondition}>
                  <SelectTrigger id="light-condition">
                    <SelectValue placeholder="Select lighting" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low Light (Indoor Range)</SelectItem>
                    <SelectItem value="medium">Medium Light (Standard)</SelectItem>
                    <SelectItem value="high">Bright Light (Competition)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2 bg-blue-50">
              <CardTitle className="text-sm flex items-center gap-2">
                <GitCompare size={16} className="text-blue-700" />
                Performance Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Front Sight Clarity:</span>
                    <span className={
                      blurFactors.sightBlur < 0.3 ? "text-green-600 font-medium" : 
                      blurFactors.sightBlur < 0.7 ? "text-yellow-600 font-medium" : 
                      "text-red-600 font-medium"
                    }>
                      {blurFactors.sightBlur < 0.3 ? "Excellent" : 
                       blurFactors.sightBlur < 0.7 ? "Moderate" : 
                       "Poor"}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${Math.max(5, 100 - (blurFactors.sightBlur * 100))}%` }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Target Visibility:</span>
                    <span className={
                      blurFactors.targetBlur < 0.3 ? "text-green-600 font-medium" : 
                      blurFactors.targetBlur < 0.7 ? "text-yellow-600 font-medium" : 
                      "text-red-600 font-medium"
                    }>
                      {blurFactors.targetBlur < 0.3 ? "Excellent" : 
                       blurFactors.targetBlur < 0.7 ? "Moderate" : 
                       "Poor"}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${Math.max(5, 100 - (blurFactors.targetBlur * 100))}%` }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Depth Perception:</span>
                    <span className={
                      correctionType === "monovision" && !useBothEyes ? "text-red-600 font-medium" :
                      correctionType === "monovision" ? "text-yellow-600 font-medium" :
                      "text-green-600 font-medium"
                    }>
                      {correctionType === "monovision" && !useBothEyes ? "Poor" :
                       correctionType === "monovision" ? "Moderate" :
                       "Good"}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: 
                      correctionType === "monovision" && !useBothEyes ? "30%" :
                      correctionType === "monovision" ? "65%" :
                      "90%"
                    }}></div>
                  </div>
                </div>
                
                <div className="pt-2">
                  <p className="font-medium mb-2">Recommended for:</p>
                  <ul className="space-y-1">
                    {correctionType === 'multifocal' && (
                      <>
                        <li className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                          <span>Balanced vision at all distances</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                          <span>Maintained binocular vision</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                          <span>Reduced eye fatigue for long sessions</span>
                        </li>
                      </>
                    )}
                    
                    {correctionType === 'single' && (
                      <>
                        <li className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                          <span>Excellent clarity at one distance</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                          <span>No adaptation period required</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                          <span>Poor vision at non-corrected distances</span>
                        </li>
                      </>
                    )}
                    
                    {correctionType === 'monovision' && (
                      <>
                        <li className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                          <span>Good sight focus in dominant eye</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                          <span>Moderate target visibility in non-dominant</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                          <span>Reduced depth perception and stereopsis</span>
                        </li>
                      </>
                    )}
                    
                    {correctionType === 'bifocal' && (
                      <>
                        <li className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                          <span>Clear zones for both near and far</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                          <span>Requires head position adjustment</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                          <span>Image jump between segments</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Preset comparisons */}
      <Card className="mt-6">
        <CardHeader className="pb-2">
          <CardTitle>Preset Comparisons (Competition Conditions)</CardTitle>
          <CardDescription>Quick simulations of different correction methods for 10m competition</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="flex flex-col h-auto py-4 gap-2"
              onClick={() => {
                setCorrectionType('multifocal');
                setFocusPoint(75);
                setAddPower('1.75');
                setLightCondition('medium');
              }}
            >
              <span className="font-medium">Optimal for Competition</span>
              <span className="text-xs text-gray-600">Multifocal (+1.75) with front sight focus</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="flex flex-col h-auto py-4 gap-2"
              onClick={() => {
                setCorrectionType('single');
                setFocusPoint(90);
                setAddPower('1.75');
                setLightCondition('medium');
              }}
            >
              <span className="font-medium">Traditional Single Vision</span>
              <span className="text-xs text-gray-600">Front sight clear, target very blurry</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="flex flex-col h-auto py-4 gap-2"
              onClick={() => {
                setCorrectionType('monovision');
                setFocusPoint(60);
                setAddPower('2.00');
                setLightCondition('medium');
                setUseBothEyes(true);
              }}
            >
              <span className="font-medium">Monovision Setup</span>
              <span className="text-xs text-gray-600">Dominant eye for sight, non-dominant for target</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="flex flex-col h-auto py-4 gap-2"
              onClick={() => {
                setCorrectionType('multifocal');
                setFocusPoint(50);
                setAddPower('1.50');
                setLightCondition('high');
              }}
            >
              <span className="font-medium">Training Configuration</span>
              <span className="text-xs text-gray-600">Balanced vision for skill development</span>
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-medium text-blue-800 mb-2">Key Insights for 10m Air Pistol Shooting</h3>
        <div className="text-sm space-y-2">
          <p>• <strong>Front sight focus is critical</strong> for consistent and accurate shooting. The simulator demonstrates how different prescriptions affect your ability to clearly see the front sight.</p>
          <p>• For most competitive shooters, a <strong>multifocal lens with center-near design</strong> provides the optimal balance between sight clarity and target visibility.</p>
          <p>• The simulator allows you to compare different add powers to find the one that gives you the clearest front sight while maintaining functional target vision.</p>
          <p>• Lighting conditions significantly impact visual performance by changing pupil size, which affects the depth of focus. Practice in a variety of lighting conditions to prepare for competitions.</p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFocusSimulator;