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
 * Display name of operation
 *
 * @property {string} [provider] The resource provider name:
 * Microsoft.MachineLearningExperimentation
 * @property {string} [resource] The resource on which the operation is
 * performed.
 * @property {string} [operation] The operation that users can perform.
 * @property {string} [description] The description for the operation.
 */
export interface OperationDisplay {
  provider?: string;
  resource?: string;
  operation?: string;
  description?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * Azure Machine Learning workspace REST API operation
 *
 * @property {string} [name] Operation name: {provider}/{resource}/{operation}
 * @property {object} [display] Display name of operation
 * @property {string} [display.provider] The resource provider name:
 * Microsoft.MachineLearningExperimentation
 * @property {string} [display.resource] The resource on which the operation is
 * performed.
 * @property {string} [display.operation] The operation that users can perform.
 * @property {string} [display.description] The description for the operation.
 */
export interface Operation {
  name?: string;
  display?: OperationDisplay;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * Azure Resource Manager resource envelope.
 *
 * @property {string} [id] Specifies the resource ID.
 * @property {string} [name] Specifies the name of the resource.
 * @property {object} [identity] The identity of the resource.
 * @property {string} [identity.principalId] The principal ID of resource
 * identity.
 * @property {string} [identity.tenantId] The tenant ID of resource.
 * @property {string} [identity.type] The identity type. Possible values
 * include: 'SystemAssigned'
 * @property {string} [location] Specifies the location of the resource.
 * @property {string} [type] Specifies the type of the resource.
 * @property {object} [tags] Contains resource tags defined as key/value pairs.
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly identity?: Identity;
  location?: string;
  readonly type?: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Workspace class.
 * @constructor
 * An object that represents a machine learning workspace.
 *
 * @property {string} [workspaceId] The immutable id associated with this
 * workspace.
 * @property {string} [description] The description of this workspace.
 * @property {string} [friendlyName] The friendly name for this workspace. This
 * name in mutable
 * @property {date} [creationTime] The creation time of the machine learning
 * workspace in ISO8601 format.
 * @property {string} [batchaiWorkspace] ARM id of the Batch AI workspace
 * associated with this workspace. This cannot be changed once the workspace
 * has been created
 * @property {string} [keyVault] ARM id of the key vault associated with this
 * workspace. This cannot be changed once the workspace has been created
 * @property {string} [applicationInsights] ARM id of the application insights
 * associated with this workspace. This cannot be changed once the workspace
 * has been created
 * @property {string} [containerRegistry] ARM id of the container registry
 * associated with this workspace. This cannot be changed once the workspace
 * has been created
 * @property {string} [storageAccount] ARM id of the storage account associated
 * with this workspace. This cannot be changed once the workspace has been
 * created
 * @property {string} [discoveryUrl] Url for the discovery service to identify
 * regional endpoints for machine learning experimentation services
 * @property {string} [provisioningState] The current deployment state of
 * workspace resource. The provisioningState is to indicate states for resource
 * provisioning. Possible values include: 'Unknown', 'Updating', 'Creating',
 * 'Deleting', 'Succeeded', 'Failed', 'Canceled'
 */
export interface Workspace extends Resource {
  readonly workspaceId?: string;
  description?: string;
  friendlyName?: string;
  readonly creationTime?: Date;
  batchaiWorkspace?: string;
  keyVault?: string;
  applicationInsights?: string;
  containerRegistry?: string;
  storageAccount?: string;
  discoveryUrl?: string;
  readonly provisioningState?: string;
}

/**
 * @class
 * Initializes a new instance of the WorkspaceUpdateParameters class.
 * @constructor
 * The parameters for updating a machine learning workspace.
 *
 * @property {object} [tags] The resource tags for the machine learning
 * workspace.
 * @property {string} [description] The description of this workspace.
 * @property {string} [friendlyName] The friendly name for this workspace.
 */
export interface WorkspaceUpdateParameters {
  tags?: { [propertyName: string]: string };
  description?: string;
  friendlyName?: string;
}

/**
 * @class
 * Initializes a new instance of the Identity class.
 * @constructor
 * Identity for the resource.
 *
 * @property {string} [principalId] The principal ID of resource identity.
 * @property {string} [tenantId] The tenant ID of resource.
 * @property {string} [type] The identity type. Possible values include:
 * 'SystemAssigned'
 */
export interface Identity {
  readonly principalId?: string;
  readonly tenantId?: string;
  type?: string;
}

/**
 * @class
 * Initializes a new instance of the Password class.
 * @constructor
 * @property {string} [name]
 * @property {string} [value]
 */
export interface Password {
  readonly name?: string;
  readonly value?: string;
}

/**
 * @class
 * Initializes a new instance of the RegistryListCredentialsResult class.
 * @constructor
 * @property {string} [location]
 * @property {string} [username]
 * @property {array} [passwords]
 */
export interface RegistryListCredentialsResult {
  readonly location?: string;
  readonly username?: string;
  passwords?: Password[];
}

/**
 * @class
 * Initializes a new instance of the ListWorkspaceKeysResult class.
 * @constructor
 * @property {string} [userStorageKey]
 * @property {string} [userStorageResourceId]
 * @property {string} [appInsightsInstrumentationKey]
 * @property {object} [containerRegistryCredentials]
 * @property {string} [containerRegistryCredentials.location]
 * @property {string} [containerRegistryCredentials.username]
 * @property {array} [containerRegistryCredentials.passwords]
 */
export interface ListWorkspaceKeysResult {
  readonly userStorageKey?: string;
  readonly userStorageResourceId?: string;
  readonly appInsightsInstrumentationKey?: string;
  readonly containerRegistryCredentials?: RegistryListCredentialsResult;
}

/**
 * @class
 * Initializes a new instance of the ErrorDetail class.
 * @constructor
 * Error detail information.
 *
 * @property {string} code Error code.
 * @property {string} message Error message.
 */
export interface ErrorDetail {
  code: string;
  message: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorResponse class.
 * @constructor
 * Error response information.
 *
 * @property {string} code Error code.
 * @property {string} message Error message.
 * @property {array} [details] An array of error detail objects.
 */
export interface ErrorResponse {
  code: string;
  message: string;
  details?: ErrorDetail[];
}

/**
 * @class
 * Initializes a new instance of the MachineLearningServiceError class.
 * @constructor
 * Wrapper for error response to follow ARM guidelines.
 *
 * @property {object} [error] The error response.
 * @property {string} [error.code] Error code.
 * @property {string} [error.message] Error message.
 * @property {array} [error.details] An array of error detail objects.
 */
export interface MachineLearningServiceError {
  error?: ErrorResponse;
}

/**
 * @class
 * Initializes a new instance of the Compute class.
 * @constructor
 * Machine Learning compute object.
 *
 * @property {string} [computeLocation] Location for the underlying compute
 * @property {string} [provisioningState] The provision state of the cluster.
 * Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
 * Possible values include: 'Unknown', 'Updating', 'Creating', 'Deleting',
 * 'Succeeded', 'Failed', 'Canceled'
 * @property {string} [description] The description of the Machine Learning
 * compute.
 * @property {date} [createdOn] The date and time when the compute was created.
 * @property {date} [modifiedOn] The date and time when the compute was last
 * modified.
 * @property {string} [resourceId] ARM resource id of the compute
 * @property {array} [provisioningErrors] Errors during provisioning
 * @property {string} computeType Polymorphic Discriminator
 */
export interface Compute {
  computeLocation?: string;
  readonly provisioningState?: string;
  description?: string;
  readonly createdOn?: Date;
  readonly modifiedOn?: Date;
  resourceId?: string;
  readonly provisioningErrors?: MachineLearningServiceError[];
  computeType: string;
}

/**
 * @class
 * Initializes a new instance of the ComputeResource class.
 * @constructor
 * Machine Learning compute object wrapped into ARM resource envelope.
 *
 * @property {object} [properties] Compute properties
 * @property {string} [properties.computeLocation] Location for the underlying
 * compute
 * @property {string} [properties.provisioningState] The provision state of the
 * cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and
 * Failed. Possible values include: 'Unknown', 'Updating', 'Creating',
 * 'Deleting', 'Succeeded', 'Failed', 'Canceled'
 * @property {string} [properties.description] The description of the Machine
 * Learning compute.
 * @property {date} [properties.createdOn] The date and time when the compute
 * was created.
 * @property {date} [properties.modifiedOn] The date and time when the compute
 * was last modified.
 * @property {string} [properties.resourceId] ARM resource id of the compute
 * @property {array} [properties.provisioningErrors] Errors during provisioning
 * @property {string} [properties.computeType] Polymorphic Discriminator
 */
export interface ComputeResource extends Resource {
  properties?: Compute;
}

/**
 * @class
 * Initializes a new instance of the SystemService class.
 * @constructor
 * A system service running on a compute.
 *
 * @property {string} [systemServiceType] The type of this system service.
 * @property {string} [publicIpAddress] Public IP address
 * @property {string} [version] The version for this type.
 */
export interface SystemService {
  readonly systemServiceType?: string;
  readonly publicIpAddress?: string;
  readonly version?: string;
}

/**
 * @class
 * Initializes a new instance of the SslConfiguration class.
 * @constructor
 * The ssl configugation for scoring
 *
 * @property {string} [status] Enable or disable ssl for scoring. Possible
 * values include: 'Disabled', 'Enabled'
 * @property {string} [cert] Cert data
 * @property {string} [key] Key data
 * @property {string} [cname] CNAME of the cert
 */
export interface SslConfiguration {
  status?: string;
  cert?: string;
  key?: string;
  cname?: string;
}

/**
 * @class
 * Initializes a new instance of the AKSProperties class.
 * @constructor
 * AKS properties
 *
 * @property {string} [clusterFqdn] Cluster full qualified domain name
 * @property {array} [systemServices] System services
 * @property {number} [agentCount] Number of agents
 * @property {string} [agentVMSize] Agent virtual machine size
 * @property {object} [sslConfiguration] SSL configuration
 * @property {string} [sslConfiguration.status] Enable or disable ssl for
 * scoring. Possible values include: 'Disabled', 'Enabled'
 * @property {string} [sslConfiguration.cert] Cert data
 * @property {string} [sslConfiguration.key] Key data
 * @property {string} [sslConfiguration.cname] CNAME of the cert
 */
export interface AKSProperties {
  clusterFqdn?: string;
  systemServices?: SystemService[];
  agentCount?: number;
  agentVMSize?: string;
  sslConfiguration?: SslConfiguration;
}

/**
 * @class
 * Initializes a new instance of the AKS class.
 * @constructor
 * A Machine Learning compute based on AKS.
 *
 * @property {object} [properties] AKS properties
 * @property {string} [properties.clusterFqdn] Cluster full qualified domain
 * name
 * @property {array} [properties.systemServices] System services
 * @property {number} [properties.agentCount] Number of agents
 * @property {string} [properties.agentVMSize] Agent virtual machine size
 * @property {object} [properties.sslConfiguration] SSL configuration
 * @property {string} [properties.sslConfiguration.status] Enable or disable
 * ssl for scoring. Possible values include: 'Disabled', 'Enabled'
 * @property {string} [properties.sslConfiguration.cert] Cert data
 * @property {string} [properties.sslConfiguration.key] Key data
 * @property {string} [properties.sslConfiguration.cname] CNAME of the cert
 */
export interface AKS extends Compute {
  properties?: AKSProperties;
}

/**
 * @class
 * Initializes a new instance of the ScaleSettings class.
 * @constructor
 * scale settings for BatchAI Compute
 *
 * @property {number} [maxNodeCount] Max number of nodes to use
 * @property {number} [minNodeCount] Min number of nodes to use
 * @property {boolean} [autoScaleEnabled] Enable or disable auto scale
 */
export interface ScaleSettings {
  maxNodeCount?: number;
  minNodeCount?: number;
  autoScaleEnabled?: boolean;
}

/**
 * @class
 * Initializes a new instance of the BatchAIProperties class.
 * @constructor
 * BatchAI properties
 *
 * @property {string} [vmSize] Virtual Machine Size
 * @property {string} [vmPriority] Virtual Machine priority
 * @property {object} [scaleSettings] Scale settings for BatchAI
 * @property {number} [scaleSettings.maxNodeCount] Max number of nodes to use
 * @property {number} [scaleSettings.minNodeCount] Min number of nodes to use
 * @property {boolean} [scaleSettings.autoScaleEnabled] Enable or disable auto
 * scale
 */
export interface BatchAIProperties {
  vmSize?: string;
  vmPriority?: string;
  scaleSettings?: ScaleSettings;
}

/**
 * @class
 * Initializes a new instance of the BatchAI class.
 * @constructor
 * A Machine Learning compute based on Azure BatchAI.
 *
 * @property {object} [properties] BatchAI properties
 * @property {string} [properties.vmSize] Virtual Machine Size
 * @property {string} [properties.vmPriority] Virtual Machine priority
 * @property {object} [properties.scaleSettings] Scale settings for BatchAI
 * @property {number} [properties.scaleSettings.maxNodeCount] Max number of
 * nodes to use
 * @property {number} [properties.scaleSettings.minNodeCount] Min number of
 * nodes to use
 * @property {boolean} [properties.scaleSettings.autoScaleEnabled] Enable or
 * disable auto scale
 */
export interface BatchAI extends Compute {
  properties?: BatchAIProperties;
}

/**
 * @class
 * Initializes a new instance of the VirtualMachineSshCredentials class.
 * @constructor
 * Admin credentials for virtual machine
 *
 * @property {string} [username] Username of admin account
 * @property {string} [password] Password of admin account
 * @property {string} [publicKeyData] Public key data
 * @property {string} [privateKeyData] Private key data
 */
export interface VirtualMachineSshCredentials {
  username?: string;
  password?: string;
  publicKeyData?: string;
  privateKeyData?: string;
}

/**
 * @class
 * Initializes a new instance of the VirtualMachineProperties class.
 * @constructor
 * @property {string} [virtualMachineSize] Virtual Machine size
 * @property {number} [sshPort] Port open for ssh connections.
 * @property {string} [address] Public IP address of the virtual machine.
 * @property {object} [administratorAccount] Admin credentials for virtual
 * machine
 * @property {string} [administratorAccount.username] Username of admin account
 * @property {string} [administratorAccount.password] Password of admin account
 * @property {string} [administratorAccount.publicKeyData] Public key data
 * @property {string} [administratorAccount.privateKeyData] Private key data
 */
export interface VirtualMachineProperties {
  virtualMachineSize?: string;
  sshPort?: number;
  address?: string;
  administratorAccount?: VirtualMachineSshCredentials;
}

/**
 * @class
 * Initializes a new instance of the VirtualMachine class.
 * @constructor
 * A Machine Learning compute based on Azure Virtual Machines.
 *
 * @property {object} [properties]
 * @property {string} [properties.virtualMachineSize] Virtual Machine size
 * @property {number} [properties.sshPort] Port open for ssh connections.
 * @property {string} [properties.address] Public IP address of the virtual
 * machine.
 * @property {object} [properties.administratorAccount] Admin credentials for
 * virtual machine
 * @property {string} [properties.administratorAccount.username] Username of
 * admin account
 * @property {string} [properties.administratorAccount.password] Password of
 * admin account
 * @property {string} [properties.administratorAccount.publicKeyData] Public
 * key data
 * @property {string} [properties.administratorAccount.privateKeyData] Private
 * key data
 */
export interface VirtualMachine extends Compute {
  properties?: VirtualMachineProperties;
}

/**
 * @class
 * Initializes a new instance of the HDInsightProperties class.
 * @constructor
 * @property {number} [sshPort] Port open for ssh connections on the master
 * node of the cluster.
 * @property {string} [address] Public IP address of the master node of the
 * cluster.
 * @property {object} [administratorAccount] Admin credentials for master node
 * of the cluster
 * @property {string} [administratorAccount.username] Username of admin account
 * @property {string} [administratorAccount.password] Password of admin account
 * @property {string} [administratorAccount.publicKeyData] Public key data
 * @property {string} [administratorAccount.privateKeyData] Private key data
 */
export interface HDInsightProperties {
  sshPort?: number;
  address?: string;
  administratorAccount?: VirtualMachineSshCredentials;
}

/**
 * @class
 * Initializes a new instance of the HDInsight class.
 * @constructor
 * A HDInsight compute.
 *
 * @property {object} [properties]
 * @property {number} [properties.sshPort] Port open for ssh connections on the
 * master node of the cluster.
 * @property {string} [properties.address] Public IP address of the master node
 * of the cluster.
 * @property {object} [properties.administratorAccount] Admin credentials for
 * master node of the cluster
 * @property {string} [properties.administratorAccount.username] Username of
 * admin account
 * @property {string} [properties.administratorAccount.password] Password of
 * admin account
 * @property {string} [properties.administratorAccount.publicKeyData] Public
 * key data
 * @property {string} [properties.administratorAccount.privateKeyData] Private
 * key data
 */
export interface HDInsight extends Compute {
  properties?: HDInsightProperties;
}

/**
 * @class
 * Initializes a new instance of the DataFactory class.
 * @constructor
 * A DataFactory compute.
 *
 */
export interface DataFactory extends Compute {
}

/**
 * @class
 * Initializes a new instance of the ServicePrincipalCredentials class.
 * @constructor
 * Service principal credentials.
 *
 * @property {string} clientId Client Id
 * @property {string} clientSecret Client secret
 */
export interface ServicePrincipalCredentials {
  clientId: string;
  clientSecret: string;
}

/**
 * @class
 * Initializes a new instance of the ComputeSecrets class.
 * @constructor
 * Secrets related to a Machine Learning compute. Might differ for every type
 * of compute.
 *
 * @property {string} computeType Polymorphic Discriminator
 */
export interface ComputeSecrets {
  computeType: string;
}

/**
 * @class
 * Initializes a new instance of the AksComputeSecrets class.
 * @constructor
 * Secrets related to a Machine Learning compute based on AKS.
 *
 * @property {string} [userKubeConfig] Content of kubeconfig file that can be
 * used to connect to the Kubernetes cluster.
 * @property {string} [adminKubeConfig] Content of kubeconfig file that can be
 * used to connect to the Kubernetes cluster.
 * @property {string} [imagePullSecretName] Image registry pull secret.
 */
export interface AksComputeSecrets extends ComputeSecrets {
  userKubeConfig?: string;
  adminKubeConfig?: string;
  imagePullSecretName?: string;
}

/**
 * @class
 * Initializes a new instance of the VirtualMachineSecrets class.
 * @constructor
 * Secrets related to a Machine Learning compute based on AKS.
 *
 * @property {object} [administratorAccount] Admin creadentials for virtual
 * machine.
 * @property {string} [administratorAccount.username] Username of admin account
 * @property {string} [administratorAccount.password] Password of admin account
 * @property {string} [administratorAccount.publicKeyData] Public key data
 * @property {string} [administratorAccount.privateKeyData] Private key data
 */
export interface VirtualMachineSecrets extends ComputeSecrets {
  administratorAccount?: VirtualMachineSshCredentials;
}


/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * An array of operations supported by the resource provider.
 *
 */
export interface OperationListResult extends Array<Operation> {
}

/**
 * @class
 * Initializes a new instance of the WorkspaceListResult class.
 * @constructor
 * The result of a request to list machine learning workspaces.
 *
 * @property {string} [nextLink] The URI that can be used to request the next
 * list of machine learning workspaces.
 */
export interface WorkspaceListResult extends Array<Workspace> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the PaginatedComputeResourcesList class.
 * @constructor
 * Paginated list of Machine Learning compute objects wrapped in ARM resource
 * envelope.
 *
 * @property {string} [nextLink] A continuation link (absolute URI) to the next
 * page of results in the list.
 */
export interface PaginatedComputeResourcesList extends Array<ComputeResource> {
  nextLink?: string;
}
