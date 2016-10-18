import React from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import gql from 'graphql-tag';

import Component from '../components/new_building';
import { addBuilding } from '../actions';



const TEMPLATES_QUERY = gql`
  query {
    templates {
      _id
      name
      createdAt
      hours {
        hour1
        hour2
        hour3
        hour4
      }
    }
  }
`;

const ComponentWithData = graphql(TEMPLATES_QUERY, {
  props({ data: { loading, templates } }) {
    return { loading, templates };
  }
})(Component);

const CREATE_BUILDING = gql`
  mutation createBuilding($building: BuildingInput!) {
    createBuilding(building: $building) {
      _id
    }
  }
`;

const ComponentWithDataAndMutations = graphql(CREATE_BUILDING, {
  props: ({ mutate }) => ({
    createBuilding(building) {
      return mutate({variables: {building}})
        .then(({data}) => {
          alert('New Buiding ' + data.createBuilding._id);
        });
    },
  })
})(ComponentWithData);

export default ComponentWithDataAndMutations;
