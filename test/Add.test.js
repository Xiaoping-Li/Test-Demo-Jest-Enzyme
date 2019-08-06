// What is the best?
// 1. It is recommended to use shallow as much as possible because unit tests should be isolated as much as possible.
// 2. We do not need to check the units (components) inside a unit (component)when running a single test.
// 3. When you use mount you are automatically exposed to the logic of all the units (components) in your render tree making it impossible to only test the component in question.
// 4. It is more costly in execution time when using mount, because it requires JSDOM.

// render
// There is another function like shallow and mount, which is render.
// This has the ability to render to static HTML.
// It renders the children.
// But this does not have access to React lifecycle methods.

import Add from '../src/components/Add';
import Form from '../src/components/Form';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Add />);
});

describe('<Add /> rendering', () => {
  // Test will pass either wrapper = mount(<Add />) or wrapper = shallow(<Add />), because 'h1'is child of <Add />
  it('should render one <h1>', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  // Test will pass either wrapper = mount(<Add />) or wrapper = shallow(<Add />), because 'Form'is child of <Add />
  it('should render one <Form>', () => {
    expect(wrapper.find(Form)).toHaveLength(1);
  });



  // Test will fail when wrapper = shallow(<Add />) because 'label's are children of <Form />, not <Add />. Change to wrapper = shallow(<Add />) will pass
  // The reason for this is, mount renders the full DOM including the child components in the parent component. 

  // it('should render 2 <label>s', () => {
  //   expect(wrapper.find('label')).toHaveLength(2);
  // });
});