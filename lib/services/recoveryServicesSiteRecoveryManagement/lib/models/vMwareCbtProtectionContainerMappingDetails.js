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
 * VMwareCbt provider specific container mapping details.
 *
 * @extends models['ProtectionContainerMappingProviderSpecificDetails']
 */
class VMwareCbtProtectionContainerMappingDetails extends models['ProtectionContainerMappingProviderSpecificDetails'] {
  /**
   * Create a VMwareCbtProtectionContainerMappingDetails.
   * @member {string} [keyVaultId] The target key vault ARM Id.
   * @member {string} [keyVaultUri] The target key vault URI.
   * @member {string} [storageAccountId] The storage account ARM Id.
   * @member {string} [storageAccountSasSecretName] The secret name of the
   * storage account.
   * @member {string} [serviceBusConnectionStringSecretName] The secret name of
   * the service bus connection string.
   * @member {string} [targetLocation] The target location.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VMwareCbtProtectionContainerMappingDetails
   *
   * @returns {object} metadata of VMwareCbtProtectionContainerMappingDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VMwareCbt',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'instanceType',
          clientName: 'instanceType'
        },
        uberParent: 'ProtectionContainerMappingProviderSpecificDetails',
        className: 'VMwareCbtProtectionContainerMappingDetails',
        modelProperties: {
          instanceType: {
            required: true,
            serializedName: 'instanceType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          keyVaultId: {
            required: false,
            readOnly: true,
            serializedName: 'keyVaultId',
            type: {
              name: 'String'
            }
          },
          keyVaultUri: {
            required: false,
            readOnly: true,
            serializedName: 'keyVaultUri',
            type: {
              name: 'String'
            }
          },
          storageAccountId: {
            required: false,
            readOnly: true,
            serializedName: 'storageAccountId',
            type: {
              name: 'String'
            }
          },
          storageAccountSasSecretName: {
            required: false,
            readOnly: true,
            serializedName: 'storageAccountSasSecretName',
            type: {
              name: 'String'
            }
          },
          serviceBusConnectionStringSecretName: {
            required: false,
            readOnly: true,
            serializedName: 'serviceBusConnectionStringSecretName',
            type: {
              name: 'String'
            }
          },
          targetLocation: {
            required: false,
            readOnly: true,
            serializedName: 'targetLocation',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VMwareCbtProtectionContainerMappingDetails;