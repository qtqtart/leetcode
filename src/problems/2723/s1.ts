type P = Promise<number>;

async function addTwoPromises(p1: P, p2: P): P {
  const [v1, v2] = await Promise.all([p1, p2]);
  return v1 + v2;
}
