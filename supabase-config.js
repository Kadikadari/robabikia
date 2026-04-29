// إعدادات Supabase - لقاعدة بيانات الإعلانات
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// استبدل هذه البيانات ببيانات مشروعك من Supabase Dashboard
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
