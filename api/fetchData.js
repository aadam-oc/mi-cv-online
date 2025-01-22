// api/fetchData.js
export default async function handler(req, res) {
  const apiUrl = 'http://172.17.22.166/api/api.php'; // Your Raspberry Pi API
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data from Raspberry Pi');
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
