export default async function handler(req: any, res: any) {
    const { videoUrl } = req.query;

    if (!videoUrl) {
        return res.status(400).json({ error: "Video URL is required" });
    }

    // Extract video ID from URL
    const videoId = extractVideoId(videoUrl);
    if (!videoId) {
        return res.status(400).json({ error: "Invalid YouTube URL" });
    }

    const API_KEY = process.env.YOUTUBE_API_KEY;
    const API_URL = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=contentDetails&key=${API_KEY}`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (!data.items.length) {
            return res.status(404).json({ error: "Video not found" });
        }

        const durationISO = data.items[0].contentDetails.duration;
        const durationSeconds = convertISO8601ToSeconds(durationISO);

        return res.status(200).json({ 
            duration: durationSeconds,
            durationISO: durationISO,
         });
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch video duration" });
    }
}

// Extract Video ID from YouTube URL
function extractVideoId(url: string) {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|embed\/|v\/|.*\/))([\w-]{11})/);
    return match ? match[1] : null;
}

// Convert ISO 8601 duration to seconds
function convertISO8601ToSeconds(duration: string) {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return 0;

    const hours = parseInt(match[1] || "0", 10);
    const minutes = parseInt(match[2] || "0", 10);
    const seconds = parseInt(match[3] || "0", 10);

    return hours * 3600 + minutes * 60 + seconds;
}
