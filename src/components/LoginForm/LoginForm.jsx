import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { LogForm, LoginTitle, FormContainer } from './LoginForm.styled';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormContainer>
      <LoginTitle>Authorization</LoginTitle>
    <LogForm onSubmit={handleSubmit} autoComplete="off">
     
      <label >
          Email
          <br/>
        <input type="email" name="email" /><br/><br/>
        </label>
        <br/>
      <label >
        Password<br/>
        <input type="password" name="password" />
        </label>
          <br/><br/>
      <button type="submit">Log In</button>
    </LogForm>
    </FormContainer>
  );
};