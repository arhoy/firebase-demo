import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import FormDiv from './Form';

const Comments = styled.div`
  background: ${props => props.theme.colors.primaryTransparent};
`;

const Comment = styled.div`
  padding: 2rem;
`;

export const BookComments = ({ firebase, bookId }) => {
  const [comments, setComments] = useState([]);

  const [formValue, setFormValue] = useState({ comment: '' });

  const handleInputChange = e => {
    e.persist();

    setFormValue(currentValue => {
      return {
        ...currentValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log(formValue.comment);
  };

  useEffect(() => {
    const unsubscribe = firebase.subscribeToBookComments({
      bookId,
      mySnapshot: function(snapshot) {
        let snapshotComments = [];
        snapshot.forEach(doc => {
          snapshotComments.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setComments(snapshotComments);
      },
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  return (
    <>
      <FormDiv onSubmit={submitHandler}>
        <input
          name="comment"
          value={formValue.comment}
          onChange={handleInputChange}
          placeholder="add comment"
          type="text"
          required
          minLength={10}
        />

        <button type="submit"> Add your comment </button>
      </FormDiv>

      <Comments>
        {comments.length > 0 &&
          comments.map(comment => (
            <Comment key={comment.id}>
              <h4>{comment.username}</h4>
              <p> {comment.text}</p>
            </Comment>
          ))}
      </Comments>
    </>
  );
};
