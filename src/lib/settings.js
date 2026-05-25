import { readFileSync } from 'fs';
import yaml from 'js-yaml';

let cachedSettings = null;

export function getSettings() {
  if (!cachedSettings) {
    const settingsPath = new URL('../settings.yml', import.meta.url);
    const settingsContent = readFileSync(settingsPath, 'utf-8');
    cachedSettings = yaml.load(settingsContent);
  }
  return cachedSettings;
}