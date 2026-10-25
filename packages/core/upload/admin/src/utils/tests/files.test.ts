import { formatBytes } from '../files';

describe('formatBytes', () => {
  it('formats upload sizes in kilobytes as kilobytes', () => {
    expect(formatBytes(245.3, 1)).toBe('245.3KB');
  });

  it('converts upload sizes in kilobytes to megabytes', () => {
    expect(formatBytes(3100, 1)).toBe('3.1MB');
  });

  it('keeps zero sizes as zero bytes', () => {
    expect(formatBytes(0)).toBe('0B');
  });
});
