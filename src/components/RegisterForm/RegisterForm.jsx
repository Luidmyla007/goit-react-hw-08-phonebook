import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormContainer, RegisterTitle } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormContainer>
      <RegisterTitle>Registration</RegisterTitle><br/>
    <form  onSubmit={handleSubmit} autoComplete="off">
      <label >
        Username<br/>
        <input type="text" name="name" /><br/><br/>
      </label>
      <label >
        Email<br/>
        <input type="email" name="email" /><br/><br/>
      </label>
      <label >
        Password<br/>
        <input type="password" name="password" /><br/><br/>
        </label><br />
        <br/>
      <button type="submit">Register</button>
    </form>
    </FormContainer>
  );
};