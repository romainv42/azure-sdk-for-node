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
 * The response of the list policy snippets operation.
 *
 */
class PolicySnippetsCollection {
  /**
   * Create a PolicySnippetsCollection.
   * @member {array} [value] Policy snippet value.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PolicySnippetsCollection
   *
   * @returns {object} metadata of PolicySnippetsCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PolicySnippetsCollection',
      type: {
        name: 'Composite',
        className: 'PolicySnippetsCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PolicySnippetContractElementType',
                  type: {
                    name: 'Composite',
                    className: 'PolicySnippetContract'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PolicySnippetsCollection;
