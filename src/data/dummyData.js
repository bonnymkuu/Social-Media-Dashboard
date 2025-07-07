export const overviewData = [
  { label: "Followers", value: 12840, delta: 212 },
  { label: "Posts", value: 320, delta: 5 },
  { label: "Likes", value: 59823, delta: 1321 },
  { label: "Comments", value: 1203, delta: -87 },
  { label: "Shares", value: 834, delta: 23 },
  { label: "Reach", value: 73500, delta: 800 },
];


export const activityData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  likes: [500, 600, 700, 650, 720, 400, 300],
  comments: [100, 120, 130, 110, 150, 90, 70],
  shares: [50, 60, 70, 55, 65, 45, 35],
  engagementSource: [45, 25, 15, 15], // Organic, Ads, Influencers, Promotions
  postTypePerformance: [80, 65, 90, 70, 50], // Image, Video, Reels, Story, Live
  deviceUsage: [65, 25, 10], // Mobile, Desktop, Tablet
  geoAudience: [40, 30, 15, 10, 5], // USA, Europe, Asia, Africa, Other
};

export const topPosts = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Top Post #${i + 1}`,
  likes: Math.floor(Math.random() * 5000 + 1000),
  comments: Math.floor(Math.random() * 500 + 100),
}));

export const newFollowers = Array.from({ length: 10 }, (_, i) => ({
  user: `@new_user_${i + 1}`,
  joined: new Date(Date.now() - i * 86400000).toLocaleDateString(),
  platform: ["Instagram", "Facebook", "LinkedIn", "TikTok"][i % 4],
}));

export const platformStats = [
  {
    platform: 'Facebook',
    icon: '📘',
    color: '#1877f2',
    followers: 12040,
    likes: 8930,
    comments: 650,
  },
  {
    platform: 'Instagram',
    icon: '📸',
    color: '#e1306c',
    followers: 18400,
    likes: 12350,
    comments: 900,
  },
  {
    platform: 'Twitter',
    icon: '🐦',
    color: '#1da1f2',
    followers: 10230,
    likes: 8800,
    comments: 710,
  },
  {
    platform: 'TikTok',
    icon: '🎵',
    color: '#010101',
    followers: 15760,
    likes: 10400,
    comments: 820,
  },
  {
    platform: 'YouTube',
    icon: '▶️',
    color: '#ff0000',
    followers: 20900,
    likes: 16700,
    comments: 1050,
  },
];
