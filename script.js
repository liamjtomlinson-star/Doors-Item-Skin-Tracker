// Dark-themed interactive item tracker for DOORS item shop

// Path to the Knobs currency icon hosted alongside the site. This small webp
// image replaces the money bag emoji in the price display. When deploying
// the site, ensure `Knobs.webp` is included in the root directory.
const knobIcon = 'Knobs.webp';

let itemsData = [];
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
  { name: "Basic Blue Straplight", lastSeen: "2025-08-21", price: 499 },
  { name: "Basic Cyan Straplight", lastSeen: "2025-08-22", price: 499 },
  { name: "Basic Purple Straplight", lastSeen: "2025-08-23", price: 499 },
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
  { name: "Bloxy Cola Gween Soda", lastSeen: "2025-08-21", price: "3999 (Classic Gear Bundle)" },
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

/**
 * Determine the type/category of an item based on its name.
 * This allows grouping and filtering of items by type.
 * @param {string} name
 * @returns {string}
 */
function getItemType(name) {
  const lower = name.toLowerCase();
  if (lower.includes('alarm clock')) return 'Alarm Clock';
  if (lower.includes('bulklight')) return 'Bulklight';
  // Special case: treat "moonlight candle" as its own type before generic candle check
  if (lower.includes('moonlight candle')) return 'Moonlight Candle';
  // Special case: treat "gween soda" as its own type before generic categories
  if (lower.includes('gween soda')) return 'Gween Soda';
  if (lower.includes('candle')) return 'Candle';
  if (lower.includes('crucifix')) return 'Crucifix';
  // Treat "straplight" or "stratplight" variants as their own type before checking for flashlight
  if (lower.includes('straplight') || lower.includes('stratplight')) return 'Straplight';
  if (lower.includes('flashlight')) return 'Flashlight';
  if (lower.includes('glowstick')) return 'Glowstick';
  if (lower.includes('lighter')) return 'Lighter';
  if (lower.includes('lockpick')) return 'Lockpick';
  if (lower.includes('shakelight')) return 'Shakelight';
  if (lower.includes('shears')) return 'Shears';
  // treat keys as skeleton key if they contain 'key'
  if (lower.includes('key')) return 'Skeleton Key';
  if (lower.includes('vitamins')) return 'Vitamins';
  if (lower.includes('smoothie')) return 'Smoothie';
  // Default category when no other type matches
  return 'Other';
}

// Compute days since last seen and subtract one (so that items seen today show 0)
function computeDaysSince(dateStr) {
  const parts = dateStr.split('-').map(Number);
  if (parts.length !== 3) return null;
  const [year, month, day] = parts;
  const lastDate = new Date(Date.UTC(year, month - 1, day));
  const now = new Date();
  const todayUTC = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const diff = Math.floor((todayUTC - lastDate) / (1000 * 60 * 60 * 24));
  // subtract 1 but never go below 0
  return Math.max(0, diff - 1);
}

// Format date for display (MM/DD/YYYY)
function formatDate(dateStr) {
  const [year, month, day] = dateStr.split('-');
  return `${month}/${day}/${year}`;
}

// Build filter chips UI
function buildFilterChips(types) {
  const container = document.getElementById('filterChips');
  container.innerHTML = '';
  const allChip = createChip('All', 'All');
  container.appendChild(allChip);
  types.forEach(type => {
    const chip = createChip(type, type);
    container.appendChild(chip);
  });
}

// Helper to create a chip element
function createChip(label, type) {
  const chip = document.createElement('div');
  chip.className = 'chip';
  chip.textContent = label;
  chip.dataset.type = type;
  chip.addEventListener('click', () => {
    // Toggle active chip
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    activeType = type;
    renderItems();
  });
  // Mark All as active initially
  if (type === 'All' && activeType === 'All') {
    chip.classList.add('active');
  }
  return chip;
}

// Build item cards and category sections
function renderItems() {
  const container = document.getElementById('itemsContainer');
  container.innerHTML = '';
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  // Group items by type
  const grouped = {};
  itemsData.forEach(item => {
    const type = getItemType(item.name);
    // Filter by type and search term
    if ((activeType === 'All' || activeType === type) && item.name.toLowerCase().includes(searchTerm)) {
      if (!grouped[type]) grouped[type] = [];
      grouped[type].push(item);
    }
  });
  // Sort types alphabetically
  const sortedTypes = Object.keys(grouped).sort((a, b) => a.localeCompare(b));
  sortedTypes.forEach(type => {
    const section = document.createElement('div');
    section.className = 'category';
    // Category title
    const title = document.createElement('h3');
    title.className = 'category-title';
    title.textContent = type;
    section.appendChild(title);
    // Sort items alphabetically within category
    grouped[type].sort((a, b) => a.name.localeCompare(b.name));
    const grid = document.createElement('div');
    grid.className = 'item-grid';
    grouped[type].forEach(item => {
      const card = createItemCard(item);
      grid.appendChild(card);
    });
    section.appendChild(grid);
    container.appendChild(section);
  });
}

// Create a card element for an item
function createItemCard(item) {
  const card = document.createElement('div');
  card.className = 'item-card';
  // Image: show actual image if provided, otherwise placeholder text
  const imageDiv = document.createElement('div');
  imageDiv.className = 'card-image';
  if (item.image) {
    const imgEl = document.createElement('img');
    imgEl.src = item.image;
    imgEl.alt = item.name;
    imgEl.loading = 'lazy';
    imageDiv.appendChild(imgEl);
  } else {
    imageDiv.textContent = 'No image';
  }
  card.appendChild(imageDiv);
  // Content
  const content = document.createElement('div');
  content.className = 'card-content';
  // Days badge
  const days = computeDaysSince(item.lastSeen);
  const badge = document.createElement('div');
  badge.className = 'days-badge';
  if (days === 0) {
    badge.textContent = 'Today';
    badge.classList.add('today');
  } else {
    // Add "ago" to the label for clarity (e.g., "3 days ago")
    badge.textContent = `${days} ${days === 1 ? 'day' : 'days'} ago`;
  }
  content.appendChild(badge);
  // Category small text
  const cat = document.createElement('div');
  cat.className = 'card-category';
  cat.textContent = getItemType(item.name);
  content.appendChild(cat);
  // Name
  const nameDiv = document.createElement('div');
  nameDiv.className = 'card-name';
  nameDiv.textContent = item.name;
  content.appendChild(nameDiv);
  // Price and date row
  const row = document.createElement('div');
  row.className = 'card-row';
  // Price with icon
  // Build an image element for the currency icon. Using an inline image
  // allows for styling via CSS and avoids reliance on emoji fonts. The
  // `knobIcon` constant points to the small WebP included in the site.
  const iconEl = document.createElement('img');
  iconEl.src = knobIcon;
  iconEl.alt = '';
  iconEl.className = 'price-icon';
  row.appendChild(iconEl);
  // Text for the price follows the icon
  const priceText = document.createElement('span');
  priceText.textContent = ` ${item.price}`;
  row.appendChild(priceText);
  // Date
  const dateSpan = document.createElement('span');
  dateSpan.textContent = formatDate(item.lastSeen);
  row.appendChild(dateSpan);
  content.appendChild(row);
  card.appendChild(content);
  return card;
}

// Countdown timer to next reset (20:00 UTC)
function updateCountdown() {
  const countdownElem = document.getElementById('countdown');
  const now = new Date();
  let nextReset = new Date();
  nextReset.setUTCMinutes(0, 0, 0);
  nextReset.setUTCHours(20);
  // If now is past reset, set to next day
  if (Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes()) >= Date.UTC(nextReset.getUTCFullYear(), nextReset.getUTCMonth(), nextReset.getUTCDate(), nextReset.getUTCHours(), nextReset.getUTCMinutes())) {
    nextReset.setUTCDate(nextReset.getUTCDate() + 1);
  }
  const diffMs = nextReset.getTime() - now.getTime();
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
  countdownElem.textContent = `${hours}h ${minutes}m ${seconds}s`;
}

// Initialize search listener and load data
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', () => {
    renderItems();
  });
  // Fetch data from JSON
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      itemsData = data;
      initUI();
    })
    .catch(err => {
      console.warn('Failed to load remote data, using fallback', err);
      itemsData = fallbackData;
      initUI();
    });
});

function initUI() {
  // Determine types
  const types = Array.from(new Set(itemsData.map(item => getItemType(item.name)))).sort((a, b) => a.localeCompare(b));
  buildFilterChips(types);
  renderItems();
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Active type state
let activeType = 'All';