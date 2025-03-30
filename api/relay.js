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
    return res.status(200).json({ status: 'forwarded', response: data });
  } catch (
