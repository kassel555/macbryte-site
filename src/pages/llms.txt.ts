// /llms.txt — a plain-text summary for AI assistants and answer engines, generated at build time.
import posts from '../data/posts.json';
import pages from '../data/pages.json';
import { site, services } from '../data/site';

export function GET() {
  const p = (r: string) => (pages as any)[r];
  const lines = [
    '# Macbryte',
    '',
    `> One-on-one computer lessons for seniors and beginners in ${site.areas.join(', ')} (Ontario, Canada). Mac, Windows PC, iPad, iPhone and Android — in the student's home or online.`,
    '',
    '## Key facts',
    `- Coach: ${site.coach.name}, Co-Founder of Macbryte`,
    `- Phone: ${site.phone} · Email: ${site.email} · Contact form: ${site.url}/contact`,
    `- Service area: ${site.areas.join(', ')} (in-home); online anywhere`,
    '- Pricing: $85 for 1 hour; 4 hours $325; 8 hours $575; 12 hours $925 (CAD)',
    '- First step: a free 15-minute phone call',
    `- Experience: ${site.stats.students} students taught, ${site.stats.hours} hours of lessons`,
    '- Teaches: email, online safety and scams, photos, video calling, iPad, iPhone, password managers, Google Maps, Microsoft Office, online banking',
    '',
    '## Main pages',
    `- [Computer lessons for seniors in Ottawa](${site.url}/computer-lessons-for-seniors)`,
    `- [Pricing](${site.url}/pricing)`,
    `- [How it works](${site.url}/how-it-works)`,
    `- [Student testimonials](${site.url}/happy-students)`,
    `- [About Rahul](${site.url}/about)`,
    `- [Contact / request a callback](${site.url}/contact)`,
    '',
    '## Services',
    ...services.map((s) => `- [${p(s.href)?.title?.replace(' | Macbryte', '') ?? s.title}](${site.url}${s.href}): ${s.text}`),
    '',
    '## Areas',
    ...['ottawa', 'kanata', 'barrhaven', 'nepean'].map((c) => `- [${p('/computer-coaching-' + c).title}](${site.url}/computer-coaching-${c})`),
    '',
    '## Free guides',
    ...posts.map((x) => `- [${x.title}](${site.url}/blog/${x.slug}): ${x.quickAnswer || x.excerpt}`),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
