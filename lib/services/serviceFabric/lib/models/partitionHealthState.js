/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Represents the health state of a partition, which contains the partition
 * identifier and its aggregated health state.
 *
 * @extends models['EntityHealthState']
 */
class PartitionHealthState extends models['EntityHealthState'] {
  /**
   * Create a PartitionHealthState.
   * @property {uuid} [partitionId] Id of the partition whose health state is
   * described by this object.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PartitionHealthState
   *
   * @returns {object} metadata of PartitionHealthState
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PartitionHealthState',
      type: {
        name: 'Composite',
        className: 'PartitionHealthState',
        modelProperties: {
          aggregatedHealthState: {
            required: false,
            serializedName: 'AggregatedHealthState',
            type: {
              name: 'String'
            }
          },
          partitionId: {
            required: false,
            serializedName: 'PartitionId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PartitionHealthState;
