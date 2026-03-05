const fs = require('fs');
const path = require('path');

const fileContent = fs.readFileSync('src/App.tsx', 'utf-8');

// The markers separating our blocks
const regex = /\/\/ ─── (.*?) ─+\n([\s\S]*?)(?=\/\/ ───|$)/g;

let match;
const blocks = [];

while ((match = regex.exec(fileContent)) !== null) {
    blocks.push({
        name: match[1].trim(),
        content: match[2].trim(),
    });
}

const getFilePath = (name) => {
    switch (name) {
        case 'DESIGN TOKENS': return 'theme/tokens.ts';
        case 'SPLASH SCREEN': return 'components/SplashScreen.tsx';
        case 'LOGO COMPACT': return 'components/icons/LogoCompact.tsx';
        case 'SVG ICON LIBRARY': return 'components/icons/Icons.tsx';
        case '3D BRAND RIBBONS': return 'components/shared/Ribbon.tsx';
        case 'SHARED PRIMITIVES': return 'components/shared/Primitives.tsx';
        case 'DATA': return 'data/mockData.ts';
        case 'ABSENCE MODAL': return 'components/modals/AbsenceModal.tsx';
        case 'NOTIFICATIONS PAGE': return 'pages/NotifsPage.tsx';
        case 'ARTICLE PAGE': return 'pages/ArticlePage.tsx';
        case 'UNIT DETAIL': return 'pages/UnitPage.tsx';
        case 'COURSE DETAIL': return 'pages/CoursePage.tsx';
        case 'HOME TAB': return 'tabs/HomeTab.tsx';
        case 'TIMETABLE TAB': return 'tabs/TimetableTab.tsx';
        case 'INSIGHTS TAB': return 'tabs/InsightsTab.tsx';
        case 'TOOL DETAIL PAGE': return 'pages/ToolDetailPage.tsx';
        case 'TOOLS TAB': return 'tabs/ToolsTab.tsx';
        case 'PROFILE TAB': return 'tabs/ProfileTab.tsx';
        case 'NAV CONFIG': return 'config/nav.ts';
        case 'ROOT APP': return 'App.tsx';
        default: return `components/others/${name.replace(/ /g, '')}.tsx`;
    }
};

const processedFiles = {};

blocks.forEach(block => {
    const relPath = getFilePath(block.name);
    const outPath = path.join('src', relPath);

    fs.mkdirSync(path.dirname(outPath), { recursive: true });

    // Add exports to everything so we can import them across files
    let modifiedContent = block.content.replace(/^(const|type|function) /gm, 'export $1 ');

    // Exclude 'export' from inner scope by only replacing at the start of a line.

    // App.tsx needs default export
    if (block.name === 'ROOT APP') {
        modifiedContent = modifiedContent.replace('export default function App()', 'export default function App()');
    }

    // Combine contents if multiples go to same file (none currently, but just in case)
    processedFiles[outPath] = (processedFiles[outPath] || '') + '\n\n' + modifiedContent;
});

for (const [outPath, content] of Object.entries(processedFiles)) {
    fs.writeFileSync(outPath, `${outPath.endsWith('.tsx') ? "import React, { useState, useEffect } from 'react';\n" : ""}${content}`);
}

console.log('Successfully split files');
