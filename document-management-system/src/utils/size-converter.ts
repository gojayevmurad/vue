/**
 *
 * @param sizeInKB Size in KB
 * @returns Object containing size in KB, MB, GB, TB
 */
function convertFileSize(sizeInKB: number) {
  const CONVERT_L = 1 / 1024;

  const sizeInMB = sizeInKB * CONVERT_L;
  const sizeInGB = sizeInMB * CONVERT_L;
  const sizeInTB = sizeInGB * CONVERT_L;

  return {
    kb: +sizeInKB.toFixed(2),
    mb: +sizeInMB.toFixed(2),
    gb: +sizeInGB.toFixed(2),
    tb: +sizeInTB.toFixed(2),
  };
}

export { convertFileSize };
