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
    id: 'swiss',
    name: 'Swiss Grid',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWSf5KqJXpnUe2P5etSyxSyj0HDdEGuC0j_DBXMvLMZj3ySdHaxZRIBwtUSNqt8EO7ewvTQtkOpGpiyOEkEdKjX8szkQI-fQrDQ7sEVFfcuUfvqgDdvfljC-bN2J1o0b1eXqJ1nd5VdWXlrjET9cNNDTgh4losFWKkRYeiMS_QIP4I2WzGi4xGifPS42PPGqQ250XLWhqNEepscckkDWyznVjU9fsHe4t652Y2V8q40kk8GS614GFeGGV-jMegMLMSau7_cni_7yM', // Reusing minimalist for placeholder
    badge: 'New',
    premium: false,
    price: null,
    categories: ['Minimalist', 'Professional']
  },
  {
    id: 'coral',
    name: 'Coral Accent',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjQ6f7ehy_HTPUcRwoVSGAOLMtP8i4CnR6DPQPRipuZBEdFhLonbCUSI228o54UIokFcFQEBIrGGhJZdnF7DZZ-aKk443o_T5FoNkfpi8jqCA3n_AnvupHNxNfO-bgh0qYaN3zaAJmkPn25IyjMVuMj9aJrH93pTyqV3Q-0jO2Yz673Kg_r6Iu2zPB4_460xm_PuwQUAU1xKL7vxp3AzrIHeaedvgeeegP-HjlY48HMdFCzYQlnE8EtoKmFu4d5SkSN6zJBs3greQ', // Reusing tech for placeholder
    badge: 'New',
    premium: false,
    price: null,
    categories: ['Professional', 'Fresher']
  },
  {
    id: 'urban',
    name: 'Urban Sidebar',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATeZ2eLTwRUlr9HQlkEvlbOYjx1mRapm3xSIRHppautLRN4MQXf7q4vDON-JUW0JN8Ba450v2BxUnY76RxOLiy_fX2apT0IeaU5kfUKEtiapaUkpZDECHbvW2XUiRVcr0YcNfppK40XKWT2PMuL0oOjcjL_kxJ_ffipf8HBuNKuc2CZt2wHn5ZeeO2QLQZ_hoomw_CInQ67DLySUqXb1E65zhQCN-83iN0tAk3oOVzChedoTrZ-gimFkZ8WxzNnGocuPNi31lBx5c', // Reusing creative for placeholder
    badge: 'New',
    premium: false,
    price: null,
    categories: ['Professional', 'Experienced']
  },
  {
    id: 'creative',
    name: 'Creative Infographic',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATeZ2eLTwRUlr9HQlkEvlbOYjx1mRapm3xSIRHppautLRN4MQXf7q4vDON-JUW0JN8Ba450v2BxUnY76RxOLiy_fX2apT0IeaU5kfUKEtiapaUkpZDECHbvW2XUiRVcr0YcNfppK40XKWT2PMuL0oOjcjL_kxJ_ffipf8HBuNKuc2CZt2wHn5ZeeO2QLQZ_hoomw_CInQ67DLySUqXb1E65zhQCN-83iN0tAk3oOVzChedoTrZ-gimFkZ8WxzNnGocuPNi31lBx5c',
    badge: null,
    premium: true,
    price: '$9.99',
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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPu0GcLzMCDWY2P5smAXfqsvd3s13GLbYHo2QimIs7s_wm_dnsa8B29Jt3wKWHe0IOdY06Tss63Rv2hplKgbP6b4SWmYLC-7gZQSJ6SIr3AkB3em1bL1PddV30hgXmudIzZVksFGeEaMNbZTrNG5FR0u4eHm8EQsc27iQ6aJp6Cu38N9wV3VzY7PuTTIS_egTZhKWLSk_GQ7ruTpWH_PzrhkeGO4uMfTbdjmnzsPfgkBQlcHSYkn5d4C2UZmfuXKI_qJHTlpvrXPE', // Reusing executive for placeholder
    badge: 'New',
    premium: false,
    price: null,
    categories: ['Professional', 'Experienced']
  },
  {
    id: 'serif',
    name: 'Classic Serif',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmtw3hYsOrUassgMvh4kLTVyGBGffh6LyOJB3wO-EwxGQTDJRpIVO3oh7zncIdRxc_8bg1suJXFgWTM9AgUGf0dxhkXD9K010-hYNgN6AWkrEv14oj4q75xLovXoz60fEW0ApMB-ZkP6AMzQAWnXlXIyUyG-NpzWyngQaWfSx9LFBx15YMGfSHO5CJGE9yEGfvGbCyjYrnHTraQ7MTy3R9-FZEIU4l3poKjqQYiCxTXJvMWTdOOvwr-KKElltdEaLfShxJonsbKlE', // Reusing classic for placeholder
    badge: 'New',
    premium: false,
    price: null,
    categories: ['Professional', 'Fresher']
  },
  {
    id: 'minimalist',
    name: 'Minimalist Clean',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWSf5KqJXpnUe2P5etSyxSyj0HDdEGuC0j_DBXMvLMZj3ySdHaxZRIBwtUSNqt8EO7ewvTQtkOpGpiyOEkEdKjX8szkQI-fQrDQ7sEVFfcuUfvqgDdvfljC-bN2J1o0b1eXqJ1nd5VdWXlrjET9cNNDTgh4losFWKkRYeiMS_QIP4I2WzGi4xGifPS42PPGqQ250XLWhqNEepscckkDWyznVjU9fsHe4t652Y2V8q40kk8GS614GFeGGV-jMegMLMSau7_cni_7yM',
    badge: 'New',
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
    id: 'academic',
    name: 'Academic CV',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3bI2_KyL5nc_fXsThSE-tat_GT7G2-gHJDWkvJSpDfWemKBjqlujy7RgfGkk-1VUJwfgLBR5RlTCXvb9VceK-tEBnwxbN8fFBHlVHhSAyRcvSwBWijcIji59-6EfmgOEnZ7kPAUz7nxI4CSSw59CA7CWkp2cc3LQK5G9xa6IV0xwVwE6qKoXlwYl5vyCz5FsSM5YgB_hK359mEx425Ric_GCeoSCIBQGle_mUZUCLC7Su1wZ9Lk_f3vjVoWiq50UrA8Uys8EfvUU',
    badge: null,
    premium: true,
    price: '$9.99',
    categories: ['Professional', 'Experienced']
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                {/* Insert AdSense banner after the 4th item visually, or roughly in the middle */}
                {index === 4 && (
                   <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center min-h-[90px] animate-pulse border border-dashed border-slate-300 dark:border-slate-700">
                     <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">AdSense Banner (728x90)</p>
                   </div>
                )}
                
                <div className="group relative flex flex-col rounded-lg overflow-hidden border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-800/50 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {template.badge && (
                    <div className="absolute top-3 right-3 z-10 flex gap-2">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${template.badge === 'Popular' ? 'bg-primary/20 text-primary dark:bg-primary/30 dark:text-white' : 'bg-sky-500/20 text-sky-600 dark:text-sky-300'}`}>
                        {template.badge}
                      </span>
                    </div>
                  )}
                  {template.premium && (
                    <div className="absolute top-3 right-3 z-10 flex gap-2">
                       <span className="flex items-center gap-1 text-xs font-bold bg-amber-500/20 text-amber-600 dark:text-amber-300 px-2.5 py-1 rounded-full">
                         <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>lock</span>
                         Premium
                       </span>
                    </div>
                  )}
                  
                  <div 
                    className="aspect-[3/4] bg-cover bg-center" 
                    style={{ backgroundImage: `url("${template.image}")` }}
                  ></div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                    <button 
                      onClick={() => handleSelectTemplate(template.id)}
                      className="w-full h-10 px-4 rounded-lg bg-primary text-white text-sm font-bold shadow-lg transform active:scale-95 transition-transform"
                    >
                      Use This Template
                    </button>
                  </div>
                  
                  <div className="p-4 flex flex-col flex-1">
                     <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-slate-800 dark:text-white">{template.name}</h3>
                            <div className="flex gap-2 mt-1.5">
                                <span className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">ATS Friendly</span>
                            </div>
                        </div>
                        {template.price && (
                           <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{template.price}</p>
                        )}
                     </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;