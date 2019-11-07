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

const loginPage = () => {
  const [formValue, setFormValue] = useState({ email: '', password: '' });

  const [formError, setFormError] = useState(null);

  const { firebase } = useContext(FirebaseContext);

  const submitHandler = async e => {
    e.preventDefault();
    try {
      await firebase.login({
        email: formValue.email,
        password: formValue.password,
      });
      navigate('/firebase-example/home');
    } catch (error) {
      if (error.message) {
        setFormError(error.message);
      }
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
          <H2> LOGIN </H2>
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
            <button type="submit"> Login </button>
            {formError && <SimpleAlertRed> {formError} </SimpleAlertRed>}
          </FormDiv>
        </SectionGrey>
      </Layout>
    </HOL>
  );
};

export default loginPage;
