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
 * The result of a request to list webhooks for a container registry.
 */
class WebhookListResult extends Array {
  /**
   * Create a WebhookListResult.
   * @property {string} [nextLink] The URI that can be used to request the next
   * list of webhooks.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of WebhookListResult
   *
   * @returns {object} metadata of WebhookListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WebhookListResult',
      type: {
        name: 'Composite',
        className: 'WebhookListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'WebhookElementType',
                  type: {
                    name: 'Composite',
                    className: 'Webhook'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = WebhookListResult;
