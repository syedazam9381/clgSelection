export interface College {
  id: string;
  name: string;
  image: string;
  city: string;
  state: string;
  address: string;
  type: 'Government' | 'Private' | 'Central' | 'Deemed' | 'Autonomous';
  nurfRank: number;
  rating: number;
  courses: string[];
  fees: {
    annual: number;
    total: number;
    additional: number;
  };
  admission: {
    entrance: string;
    eligibility: string;
    process: string;
    documents: string[];
  };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
}