// Vercel Serverless Function: membagikan konfigurasi publik Supabase ke halaman HTML.
// Atur VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY di Vercel > Project > Settings > Environment Variables.
// Anon key memang bersifat publik; keamanan data dijaga oleh Row Level Security di Supabase.
export default function handler(req, res) {
  res.setHeader('Cache-Control', 'public, max-age=300');
  res.status(200).json({
    url: process.env.VITE_SUPABASE_URL || '',
    anonKey: process.env.VITE_SUPABASE_ANON_KEY || '',
  });
}
