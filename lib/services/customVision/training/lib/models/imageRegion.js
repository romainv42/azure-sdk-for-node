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
 * Class representing a ImageRegion.
 */
class ImageRegion {
  /**
   * Create a ImageRegion.
   * @member {uuid} [regionId]
   * @member {string} [tagName]
   * @member {date} [created]
   * @member {uuid} [tagId]
   * @member {number} [left]
   * @member {number} [top]
   * @member {number} [width]
   * @member {number} [height]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImageRegion
   *
   * @returns {object} metadata of ImageRegion
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImageRegion',
      type: {
        name: 'Composite',
        className: 'ImageRegion',
        modelProperties: {
          regionId: {
            required: false,
            readOnly: true,
            serializedName: 'regionId',
            type: {
              name: 'String'
            }
          },
          tagName: {
            required: false,
            readOnly: true,
            serializedName: 'tagName',
            type: {
              name: 'String'
            }
          },
          created: {
            required: false,
            readOnly: true,
            serializedName: 'created',
            type: {
              name: 'DateTime'
            }
          },
          tagId: {
            required: false,
            serializedName: 'tagId',
            type: {
              name: 'String'
            }
          },
          left: {
            required: false,
            serializedName: 'left',
            type: {
              name: 'Number'
            }
          },
          top: {
            required: false,
            serializedName: 'top',
            type: {
              name: 'Number'
            }
          },
          width: {
            required: false,
            serializedName: 'width',
            type: {
              name: 'Number'
            }
          },
          height: {
            required: false,
            serializedName: 'height',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ImageRegion;