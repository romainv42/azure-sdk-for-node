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
 * VMwareCbt provider specific settings
 *
 * @extends models['MigrationProviderSpecificSettings']
 */
class VMwareCbtMigrationDetails extends models['MigrationProviderSpecificSettings'] {
  /**
   * Create a VMwareCbtMigrationDetails.
   * @member {string} [vmwareMachineId] The ARM Id of the VM discovered in
   * VMware.
   * @member {string} [osType] The type of the OS on the VM.
   * @member {string} [licenseType] License Type of the VM to be used.
   * @member {string} [dataMoverRunAsAccountId] The data mover runas account
   * Id.
   * @member {string} [snapshotRunAsAccountId] The snapshot runas account Id.
   * @member {string} [targetVmName] Target VM name.
   * @member {string} [targetVmSize] The target VM size.
   * @member {string} [targetLocation] The target location.
   * @member {string} [targetResourceGroupId] The target resource group Id.
   * @member {string} [targetAvailabilitySetId] The target availability set Id.
   * @member {string} [targetBootDiagnosticsStorageAccountId] The target boot
   * diagnostics storage account ARM Id.
   * @member {array} [protectedDisks] The list of protected disks.
   * @member {string} [targetNetworkId] The target network Id.
   * @member {array} [vmNics] The network details.
   * @member {string} [migrationRecoveryPointId] The recovery point Id to which
   * the VM was migrated.
   * @member {date} [lastRecoveryPointReceived] The last recovery point
   * received time.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VMwareCbtMigrationDetails
   *
   * @returns {object} metadata of VMwareCbtMigrationDetails
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
        uberParent: 'MigrationProviderSpecificSettings',
        className: 'VMwareCbtMigrationDetails',
        modelProperties: {
          instanceType: {
            required: true,
            serializedName: 'instanceType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          vmwareMachineId: {
            required: false,
            readOnly: true,
            serializedName: 'vmwareMachineId',
            type: {
              name: 'String'
            }
          },
          osType: {
            required: false,
            readOnly: true,
            serializedName: 'osType',
            type: {
              name: 'String'
            }
          },
          licenseType: {
            required: false,
            serializedName: 'licenseType',
            type: {
              name: 'String'
            }
          },
          dataMoverRunAsAccountId: {
            required: false,
            readOnly: true,
            serializedName: 'dataMoverRunAsAccountId',
            type: {
              name: 'String'
            }
          },
          snapshotRunAsAccountId: {
            required: false,
            readOnly: true,
            serializedName: 'snapshotRunAsAccountId',
            type: {
              name: 'String'
            }
          },
          targetVmName: {
            required: false,
            serializedName: 'targetVmName',
            type: {
              name: 'String'
            }
          },
          targetVmSize: {
            required: false,
            serializedName: 'targetVmSize',
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
          },
          targetResourceGroupId: {
            required: false,
            serializedName: 'targetResourceGroupId',
            type: {
              name: 'String'
            }
          },
          targetAvailabilitySetId: {
            required: false,
            serializedName: 'targetAvailabilitySetId',
            type: {
              name: 'String'
            }
          },
          targetBootDiagnosticsStorageAccountId: {
            required: false,
            serializedName: 'targetBootDiagnosticsStorageAccountId',
            type: {
              name: 'String'
            }
          },
          protectedDisks: {
            required: false,
            serializedName: 'protectedDisks',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VMwareCbtProtectedDiskDetailsElementType',
                  type: {
                    name: 'Composite',
                    className: 'VMwareCbtProtectedDiskDetails'
                  }
              }
            }
          },
          targetNetworkId: {
            required: false,
            serializedName: 'targetNetworkId',
            type: {
              name: 'String'
            }
          },
          vmNics: {
            required: false,
            serializedName: 'vmNics',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VMwareCbtNicDetailsElementType',
                  type: {
                    name: 'Composite',
                    className: 'VMwareCbtNicDetails'
                  }
              }
            }
          },
          migrationRecoveryPointId: {
            required: false,
            readOnly: true,
            serializedName: 'migrationRecoveryPointId',
            type: {
              name: 'String'
            }
          },
          lastRecoveryPointReceived: {
            required: false,
            readOnly: true,
            serializedName: 'lastRecoveryPointReceived',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = VMwareCbtMigrationDetails;