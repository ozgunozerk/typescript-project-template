import * as index from '../src/index';
import * as sinon from "sinon";


it('dummy test', () => {
  sinon.stub(index, "return5").returns(4);

  console.log(index.print5())
  console.log(index.return5())
});
