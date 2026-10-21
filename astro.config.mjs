// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Only products that are publicly on sale are documented here. Add a product by creating
// src/content/docs/products/<slug>/index.md and listing it below once it launches.
const products = [
	{ label: 'HVAC', slug: 'hvac' },
	{ label: 'Uptime', slug: 'uptime' },
	{ label: 'Verification', slug: 'verification' },
	{ label: 'Backup', slug: 'backup' },
	{ label: 'Shield', slug: 'shield' },
	{ label: 'ERP', slug: 'erp' },
];

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
					items: [
						{ label: 'All products', slug: 'products' },
						...products.map((p) => ({
							label: p.label,
							collapsed: true,
							items: [{ autogenerate: { directory: `products/${p.slug}` } }],
						})),
					],
				},
			],
		}),
	],
});
