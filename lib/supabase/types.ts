export type LeadRow = {
  id: string;
  created_at: string;
  full_name: string;
  company: string | null;
  email: string;
  phone: string | null;
  project_type: string;
  budget_range: string;
  timeline: string | null;
  description: string;
  consent_rgpd: boolean;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
  status: string;
};

export type Database = {
  public: {
    Tables: {
      leads: {
        Row: LeadRow;
        Insert: Omit<LeadRow, "id" | "created_at" | "status"> & {
          id?: string;
          created_at?: string;
          status?: string;
        };
        Update: Partial<LeadRow>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
  };
};
