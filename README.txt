GPT Relay for Vercel

This server receives webhook POST requests from GPT or external services
and forwards them to your permanent Droplet backend at:

http://178.62.5.84:3000/relay

Setup:
1. Push this to a GitHub repo
2. Connect the repo to Vercel
3. Deploy → your endpoint will be:
   https://your-vercel-relay.vercel.app/api/relay

Then use this new HTTPS endpoint in GPT.
