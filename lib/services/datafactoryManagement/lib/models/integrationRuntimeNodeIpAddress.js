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
 * The IP address of self-hosted integration runtime node.
 *
 */
class IntegrationRuntimeNodeIpAddress {
  /**
   * Create a IntegrationRuntimeNodeIpAddress.
   * @member {string} [ipAddress] The IP address of self-hosted integration
   * runtime node.
   */
  constructor() {
  }

  /**
   * Defines the metadata of IntegrationRuntimeNodeIpAddress
   *
   * @returns {object} metadata of IntegrationRuntimeNodeIpAddress
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IntegrationRuntimeNodeIpAddress',
      type: {
        name: 'Composite',
        className: 'IntegrationRuntimeNodeIpAddress',
        modelProperties: {
          ipAddress: {
            required: false,
            readOnly: true,
            serializedName: 'ipAddress',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = IntegrationRuntimeNodeIpAddress;
