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
 * A resource listing all tags.
 *
 * @extends models['ProxyResource']
 */
class TagsResult extends models['ProxyResource'] {
  /**
   * Create a TagsResult.
   * @member {array} [tags] A list of Tag.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of TagsResult
   *
   * @returns {object} metadata of TagsResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TagsResult',
      type: {
        name: 'Composite',
        className: 'TagsResult',
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
          eTag: {
            required: false,
            serializedName: 'eTag',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'properties.tags',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TagElementType',
                  type: {
                    name: 'Composite',
                    className: 'Tag'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TagsResult;