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
 * A SQL Server availability group listener.
 *
 * @extends models['ProxyResource']
 */
class AvailabilityGroupListener extends models['ProxyResource'] {
  /**
   * Create a AvailabilityGroupListener.
   * @property {string} [provisioningState] Provisioning state to track the
   * aysnc operation status.
   * @property {string} [availabilityGroupName] Name of the availability group.
   * @property {array} [loadBalancerConfigurations] List of load balancer
   * configurations for an availability group listener.
   * @property {boolean} [createDefaultAvailabilityGroupIfNotExist] Create a
   * default availability group if it does not exist.
   * @property {number} [port] Listener port.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AvailabilityGroupListener
   *
   * @returns {object} metadata of AvailabilityGroupListener
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AvailabilityGroupListener',
      type: {
        name: 'Composite',
        className: 'AvailabilityGroupListener',
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
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          availabilityGroupName: {
            required: false,
            serializedName: 'properties.availabilityGroupName',
            type: {
              name: 'String'
            }
          },
          loadBalancerConfigurations: {
            required: false,
            serializedName: 'properties.loadBalancerConfigurations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LoadBalancerConfigurationElementType',
                  type: {
                    name: 'Composite',
                    className: 'LoadBalancerConfiguration'
                  }
              }
            }
          },
          createDefaultAvailabilityGroupIfNotExist: {
            required: false,
            serializedName: 'properties.createDefaultAvailabilityGroupIfNotExist',
            type: {
              name: 'Boolean'
            }
          },
          port: {
            required: false,
            serializedName: 'properties.port',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = AvailabilityGroupListener;
