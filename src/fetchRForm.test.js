import { render } from '@testing-library/react';
import FetchRewardsForm from './fetchRForm';

const postRewardsData = jest.fn();

const occupations = [
    "testing",
    "testing2"
]

const states = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    }
]

describe("Fetch Rewards Form", function () {
    it("renders without crashing", function () {
      render(<FetchRewardsForm occupations={occupations} states={states} postFetchReward={postRewardsData}/>);
    }); 

    it("matches snapshot", function () {
        const { container } = render(<FetchRewardsForm occupations={occupations} states={states} postFetchReward={postRewardsData}/>);
        expect(container).toMatchSnapshot();
      });
  });