import React from 'react';

export const withCondition = (conditionalRenderingFn) => (Component) => (props) =>
  conditionalRenderingFn(props) ? <Component {...props} /> : null

export const withEither = (conditionalRenderingFn, EitherComponent) => (Component) => (props) =>{
  return conditionalRenderingFn(props) ? <EitherComponent  {...props} /> : <Component {...props} />
}