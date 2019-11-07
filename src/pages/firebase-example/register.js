import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../components/firebase';

import Layout from '../../components/layouts/Layout';
import { navigate } from 'gatsby-link';
import { SectionGrey } from '../../components/reusableStyles/sections/Sections';

import HOL from '../../components/layouts/HOL';
import FormDiv from '../../components/firebase-components/Form';
import Navbar from '../../components/firebase-components/Navbar';
import { H2 } from '../../components/reusableStyles/typography/Typography';
import { SimpleAlertRed } from '../../components/reusableStyles/alerts/SimpleAlerts';

const registerPage = () => {
  const { firebase } = useContext(FirebaseContext);

  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formError, setFormError] = useState(null);

  const submitHandler = async e => {
    e.preventDefault();
    if (formValue.password === formValue.confirmPassword) {
      try {
        await firebase.register({
          email: formValue.email,
          password: formValue.password,
        });
        navigate('/firebase-example/home');
      } catch (error) {
        if (error.message) {
          setFormError(error.message);
        } else {
          setFormError('Not able to register at this time :(');
        }
      }
    } else {
      setFormError('Passwords do not match');
    }
  };

  const handleInputChange = e => {
    setFormError(null);
    e.persist();
    setFormValue(currentValue => {
      return {
        ...currentValue,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <HOL>
      <Layout>
        <Navbar />

        <SectionGrey>
          <H2> REGISTER </H2>
          <FormDiv onSubmit={submitHandler}>
            <input
              name="email"
              value={formValue.email}
              onChange={handleInputChange}
              placeholder="your email"
              type="email"
              required
            />
            <input
              name="password"
              value={formValue.password}
              onChange={handleInputChange}
              placeholder="your password"
              type="password"
              required
              minLength={6}
            />
            <input
              name="confirmPassword"
              value={formValue.confirmPassword}
              onChange={handleInputChange}
              placeholder="confirm password"
              type="password"
              required
              minLength={6}
            />
            <button type="submit"> Register </button>
            {formError && <SimpleAlertRed> {formError} </SimpleAlertRed>}
          </FormDiv>
        </SectionGrey>
      </Layout>
    </HOL>
  );
};

export default registerPage;
