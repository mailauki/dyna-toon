import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://duqugvfzstvehgurytey.supabase.co'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
// const supabase createClient(supabaseUrl, supabaseKey)
export default createClient(supabaseUrl, supabaseKey)

// export default createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// )