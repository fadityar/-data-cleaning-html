// script.js - simple CSV parser & cleaning functions
let originalData = null; // array of objects
let headers = [];

const fileInput = document.getElementById('fileInput');
const tableContainer = document.getElementById('tableContainer');

fileInput.addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const text = reader.result;
    const parsed = parseCSV(text);
    headers = parsed.headers;
    originalData = parsed.rows;
    renderTable(originalData);
  };
  reader.readAsText(file, 'utf-8');
});

// Buttons
document.getElementById('btnTrim').addEventListener('click', () => {
  if (!originalData) return alert('Unggah CSV terlebih dahulu.');
  originalData = trimValues(originalData);
  renderTable(originalData);
});
document.getElementById('btnRemoveEmpty').addEventListener('click', () => {
  if (!originalData) return alert('Unggah CSV terlebih dahulu.');
  originalData = removeEmptyRows(originalData);
  renderTable(originalData);
});
document.getElementById('btnRemoveDup').addEventListener('click', () => {
  if (!originalData) return alert('Unggah CSV terlebih dahulu.');
  originalData = removeDuplicates(originalData, headers);
  renderTable(originalData);
});
document.getElementById('btnConvert').addEventListener('click', () => {
  if (!originalData) return alert('Unggah CSV terlebih dahulu.');
  originalData = convertTypes(originalData);
  renderTable(originalData);
});
document.getElementById('btnDownload').addEventListener('click', () => {
  if (!originalData) return alert('Unggah CSV terlebih dahulu.');
  const csv = toCSV(originalData, headers);
  downloadBlob(csv, 'cleaned.csv', 'text/csv');
});
document.getElementById('btnReset').addEventListener('click', () => {
  if (!originalData) return;
  location.reload();
});

// --- Utilities ---

function parseCSV(text){
  // Very small CSV parser (handles quoted fields simply)
  const lines = text.replace(/\r/g, '').split('\n').filter(l=>l.trim()!== '');
  if (lines.length === 0) return { headers: [], rows: [] };
  const rawHeaders = splitCSVLine(lines[0]);
  const rows = [];
  for (let i=1;i<lines.length;i++){
    const cols = splitCSVLine(lines[i]);
    // create object with headers (missing columns become empty string)
    const obj = {};
    for (let j=0;j<rawHeaders.length;j++){
      obj[rawHeaders[j]] = cols[j] !== undefined ? cols[j] : '';
    }
    rows.push(obj);
  }
  return { headers: rawHeaders, rows };
}

function splitCSVLine(line){
  const result = [];
  let curr='';
  let inQuotes=false;
  for (let i=0;i<line.length;i++){
    const ch = line[i];
    if (ch === '"' ) {
      if (inQuotes && line[i+1]==='"'){ curr += '"'; i++; } 
      else inQuotes = !inQuotes;
      continue;
    }
    if (ch === ',' && !inQuotes){
      result.push(curr);
      curr='';
    } else curr += ch;
  }
  result.push(curr);
  return result;
}

function renderTable(rows){
  if (!rows || rows.length === 0) {
    tableContainer.innerHTML = '<em>Tidak ada data untuk ditampilkan.</em>';
    return;
  }
  const tbl = document.createElement('table');
  const thead = document.createElement('thead');
  const trh = document.createElement('tr');
  headers.forEach(h => {
    const th = document.createElement('th');
    th.textContent = h;
    trh.appendChild(th);
  });
  thead.appendChild(trh);
  tbl.appendChild(thead);

  const tbody = document.createElement('tbody');
  rows.forEach(row => {
    const tr = document.createElement('tr');
    headers.forEach(h => {
      const td = document.createElement('td');
      td.textContent = row[h] ?? '';
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  tbl.appendChild(tbody);
  tableContainer.innerHTML = '';
  tableContainer.appendChild(tbl);
}

// Cleaning functions
function trimValues(rows){
  return rows.map(r => {
    const out = {};
    for (const k in r) out[k] = typeof r[k] === 'string' ? r[k].trim() : r[k];
    return out;
  });
}

function removeEmptyRows(rows){
  return rows.filter(r => {
    return Object.values(r).some(v => String(v).trim() !== '');
  });
}

function removeDuplicates(rows, headers){
  const seen = new Set();
  const out = [];
  for (const r of rows){
    // create key using all columns
    const key = headers.map(h => String(r[h] ?? '')).join('||');
    if (!seen.has(key)){
      out.push(r);
      seen.add(key);
    }
  }
  return out;
}

function convertTypes(rows){
  // Try convert numeric-like values to numbers
  return rows.map(r => {
    const out = {};
    for (const k in r){
      const v = r[k];
      const num = Number(String(v).replace(/,/g, ''));
      if (!isNaN(num) && String(v).match(/^\s*-?\d+(\.\d+)?\s*$/)) out[k] = num;
      else out[k] = v;
    }
    return out;
  });
}

function toCSV(rows, headers){
  const esc = v => {
    if (v === null || v === undefined) return '';
    const s = String(v);
    if (s.includes(',') || s.includes('"') || s.includes('\n')) return `"${s.replace(/"/g,'""')}"`;
    return s;
  };
  const lines = [];
  lines.push(headers.map(esc).join(','));
  for (const r of rows){
    lines.push(headers.map(h => esc(r[h])).join(','));
  }
  return lines.join('\n');
}

function downloadBlob(content, filename, mime){
  const blob = new Blob([content], {type: mime});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
