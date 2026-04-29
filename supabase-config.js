// إعدادات Supabase الحقيقية لمشروع روبابيكيا
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = 'https://mtcseebdsmccpgycvncd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10Y3NlZWJkc21jY3BneWN2bmNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0MTEzMzksImV4cCI6MjA5Mjk4NzMzOX0.-5ShirmzwzHyVgDAmaBYU656l_hKZ1unayosW-L-Ubc';

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
