import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const templates = [
  {
    id: 'modern',
    name: 'Modern Chronological',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXZHriPv_WFCa0lnLDdJ0BYQImtMkpUo52RupM-2jpp44nLT21y5FFkXofOx2oMQMsBCGfQwu06vRp-lXxoJMZSJt3XxlmW5bzjPIiTPV7qDAIBz16tzc_0-S4WD23sofDukGEKqmSBkeE84vIRmkUkrzcQocMLZQaRLqaDMWuAELCOEyWXZMx9GGlpGz7D7cPnZIXTzgTdhVxVhQf0wx46vRUypRE65_ZA83B_B19GwSnY2us36dG88eSKk0IcwSLegdKvFkR42A',
    badge: 'Popular',
    premium: false,
    price: null,
    categories: ['Professional', 'Experienced', 'Fresher']
  },
  {
    id: 'simple',
    name: 'Simple Professional',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXZHriPv_WFCa0lnLDdJ0BYQImtMkpUo52RupM-2jpp44nLT21y5FFkXofOx2oMQMsBCGfQwu06vRp-lXxoJMZSJt3XxlmW5bzjPIiTPV7qDAIBz16tzc_0-S4WD23sofDukGEKqmSBkeE84vIRmkUkrzcQocMLZQaRLqaDMWuAELCOEyWXZMx9GGlpGz7D7cPnZIXTzgTdhVxVhQf0wx46vRUypRE65_ZA83B_B19GwSnY2us36dG88eSKk0IcwSLegdKvFkR42A',
    badge: null,
    premium: false,
    price: null,
    categories: ['Professional', 'Fresher']
  },
  {
    id: 'swiss',
    name: 'Swiss Grid',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWSf5KqJXpnUe2P5etSyxSyj0HDdEGuC0j_DBXMvLMZj3ySdHaxZRIBwtUSNqt8EO7ewvTQtkOpGpiyOEkEdKjX8szkQI-fQrDQ7sEVFfcuUfvqgDdvfljC-bN2J1o0b1eXqJ1nd5VdWXlrjET9cNNDTgh4losFWKkRYeiMS_QIP4I2WzGi4xGifPS42PPGqQ250XLWhqNEepscckkDWyznVjU9fsHe4t652Y2V8q40kk8GS614GFeGGV-jMegMLMSau7_cni_7yM',
    badge: null,
    premium: false,
    price: null,
    categories: ['Minimalist', 'Professional']
  },
  {
    id: 'coral',
    name: 'Coral Accent',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjQ6f7ehy_HTPUcRwoVSGAOLMtP8i4CnR6DPQPRipuZBEdFhLonbCUSI228o54UIokFcFQEBIrGGhJZdnF7DZZ-aKk443o_T5FoNkfpi8jqCA3n_AnvupHNxNfO-bgh0qYaN3zaAJmkPn25IyjMVuMj9aJrH93pTyqV3Q-0jO2Yz673Kg_r6Iu2zPB4_460xm_PuwQUAU1xKL7vxp3AzrIHeaedvgeeegP-HjlY48HMdFCzYQlnE8EtoKmFu4d5SkSN6zJBs3greQ',
    badge: null,
    premium: false,
    price: null,
    categories: ['Professional', 'Fresher']
  },
  {
    id: 'urban',
    name: 'Urban Sidebar',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATeZ2eLTwRUlr9HQlkEvlbOYjx1mRapm3xSIRHppautLRN4MQXf7q4vDON-JUW0JN8Ba450v2BxUnY76RxOLiy_fX2apT0IeaU5kfUKEtiapaUkpZDECHbvW2XUiRVcr0YcNfppK40XKWT2PMuL0oOjcjL_kxJ_ffipf8HBuNKuc2CZt2wHn5ZeeO2QLQZ_hoomw_CInQ67DLySUqXb1E65zhQCN-83iN0tAk3oOVzChedoTrZ-gimFkZ8WxzNnGocuPNi31lBx5c',
    badge: null,
    premium: false,
    price: null,
    categories: ['Professional', 'Experienced']
  },
  {
    id: 'creative',
    name: 'Creative Infographic',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATeZ2eLTwRUlr9HQlkEvlbOYjx1mRapm3xSIRHppautLRN4MQXf7q4vDON-JUW0JN8Ba450v2BxUnY76RxOLiy_fX2apT0IeaU5kfUKEtiapaUkpZDECHbvW2XUiRVcr0YcNfppK40XKWT2PMuL0oOjcjL_kxJ_ffipf8HBuNKuc2CZt2wHn5ZeeO2QLQZ_hoomw_CInQ67DLySUqXb1E65zhQCN-83iN0tAk3oOVzChedoTrZ-gimFkZ8WxzNnGocuPNi31lBx5c',
    badge: null,
    premium: false,
    price: null,
    categories: ['Creative']
  },
  {
    id: 'executive',
    name: 'Professional Executive',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPu0GcLzMCDWY2P5smAXfqsvd3s13GLbYHo2QimIs7s_wm_dnsa8B29Jt3wKWHe0IOdY06Tss63Rv2hplKgbP6b4SWmYLC-7gZQSJ6SIr3AkB3em1bL1PddV30hgXmudIzZVksFGeEaMNbZTrNG5FR0u4eHm8EQsc27iQ6aJp6Cu38N9wV3VzY7PuTTIS_egTZhKWLSk_GQ7ruTpWH_PzrhkeGO4uMfTbdjmnzsPfgkBQlcHSYkn5d4C2UZmfuXKI_qJHTlpvrXPE',
    badge: null,
    premium: false,
    price: null,
    categories: ['Professional', 'Experienced']
  },
  {
    id: 'onyx',
    name: 'Onyx Dark',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPu0GcLzMCDWY2P5smAXfqsvd3s13GLbYHo2QimIs7s_wm_dnsa8B29Jt3wKWHe0IOdY06Tss63Rv2hplKgbP6b4SWmYLC-7gZQSJ6SIr3AkB3em1bL1PddV30hgXmudIzZVksFGeEaMNbZTrNG5FR0u4eHm8EQsc27iQ6aJp6Cu38N9wV3VzY7PuTTIS_egTZhKWLSk_GQ7ruTpWH_PzrhkeGO4uMfTbdjmnzsPfgkBQlcHSYkn5d4C2UZmfuXKI_qJHTlpvrXPE',
    badge: null,
    premium: false,
    price: null,
    categories: ['Professional', 'Experienced']
  },
  {
    id: 'serif',
    name: 'Classic Serif',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmtw3hYsOrUassgMvh4kLTVyGBGffh6LyOJB3wO-EwxGQTDJRpIVO3oh7zncIdRxc_8bg1suJXFgWTM9AgUGf0dxhkXD9K010-hYNgN6AWkrEv14oj4q75xLovXoz60fEW0ApMB-ZkP6AMzQAWnXlXIyUyG-NpzWyngQaWfSx9LFBx15YMGfSHO5CJGE9yEGfvGbCyjYrnHTraQ7MTy3R9-FZEIU4l3poKjqQYiCxTXJvMWTdOOvwr-KKElltdEaLfShxJonsbKlE',
    badge: null,
    premium: false,
    price: null,
    categories: ['Professional', 'Fresher']
  },
  {
    id: 'minimalist',
    name: 'Minimalist Clean',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWSf5KqJXpnUe2P5etSyxSyj0HDdEGuC0j_DBXMvLMZj3ySdHaxZRIBwtUSNqt8EO7ewvTQtkOpGpiyOEkEdKjX8szkQI-fQrDQ7sEVFfcuUfvqgDdvfljC-bN2J1o0b1eXqJ1nd5VdWXlrjET9cNNDTgh4losFWKkRYeiMS_QIP4I2WzGi4xGifPS42PPGqQ250XLWhqNEepscckkDWyznVjU9fsHe4t652Y2V8q40kk8GS614GFeGGV-jMegMLMSau7_cni_7yM',
    badge: null,
    premium: false,
    price: null,
    categories: ['Minimalist', 'Fresher']
  },
  {
    id: 'tech',
    name: 'Experienced Tech',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjQ6f7ehy_HTPUcRwoVSGAOLMtP8i4CnR6DPQPRipuZBEdFhLonbCUSI228o54UIokFcFQEBIrGGhJZdnF7DZZ-aKk443o_T5FoNkfpi8jqCA3n_AnvupHNxNfO-bgh0qYaN3zaAJmkPn25IyjMVuMj9aJrH93pTyqV3Q-0jO2Yz673Kg_r6Iu2zPB4_460xm_PuwQUAU1xKL7vxp3AzrIHeaedvgeeegP-HjlY48HMdFCzYQlnE8EtoKmFu4d5SkSN6zJBs3greQ',
    badge: null,
    premium: false,
    price: null,
    categories: ['Experienced', 'Professional']
  },
  {
    id: 'classic',
    name: 'Classic Standard',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmtw3hYsOrUassgMvh4kLTVyGBGffh6LyOJB3wO-EwxGQTDJRpIVO3oh7zncIdRxc_8bg1suJXFgWTM9AgUGf0dxhkXD9K010-hYNgN6AWkrEv14oj4q75xLovXoz60fEW0ApMB-ZkP6AMzQAWnXlXIyUyG-NpzWyngQaWfSx9LFBx15YMGfSHO5CJGE9yEGfvGbCyjYrnHTraQ7MTy3R9-FZEIU4l3poKjqQYiCxTXJvMWTdOOvwr-KKElltdEaLfShxJonsbKlE',
    badge: 'Popular',
    premium: false,
    price: null,
    categories: ['Fresher', 'Professional']
  },
  {
    id: 'compact',
    name: 'Compact Layout',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXZHriPv_WFCa0lnLDdJ0BYQImtMkpUo52RupM-2jpp44nLT21y5FFkXofOx2oMQMsBCGfQwu06vRp-lXxoJMZSJt3XxlmW5bzjPIiTPV7qDAIBz16tzc_0-S4WD23sofDukGEKqmSBkeE84vIRmkUkrzcQocMLZQaRLqaDMWuAELCOEyWXZMx9GGlpGz7D7cPnZIXTzgTdhVxVhQf0wx46vRUypRE65_ZA83B_B19GwSnY2us36dG88eSKk0IcwSLegdKvFkR42A',
    badge: null,
    premium: false,
    price: null,
    categories: ['Professional', 'Experienced']
  },
  {
    id: 'bold',
    name: 'Bold Impact',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPu0GcLzMCDWY2P5smAXfqsvd3s13GLbYHo2QimIs7s_wm_dnsa8B29Jt3wKWHe0IOdY06Tss63Rv2hplKgbP6b4SWmYLC-7gZQSJ6SIr3AkB3em1bL1PddV30hgXmudIzZVksFGeEaMNbZTrNG5FR0u4eHm8EQsc27iQ6aJp6Cu38N9wV3VzY7PuTTIS_egTZhKWLSk_GQ7ruTpWH_PzrhkeGO4uMfTbdjmnzsPfgkBQlcHSYkn5d4C2UZmfuXKI_qJHTlpvrXPE',
    badge: null,
    premium: false,
    price: null,
    categories: ['Professional', 'Experienced']
  },
  {
    id: 'academic',
    name: 'Academic CV',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3bI2_KyL5nc_fXsThSE-tat_GT7G2-gHJDWkvJSpDfWemKBjqlujy7RgfGkk-1VUJwfgLBR5RlTCXvb9VceK-tEBnwxbN8fFBHlVHhSAyRcvSwBWijcIji59-6EfmgOEnZ7kPAUz7nxI4CSSw59CA7CWkp2cc3LQK5G9xa6IV0xwVwE6qKoXlwYl5vyCz5FsSM5YgB_hK359mEx425Ric_GCeoSCIBQGle_mUZUCLC7Su1wZ9Lk_f3vjVoWiq50UrA8Uys8EfvUU',
    badge: null,
    premium: false,
    price: null,
    categories: ['Professional', 'Experienced']
  },
  {
    id: 'elegant',
    name: 'Elegant Professional',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmtw3hYsOrUassgMvh4kLTVyGBGffh6LyOJB3wO-EwxGQTDJRpIVO3oh7zncIdRxc_8bg1suJXFgWTM9AgUGf0dxhkXD9K010-hYNgN6AWkrEv14oj4q75xLovXoz60fEW0ApMB-ZkP6AMzQAWnXlXIyUyG-NpzWyngQaWfSx9LFBx15YMGfSHO5CJGE9yEGfvGbCyjYrnHTraQ7MTy3R9-FZEIU4l3poKjqQYiCxTXJvMWTdOOvwr-KKElltdEaLfShxJonsbKlE',
    badge: null,
    premium: false,
    price: null,
    categories: ['Professional', 'Fresher']
  },
  {
    id: 'clean',
    name: 'Clean Minimal',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWSf5KqJXpnUe2P5etSyxSyj0HDdEGuC0j_DBXMvLMZj3ySdHaxZRIBwtUSNqt8EO7ewvTQtkOpGpiyOEkEdKjX8szkQI-fQrDQ7sEVFfcuUfvqgDdvfljC-bN2J1o0b1eXqJ1nd5VdWXlrjET9cNNDTgh4losFWKkRYeiMS_QIP4I2WzGi4xGifPS42PPGqQ250XLWhqNEepscckkDWyznVjU9fsHe4t652Y2V8q40kk8GS614GFeGGV-jMegMLMSau7_cni_7yM',
    badge: null,
    premium: false,
    price: null,
    categories: ['Minimalist', 'Professional']
  },
  {
    id: 'designer',
    name: 'Graphic Designer',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2R0USsnXLi22UW1YqZXbZPVDwya5j7RmlSSimPrqF-kzggCulB2FnSTUyYX9bkvwX728z0edEQtp4-iuP-0p6s1tpAjbr_cZiZ2sjbvWqXfw1cFgT36sU9LvZgMwEH0m826lExsMC-8VLOPSwD-DWkKLavsqze5es5wI6qhmC-dHce66Pl9IDa_RDZtewzIpMbrrx03IypWEO-88Y_VA836Du5giTK8CHbkzJgJijM2G4FC46kYM-eM4PIoj-pWoNwr7NOIUKm9U',
    badge: null,
    premium: false,
    price: null,
    categories: ['Creative']
  }
];

const categories = ['All', 'Fresher', 'Experienced', 'Professional', 'Creative', 'Minimalist'];

const Templates: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [previewTemplate, setPreviewTemplate] = useState<typeof templates[0] | null>(null);

  const handleSelectTemplate = (id: string) => {
    navigate(`/editor?template=${id}`);
  };

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