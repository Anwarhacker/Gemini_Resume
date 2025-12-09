import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { templates, categories } from '../data/templatesData';

const Templates: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [previewTemplate, setPreviewTemplate] = useState<typeof templates[0] | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleSelectTemplate = (id: string) => {
    navigate(`/editor?template=${id}`);
  };

  const handleImageError = (templateId: string) => {
    setImageErrors(prev => new Set(prev).add(templateId));
  };

  // Keyboard navigation: Escape to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && previewTemplate) {
        setPreviewTemplate(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewTemplate]);

  // Body scroll lock when modal is open
  useEffect(() => {
    if (previewTemplate) {
      // Store original overflow value
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [previewTemplate]);

  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      const matchesFilter = filter === 'All' || template.categories.includes(filter);
      const matchesSearch = template.name.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  return (
    <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-wrap justify-between gap-4 items-start">
            <div className="flex flex-col gap-3">
              <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                Find Your Perfect Resume Template
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-normal">
                Professionally-designed templates to land your dream job.
              </p>
            </div>
          </div>
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 ${
                    filter === category
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <label className="flex flex-col h-10 w-full md:max-w-xs">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-slate-400 dark:text-slate-500 flex bg-slate-100 dark:bg-slate-800 items-center justify-center pl-3 rounded-l-lg border-r-0">
                  <span className="material-symbols-outlined text-xl">search</span>
                </div>
                <input 
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-slate-100 dark:bg-slate-800 focus:border-none h-full placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" 
                  placeholder="Search templates, e.g., 'minimalist'" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </label>
          </div>

          {/* Template Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredTemplates.length === 0 ? (
                <div className="col-span-full text-center py-20 text-slate-500">
                    <p className="text-lg">No templates found matching your criteria.</p>
                    <button 
                        onClick={() => { setFilter('All'); setSearch(''); }}
                        className="mt-4 text-primary font-bold hover:underline"
                    >
                        Clear Filters
                    </button>
                </div>
            ) : filteredTemplates.map((template, index) => (
              <React.Fragment key={template.id}>
                {/* Insert AdSense banner */}
                {index === 5 && (
                   <div className="col-span-full rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center min-h-[90px] animate-pulse border border-dashed border-slate-300 dark:border-slate-700">
                     <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">AdSense Banner (728x90)</p>
                   </div>
                )}
                
                {/* Template Card */}
                <div className="group relative flex flex-col rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-800/50 shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary/50 cursor-pointer">
                  {/* Badges */}
                  {template.badge && (
                    <div className="absolute top-2 right-2 z-10">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm ${template.badge === 'Popular' ? 'bg-primary/90 text-white' : 'bg-sky-500/90 text-white'}`}>
                        {template.badge}
                      </span>
                    </div>
                  )}
                  {template.premium && (
                    <div className="absolute top-2 right-2 z-10">
                       <span className="flex items-center gap-0.5 text-[10px] font-bold bg-amber-500/90 text-white px-2 py-0.5 rounded-full backdrop-blur-sm">
                         <span className="material-symbols-outlined text-xs" style={{fontVariationSettings: "'FILL' 1"}}>lock</span>
                         Premium
                       </span>
                    </div>
                  )}
                  
                  {/* Template Preview Image */}
                  <div 
                    onClick={() => setPreviewTemplate(template)}
                    className="aspect-[3/4] bg-cover bg-center relative overflow-hidden" 
                    style={{ backgroundImage: `url("${template.image}")` }}
                  >
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex flex-col gap-2 items-center">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setPreviewTemplate(template);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-md text-white text-xs font-semibold border border-white/30 hover:bg-white/30 transition-all"
                        >
                          <span className="material-symbols-outlined text-sm">visibility</span>
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectTemplate(template.id);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-bold shadow-lg hover:bg-primary/90 transition-all"
                        >
                          Use Template
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Template Info */}
                  <div className="p-3 flex flex-col">
                    <h3 className="font-bold text-sm text-slate-800 dark:text-white truncate">{template.name}</h3>
                    <div className="flex gap-1 mt-1.5">
                      <span className="text-[10px] font-medium text-green-600 dark:text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded">ATS</span>
                      {template.categories.slice(0, 1).map(cat => (
                        <span key={cat} className="text-[10px] font-medium text-slate-600 dark:text-slate-400 bg-slate-500/10 px-1.5 py-0.5 rounded">{cat}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {previewTemplate && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setPreviewTemplate(null)}
        >
          <div 
            className="bg-white dark:bg-slate-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{previewTemplate.name}</h2>
                  <div className="flex gap-2 mt-2">
                    {previewTemplate.categories.map(cat => (
                      <span key={cat} className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setPreviewTemplate(null)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">close</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Template Preview */}
                <div className="flex-1">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
                    <img 
                      src={previewTemplate.image} 
                      alt={previewTemplate.name}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Template Details */}
                <div className="lg:w-80 flex flex-col gap-4">
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-3">Features</h3>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-600 text-base">check_circle</span>
                        ATS-Friendly Format
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-600 text-base">check_circle</span>
                        Easy to Customize
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-600 text-base">check_circle</span>
                        Professional Design
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-600 text-base">check_circle</span>
                        Print-Ready
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-4">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Best For</h3>
                    <div className="flex flex-wrap gap-2">
                      {previewTemplate.categories.map(cat => (
                        <span key={cat} className="text-xs font-semibold text-primary bg-white dark:bg-slate-800 px-3 py-1.5 rounded-full">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => handleSelectTemplate(previewTemplate.id)}
                    className="w-full py-3 px-6 rounded-xl bg-primary text-white font-bold shadow-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
                  >
                    Use This Template
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Templates;