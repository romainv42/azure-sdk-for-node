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
 * Set of actions in the Rewrite Rule in Application Gateway.
 *
 */
class ApplicationGatewayRewriteRuleActionSet {
  /**
   * Create a ApplicationGatewayRewriteRuleActionSet.
   * @property {array} [requestHeaderConfigurations] Request Header Actions in
   * the Action Set
   * @property {array} [responseHeaderConfigurations] Response Header Actions
   * in the Action Set
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationGatewayRewriteRuleActionSet
   *
   * @returns {object} metadata of ApplicationGatewayRewriteRuleActionSet
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationGatewayRewriteRuleActionSet',
      type: {
        name: 'Composite',
        className: 'ApplicationGatewayRewriteRuleActionSet',
        modelProperties: {
          requestHeaderConfigurations: {
            required: false,
            serializedName: 'requestHeaderConfigurations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ApplicationGatewayHeaderConfigurationElementType',
                  type: {
                    name: 'Composite',
                    className: 'ApplicationGatewayHeaderConfiguration'
                  }
              }
            }
          },
          responseHeaderConfigurations: {
            required: false,
            serializedName: 'responseHeaderConfigurations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ApplicationGatewayHeaderConfigurationElementType',
                  type: {
                    name: 'Composite',
                    className: 'ApplicationGatewayHeaderConfiguration'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationGatewayRewriteRuleActionSet;
