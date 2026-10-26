import { expect, it } from 'vitest';
import { LOCALE } from './index';

it('la configuración regional es es-GT', () => {
  expect(LOCALE).toBe('es-GT');
});
