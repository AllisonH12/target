import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Crosshair, Eye, Target, Shield, FileText } from 'lucide-react';

const PrescriptionReport = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold text-blue-800">Precision Shooting Vision Report</h1>
          <p className="text-gray-600">Specialized Multifocal Prescription for Air Pistol Competition</p>
        </div>
        <div className="flex items-center gap-2">
          <Target className="text-blue-700" size={28} />
          <FileText className="text-blue-700" size={24} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Patient Information</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">Name:</span>
                <span>John Smith</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Age:</span>
                <span>50 years</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Activity:</span>
                <span>10m Air Pistol Competition</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Visual Priority:</span>
                <span>Front Sight Focus</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Dominant Eye:</span>
                <span>Right (OD)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Assessment Summary</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">Visual Status:</span>
                <span>Presbyopic</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Current Correction:</span>
                <span>Single Vision Glasses</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Ocular Health:</span>
                <span>Clear</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Date of Assessment:</span>
                <span>{currentDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Follow-up:</span>
                <span>1 month</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle>Multifocal Contact Lens Prescription</CardTitle>
          <CardDescription>Optimized for 10-meter air pistol shooting</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2"></th>
                  <th className="py-2 text-center">Sphere</th>
                  <th className="py-2 text-center">Cylinder</th>
                  <th className="py-2 text-center">Axis</th>
                  <th className="py-2 text-center">Add</th>
                  <th className="py-2 text-center">Design</th>
                  <th className="py-2 text-center">Material</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-medium">Right (OD)</td>
                  <td className="py-2 text-center">-1.75</td>
                  <td className="py-2 text-center">-0.50</td>
                  <td className="py-2 text-center">180</td>
                  <td className="py-2 text-center">+1.75</td>
                  <td className="py-2 text-center">Center-Near Aspheric</td>
                  <td className="py-2 text-center">Silicone Hydrogel</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Left (OS)</td>
                  <td className="py-2 text-center">-2.00</td>
                  <td className="py-2 text-center">-0.75</td>
                  <td className="py-2 text-center">170</td>
                  <td className="py-2 text-center">+1.50</td>
                  <td className="py-2 text-center">Center-Near Aspheric</td>
                  <td className="py-2 text-center">Silicone Hydrogel</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2 bg-blue-50">
            <CardTitle className="text-base flex items-center gap-2">
              <Crosshair size={16} className="text-blue-700" />
              Visual Performance Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className="flex-1">
                  <p className="font-medium">Front Sight Focus</p>
                  <p className="text-gray-600">Excellent clarity of front sight for consistent sight alignment</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="flex-1">
                  <p className="font-medium">Target Visibility</p>
                  <p className="text-gray-600">Moderate clarity - sufficient for target acquisition and position</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className="flex-1">
                  <p className="font-medium">Depth Perception</p>
                  <p className="text-gray-600">Maintained binocular vision with good stereopsis</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className="flex-1">
                  <p className="font-medium">Visual Stamina</p>
                  <p className="text-gray-600">Reduced eye fatigue during extended shooting sessions</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2 bg-blue-50">
            <CardTitle className="text-base flex items-center gap-2">
              <Shield size={16} className="text-blue-700" />
              Adaptation Protocol
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <p className="font-medium">Initial Adaptation Period: 7-10 days</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 text-blue-700">1.</div>
                  <p>Begin with dry-fire practice sessions focusing exclusively on sight alignment</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 text-blue-700">2.</div>
                  <p>Gradually introduce live fire at reduced distance (5m)</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 text-blue-700">3.</div>
                  <p>Progress to full competition distance with tracking of performance metrics</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 text-blue-700">4.</div>
                  <p>Practice in various lighting conditions to build visual adaptability</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Equipment Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <h3 className="font-medium">Sight Modifications</h3>
              <ul className="space-y-1">
                <li className="flex items-start gap-2">
                  <div className="mt-0.5 text-blue-700">•</div>
                  <p>Consider slightly wider front sight blade (1.2mm recommended)</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-0.5 text-blue-700">•</div>
                  <p>Apply fluorescent orange/red sight insert for enhanced contrast</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-0.5 text-blue-700">•</div>
                  <p>Optimize aperture diameter based on visual performance (4.2-4.5mm)</p>
                </li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">Supplementary Vision Aids</h3>
              <ul className="space-y-1">
                <li className="flex items-start gap-2">
                  <div className="mt-0.5 text-blue-700">•</div>
                  <p>Backup single vision glasses with +1.75 add for administrative tasks</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-0.5 text-blue-700">•</div>
                  <p>Lens cleaning and rewetting solution for extended sessions</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-0.5 text-blue-700">•</div>
                  <p>Consider neutral density filters for bright competition venues</p>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="border-t pt-4">
        <h2 className="text-lg font-bold text-blue-800 mb-3">Special Considerations for Competition</h2>
        <div className="text-sm space-y-3">
          <div className="flex items-start gap-3">
            <Target size={18} className="text-blue-700 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Lighting Sensitivity</p>
              <p>The prescribed multifocal design is optimized for typical indoor range conditions. Significant variations in lighting may require slight adjustments to your positioning or stance to maintain optimal visual performance.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Eye size={18} className="text-blue-700 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Pre-Competition Preparation</p>
              <p>Insert contact lenses at least 30 minutes before competition to allow for complete stabilization. Perform brief visual calibration exercises focusing alternately between front sight and target to "activate" your visual system.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Shield size={18} className="text-blue-700 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Eye Fatigue Management</p>
              <p>During extended competition, brief visual breaks (looking at distance) between series can help maintain visual stamina. Consider scheduling a follow-up assessment prior to major competitions to fine-tune your prescription.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        <p>This specialized prescription is optimized specifically for air pistol shooting conditions.</p>
        <p>For general vision needs, please refer to your standard vision prescription.</p>
        <p>© {new Date().getFullYear()} Multifocal Measurement & Fitting Simulator</p>
      </div>
    </div>
  );
};

export default PrescriptionReport;