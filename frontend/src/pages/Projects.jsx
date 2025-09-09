import React, { useState } from 'react';
import { mockProjects } from '../mock';
import { Button } from '../components/ui/button';
import MetricTile from '../components/MetricTile';
import Chip from '../components/Chip';
import { Plus, Filter, Grid3X3, List, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [viewMode, setViewMode] = useState('grid');
  const [filters, setFilters] = useState([]);

  const filterOptions = {
    ecosystem: ['Mangrove', 'Seagrass', 'Salt Marsh'],
    status: ['Draft', 'In Review', 'Monitoring', 'Issued'],
    vintage: ['2024', '2023', '2022'],
    standard: ['VM0033', 'VM0007', 'CDM']
  };

  const addFilter = (category, value) => {
    const newFilter = { category, value, id: `${category}-${value}` };
    if (!filters.find(f => f.id === newFilter.id)) {
      setFilters([...filters, newFilter]);
    }
  };

  const removeFilter = (filterId) => {
    setFilters(filters.filter(f => f.id !== filterId));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-[#0A0F1C] leading-tight tracking-tight mb-2">
            Projects
          </h1>
          <p className="text-lg text-[#475569]">
            Manage and monitor your blue carbon projects
          </p>
        </div>
        <Button className="bg-[#0A6BFF] hover:bg-[#0A6BFF]/90 text-white px-6 py-3 rounded-full font-medium">
          <Plus className="w-4 h-4 mr-2" />
          Register Project
        </Button>
      </div>

      {/* Toolbar */}
      <div className="bg-white border border-[#E5EAF0] rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#475569]" />
              <span className="text-sm font-medium text-[#475569]">Filters:</span>
            </div>
            
            {Object.entries(filterOptions).map(([category, options]) => (
              <div key={category} className="relative group">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8 px-3 border-[#E5EAF0] hover:border-[#D9E2EC] capitalize"
                >
                  {category}
                </Button>
                <div className="absolute top-10 left-0 hidden group-hover:block z-10">
                  <div className="bg-white border border-[#E5EAF0] rounded-lg shadow-lg py-2 min-w-[120px]">
                    {options.map((option) => (
                      <button
                        key={option}
                        onClick={() => addFilter(category, option)}
                        className="w-full px-3 py-2 text-left text-sm hover:bg-[#F7F8FA] transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="h-8 w-8 p-0"
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="h-8 w-8 p-0"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Active Filters */}
        {filters.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#E5EAF0]">
            {filters.map((filter) => (
              <Chip
                key={filter.id}
                variant="outline"
                removable
                onRemove={() => removeFilter(filter.id)}
              >
                {filter.value}
              </Chip>
            ))}
          </div>
        )}
      </div>

      {/* Projects Grid */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
        {mockProjects.map((project) => (
          <div key={project.id} className="bg-white border border-[#E5EAF0] rounded-2xl p-6 hover:border-[#D9E2EC] transition-all hover:shadow-[0_1px_2px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.06)]">
            <div className="flex gap-4 h-full">
              {/* Content */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#0A0F1C] mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[#475569] text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-1.5">
                  <Chip status={project.methodology} size="sm">{project.methodology}</Chip>
                  <Chip status={project.status} size="sm">{project.status}</Chip>
                  <Chip size="sm">{project.vintage}</Chip>
                </div>

                {/* Mini Metrics */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-center p-2 bg-[#F7F8FA] rounded-lg">
                    <div className="text-sm font-semibold text-[#0A0F1C]">
                      {project.metrics.hectaresMonitored.value} ha
                    </div>
                    <div className="text-xs text-[#65728A]">Monitored</div>
                  </div>
                  <div className="text-center p-2 bg-[#F7F8FA] rounded-lg">
                    <div className="text-sm font-semibold text-[#0A0F1C]">
                      {project.metrics.creditsIssued.value} tCO2e
                    </div>
                    <div className="text-xs text-[#65728A]">Issued</div>
                  </div>
                </div>

                {/* Action */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-between border-[#E5EAF0] hover:border-[#D9E2EC]"
                >
                  View Project
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </div>

              {/* Thumbnail */}
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={project.image} 
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (if no projects) */}
      {mockProjects.length === 0 && (
        <div className="text-center py-16 bg-white border border-[#E5EAF0] rounded-2xl">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-[#F7F8FA] rounded-full flex items-center justify-center mx-auto mb-6">
              <Plus className="w-8 h-8 text-[#65728A]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0A0F1C] mb-2">
              No projects yet
            </h3>
            <p className="text-[#475569] mb-6">
              Get started by registering your first blue carbon project.
            </p>
            <Button className="bg-[#0A6BFF] hover:bg-[#0A6BFF]/90 text-white px-8 py-3 rounded-full font-medium">
              Register Project
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}