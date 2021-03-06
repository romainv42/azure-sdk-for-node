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
 * RerunTrigger resource type.
 *
 * @extends models['SubResource']
 */
class RerunTriggerResource extends models['SubResource'] {
  /**
   * Create a RerunTriggerResource.
   * @member {object} properties Properties of the rerun trigger.
   * @member {object} [properties.parentTrigger] The parent trigger reference.
   * @member {date} [properties.requestedStartTime] The start time for the time
   * period for which restatement is initiated. Only UTC time is currently
   * supported.
   * @member {date} [properties.requestedEndTime] The end time for the time
   * period for which restatement is initiated. Only UTC time is currently
   * supported.
   * @member {number} [properties.maxConcurrency] The max number of parallel
   * time windows (ready for execution) for which a rerun is triggered.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RerunTriggerResource
   *
   * @returns {object} metadata of RerunTriggerResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RerunTriggerResource',
      type: {
        name: 'Composite',
        className: 'RerunTriggerResource',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            readOnly: true,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: true,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'type',
                clientName: 'type'
              },
              uberParent: 'Trigger',
              className: 'RerunTumblingWindowTrigger'
            }
          }
        }
      }
    };
  }
}

module.exports = RerunTriggerResource;
