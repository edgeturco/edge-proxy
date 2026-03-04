export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  const url = req.query.url;
  if (!url) { res.status(400).json({ error: 'Missing url' }); return; }
  try {
    const r = await fetch(url, { headers: { 'x-apisports-key': '5563bef84cf2b9ed8ae9fda5d64f1cff' } });
    const d = await r.json();
    res.status(200).json(d);
  } catch(e) { res.status(500).json({ error: e.message }); }
}
