// Template definitions and metadata
export interface Template {
  id: string;
  name: string;
  image: string;
  badge?: string | null;
  premium: boolean;
  price?: string | null;
  categories: string[];
}

export const templates: Template[] = [
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

export const categories = ['All', 'Fresher', 'Experienced', 'Professional', 'Creative', 'Minimalist'];
