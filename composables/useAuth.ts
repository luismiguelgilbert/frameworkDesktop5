import { User } from "@supabase/supabase-js";

const useAuth = () => {
  const user: User  = useState('user', () => null);
  const { supabase } = useSupabase();

  supabase.auth.onAuthStateChange((e, session) => {
    user.value = session?.user || null;
  });

  const signIn = async (email: string, password: string) => {
    const {data, error} = await supabase.auth.signInWithPassword({email, password});
    const {user: u} = data;
    if(error){
      throw error;
    }
    return u;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if(error) throw error;
  };

  const isLoggedIn = () => {
    return !!user.value;
  };

  return {
    user,
    signIn,
    signOut,
    isLoggedIn,
  };
};

export default useAuth