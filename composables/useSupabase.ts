import { createClient } from '@supabase/supabase-js'

const useSupabase = () => {
  const { SUPABASE_URL, SUPABASE_KEY } = useRuntimeConfig();
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  
  return { supabase }
}

export default useSupabase;