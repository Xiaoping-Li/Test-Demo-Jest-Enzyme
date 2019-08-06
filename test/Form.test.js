import Form from '../src/components/Form';

let wrapper;

beforeEach(() => wrapper = shallow(<Form />));

describe('<Form /> rendering', () => {
  it('should render one <form>', () => {
    expect(wrapper.find('form')).toHaveLength(1);
  });

  it('should not render any <button> when operator is not passed in props', () => {
    expect(wrapper.find('button')).toHaveLength(0);
  });

  it('should render 2 <label>s', () => {
    expect(wrapper.find('label')).toHaveLength(2);
  });

  it('should render 2 <input>s', () => {
    expect(wrapper.find('input')).toHaveLength(2);
  });

  it('should render one <button> to Add when operator \'+\' is passed in props', () => {
    wrapper.setProps({ operator: '+'});
    expect(wrapper.find('#formButtonAdd')).toHaveLength(1);
    expect(wrapper.find('#formButtonSubtract')).toHaveLength(0);
  });

  it('should render one <button> to Subtract when operator \'-\' is passed in props', () => {
    wrapper.setProps({ operator: '-' });
    expect(wrapper.find('#formButtonAdd')).toHaveLength(0);
    expect(wrapper.find('#formButtonSubtract')).toHaveLength(1);
  });
});

describe('<Form /> interactions', () => {
  it('should change the state firstNumber when onChange function of the #number1 input is invoked', () => {
    wrapper.find('#number1').simulate('change', 
      {target: { value: 50 }}
    );
    expect(wrapper.state('firstNumber')).toEqual(50);
    expect(wrapper.state('secondNumber')).toEqual('');
  });

  it('should change the state secondNumber when onChange function of the #number2 input is invoked', () => {
    wrapper.find('#number2').simulate('change',
      { target: { value: 60 }}
    );
    expect(wrapper.state('secondNumber')).toEqual(60);
    expect(wrapper.state('firstNumber')).toEqual('');
  });
});