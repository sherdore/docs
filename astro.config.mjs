// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Products on public sale, then products still in early access (documented with a notice on
// each overview page). When an early-access product launches, move it into `products` and
// delete the notice at the top of its index.md.
const products = [
	{ label: 'HVAC', slug: 'hvac' },
	{ label: 'Uptime', slug: 'uptime' },
	{ label: 'Verification', slug: 'verification' },
	{ label: 'Backup', slug: 'backup' },
	{ label: 'Shield', slug: 'shield' },
	{ label: 'ERP', slug: 'erp' },
];

const earlyAccess = [
	{ label: 'Dental', slug: 'dental' },
	{ label: 'Outreach', slug: 'outreach' },
	{ label: 'Compass', slug: 'compass' },
	{ label: 'Proxies', slug: 'proxies' },
	{ label: 'SEO', slug: 'seo' },
	{ label: 'Social', slug: 'social' },
	{ label: 'Sites', slug: 'sites' },
	{ label: 'Knowledge Base', slug: 'kb' },
];

const productGroup = (p) => ({
	label: p.label,
	collapsed: true,
	items: [{ autogenerate: { directory: `products/${p.slug}` } }],
});

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.sherdore.com',
	integrations: [
		starlight({
			title: 'SherDore Docs',
			description: 'Guides and reference for your SherDore account and every SherDore product.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/sherdore/docs' }],
			editLink: { baseUrl: 'https://github.com/sherdore/docs/edit/main/' },
			lastUpdated: true,
			sidebar: [
				{ label: 'Getting started', items: [{ autogenerate: { directory: 'getting-started' } }] },
				{
					label: 'Products',
					items: [{ label: 'All products', slug: 'products' }, ...products.map(productGroup)],
				},
				{ label: 'Early access', collapsed: true, items: earlyAccess.map(productGroup) },
			],
		}),
	],
});
