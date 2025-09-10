import React from 'react';
import FeatureProjectCard from '../components/FeatureProjectCard';
import ProjectMap from '../components/ProjectMap';
import { mockProject, mockActivity } from '../mock';
import { Button } from '../components/ui/button';
import { Upload, BarChart3, FileText, Coins, Clock } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900 leading-tight tracking-tight ">
         Hello<br />
        </h1>
        <p className="text-5xl text-slate-900 font-bold max-w-2xl tracking-tighter
">
         User
        </p>
      </div>

      {/* Quick Actions */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900 mb-6">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button 
            variant="outline" 
            className="h-auto p-6 flex-col gap-3 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <Upload className="w-6 h-6 text-green-600" />
            <div className="text-center">
              <div className="font-medium text-slate-900">Register Project</div>
              <div className="text-sm text-slate-600 mt-1">Start new carbon project</div>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-auto p-6 flex-col gap-3 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <BarChart3 className="w-6 h-6 text-emerald-600" />
            <div className="text-center">
              <div className="font-medium text-slate-900">Upload Field Data</div>
              <div className="text-sm text-slate-600 mt-1">Sync measurement data</div>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-auto p-6 flex-col gap-3 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <FileText className="w-6 h-6 text-sky-600" />
            <div className="text-center">
              <div className="font-medium text-slate-900">Run dMRV</div>
              <div className="text-sm text-slate-600 mt-1">Generate MRV report</div>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-auto p-6 flex-col gap-3 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <Coins className="w-6 h-6 text-amber-600" />
            <div className="text-center">
              <div className="font-medium text-slate-900">Issue Credits</div>
              <div className="text-sm text-slate-600 mt-1">Mint carbon credits</div>
            </div>
          </Button>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Real Map Component */}
        <ProjectMap />

        {/* Activity Feed */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-colors shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {mockActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#00e07a] rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-900 font-medium leading-tight">
                    {activity.text}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    {activity.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Project Card */}
      <FeatureProjectCard project={mockProject} />

      {/* Map and Activity Section */}
      

    </div>
  );
}