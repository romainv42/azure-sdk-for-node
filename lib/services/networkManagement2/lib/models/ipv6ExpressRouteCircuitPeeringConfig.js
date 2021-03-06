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
 * Contains IPv6 peering config.
 *
 */
class Ipv6ExpressRouteCircuitPeeringConfig {
  /**
   * Create a Ipv6ExpressRouteCircuitPeeringConfig.
   * @property {string} [primaryPeerAddressPrefix] The primary address prefix.
   * @property {string} [secondaryPeerAddressPrefix] The secondary address
   * prefix.
   * @property {object} [microsoftPeeringConfig] The Microsoft peering
   * configuration.
   * @property {array} [microsoftPeeringConfig.advertisedPublicPrefixes] The
   * reference of AdvertisedPublicPrefixes.
   * @property {array} [microsoftPeeringConfig.advertisedCommunities] The
   * communities of bgp peering. Spepcified for microsoft peering
   * @property {string} [microsoftPeeringConfig.advertisedPublicPrefixesState]
   * AdvertisedPublicPrefixState of the Peering resource. Possible values are
   * 'NotConfigured', 'Configuring', 'Configured', and 'ValidationNeeded'.
   * Possible values include: 'NotConfigured', 'Configuring', 'Configured',
   * 'ValidationNeeded'
   * @property {number} [microsoftPeeringConfig.legacyMode] The legacy mode of
   * the peering.
   * @property {number} [microsoftPeeringConfig.customerASN] The CustomerASN of
   * the peering.
   * @property {string} [microsoftPeeringConfig.routingRegistryName] The
   * RoutingRegistryName of the configuration.
   * @property {object} [routeFilter] The reference of the RouteFilter
   * resource.
   * @property {array} [routeFilter.rules] Collection of RouteFilterRules
   * contained within a route filter.
   * @property {array} [routeFilter.peerings] A collection of references to
   * express route circuit peerings.
   * @property {string} [routeFilter.provisioningState] The provisioning state
   * of the resource. Possible values are: 'Updating', 'Deleting', 'Succeeded'
   * and 'Failed'.
   * @property {string} [routeFilter.etag] Gets a unique read-only string that
   * changes whenever the resource is updated.
   * @property {string} [state] The state of peering. Possible values are:
   * 'Disabled' and 'Enabled'. Possible values include: 'Disabled', 'Enabled'
   */
  constructor() {
  }

  /**
   * Defines the metadata of Ipv6ExpressRouteCircuitPeeringConfig
   *
   * @returns {object} metadata of Ipv6ExpressRouteCircuitPeeringConfig
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Ipv6ExpressRouteCircuitPeeringConfig',
      type: {
        name: 'Composite',
        className: 'Ipv6ExpressRouteCircuitPeeringConfig',
        modelProperties: {
          primaryPeerAddressPrefix: {
            required: false,
            serializedName: 'primaryPeerAddressPrefix',
            type: {
              name: 'String'
            }
          },
          secondaryPeerAddressPrefix: {
            required: false,
            serializedName: 'secondaryPeerAddressPrefix',
            type: {
              name: 'String'
            }
          },
          microsoftPeeringConfig: {
            required: false,
            serializedName: 'microsoftPeeringConfig',
            type: {
              name: 'Composite',
              className: 'ExpressRouteCircuitPeeringConfig'
            }
          },
          routeFilter: {
            required: false,
            serializedName: 'routeFilter',
            type: {
              name: 'Composite',
              className: 'RouteFilter'
            }
          },
          state: {
            required: false,
            serializedName: 'state',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Ipv6ExpressRouteCircuitPeeringConfig;
