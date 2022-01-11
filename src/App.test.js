import { render } from '@testing-library/react';
import App from './App';


describe("Fetch Rewards App", function() {
  it("renders without crashing", async function () {
    render(<App/>)
    
  });
})