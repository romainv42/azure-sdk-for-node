/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * The resource model definition.
 *
 * @property {string} [id] Resource ID
 * @property {string} [name] Resource name
 * @property {string} [type] Resource type
 * @property {string} [location] Resource location
 * @property {object} [tags] Resource tags
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  readonly location?: string;
  readonly tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the HardwareProfile class.
 * @constructor
 * Specifies the hardware settings for the HANA instance.
 *
 * @property {string} [hardwareType] Name of the hardware type (vendor and/or
 * their product name). Possible values include: 'Cisco_UCS', 'HPE'
 * @property {string} [hanaInstanceSize] Specifies the HANA instance SKU.
 * Possible values include: 'S72m', 'S144m', 'S72', 'S144', 'S192', 'S192m',
 * 'S192xm', 'S384', 'S384m', 'S384xm', 'S384xxm', 'S576m', 'S576xm', 'S768',
 * 'S768m', 'S768xm', 'S960m'
 */
export interface HardwareProfile {
  readonly hardwareType?: string;
  readonly hanaInstanceSize?: string;
}

/**
 * @class
 * Initializes a new instance of the Disk class.
 * @constructor
 * Specifies the disk information fo the HANA instance
 *
 * @property {string} [name] The disk name.
 * @property {number} [diskSizeGB] Specifies the size of an empty data disk in
 * gigabytes.
 * @property {number} [lun] Specifies the logical unit number of the data disk.
 * This value is used to identify data disks within the VM and therefore must
 * be unique for each data disk attached to a VM.
 */
export interface Disk {
  name?: string;
  diskSizeGB?: number;
  readonly lun?: number;
}

/**
 * @class
 * Initializes a new instance of the StorageProfile class.
 * @constructor
 * Specifies the storage settings for the HANA instance disks.
 *
 * @property {string} [nfsIpAddress] IP Address to connect to storage.
 * @property {array} [osDisks] Specifies information about the operating system
 * disk used by the hana instance.
 */
export interface StorageProfile {
  readonly nfsIpAddress?: string;
  osDisks?: Disk[];
}

/**
 * @class
 * Initializes a new instance of the OSProfile class.
 * @constructor
 * Specifies the operating system settings for the HANA instance.
 *
 * @property {string} [computerName] Specifies the host OS name of the HANA
 * instance.
 * @property {string} [osType] This property allows you to specify the type of
 * the OS.
 * @property {string} [version] Specifies version of operating system.
 */
export interface OSProfile {
  readonly computerName?: string;
  readonly osType?: string;
  readonly version?: string;
}

/**
 * @class
 * Initializes a new instance of the IpAddress class.
 * @constructor
 * Specifies the IP address of the network interaface.
 *
 * @property {string} [ipAddress] Specifies the IP address of the network
 * interface.
 */
export interface IpAddress {
  readonly ipAddress?: string;
}

/**
 * @class
 * Initializes a new instance of the NetworkProfile class.
 * @constructor
 * Specifies the network settings for the HANA instance disks.
 *
 * @property {array} [networkInterfaces] Specifies the network interfaces for
 * the HANA instance.
 * @property {string} [circuitId] Specifies the circuit id for connecting to
 * express route.
 */
export interface NetworkProfile {
  networkInterfaces?: IpAddress[];
  readonly circuitId?: string;
}

/**
 * @class
 * Initializes a new instance of the HanaInstance class.
 * @constructor
 * HANA instance info on Azure (ARM properties and HANA properties)
 *
 * @property {object} [hardwareProfile] Specifies the hardware settings for the
 * HANA instance.
 * @property {string} [hardwareProfile.hardwareType] Name of the hardware type
 * (vendor and/or their product name). Possible values include: 'Cisco_UCS',
 * 'HPE'
 * @property {string} [hardwareProfile.hanaInstanceSize] Specifies the HANA
 * instance SKU. Possible values include: 'S72m', 'S144m', 'S72', 'S144',
 * 'S192', 'S192m', 'S192xm', 'S384', 'S384m', 'S384xm', 'S384xxm', 'S576m',
 * 'S576xm', 'S768', 'S768m', 'S768xm', 'S960m'
 * @property {object} [storageProfile] Specifies the storage settings for the
 * HANA instance disks.
 * @property {string} [storageProfile.nfsIpAddress] IP Address to connect to
 * storage.
 * @property {array} [storageProfile.osDisks] Specifies information about the
 * operating system disk used by the hana instance.
 * @property {object} [osProfile] Specifies the operating system settings for
 * the HANA instance.
 * @property {string} [osProfile.computerName] Specifies the host OS name of
 * the HANA instance.
 * @property {string} [osProfile.osType] This property allows you to specify
 * the type of the OS.
 * @property {string} [osProfile.version] Specifies version of operating
 * system.
 * @property {object} [networkProfile] Specifies the network settings for the
 * HANA instance.
 * @property {array} [networkProfile.networkInterfaces] Specifies the network
 * interfaces for the HANA instance.
 * @property {string} [networkProfile.circuitId] Specifies the circuit id for
 * connecting to express route.
 * @property {string} [hanaInstanceId] Specifies the HANA instance unique ID.
 * @property {string} [powerState] Resource power state. Possible values
 * include: 'starting', 'started', 'stopping', 'stopped', 'restarting',
 * 'unknown'
 */
export interface HanaInstance extends Resource {
  hardwareProfile?: HardwareProfile;
  storageProfile?: StorageProfile;
  osProfile?: OSProfile;
  networkProfile?: NetworkProfile;
  readonly hanaInstanceId?: string;
  readonly powerState?: string;
}

/**
 * @class
 * Initializes a new instance of the Display class.
 * @constructor
 * Detailed HANA operation information
 *
 * @property {string} [provider] The localized friendly form of the resource
 * provider name. This form is also expected to include the publisher/company
 * responsible. Use Title Casing. Begin with "Microsoft" for 1st party
 * services.
 * @property {string} [resource] The localized friendly form of the resource
 * type related to this action/operation. This form should match the public
 * documentation for the resource provider. Use Title Casing. For examples,
 * refer to the “name” section.
 * @property {string} [operation] The localized friendly name for the operation
 * as shown to the user. This name should be concise (to fit in drop downs),
 * but clear (self-documenting). Use Title Casing and include the
 * entity/resource to which it applies.
 * @property {string} [description] The localized friendly description for the
 * operation as shown to the user. This description should be thorough, yet
 * concise. It will be used in tool-tips and detailed views.
 * @property {string} [origin] The intended executor of the operation; governs
 * the display of the operation in the RBAC UX and the audit logs UX. Default
 * value is 'user,system'
 */
export interface Display {
  readonly provider?: string;
  readonly resource?: string;
  readonly operation?: string;
  readonly description?: string;
  readonly origin?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * HANA operation information
 *
 * @property {string} [name] The name of the operation being performed on this
 * particular object. This name should match the action name that appears in
 * RBAC / the event service.
 * @property {object} [display] Displayed HANA operation information
 * @property {string} [display.provider] The localized friendly form of the
 * resource provider name. This form is also expected to include the
 * publisher/company responsible. Use Title Casing. Begin with "Microsoft" for
 * 1st party services.
 * @property {string} [display.resource] The localized friendly form of the
 * resource type related to this action/operation. This form should match the
 * public documentation for the resource provider. Use Title Casing. For
 * examples, refer to the “name” section.
 * @property {string} [display.operation] The localized friendly name for the
 * operation as shown to the user. This name should be concise (to fit in drop
 * downs), but clear (self-documenting). Use Title Casing and include the
 * entity/resource to which it applies.
 * @property {string} [display.description] The localized friendly description
 * for the operation as shown to the user. This description should be thorough,
 * yet concise. It will be used in tool-tips and detailed views.
 * @property {string} [display.origin] The intended executor of the operation;
 * governs the display of the operation in the RBAC UX and the audit logs UX.
 * Default value is 'user,system'
 */
export interface Operation {
  readonly name?: string;
  display?: Display;
}

/**
 * @class
 * Initializes a new instance of the ErrorResponse class.
 * @constructor
 * Describes the format of Error response.
 *
 * @property {string} [code] Error code
 * @property {string} [message] Error message indicating why the operation
 * failed.
 */
export interface ErrorResponse {
  code?: string;
  message?: string;
}


/**
 * @class
 * Initializes a new instance of the OperationList class.
 * @constructor
 * List of HANA operations
 *
 */
export interface OperationList extends Array<Operation> {
}

/**
 * @class
 * Initializes a new instance of the HanaInstancesListResult class.
 * @constructor
 * The response from the List HANA Instances operation.
 *
 * @property {string} [nextLink] The URL to get the next set of HANA instances.
 */
export interface HanaInstancesListResult extends Array<HanaInstance> {
  nextLink?: string;
}
