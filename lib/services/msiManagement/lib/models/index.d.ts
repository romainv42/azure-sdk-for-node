/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure";
import * as moment from "moment";

export {

  BaseResource,
  CloudError
};

/**
 * Describes an identity resource.
 */
export interface Identity extends BaseResource {
  /**
   * The id of the created identity.
   */
  readonly id?: string;
  /**
   * The name of the created identity.
   */
  readonly name?: string;
  /**
   * The Azure region where the identity lives.
   */
  location?: string;
  /**
   * Resource tags
   */
  tags?: { [propertyName: string]: string };
  /**
   * The id of the tenant which the identity belongs to.
   */
  readonly tenantId?: string;
  /**
   * The id of the service principal object associated with the created identity.
   */
  readonly principalId?: string;
  /**
   * The id of the app associated with the identity. This is a random generated UUID by MSI.
   */
  readonly clientId?: string;
  /**
   * The ManagedServiceIdentity DataPlane URL that can be queried to obtain the identity
   * credentials. If identity is user assigned, then the clientSecretUrl will not be present in the
   * response, otherwise it will be present.
   */
  readonly clientSecretUrl?: string;
  /**
   * The type of resource i.e. Microsoft.ManagedIdentity/userAssignedIdentities. Possible values
   * include: 'Microsoft.ManagedIdentity/userAssignedIdentities'
   */
  readonly type?: string;
}

/**
 * @summary Operation Display.
 * @description The object that describes the operation.
 */
export interface OperationDisplay {
  /**
   * @summary Resource Provider Name.
   * @description Friendly name of the resource provider.
   */
  provider?: string;
  /**
   * @summary Operation Type.
   * @description The type of operation. For example: read, write, delete.
   */
  operation?: string;
  /**
   * @summary Resource Type.
   * @description The resource type on which the operation is performed.
   */
  resource?: string;
  /**
   * @summary Operation description
   * @description A description of the operation.
   */
  description?: string;
}

/**
 * @summary Microsoft.ManagedIdentity Operation.
 * @description Operation supported by the Microsoft.ManagedIdentity REST API.
 */
export interface Operation {
  /**
   * @summary Operation Name.
   * @description The name of the REST Operation. This is of the format
   * {provider}/{resource}/{operation}.
   */
  name?: string;
  /**
   * @summary Operation Display.
   * @description The object that describes the operation.
   */
  display?: OperationDisplay;
}

/**
 * @summary Operations List.
 * @description A list of operations supported by Microsoft.ManagedIdentity Resource Provider.
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * @summary Next Link
   * @description The url to get the next page of results, if any.
   */
  nextLink?: string;
}

/**
 * Values returned by the List operation.
 */
export interface UserAssignedIdentitiesListResult extends Array<Identity> {
  /**
   * The url to get the next page of results, if any.
   */
  nextLink?: string;
}
