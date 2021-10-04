import { shallow } from 'enzyme';
import Tile from './components/tile/Tile';

describe('App', ()=>{
  describe('Contacts', ()=>{
    describe('Tile',()=>{
      let wrapper;
    
      beforeEach(()=>{
        wrapper = shallow(
          <Tile data={{
            name:"John Doe",
            phone:"123-456-7890",
            email:"example@johndoe.com"
          }}
          />
        )
      })
    
      it('renders name in p.tile-title', ()=>{
        const expected = "John Doe";
    
        const renderedOutput = wrapper.find('.tile-title').text();
    
        expect(renderedOutput).toEqual(expected)
      })
    
      it('renders phone number in p.tile[1]', ()=>{
        const expected = "123-456-7890";
    
        const renderedOutput = wrapper.find('.tile').at(1).text();
    
        expect(renderedOutput).toEqual(expected)
      })
    
      it('renders email in p.tile[2]', ()=>{
        const expected = "example@johndoe.com";
    
        const renderedOutput = wrapper.find('.tile').at(2).text();
    
        expect(renderedOutput).toEqual(expected)
      })
    })
  })
})