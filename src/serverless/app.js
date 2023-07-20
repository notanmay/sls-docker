'use strict';

module.exports.handler = async (event) => {
  console.log('Hello, world! My function executed successfully from Dockerfile!')
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello, world! My function executed successfully from Dockerfile!`,
      },
      null,
      2
    ),
  };
};
