// Fetch item data, compute days since last seen and render table
// Container for item data
let itemsData = [];

// Fallback data used if fetch fails (helps when viewing via file:// protocol)
const fallbackData = [
  { name: "Basic Purple Flashlight", lastSeen: "2025-08-22", price: 499 },
  { name: "Basic Blue Lockpick", lastSeen: "2025-08-18", price: 499 },
  { name: "Basic Green Lockpick", lastSeen: "2025-08-23", price: 499 },
  { name: "Basic Jade Lockpick", lastSeen: "2025-08-18", price: 499 },
  { name: "Basic Pink Lockpick", lastSeen: "2025-08-23", price: 499 },
  { name: "Basic Blue Shears", lastSeen: "2025-08-19", price: 499 },
  { name: "Basic Green Shears", lastSeen: "2025-08-22", price: 499 },
  { name: "Basic Cyan Shears", lastSeen: "2025-08-20", price: 499 },
  { name: "Basic Magenta Bulklight", lastSeen: "2025-08-23", price: 499 },
  { name: "Basic Orange Bulklight", lastSeen: "2025-08-20", price: 499 },
  { name: "Basic Pink Bulklight", lastSeen: "2025-08-17", price: 499 },
  { name: "Basic Blue Stratplight", lastSeen: "2025-08-21", price: 499 },
  { name: "Basic Cyan Stratplight", lastSeen: "2025-08-22", price: 499 },
  { name: "Basic Purple Stratplight", lastSeen: "2025-08-23", price: 499 },
  { name: "Basic Orange Vitamins", lastSeen: "2025-08-17", price: 499 },
  { name: "Basic Black Lighter", lastSeen: "2025-08-22", price: 499 },
  { name: "Basic Green Lighter", lastSeen: "2025-08-23", price: 499 },
  { name: "Basic Red Lighter", lastSeen: "2025-08-19", price: 499 },
  { name: "Basic Yellow Lighter", lastSeen: "2025-08-18", price: 499 },
  { name: "Basic Pink Lighter", lastSeen: "2025-08-19", price: 499 },
  { name: "Basic Red Vitamins", lastSeen: "2025-08-22", price: 499 },
  { name: "Basic Orange Shakelight", lastSeen: "2025-08-20", price: 799 },
  { name: "Basic Pink Shakelight", lastSeen: "2025-08-17", price: 799 },
  { name: "Basic Red Shakelight", lastSeen: "2025-08-22", price: 799 },
  { name: "Camo Vitamins", lastSeen: "2025-08-19", price: 799 },
  { name: "Color Camo Vitamins", lastSeen: "2025-08-21", price: 799 },
  { name: "Color Camo Bulklight", lastSeen: "2025-08-20", price: 799 },
  { name: "Translucent Bulklight", lastSeen: "2025-08-18", price: 799 },
  { name: "Translucent Lockpick", lastSeen: "2025-08-23", price: 799 },
  { name: "Activated Crucifix", lastSeen: "2025-08-19", price: 1499 },
  { name: "Bob Skeleton Key", lastSeen: "2025-08-20", price: 1499 },
  { name: "Dread Alarm Clock", lastSeen: "2025-08-18", price: 1499 },
  { name: "Giggle Bulklight", lastSeen: "2025-08-23", price: 1499 },
  { name: "Hallowed Crucifix", lastSeen: "2025-08-19", price: 1499 },
  { name: "Loca Cola Gween Soda", lastSeen: "2025-08-23", price: 1499 },
  { name: "Makeshift Flashlight", lastSeen: "2025-08-17", price: 1499 },
  { name: "Paperclips Lockpick", lastSeen: "2025-08-21", price: 1499 },
  { name: "Safety Scissors Shears", lastSeen: "2025-08-21", price: 1499 },
  { name: "Sticks Crucifix", lastSeen: "2025-08-21", price: 1499 },
  { name: "DrakoBloxxer Flashlight", lastSeen: "2025-08-22", price: 2999 },
  { name: "Figure Flashlight", lastSeen: "2025-08-22", price: 2999 },
  { name: "3rd Anniversary Candle", lastSeen: "2025-08-23", price: "3 (3rd Anniversary Bundle)" },
  { name: "3rd Anniversary Crucifix", lastSeen: "2025-08-23", price: "3 (3rd Anniversary Bundle)" },
  { name: "3rd Anniversary Flashlight", lastSeen: "2025-08-23", price: "3 (3rd Anniversary Bundle)" },
  { name: "3rd Anniversary Moonlight Candle", lastSeen: "2025-08-23", price: "3 (3rd Anniversary Bundle)" },
  { name: "Ban Hammer Crucifix", lastSeen: "2025-08-21", price: "3999 (Classic Gear Bundle)" },
  { name: "Bloxy Cola Green Soda", lastSeen: "2025-08-21", price: "3999 (Classic Gear Bundle)" },
  { name: "D-Orb Lighter", lastSeen: "2025-08-21", price: "3999 (Classic Gear Bundle)" },
  { name: "Gear Flashlight", lastSeen: "2025-08-21", price: "3999 (Classic Gear Bundle)" },
  { name: "Overgrown Alarm Clock", lastSeen: "2025-08-23", price: "3999 (Overgrown Bundle)" },
  { name: "Overgrown Crucifix", lastSeen: "2025-08-23", price: "3999 (Overgrown Bundle)" },
  { name: "Overgrown Flashlight", lastSeen: "2025-08-23", price: "3999 (Overgrown Bundle)" },
  { name: "Overgrown Smoothie", lastSeen: "2025-08-23", price: "3999 (Overgrown Bundle)" },
  { name: "Voxel Crucifix", lastSeen: "2025-08-23", price: "4999 (Voxel Bundle)" },
  { name: "Voxel Flashlight", lastSeen: "2025-08-23", price: "4999 (Voxel Bundle)" },
  { name: "Voxel Glowstick", lastSeen: "2025-08-23", price: "4999 (Voxel Bundle)" },
  { name: "Voxel Gween Soda", lastSeen: "2025-08-23", price: "4999 (Voxel Bundle)" },
  { name: "Voxel Lockpick", lastSeen: "2025-08-23", price: "4999 (Voxel Bundle)" },
  { name: "Voxel Skeleton Key", lastSeen: "2025-08-23", price: "4999 (Voxel Bundle)" }
];

// Load JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    itemsData = data;
    updateTable();
  })
  .catch(err => {
    console.warn('Failed to load item data, using fallback:', err);
    itemsData = fallbackData;
    updateTable();
  });

// Compute days since last seen relative to today (UTC)
function computeDaysSince(dateStr) {
  if (!dateStr) return null;
  const parts = dateStr.split('-').map(Number);
  if (parts.length !== 3) return null;
  const [year, month, day] = parts;
  const last = new Date(Date.UTC(year, month - 1, day));
  const now = new Date();
  const todayUTC = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const diffMs = todayUTC - last;
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

// Format date back to M/D/YYYY for display
function formatDate(dateStr) {
  const [year, month, day] = dateStr.split('-');
  return `${month}/${day}/${year}`;
}

// Update table content based on search input
function updateTable() {
  const tbody = document.getElementById('itemTableBody');
  tbody.innerHTML = '';
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  // Sort by days since last seen ascending
  const sorted = itemsData.slice().sort((a, b) => {
    return computeDaysSince(a.lastSeen) - computeDaysSince(b.lastSeen);
  });
  for (const item of sorted) {
    if (item.name.toLowerCase().includes(searchTerm)) {
      const days = computeDaysSince(item.lastSeen);
      const tr = document.createElement('tr');
      if (days === 0) tr.classList.add('current');
      tr.innerHTML = `
        <td>${item.name}</td>
        <td>${formatDate(item.lastSeen)}</td>
        <td>${days}</td>
        <td>${item.price}</td>
      `;
      tbody.appendChild(tr);
    }
  }
}

// Search input listener
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', () => {
    updateTable();
  });
});

// Countdown timer to next reset at 20:00 UTC
function updateCountdown() {
  const countdownElem = document.getElementById('countdown');
  const now = new Date();
  const nextReset = new Date();
  nextReset.setUTCMinutes(0, 0, 0);
  nextReset.setUTCHours(20);
  // If it's past 20:00 UTC today, the next reset is tomorrow
  const nowUTC = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
  const resetUTC = Date.UTC(nextReset.getUTCFullYear(), nextReset.getUTCMonth(), nextReset.getUTCDate(), nextReset.getUTCHours(), nextReset.getUTCMinutes(), 0);
  let diffMs = resetUTC - nowUTC;
  if (diffMs <= 0) {
    // Add one day
    diffMs += 24 * 60 * 60 * 1000;
  }
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
  countdownElem.textContent = `${hours}h ${minutes}m ${seconds}s`;
}

// Start countdown interval
setInterval(updateCountdown, 1000);
updateCountdown();