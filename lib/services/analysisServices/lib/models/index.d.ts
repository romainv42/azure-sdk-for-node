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
 * Initializes a new instance of the OperationDisplay class.
 * @constructor
 * The object that represents the operation.
 *
 * @property {string} [provider] Service provider: Microsoft.Consumption.
 * @property {string} [resource] Resource on which the operation is performed:
 * UsageDetail, etc.
 * @property {string} [operation] Operation type: Read, write, delete, etc.
 */
export interface OperationDisplay {
  readonly provider?: string;
  readonly resource?: string;
  readonly operation?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * A Consumption REST API operation.
 *
 * @property {string} [name] Operation name: {provider}/{resource}/{operation}.
 * @property {object} [display] The object that represents the operation.
 * @property {string} [display.provider] Service provider:
 * Microsoft.Consumption.
 * @property {string} [display.resource] Resource on which the operation is
 * performed: UsageDetail, etc.
 * @property {string} [display.operation] Operation type: Read, write, delete,
 * etc.
 */
export interface Operation {
  readonly name?: string;
  display?: OperationDisplay;
}

/**
 * @class
 * Initializes a new instance of the ResourceSku class.
 * @constructor
 * Represents the SKU name and Azure pricing tier for Analysis Services
 * resource.
 *
 * @property {string} name Name of the SKU level.
 * @property {string} [tier] The name of the Azure pricing tier to which the
 * SKU applies. Possible values include: 'Development', 'Basic', 'Standard'
 * @property {number} [capacity] The number of instances in the read only query
 * pool. Default value: 1 .
 */
export interface ResourceSku {
  name: string;
  tier?: string;
  capacity?: number;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * Represents an instance of an Analysis Services resource.
 *
 * @property {string} [id] An identifier that represents the Analysis Services
 * resource.
 * @property {string} [name] The name of the Analysis Services resource.
 * @property {string} [type] The type of the Analysis Services resource.
 * @property {string} location Location of the Analysis Services resource.
 * @property {object} sku The SKU of the Analysis Services resource.
 * @property {string} [sku.name] Name of the SKU level.
 * @property {string} [sku.tier] The name of the Azure pricing tier to which
 * the SKU applies. Possible values include: 'Development', 'Basic', 'Standard'
 * @property {number} [sku.capacity] The number of instances in the read only
 * query pool.
 * @property {object} [tags] Key-value pairs of additional resource
 * provisioning properties.
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  location: string;
  sku: ResourceSku;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the AnalysisServicesServer class.
 * @constructor
 * Represents an instance of an Analysis Services resource.
 *
 * @property {object} [asAdministrators] A collection of AS server
 * administrators
 * @property {array} [asAdministrators.members] An array of administrator user
 * identities.
 * @property {string} [backupBlobContainerUri] The SAS container URI to the
 * backup container.
 * @property {object} [gatewayDetails] The gateway details configured for the
 * AS server.
 * @property {string} [gatewayDetails.gatewayResourceId] Gateway resource to be
 * associated with the server.
 * @property {string} [gatewayDetails.gatewayObjectId] Gateway object id from
 * in the DMTS cluster for the gateway resource.
 * @property {string} [gatewayDetails.dmtsClusterUri] Uri of the DMTS cluster.
 * @property {object} [ipV4FirewallSettings] The firewall settings for the AS
 * server.
 * @property {array} [ipV4FirewallSettings.firewallRules] An array of firewall
 * rules.
 * @property {string} [ipV4FirewallSettings.enablePowerBIService] The indicator
 * of enableing PBI service.
 * @property {string} [querypoolConnectionMode] How the read-write server's
 * participation in the query pool is controlled.<br/>It can have the following
 * values: <ul><li>readOnly - indicates that the read-write server is intended
 * not to participate in query operations</li><li>all - indicates that the
 * read-write server can participate in query operations</li></ul>Specifying
 * readOnly when capacity is 1 results in error. Possible values include:
 * 'All', 'ReadOnly'. Default value: 'All' .
 * @property {string} [state] The current state of Analysis Services resource.
 * The state is to indicate more states outside of resource provisioning.
 * Possible values include: 'Deleting', 'Succeeded', 'Failed', 'Paused',
 * 'Suspended', 'Provisioning', 'Updating', 'Suspending', 'Pausing',
 * 'Resuming', 'Preparing', 'Scaling'
 * @property {string} [provisioningState] The current deployment state of
 * Analysis Services resource. The provisioningState is to indicate states for
 * resource provisioning. Possible values include: 'Deleting', 'Succeeded',
 * 'Failed', 'Paused', 'Suspended', 'Provisioning', 'Updating', 'Suspending',
 * 'Pausing', 'Resuming', 'Preparing', 'Scaling'
 * @property {string} [serverFullName] The full name of the Analysis Services
 * resource.
 */
export interface AnalysisServicesServer extends Resource {
  asAdministrators?: ServerAdministrators;
  backupBlobContainerUri?: string;
  gatewayDetails?: GatewayDetails;
  ipV4FirewallSettings?: IPv4FirewallSettings;
  querypoolConnectionMode?: string;
  readonly state?: string;
  readonly provisioningState?: string;
  readonly serverFullName?: string;
}

/**
 * @class
 * Initializes a new instance of the ServerAdministrators class.
 * @constructor
 * An array of administrator user identities.
 *
 * @property {array} [members] An array of administrator user identities.
 */
export interface ServerAdministrators {
  members?: string[];
}

/**
 * @class
 * Initializes a new instance of the GatewayDetails class.
 * @constructor
 * The gateway details.
 *
 * @property {string} [gatewayResourceId] Gateway resource to be associated
 * with the server.
 * @property {string} [gatewayObjectId] Gateway object id from in the DMTS
 * cluster for the gateway resource.
 * @property {string} [dmtsClusterUri] Uri of the DMTS cluster.
 */
export interface GatewayDetails {
  gatewayResourceId?: string;
  readonly gatewayObjectId?: string;
  readonly dmtsClusterUri?: string;
}

/**
 * @class
 * Initializes a new instance of the IPv4FirewallRule class.
 * @constructor
 * The detail of firewall rule.
 *
 * @property {string} [firewallRuleName] The rule name.
 * @property {string} [rangeStart] The start range of IPv4.
 * @property {string} [rangeEnd] The end range of IPv4.
 */
export interface IPv4FirewallRule {
  firewallRuleName?: string;
  rangeStart?: string;
  rangeEnd?: string;
}

/**
 * @class
 * Initializes a new instance of the IPv4FirewallSettings class.
 * @constructor
 * An array of firewall rules.
 *
 * @property {array} [firewallRules] An array of firewall rules.
 * @property {string} [enablePowerBIService] The indicator of enableing PBI
 * service.
 */
export interface IPv4FirewallSettings {
  firewallRules?: IPv4FirewallRule[];
  enablePowerBIService?: string;
}

/**
 * @class
 * Initializes a new instance of the AnalysisServicesServerUpdateParameters class.
 * @constructor
 * Provision request specification
 *
 * @property {object} [sku] The SKU of the Analysis Services resource.
 * @property {string} [sku.name] Name of the SKU level.
 * @property {string} [sku.tier] The name of the Azure pricing tier to which
 * the SKU applies. Possible values include: 'Development', 'Basic', 'Standard'
 * @property {number} [sku.capacity] The number of instances in the read only
 * query pool.
 * @property {object} [tags] Key-value pairs of additional provisioning
 * properties.
 * @property {object} [asAdministrators] A collection of AS server
 * administrators
 * @property {array} [asAdministrators.members] An array of administrator user
 * identities.
 * @property {string} [backupBlobContainerUri] The SAS container URI to the
 * backup container.
 * @property {object} [gatewayDetails] The gateway details configured for the
 * AS server.
 * @property {string} [gatewayDetails.gatewayResourceId] Gateway resource to be
 * associated with the server.
 * @property {string} [gatewayDetails.gatewayObjectId] Gateway object id from
 * in the DMTS cluster for the gateway resource.
 * @property {string} [gatewayDetails.dmtsClusterUri] Uri of the DMTS cluster.
 * @property {object} [ipV4FirewallSettings] The firewall settings for the AS
 * server.
 * @property {array} [ipV4FirewallSettings.firewallRules] An array of firewall
 * rules.
 * @property {string} [ipV4FirewallSettings.enablePowerBIService] The indicator
 * of enableing PBI service.
 * @property {string} [querypoolConnectionMode] How the read-write server's
 * participation in the query pool is controlled.<br/>It can have the following
 * values: <ul><li>readOnly - indicates that the read-write server is intended
 * not to participate in query operations</li><li>all - indicates that the
 * read-write server can participate in query operations</li></ul>Specifying
 * readOnly when capacity is 1 results in error. Possible values include:
 * 'All', 'ReadOnly'. Default value: 'All' .
 */
export interface AnalysisServicesServerUpdateParameters {
  sku?: ResourceSku;
  tags?: { [propertyName: string]: string };
  asAdministrators?: ServerAdministrators;
  backupBlobContainerUri?: string;
  gatewayDetails?: GatewayDetails;
  ipV4FirewallSettings?: IPv4FirewallSettings;
  querypoolConnectionMode?: string;
}

/**
 * @class
 * Initializes a new instance of the GatewayListStatusLive class.
 * @constructor
 * Status of gateway is live.
 *
 * @property {string} [status] Live message of list gateway. Possible values
 * include: 'Live'
 */
export interface GatewayListStatusLive {
  status?: string;
}

/**
 * @class
 * Initializes a new instance of the GatewayError class.
 * @constructor
 * Detail of gateway errors.
 *
 * @property {string} [code] Error code of list gateway.
 * @property {string} [message] Error message of list gateway.
 */
export interface GatewayError {
  code?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the GatewayListStatusError class.
 * @constructor
 * Status of gateway is error.
 *
 * @property {object} [error] Error of the list gateway status.
 * @property {string} [error.code] Error code of list gateway.
 * @property {string} [error.message] Error message of list gateway.
 */
export interface GatewayListStatusError {
  error?: GatewayError;
}

/**
 * @class
 * Initializes a new instance of the CheckServerNameAvailabilityParameters class.
 * @constructor
 * Details of server name request body.
 *
 * @property {string} [name] Name for checking availability.
 * @property {string} [type] The resource type of azure analysis services.
 * Default value: 'Microsoft.AnalysisServices/servers' .
 */
export interface CheckServerNameAvailabilityParameters {
  name?: string;
  type?: string;
}

/**
 * @class
 * Initializes a new instance of the CheckServerNameAvailabilityResult class.
 * @constructor
 * The checking result of server name availibility.
 *
 * @property {boolean} [nameAvailable] Indicator of available of the server
 * name.
 * @property {string} [reason] The reason of unavailability.
 * @property {string} [message] The detailed message of the request
 * unavailability.
 */
export interface CheckServerNameAvailabilityResult {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
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
 * Initializes a new instance of the OperationStatus class.
 * @constructor
 * The status of operation.
 *
 * @property {string} [id] The operation Id.
 * @property {string} [name] The operation name.
 * @property {string} [startTime] The start time of the operation.
 * @property {string} [endTime] The end time of the operation.
 * @property {string} [status] The status of the operation.
 * @property {object} [error] The error detail of the operation if any.
 * @property {string} [error.code] Error code
 * @property {string} [error.message] Error message indicating why the
 * operation failed.
 */
export interface OperationStatus {
  id?: string;
  name?: string;
  startTime?: string;
  endTime?: string;
  status?: string;
  error?: ErrorResponse;
}

/**
 * @class
 * Initializes a new instance of the SkuEnumerationForNewResourceResult class.
 * @constructor
 * An object that represents enumerating SKUs for new resources.
 *
 * @property {array} [value] The collection of available SKUs for new
 * resources.
 */
export interface SkuEnumerationForNewResourceResult {
  value?: ResourceSku[];
}

/**
 * @class
 * Initializes a new instance of the SkuDetailsForExistingResource class.
 * @constructor
 * An object that represents SKU details for existing resources.
 *
 * @property {object} [sku] The SKU in SKU details for existing resources.
 * @property {string} [sku.name] Name of the SKU level.
 * @property {string} [sku.tier] The name of the Azure pricing tier to which
 * the SKU applies. Possible values include: 'Development', 'Basic', 'Standard'
 * @property {number} [sku.capacity] The number of instances in the read only
 * query pool.
 */
export interface SkuDetailsForExistingResource {
  sku?: ResourceSku;
}

/**
 * @class
 * Initializes a new instance of the SkuEnumerationForExistingResourceResult class.
 * @constructor
 * An object that represents enumerating SKUs for existing resources.
 *
 * @property {array} [value] The collection of available SKUs for existing
 * resources.
 */
export interface SkuEnumerationForExistingResourceResult {
  value?: SkuDetailsForExistingResource[];
}


/**
 * @class
 * Initializes a new instance of the AnalysisServicesServers class.
 * @constructor
 * An array of Analysis Services resources.
 *
 */
export interface AnalysisServicesServers extends Array<AnalysisServicesServer> {
}

/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * Result of listing consumption operations. It contains a list of operations
 * and a URL link to get the next set of results.
 *
 * @property {string} [nextLink] URL to get the next set of operation list
 * results if there are any.
 */
export interface OperationListResult extends Array<Operation> {
  readonly nextLink?: string;
}
