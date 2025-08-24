export interface Dog {
  id: string;
  name: string;
  breed: string;
  age: number;
  image: string;
  nfcId: string;
  
  // Health information
  vaccinations: {
    rabies: { date: string; nextDue: string; status: 'current' | 'overdue' | 'upcoming' };
    dhpp: { date: string; nextDue: string; status: 'current' | 'overdue' | 'upcoming' };
    bordetella: { date: string; nextDue: string; status: 'current' | 'overdue' | 'upcoming' };
  };
  
  healthStatus: 'excellent' | 'good' | 'fair' | 'needs_attention';
  hasBeenAggressive: boolean;
  aggressionNotes: string;
  
  // Owner information
  owner: {
    name: string;
    phone: string;
    email: string;
    address: string;
    emergencyContact: string;
  };
  
  // Additional info
  microchipId?: string;
  allergies: string[];
  medications: string[];
  vetInfo: {
    clinicName: string;
    phone: string;
    address: string;
  };
}