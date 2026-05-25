import { readFileSync } from 'fs';
import yaml from 'js-yaml';

let cachedConfig = null;

export function getConfig() {
  if (!cachedConfig) {
    const configPath = new URL('../config.yml', import.meta.url);
    const configContent = readFileSync(configPath, 'utf-8');
    cachedConfig = yaml.load(configContent);
  }
  return cachedConfig;
}