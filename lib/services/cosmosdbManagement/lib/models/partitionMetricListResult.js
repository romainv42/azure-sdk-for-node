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

/**
 * The response to a list partition metrics request.
 */
class PartitionMetricListResult extends Array {
  /**
   * Create a PartitionMetricListResult.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PartitionMetricListResult
   *
   * @returns {object} metadata of PartitionMetricListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PartitionMetricListResult',
      type: {
        name: 'Composite',
        className: 'PartitionMetricListResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PartitionMetricElementType',
                  type: {
                    name: 'Composite',
                    className: 'PartitionMetric'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PartitionMetricListResult;
