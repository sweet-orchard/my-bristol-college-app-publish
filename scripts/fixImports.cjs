const { Project } = require('ts-morph');

async function fixImports() {
    const project = new Project({
        tsConfigFilePath: 'tsconfig.app.json',
    });

    const sourceFiles = project.getSourceFiles();

    console.log(`Analyzing ${sourceFiles.length} files...`);

    // Force an initial save if needed, some imports might need discovery
    // The split script exported all top-level statements.
    // We just need to tell ts-morph to find and fix missing imports
    for (const file of sourceFiles) {
        if (file.getBaseName() === 'App.backup.tsx') continue; // Skip backup
        console.log(`Fixing imports for ${file.getBaseName()}...`);
        file.fixMissingImports();
        file.organizeImports();
    }

    await project.save();
    console.log('Finished fixing imports');
}

fixImports().catch(console.error);
