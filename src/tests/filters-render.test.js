import renderer from 'react-test-renderer';
import FilterName from "components/Filters/FilterName";

describe('Filters render', () => {
    it('Name', () => {
        const filterNameInput = renderer.create( <FilterName/>);
        expect(filterNameInput).toMatchSnapshot();
    });
    it('Price range', () => {
        const filterPrice = renderer.create(<FilterName/>);
        expect(filterPrice).toMatchSnapshot()
    })
});