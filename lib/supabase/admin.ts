import { createClient, type SupabaseClient } from "@supabase/supabase-js";

type WelcomeEmailQueueRow = {
  id: string;
  user_id: string;
  email: string;
  language: string;
  template_key: string;
  status: string;
  send_after: string;
  sent_at: string | null;
  attempts: number;
  last_error: string | null;
  provider_message_id: string | null;
  created_at: string;
  updated_at: string;
};

type WelcomeEmailQueueInsert = {
  id?: string;
  user_id: string;
  email: string;
  language: string;
  template_key?: string;
  status?: string;
  send_after: string;
  sent_at?: string | null;
  attempts?: number;
  last_error?: string | null;
  provider_message_id?: string | null;
  created_at?: string;
  updated_at?: string;
};

type WelcomeEmailQueueUpdate = Partial<WelcomeEmailQueueInsert>;

type Database = {
  public: {
    Tables: {
      welcome_email_queue: {
        Row: WelcomeEmailQueueRow;
        Insert: WelcomeEmailQueueInsert;
        Update: WelcomeEmailQueueUpdate;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

function requireEnv(value: string | undefined, name: string) {
  if (!value) {
    throw new Error(`Missing ${name}`);
  }

  return value;
}

let adminClient: SupabaseClient<Database> | undefined;

export function createAdminClient() {
  if (!adminClient) {
    console.error("SERVICE ROLE PRESENT:", !!process.env.SUPABASE_SERVICE_ROLE_KEY);

    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error("SUPABASE_SERVICE_ROLE_KEY is missing in runtime");
    }

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      console.error("NEXT_PUBLIC_SUPABASE_URL is missing in runtime");
    }

    requireEnv(process.env.NEXT_PUBLIC_SUPABASE_URL, "NEXT_PUBLIC_SUPABASE_URL");
    requireEnv(process.env.SUPABASE_SERVICE_ROLE_KEY, "SUPABASE_SERVICE_ROLE_KEY");

    adminClient = createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    });
  }

  return adminClient;
}
