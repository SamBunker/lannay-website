import { categories, timeline, certifications, education } from './portfolioData';

const items = [];

categories.forEach(cat => {
  cat.items.forEach(item => {
    items.push({
      label: item.name,
      sublabel: item.type,
      group: cat.title,
      href: '#portfolio',
      keywords: [item.name, item.type, ...(item.tags || []), item.description || ''].join(' ').toLowerCase(),
    });
  });
});

timeline.forEach(entry => {
  items.push({
    label: entry.role,
    sublabel: entry.org,
    group: 'Experience',
    href: '#experience',
    keywords: [entry.role, entry.org, ...(entry.highlights || [])].join(' ').toLowerCase(),
  });
});

certifications.forEach(cert => {
  items.push({
    label: cert.name,
    sublabel: `${cert.issuer} · ${cert.date}`,
    group: 'Certifications',
    href: '#experience',
    keywords: [cert.name, cert.issuer].join(' ').toLowerCase(),
  });
});

education.forEach(edu => {
  items.push({
    label: edu.school,
    sublabel: edu.degree,
    group: 'Education',
    href: '#experience',
    keywords: [edu.school, edu.degree].join(' ').toLowerCase(),
  });
});

export function searchAll(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return items.filter(item => item.keywords.includes(q) || item.keywords.split(' ').some(w => w.startsWith(q)));
}

export default items;
