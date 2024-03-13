import { it, expect, vi } from 'vitest'
import { getUNIXTime } from '../src'

// petit test unitaire
it('gets unix timestamp', () => {
  // on fige le temps en 2020
  vi.setSystemTime('2020-01-01')
  expect(getUNIXTime()).toStrictEqual(1577836800)
  // on restore le temps
  vi.useRealTimers()
})
