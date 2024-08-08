const fs = require('fs');
const packageJsonPath = './package.json';
const packageLockJsonPath = './package-lock.json';
const packageJson = require(packageJsonPath);
const [major, minor, patch] = packageJson.version.split('.').map(Number);

// Incrémente la version (ici, on incrémente juste le patch)
const newMajor = major;
const newMinor = minor;
const newPatch = patch + 1;

const newVersion = `${newMajor}.${newMinor}.${newPatch}`;

packageJson.version = newVersion;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
fs.writeFileSync(packageLockJsonPath, JSON.stringify(packageJson, null, 2));

console.log(`Version bumped to ${newVersion}`);

// Chemin vers le fichier de constantes de version
const versionFilePath = './src/app/utils/constants/version.const.ts';

// Contenu du fichier de constantes de version
const versionFileContent = `export const MAJOR_VERSION = ${newMajor};
export const MINOR_VERSION = ${newMinor};
export const PATCH_VERSION = ${newPatch};
`;

// Écrire la nouvelle version dans le fichier de constantes
fs.writeFileSync(versionFilePath, versionFileContent, 'utf8');
console.log(`Version ${newVersion} written to ${versionFilePath}`);
