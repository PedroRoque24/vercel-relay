export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const forwardURL = 'http://178.62.5.84:3000/relay';

  try {
    const response = await fetch(forwardURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });

    const data = await response.text();
    console.log('[Vercel Relay] ✅ Forwarded to Droplet');
    return res.status(200).json({ status: 'forwarded', response: data });
  } catch (error) {
    console.error('[Vercel Relay] ❌ Error forwarding to Droplet:', error.message);
    return res.status(500).json({ error: 'Failed to reach Droplet' });
  }
}
