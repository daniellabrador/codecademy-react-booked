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

  
  describe('Appointments', ()=>{
    describe('Tile',()=>{
      let wrapper;
    
      beforeEach(()=>{
        wrapper = shallow(
          <Tile data={{
            title:"Present design concept",
            contact:"John Doe",
            date:"June 12, 2021",
            time:"12:00PM"
          }}
          />
        )
      })
    
      it('renders title in p.tile-title', ()=>{
        const expected = "Present design concept";
    
        const renderedOutput = wrapper.find('.tile-title').text();
    
        expect(renderedOutput).toEqual(expected)
      })
    
      it('renders contact in p.tile[1]', ()=>{
        const expected = "John Doe";
    
        const renderedOutput = wrapper.find('.tile').at(1).text();
    
        expect(renderedOutput).toEqual(expected)
      })
    
      it('renders date in p.tile[2]', ()=>{
        const expected = "June 12, 2021";
    
        const renderedOutput = wrapper.find('.tile').at(2).text();
    
        expect(renderedOutput).toEqual(expected)
      })
    
      it('renders time in p.tile[2]', ()=>{
        const expected = "12:00PM";
    
        const renderedOutput = wrapper.find('.tile').at(3).text();
    
        expect(renderedOutput).toEqual(expected)
      })
    })
  })
})