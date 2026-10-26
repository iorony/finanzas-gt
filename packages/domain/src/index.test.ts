import { describe, expect, it } from 'vitest';
import { DEFAULT_TIMEZONE, SUPPORTED_CURRENCIES, isSupportedCurrency } from './index';

describe('humo del dominio (M0)', () => {
  it('soporta solo GTQ y USD', () => {
    expect(SUPPORTED_CURRENCIES).toEqual(['GTQ', 'USD']);
    expect(isSupportedCurrency('GTQ')).toBe(true);
    expect(isSupportedCurrency('EUR')).toBe(false);
  });

  it('usa America/Guatemala por defecto', () => {
    expect(DEFAULT_TIMEZONE).toBe('America/Guatemala');
  });
});
