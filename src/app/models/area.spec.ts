import { Area } from './area';
import { Zone } from './zone';

describe('Area', () => {
  it('should create an instance', () => {
    expect(new Area(new Zone("","",null,""), "")).toBeTruthy();
  });
});
