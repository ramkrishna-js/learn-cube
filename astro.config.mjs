import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://ramkrishna-js.github.io',
    base: '/learn-cube',
    integrations: [starlight({
        title: 'Learn Cube',
        defaultLocale: 'root',
        locales: {
            root: {
                label: 'English',
                lang: 'en',
            },
        },
        social: {
            github: 'https://github.com/ramkrishna-js/learn-cube',
        },
        sidebar: [
            {
                label: 'Tools',
                items: [
                    { label: 'Speed Cube Timer', link: '/tools/timer/' },
                    { label: 'Cubing Quiz', link: '/tools/quiz/' },
                ],
            },
            {
                label: 'Getting Started',
                items: [
                    { label: 'Introduction', link: '/guides/introduction/' },
                    { label: 'Cube Notation', link: '/guides/notation/' },
                    { label: 'How to Memorize Algs', link: '/guides/memorization/' },
                    { label: 'A Brief History', link: '/guides/history/' },
                    { label: 'Guide for Parents', link: '/guides/parents/' },
                    { label: 'The Dictionary', link: '/guides/glossary/' },
                ],
            },
            {
                label: 'Beginner Method',
                items: [
                    { label: 'The White Cross', link: '/beginner/cross/' },
                    { label: 'First Layer', link: '/beginner/first-layer/' },
                    { label: 'Second Layer', link: '/beginner/second-layer/' },
                    { label: 'Last Layer', link: '/beginner/last-layer/' },
                    { label: 'Cheat Sheet', link: '/beginner/cheat-sheet/' },
                ],
            },
            {
                label: 'Improvement',
                items: [
                    { label: 'Roadmap to Sub-20', link: '/advanced/sub-20/' },
                    { label: 'Practice Drills', link: '/advanced/practice/' },
                    { label: 'Finger Tricks', link: '/guides/finger-tricks/' },
                    { label: 'Fun Patterns', link: '/guides/patterns/' },
                ]
            },
            {
                label: 'Speedcubing Methods',
                items: [
                    { label: 'Overview', link: '/advanced/intro/' },
                    {
                        label: 'CFOP Method',
                        items: [
                            { label: 'Introduction', link: '/advanced/cfop/' },
                            { label: 'F2L', link: '/advanced/cfop/f2l/' },
                            { label: 'Advanced F2L Tricks', link: '/advanced/f2l-tricks/' },
                            { label: 'OLL', link: '/advanced/cfop/oll/' },
                            { label: 'OLL Cheat Sheet', link: '/advanced/cfop/oll-groups/' },
                            { label: 'Introduction to COLL', link: '/advanced/cfop/coll/' },
                            { label: 'PLL', link: '/advanced/cfop/pll/' },
                            { label: 'Full PLL List', link: '/advanced/cfop/full-pll/' },
                        ]
                    },
                    {
                        label: 'Roux Method',
                        items: [
                            { label: 'Introduction', link: '/advanced/roux/' },
                        ]
                    },
                    {
                        label: 'ZZ Method',
                        items: [
                            { label: 'Introduction', link: '/advanced/zz/' },
                        ]
                    },
                    { label: 'Blindfolded (OP)', link: '/advanced/blindfolded/' },
                    { label: 'Blindfolded (M2)', link: '/advanced/blindfolded-m2/' },
                    { label: 'One-Handed (OH)', link: '/advanced/one-handed/' },
                ]
            },
            {
                label: 'Hardware & Care',
                items: [
                    { label: 'The Hardware Guide', link: '/guides/hardware/' },
                    { label: 'Smart Cubes', link: '/guides/smart-cubes/' },
                    { label: 'Cube Maintenance', link: '/guides/maintenance/' },
                    { label: 'DIY Modding', link: '/guides/modding/' },
                    { label: 'Troubleshooting', link: '/guides/troubleshooting/' },
                ]
            },
            {
                label: 'Cubing Culture',
                items: [
                    { label: 'Your First Competition', link: '/guides/competitions/' },
                    { label: 'Competition Mindset', link: '/guides/mindset/' },
                    { label: 'Cubing Health & Safety', link: '/guides/health/' },
                    { label: 'Color Schemes', link: '/guides/colors/' },
                    { label: 'Hall of Fame', link: '/guides/legends/' },
                    { label: 'Solve Reconstructions', link: '/guides/recons/' },
                    { label: 'Community Resources', link: '/guides/community/' },
                ]
            },
            {
                label: 'Beyond Solving',
                items: [
                     { label: 'The Math of the Cube', link: '/guides/math/' },
                     { label: 'FMC (Theory)', link: '/advanced/fmc/' },
                     { label: 'Cube Mosaics', link: '/guides/mosaics/' },
                ]
            },
            {
                label: 'Puzzle Collection',
                items: [
                     { label: '2x2 Cube', link: '/puzzles/2x2/' },
                     { label: '4x4 Cube', link: '/advanced/4x4/' },
                     { label: '5x5+ Big Cubes', link: '/puzzles/big-cubes/' },
                     { label: 'Pyraminx', link: '/puzzles/pyraminx/' },
                     { label: 'Megaminx', link: '/puzzles/megaminx/' },
                     { label: 'Skewb', link: '/puzzles/skewb/' },
                     { label: 'Square-1', link: '/puzzles/square-1/' },
                     { label: 'Rubik\'s Clock', link: '/puzzles/clock/' },
                     { label: 'Mirror Blocks', link: '/puzzles/mirror-blocks/' },
                     { label: 'Mastermorphix', link: '/puzzles/mastermorphix/' },
                     { label: 'Gear Cube', link: '/puzzles/gear-cube/' },
                     { label: 'Ivy Cube', link: '/puzzles/ivy-cube/' },
                     { label: 'Redi Cube', link: '/puzzles/redi-cube/' },
                ]
            }
        ],
        customCss: [
            './src/styles/custom.css',
        ],
		}), react()],
});