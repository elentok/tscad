function round(value: number): number {
  return Math.round(value * 100_000) / 100_000;
}

export = { round };
