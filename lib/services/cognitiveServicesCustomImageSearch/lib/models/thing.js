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
 * Defines a thing.
 *
 * @extends models['Response']
 */
class Thing extends models['Response'] {
  /**
   * Create a Thing.
   * @property {string} [name] The name of the thing represented by this
   * object.
   * @property {string} [url] The URL to get more information about the thing
   * represented by this object.
   * @property {object} [image] An image of the item.
   * @property {object} [image.thumbnail] The URL to a thumbnail of the image
   * @property {string} [image.imageInsightsToken] The token that you use in a
   * subsequent call to the Image Search API to get additional information
   * about the image. For information about using this token, see the
   * insightsToken query parameter.
   * @property {string} [image.imageId] Unique Id for the image
   * @property {string} [image.accentColor] A three-byte hexadecimal number
   * that represents the color that dominates the image. Use the color as the
   * temporary background in your client until the image is loaded.
   * @property {string} [image.visualWords] Visual representation of the image.
   * Used for getting more sizes
   * @property {string} [description] A short description of the item.
   * @property {string} [alternateName] An alias for the item
   * @property {string} [bingId] An ID that uniquely identifies this item.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Thing
   *
   * @returns {object} metadata of Thing
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Thing',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '_type',
          clientName: '_type'
        },
        uberParent: 'ResponseBase',
        className: 'Thing',
        modelProperties: {
          _type: {
            required: true,
            serializedName: '_type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          readLink: {
            required: false,
            readOnly: true,
            serializedName: 'readLink',
            type: {
              name: 'String'
            }
          },
          webSearchUrl: {
            required: false,
            readOnly: true,
            serializedName: 'webSearchUrl',
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
          url: {
            required: false,
            readOnly: true,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          },
          image: {
            required: false,
            readOnly: true,
            serializedName: 'image',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '_type',
                clientName: '_type'
              },
              uberParent: 'ResponseBase',
              className: 'ImageObject'
            }
          },
          description: {
            required: false,
            readOnly: true,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          alternateName: {
            required: false,
            readOnly: true,
            serializedName: 'alternateName',
            type: {
              name: 'String'
            }
          },
          bingId: {
            required: false,
            readOnly: true,
            serializedName: 'bingId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Thing;
