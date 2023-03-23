import { cliente, createClient } from '@supabase/supabase-js'

const supabaseURL = "https://mckdtyupusnhcabyhyja.supabase.co"; //process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = "NEXT_PUBLIC_SUPABASE_PUBLIC_ANON_KEY";//process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_ANON_KEY;

export const supabase = createClient(supabaseURL, supabaseAnonKey);
