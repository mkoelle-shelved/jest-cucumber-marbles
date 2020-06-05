import {defineFeature, loadFeature} from 'jest-cucumber';

const feature = loadFeature('./tests/marbleJar.feature');

defineFeature(feature, test => {
  let marbles;
  test('Getting to know your marbles', ({
    given,
    when,
    and
  }) => {
    given('I have a lovely jar of mixed marbles', () => {
      marbles = [{color:"red"},{color:"red"},{color:"red"},{color:"blue"},{color:"blue"}]
    });

    when('I sort my marbles', () => {
      // no-op
    });

    and(/^some of the marbles will be (.*)$/, (color) => {
      const filteredMarbles = marbles.filter( (m) => m.color == color );
      expect(filteredMarbles.length).toBeGreaterThan(0);
    });
  });
});