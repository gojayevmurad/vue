/**
 *
 * @param sizeInKB Size in KB
 * @returns Object containing size in KB, MB, GB, TB
 */
function convertFileSize(sizeInKB: number) {
  const KB_TO_MB = 1 / 1024;
  const MB_TO_GB = 1 / 1024;
  const GB_TO_TB = 1 / 1024;

  const sizeInMB = sizeInKB * KB_TO_MB;
  const sizeInGB = sizeInMB * MB_TO_GB;
  const sizeInTB = sizeInGB * GB_TO_TB;

  return {
    kb: sizeInKB.toFixed(2) + " KB",
    mb: sizeInMB.toFixed(2) + " MB",
    gb: sizeInGB.toFixed(2) + " GB",
    tb: sizeInTB.toFixed(2) + " TB",
  };
}

export { convertFileSize };
