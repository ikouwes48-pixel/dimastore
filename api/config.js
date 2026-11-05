export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.status(200).json({
    url: 'https://kzjpchwrewcbcjymskkl.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6anBjaHdyZXdjYmNqeW1za2tsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM3NjAwOTMsImV4cCI6MjEwOTMzNjA5M30.4FickS8NCPHrlRbbixPNJf4dP9U_C8IbgrmUT2QPBlo',
  });
}
