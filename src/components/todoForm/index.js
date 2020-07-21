import React, {useState} from 'react';
import PropTypes from 'prop-types';

// TodoForm.propTypes = {
//   onSubmit: PropTypes.func
// };
//
// TodoForm.defaultProps = {
//   onSubmit: null,
// }

function TodoForm(props) {
  const {onSubmit} = props;
  const [value, setValue] = useState('');
  function handleValueChange(e) {
    setValue(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    const formValues = {
      title: value,
    }
    onSubmit(formValues);
    setValue('');
  }
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" value={value} onChange={e => handleValueChange(e)}/>
      </form>
    </div>
  );
}

export default TodoForm;