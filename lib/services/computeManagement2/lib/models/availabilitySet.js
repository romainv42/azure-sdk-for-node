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
 * Specifies information about the availability set that the virtual machine
 * should be assigned to. Virtual machines specified in the same availability
 * set are allocated to different nodes to maximize availability. For more
 * information about availability sets, see [Manage the availability of virtual
 * machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
 * <br><br> For more information on Azure planned maintainance, see [Planned
 * maintenance for virtual machines in
 * Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json)
 * <br><br> Currently, a VM can only be added to availability set at creation
 * time. An existing VM cannot be added to an availability set.
 *
 * @extends models['Resource']
 */
class AvailabilitySet extends models['Resource'] {
  /**
   * Create a AvailabilitySet.
   * @member {number} [platformUpdateDomainCount] Update Domain count.
   * @member {number} [platformFaultDomainCount] Fault Domain count.
   * @member {array} [virtualMachines] A list of references to all virtual
   * machines in the availability set.
   * @member {array} [statuses] The resource status information.
   * @member {object} [sku] Sku of the availability set, only name is required
   * to be set. See AvailabilitySetSkuTypes for possible set of values. Use
   * 'Aligned' for virtual machines with managed disks and 'Classic' for
   * virtual machines with unmanaged disks. Default value is 'Classic'.
   * @member {string} [sku.name] The sku name.
   * @member {string} [sku.tier] Specifies the tier of virtual machines in a
   * scale set.<br /><br /> Possible Values:<br /><br /> **Standard**<br /><br
   * /> **Basic**
   * @member {number} [sku.capacity] Specifies the number of virtual machines
   * in the scale set.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AvailabilitySet
   *
   * @returns {object} metadata of AvailabilitySet
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AvailabilitySet',
      type: {
        name: 'Composite',
        className: 'AvailabilitySet',
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
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          platformUpdateDomainCount: {
            required: false,
            serializedName: 'properties.platformUpdateDomainCount',
            type: {
              name: 'Number'
            }
          },
          platformFaultDomainCount: {
            required: false,
            serializedName: 'properties.platformFaultDomainCount',
            type: {
              name: 'Number'
            }
          },
          virtualMachines: {
            required: false,
            serializedName: 'properties.virtualMachines',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SubResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'SubResource'
                  }
              }
            }
          },
          statuses: {
            required: false,
            readOnly: true,
            serializedName: 'properties.statuses',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'InstanceViewStatusElementType',
                  type: {
                    name: 'Composite',
                    className: 'InstanceViewStatus'
                  }
              }
            }
          },
          sku: {
            required: false,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'Sku'
            }
          }
        }
      }
    };
  }
}

module.exports = AvailabilitySet;
