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
 * The Resource definition for other than namespace.
 *
 * @member {string} [id] Resource Id
 * @member {string} [name] Resource name
 * @member {string} [type] Resource type
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
}

/**
 * @class
 * Initializes a new instance of the TrackedResource class.
 * @constructor
 * The Resource definition.
 *
 * @member {string} location The Geo-location where the resource lives
 * @member {object} [tags] Resource tags
 */
export interface TrackedResource extends Resource {
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the ResourceNamespacePatch class.
 * @constructor
 * The Resource definition.
 *
 * @member {string} [location] Resource location
 * @member {object} [tags] Resource tags
 */
export interface ResourceNamespacePatch extends Resource {
  location?: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the SBSku class.
 * @constructor
 * SKU of the namespace.
 *
 * @member {string} name Name of this SKU. Possible values include: 'Basic',
 * 'Standard', 'Premium'
 * @member {string} [tier] The billing tier of this particular SKU. Possible
 * values include: 'Basic', 'Standard', 'Premium'
 * @member {number} [capacity] The specified messaging units for the tier. For
 * Premium tier, capacity are 1,2 and 4.
 */
export interface SBSku {
  name: string;
  tier?: string;
  capacity?: number;
}

/**
 * @class
 * Initializes a new instance of the SBNamespace class.
 * @constructor
 * Description of a namespace resource.
 *
 * @member {object} [sku] Porperties of Sku
 * @member {string} [sku.name] Name of this SKU. Possible values include:
 * 'Basic', 'Standard', 'Premium'
 * @member {string} [sku.tier] The billing tier of this particular SKU.
 * Possible values include: 'Basic', 'Standard', 'Premium'
 * @member {number} [sku.capacity] The specified messaging units for the tier.
 * For Premium tier, capacity are 1,2 and 4.
 * @member {string} [provisioningState] Provisioning state of the namespace.
 * @member {date} [createdAt] The time the namespace was created.
 * @member {date} [updatedAt] The time the namespace was updated.
 * @member {string} [serviceBusEndpoint] Endpoint you can use to perform
 * Service Bus operations.
 * @member {string} [metricId] Identifier for Azure Insights metrics
 */
export interface SBNamespace extends TrackedResource {
  sku?: SBSku;
  readonly provisioningState?: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly serviceBusEndpoint?: string;
  readonly metricId?: string;
}

/**
 * @class
 * Initializes a new instance of the SBNamespaceUpdateParameters class.
 * @constructor
 * Description of a namespace resource.
 *
 * @member {object} [sku] Porperties of Sku
 * @member {string} [sku.name] Name of this SKU. Possible values include:
 * 'Basic', 'Standard', 'Premium'
 * @member {string} [sku.tier] The billing tier of this particular SKU.
 * Possible values include: 'Basic', 'Standard', 'Premium'
 * @member {number} [sku.capacity] The specified messaging units for the tier.
 * For Premium tier, capacity are 1,2 and 4.
 * @member {string} [provisioningState] Provisioning state of the namespace.
 * @member {date} [createdAt] The time the namespace was created.
 * @member {date} [updatedAt] The time the namespace was updated.
 * @member {string} [serviceBusEndpoint] Endpoint you can use to perform
 * Service Bus operations.
 * @member {string} [metricId] Identifier for Azure Insights metrics
 */
export interface SBNamespaceUpdateParameters extends ResourceNamespacePatch {
  sku?: SBSku;
  readonly provisioningState?: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly serviceBusEndpoint?: string;
  readonly metricId?: string;
}

/**
 * @class
 * Initializes a new instance of the SBAuthorizationRule class.
 * @constructor
 * Description of a namespace authorization rule.
 *
 * @member {array} rights The rights associated with the rule.
 */
export interface SBAuthorizationRule extends Resource {
  rights: string[];
}

/**
 * @class
 * Initializes a new instance of the AuthorizationRuleProperties class.
 * @constructor
 * AuthorizationRule properties.
 *
 * @member {array} rights The rights associated with the rule.
 */
export interface AuthorizationRuleProperties {
  rights: string[];
}

/**
 * @class
 * Initializes a new instance of the AccessKeys class.
 * @constructor
 * Namespace/ServiceBus Connection String
 *
 * @member {string} [primaryConnectionString] Primary connection string of the
 * created namespace authorization rule.
 * @member {string} [secondaryConnectionString] Secondary connection string of
 * the created namespace authorization rule.
 * @member {string} [aliasPrimaryConnectionString] Primary connection string of
 * the alias if GEO DR is enabled
 * @member {string} [aliasSecondaryConnectionString] Secondary  connection
 * string of the alias if GEO DR is enabled
 * @member {string} [primaryKey] A base64-encoded 256-bit primary key for
 * signing and validating the SAS token.
 * @member {string} [secondaryKey] A base64-encoded 256-bit primary key for
 * signing and validating the SAS token.
 * @member {string} [keyName] A string that describes the authorization rule.
 */
export interface AccessKeys {
  readonly primaryConnectionString?: string;
  readonly secondaryConnectionString?: string;
  readonly aliasPrimaryConnectionString?: string;
  readonly aliasSecondaryConnectionString?: string;
  readonly primaryKey?: string;
  readonly secondaryKey?: string;
  readonly keyName?: string;
}

/**
 * @class
 * Initializes a new instance of the RegenerateAccessKeyParameters class.
 * @constructor
 * Parameters supplied to the Regenerate Authorization Rule operation,
 * specifies which key neeeds to be reset.
 *
 * @member {string} keyType The access key to regenerate. Possible values
 * include: 'PrimaryKey', 'SecondaryKey'
 * @member {string} [key] Optional, if the key value provided, is reset for
 * KeyType value or autogenerate Key value set for keyType
 */
export interface RegenerateAccessKeyParameters {
  keyType: string;
  key?: string;
}

/**
 * @class
 * Initializes a new instance of the MessageCountDetails class.
 * @constructor
 * Message Count Details.
 *
 * @member {number} [activeMessageCount] Number of active messages in the
 * queue, topic, or subscription.
 * @member {number} [deadLetterMessageCount] Number of messages that are dead
 * lettered.
 * @member {number} [scheduledMessageCount] Number of scheduled messages.
 * @member {number} [transferMessageCount] Number of messages transferred to
 * another queue, topic, or subscription.
 * @member {number} [transferDeadLetterMessageCount] Number of messages
 * transferred into dead letters.
 */
export interface MessageCountDetails {
  readonly activeMessageCount?: number;
  readonly deadLetterMessageCount?: number;
  readonly scheduledMessageCount?: number;
  readonly transferMessageCount?: number;
  readonly transferDeadLetterMessageCount?: number;
}

/**
 * @class
 * Initializes a new instance of the SBQueue class.
 * @constructor
 * Description of queue Resource.
 *
 * @member {object} [countDetails] Message Count Details.
 * @member {number} [countDetails.activeMessageCount] Number of active messages
 * in the queue, topic, or subscription.
 * @member {number} [countDetails.deadLetterMessageCount] Number of messages
 * that are dead lettered.
 * @member {number} [countDetails.scheduledMessageCount] Number of scheduled
 * messages.
 * @member {number} [countDetails.transferMessageCount] Number of messages
 * transferred to another queue, topic, or subscription.
 * @member {number} [countDetails.transferDeadLetterMessageCount] Number of
 * messages transferred into dead letters.
 * @member {date} [createdAt] The exact time the message was created.
 * @member {date} [updatedAt] The exact time the message was updated.
 * @member {date} [accessedAt] Last time a message was sent, or the last time
 * there was a receive request to this queue.
 * @member {number} [sizeInBytes] The size of the queue, in bytes.
 * @member {number} [messageCount] The number of messages in the queue.
 * @member {moment.duration} [lockDuration] ISO 8601 timespan duration of a
 * peek-lock; that is, the amount of time that the message is locked for other
 * receivers. The maximum value for LockDuration is 5 minutes; the default
 * value is 1 minute.
 * @member {number} [maxSizeInMegabytes] The maximum size of the queue in
 * megabytes, which is the size of memory allocated for the queue. Default is
 * 1024.
 * @member {boolean} [requiresDuplicateDetection] A value indicating if this
 * queue requires duplicate detection.
 * @member {boolean} [requiresSession] A value that indicates whether the queue
 * supports the concept of sessions.
 * @member {moment.duration} [defaultMessageTimeToLive] ISO 8601 default
 * message timespan to live value. This is the duration after which the message
 * expires, starting from when the message is sent to Service Bus. This is the
 * default value used when TimeToLive is not set on a message itself.
 * @member {boolean} [deadLetteringOnMessageExpiration] A value that indicates
 * whether this queue has dead letter support when a message expires.
 * @member {moment.duration} [duplicateDetectionHistoryTimeWindow] ISO 8601
 * timeSpan structure that defines the duration of the duplicate detection
 * history. The default value is 10 minutes.
 * @member {number} [maxDeliveryCount] The maximum delivery count. A message is
 * automatically deadlettered after this number of deliveries. default value is
 * 10.
 * @member {string} [status] Enumerates the possible values for the status of a
 * messaging entity. Possible values include: 'Active', 'Disabled',
 * 'Restoring', 'SendDisabled', 'ReceiveDisabled', 'Creating', 'Deleting',
 * 'Renaming', 'Unknown'
 * @member {boolean} [enableBatchedOperations] Value that indicates whether
 * server-side batched operations are enabled.
 * @member {moment.duration} [autoDeleteOnIdle] ISO 8061 timeSpan idle interval
 * after which the queue is automatically deleted. The minimum duration is 5
 * minutes.
 * @member {boolean} [enablePartitioning] A value that indicates whether the
 * queue is to be partitioned across multiple message brokers.
 * @member {boolean} [enableExpress] A value that indicates whether Express
 * Entities are enabled. An express queue holds a message in memory temporarily
 * before writing it to persistent storage.
 * @member {string} [forwardTo] Queue/Topic name to forward the messages
 * @member {string} [forwardDeadLetteredMessagesTo] Queue/Topic name to forward
 * the Dead Letter message
 */
export interface SBQueue extends Resource {
  readonly countDetails?: MessageCountDetails;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly accessedAt?: Date;
  readonly sizeInBytes?: number;
  readonly messageCount?: number;
  lockDuration?: moment.Duration;
  maxSizeInMegabytes?: number;
  requiresDuplicateDetection?: boolean;
  requiresSession?: boolean;
  defaultMessageTimeToLive?: moment.Duration;
  deadLetteringOnMessageExpiration?: boolean;
  duplicateDetectionHistoryTimeWindow?: moment.Duration;
  maxDeliveryCount?: number;
  status?: string;
  enableBatchedOperations?: boolean;
  autoDeleteOnIdle?: moment.Duration;
  enablePartitioning?: boolean;
  enableExpress?: boolean;
  forwardTo?: string;
  forwardDeadLetteredMessagesTo?: string;
}

/**
 * @class
 * Initializes a new instance of the SBTopic class.
 * @constructor
 * Description of topic resource.
 *
 * @member {number} [sizeInBytes] Size of the topic, in bytes.
 * @member {date} [createdAt] Exact time the message was created.
 * @member {date} [updatedAt] The exact time the message was updated.
 * @member {date} [accessedAt] Last time the message was sent, or a request was
 * received, for this topic.
 * @member {number} [subscriptionCount] Number of subscriptions.
 * @member {object} [countDetails] Message count deatils
 * @member {number} [countDetails.activeMessageCount] Number of active messages
 * in the queue, topic, or subscription.
 * @member {number} [countDetails.deadLetterMessageCount] Number of messages
 * that are dead lettered.
 * @member {number} [countDetails.scheduledMessageCount] Number of scheduled
 * messages.
 * @member {number} [countDetails.transferMessageCount] Number of messages
 * transferred to another queue, topic, or subscription.
 * @member {number} [countDetails.transferDeadLetterMessageCount] Number of
 * messages transferred into dead letters.
 * @member {moment.duration} [defaultMessageTimeToLive] ISO 8601 Default
 * message timespan to live value. This is the duration after which the message
 * expires, starting from when the message is sent to Service Bus. This is the
 * default value used when TimeToLive is not set on a message itself.
 * @member {number} [maxSizeInMegabytes] Maximum size of the topic in
 * megabytes, which is the size of the memory allocated for the topic. Default
 * is 1024.
 * @member {boolean} [requiresDuplicateDetection] Value indicating if this
 * topic requires duplicate detection.
 * @member {moment.duration} [duplicateDetectionHistoryTimeWindow] ISO8601
 * timespan structure that defines the duration of the duplicate detection
 * history. The default value is 10 minutes.
 * @member {boolean} [enableBatchedOperations] Value that indicates whether
 * server-side batched operations are enabled.
 * @member {string} [status] Enumerates the possible values for the status of a
 * messaging entity. Possible values include: 'Active', 'Disabled',
 * 'Restoring', 'SendDisabled', 'ReceiveDisabled', 'Creating', 'Deleting',
 * 'Renaming', 'Unknown'
 * @member {boolean} [supportOrdering] Value that indicates whether the topic
 * supports ordering.
 * @member {moment.duration} [autoDeleteOnIdle] ISO 8601 timespan idle interval
 * after which the topic is automatically deleted. The minimum duration is 5
 * minutes.
 * @member {boolean} [enablePartitioning] Value that indicates whether the
 * topic to be partitioned across multiple message brokers is enabled.
 * @member {boolean} [enableExpress] Value that indicates whether Express
 * Entities are enabled. An express topic holds a message in memory temporarily
 * before writing it to persistent storage.
 */
export interface SBTopic extends Resource {
  readonly sizeInBytes?: number;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly accessedAt?: Date;
  readonly subscriptionCount?: number;
  readonly countDetails?: MessageCountDetails;
  defaultMessageTimeToLive?: moment.Duration;
  maxSizeInMegabytes?: number;
  requiresDuplicateDetection?: boolean;
  duplicateDetectionHistoryTimeWindow?: moment.Duration;
  enableBatchedOperations?: boolean;
  status?: string;
  supportOrdering?: boolean;
  autoDeleteOnIdle?: moment.Duration;
  enablePartitioning?: boolean;
  enableExpress?: boolean;
}

/**
 * @class
 * Initializes a new instance of the SBSubscription class.
 * @constructor
 * Description of subscription resource.
 *
 * @member {number} [messageCount] Number of messages.
 * @member {date} [createdAt] Exact time the message was created.
 * @member {date} [accessedAt] Last time there was a receive request to this
 * subscription.
 * @member {date} [updatedAt] The exact time the message was updated.
 * @member {object} [countDetails] Message count details
 * @member {number} [countDetails.activeMessageCount] Number of active messages
 * in the queue, topic, or subscription.
 * @member {number} [countDetails.deadLetterMessageCount] Number of messages
 * that are dead lettered.
 * @member {number} [countDetails.scheduledMessageCount] Number of scheduled
 * messages.
 * @member {number} [countDetails.transferMessageCount] Number of messages
 * transferred to another queue, topic, or subscription.
 * @member {number} [countDetails.transferDeadLetterMessageCount] Number of
 * messages transferred into dead letters.
 * @member {moment.duration} [lockDuration] ISO 8061 lock duration timespan for
 * the subscription. The default value is 1 minute.
 * @member {boolean} [requiresSession] Value indicating if a subscription
 * supports the concept of sessions.
 * @member {moment.duration} [defaultMessageTimeToLive] ISO 8061 Default
 * message timespan to live value. This is the duration after which the message
 * expires, starting from when the message is sent to Service Bus. This is the
 * default value used when TimeToLive is not set on a message itself.
 * @member {boolean} [deadLetteringOnFilterEvaluationExceptions] Value that
 * indicates whether a subscription has dead letter support on filter
 * evaluation exceptions.
 * @member {boolean} [deadLetteringOnMessageExpiration] Value that indicates
 * whether a subscription has dead letter support when a message expires.
 * @member {moment.duration} [duplicateDetectionHistoryTimeWindow] ISO 8601
 * timeSpan structure that defines the duration of the duplicate detection
 * history. The default value is 10 minutes.
 * @member {number} [maxDeliveryCount] Number of maximum deliveries.
 * @member {string} [status] Enumerates the possible values for the status of a
 * messaging entity. Possible values include: 'Active', 'Disabled',
 * 'Restoring', 'SendDisabled', 'ReceiveDisabled', 'Creating', 'Deleting',
 * 'Renaming', 'Unknown'
 * @member {boolean} [enableBatchedOperations] Value that indicates whether
 * server-side batched operations are enabled.
 * @member {moment.duration} [autoDeleteOnIdle] ISO 8061 timeSpan idle interval
 * after which the topic is automatically deleted. The minimum duration is 5
 * minutes.
 * @member {string} [forwardTo] Queue/Topic name to forward the messages
 * @member {string} [forwardDeadLetteredMessagesTo] Queue/Topic name to forward
 * the Dead Letter message
 */
export interface SBSubscription extends Resource {
  readonly messageCount?: number;
  readonly createdAt?: Date;
  readonly accessedAt?: Date;
  readonly updatedAt?: Date;
  readonly countDetails?: MessageCountDetails;
  lockDuration?: moment.Duration;
  requiresSession?: boolean;
  defaultMessageTimeToLive?: moment.Duration;
  deadLetteringOnFilterEvaluationExceptions?: boolean;
  deadLetteringOnMessageExpiration?: boolean;
  duplicateDetectionHistoryTimeWindow?: moment.Duration;
  maxDeliveryCount?: number;
  status?: string;
  enableBatchedOperations?: boolean;
  autoDeleteOnIdle?: moment.Duration;
  forwardTo?: string;
  forwardDeadLetteredMessagesTo?: string;
}

/**
 * @class
 * Initializes a new instance of the CheckNameAvailability class.
 * @constructor
 * Description of a Check Name availability request properties.
 *
 * @member {string} name The Name to check the namespce name availability and
 * The namespace name can contain only letters, numbers, and hyphens. The
 * namespace must start with a letter, and it must end with a letter or number.
 */
export interface CheckNameAvailability {
  name: string;
}

/**
 * @class
 * Initializes a new instance of the CheckNameAvailabilityResult class.
 * @constructor
 * Description of a Check Name availability request properties.
 *
 * @member {string} [message] The detailed info regarding the reason associated
 * with the namespace.
 * @member {boolean} [nameAvailable] Value indicating namespace is
 * availability, true if the namespace is available; otherwise, false.
 * @member {string} [reason] The reason for unavailability of a namespace.
 * Possible values include: 'None', 'InvalidName', 'SubscriptionIsDisabled',
 * 'NameInUse', 'NameInLockdown', 'TooManyNamespaceInCurrentSubscription'
 */
export interface CheckNameAvailabilityResult {
  readonly message?: string;
  nameAvailable?: boolean;
  reason?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationDisplay class.
 * @constructor
 * The object that represents the operation.
 *
 * @member {string} [provider] Service provider: Microsoft.ServiceBus
 * @member {string} [resource] Resource on which the operation is performed:
 * Invoice, etc.
 * @member {string} [operation] Operation type: Read, write, delete, etc.
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
 * A ServiceBus REST API operation
 *
 * @member {string} [name] Operation name: {provider}/{resource}/{operation}
 * @member {object} [display] The object that represents the operation.
 * @member {string} [display.provider] Service provider: Microsoft.ServiceBus
 * @member {string} [display.resource] Resource on which the operation is
 * performed: Invoice, etc.
 * @member {string} [display.operation] Operation type: Read, write, delete,
 * etc.
 */
export interface Operation {
  readonly name?: string;
  display?: OperationDisplay;
}

/**
 * @class
 * Initializes a new instance of the ErrorResponse class.
 * @constructor
 * Error reponse indicates ServiceBus service is not able to process the
 * incoming request. The reason is provided in the error message.
 *
 * @member {string} [code] Error code.
 * @member {string} [message] Error message indicating why the operation
 * failed.
 */
export interface ErrorResponse {
  code?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the Action class.
 * @constructor
 * Represents the filter actions which are allowed for the transformation of a
 * message that have been matched by a filter expression.
 *
 * @member {string} [sqlExpression] SQL expression. e.g. MyProperty='ABC'
 * @member {number} [compatibilityLevel] This property is reserved for future
 * use. An integer value showing the compatibility level, currently hard-coded
 * to 20.
 * @member {boolean} [requiresPreprocessing] Value that indicates whether the
 * rule action requires preprocessing. Default value: true .
 */
export interface Action {
  sqlExpression?: string;
  compatibilityLevel?: number;
  requiresPreprocessing?: boolean;
}

/**
 * @class
 * Initializes a new instance of the SqlFilter class.
 * @constructor
 * Represents a filter which is a composition of an expression and an action
 * that is executed in the pub/sub pipeline.
 *
 * @member {string} [sqlExpression] The SQL expression. e.g. MyProperty='ABC'
 * @member {number} [compatibilityLevel] This property is reserved for future
 * use. An integer value showing the compatibility level, currently hard-coded
 * to 20. Default value: 20 .
 * @member {boolean} [requiresPreprocessing] Value that indicates whether the
 * rule action requires preprocessing. Default value: true .
 */
export interface SqlFilter {
  sqlExpression?: string;
  readonly compatibilityLevel?: number;
  requiresPreprocessing?: boolean;
}

/**
 * @class
 * Initializes a new instance of the CorrelationFilter class.
 * @constructor
 * Represents the correlation filter expression.
 *
 * @member {object} [properties] dictionary object for custom filters
 * @member {string} [correlationId] Identifier of the correlation.
 * @member {string} [messageId] Identifier of the message.
 * @member {string} [to] Address to send to.
 * @member {string} [replyTo] Address of the queue to reply to.
 * @member {string} [label] Application specific label.
 * @member {string} [sessionId] Session identifier.
 * @member {string} [replyToSessionId] Session identifier to reply to.
 * @member {string} [contentType] Content type of the message.
 * @member {boolean} [requiresPreprocessing] Value that indicates whether the
 * rule action requires preprocessing. Default value: true .
 */
export interface CorrelationFilter {
  properties?: { [propertyName: string]: string };
  correlationId?: string;
  messageId?: string;
  to?: string;
  replyTo?: string;
  label?: string;
  sessionId?: string;
  replyToSessionId?: string;
  contentType?: string;
  requiresPreprocessing?: boolean;
}

/**
 * @class
 * Initializes a new instance of the Rule class.
 * @constructor
 * Description of Rule Resource.
 *
 * @member {object} [action] Represents the filter actions which are allowed
 * for the transformation of a message that have been matched by a filter
 * expression.
 * @member {string} [action.sqlExpression] SQL expression. e.g.
 * MyProperty='ABC'
 * @member {number} [action.compatibilityLevel] This property is reserved for
 * future use. An integer value showing the compatibility level, currently
 * hard-coded to 20.
 * @member {boolean} [action.requiresPreprocessing] Value that indicates
 * whether the rule action requires preprocessing.
 * @member {string} [filterType] Filter type that is evaluated against a
 * BrokeredMessage. Possible values include: 'SqlFilter', 'CorrelationFilter'
 * @member {object} [sqlFilter] Properties of sqlFilter
 * @member {string} [sqlFilter.sqlExpression] The SQL expression. e.g.
 * MyProperty='ABC'
 * @member {number} [sqlFilter.compatibilityLevel] This property is reserved
 * for future use. An integer value showing the compatibility level, currently
 * hard-coded to 20.
 * @member {boolean} [sqlFilter.requiresPreprocessing] Value that indicates
 * whether the rule action requires preprocessing.
 * @member {object} [correlationFilter] Properties of correlationFilter
 * @member {object} [correlationFilter.properties] dictionary object for custom
 * filters
 * @member {string} [correlationFilter.correlationId] Identifier of the
 * correlation.
 * @member {string} [correlationFilter.messageId] Identifier of the message.
 * @member {string} [correlationFilter.to] Address to send to.
 * @member {string} [correlationFilter.replyTo] Address of the queue to reply
 * to.
 * @member {string} [correlationFilter.label] Application specific label.
 * @member {string} [correlationFilter.sessionId] Session identifier.
 * @member {string} [correlationFilter.replyToSessionId] Session identifier to
 * reply to.
 * @member {string} [correlationFilter.contentType] Content type of the
 * message.
 * @member {boolean} [correlationFilter.requiresPreprocessing] Value that
 * indicates whether the rule action requires preprocessing.
 */
export interface Rule extends Resource {
  action?: Action;
  filterType?: string;
  sqlFilter?: SqlFilter;
  correlationFilter?: CorrelationFilter;
}

/**
 * @class
 * Initializes a new instance of the SqlRuleAction class.
 * @constructor
 * Represents set of actions written in SQL language-based syntax that is
 * performed against a ServiceBus.Messaging.BrokeredMessage
 *
 */
export interface SqlRuleAction extends Action {
}

/**
 * @class
 * Initializes a new instance of the PremiumMessagingRegionsProperties class.
 * @constructor
 * @member {string} [code] Region code
 * @member {string} [fullName] Full name of the region
 */
export interface PremiumMessagingRegionsProperties {
  readonly code?: string;
  readonly fullName?: string;
}

/**
 * @class
 * Initializes a new instance of the PremiumMessagingRegions class.
 * @constructor
 * Premium Messaging Region
 *
 * @member {object} [properties]
 * @member {string} [properties.code] Region code
 * @member {string} [properties.fullName] Full name of the region
 */
export interface PremiumMessagingRegions extends ResourceNamespacePatch {
  properties?: PremiumMessagingRegionsProperties;
}

/**
 * @class
 * Initializes a new instance of the Destination class.
 * @constructor
 * Capture storage details for capture description
 *
 * @member {string} [name] Name for capture destination
 * @member {string} [storageAccountResourceId] Resource id of the storage
 * account to be used to create the blobs
 * @member {string} [blobContainer] Blob container Name
 * @member {string} [archiveNameFormat] Blob naming convention for archive,
 * e.g.
 * {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}.
 * Here all the parameters (Namespace,EventHub .. etc) are mandatory
 * irrespective of order
 */
export interface Destination {
  name?: string;
  storageAccountResourceId?: string;
  blobContainer?: string;
  archiveNameFormat?: string;
}

/**
 * @class
 * Initializes a new instance of the CaptureDescription class.
 * @constructor
 * Properties to configure capture description for eventhub
 *
 * @member {boolean} [enabled] A value that indicates whether capture
 * description is enabled.
 * @member {string} [encoding] Enumerates the possible values for the encoding
 * format of capture description. Possible values include: 'Avro',
 * 'AvroDeflate'
 * @member {number} [intervalInSeconds] The time window allows you to set the
 * frequency with which the capture to Azure Blobs will happen, value should
 * between 60 to 900 seconds
 * @member {number} [sizeLimitInBytes] The size window defines the amount of
 * data built up in your Event Hub before an capture operation, value should be
 * between 10485760 and 524288000 bytes
 * @member {object} [destination] Properties of Destination where capture will
 * be stored. (Storage Account, Blob Names)
 * @member {string} [destination.name] Name for capture destination
 * @member {string} [destination.storageAccountResourceId] Resource id of the
 * storage account to be used to create the blobs
 * @member {string} [destination.blobContainer] Blob container Name
 * @member {string} [destination.archiveNameFormat] Blob naming convention for
 * archive, e.g.
 * {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}.
 * Here all the parameters (Namespace,EventHub .. etc) are mandatory
 * irrespective of order
 */
export interface CaptureDescription {
  enabled?: boolean;
  encoding?: string;
  intervalInSeconds?: number;
  sizeLimitInBytes?: number;
  destination?: Destination;
}

/**
 * @class
 * Initializes a new instance of the Eventhub class.
 * @constructor
 * Single item in List or Get Event Hub operation
 *
 * @member {array} [partitionIds] Current number of shards on the Event Hub.
 * @member {date} [createdAt] Exact time the Event Hub was created.
 * @member {date} [updatedAt] The exact time the message was updated.
 * @member {number} [messageRetentionInDays] Number of days to retain the
 * events for this Event Hub, value should be 1 to 7 days
 * @member {number} [partitionCount] Number of partitions created for the Event
 * Hub, allowed values are from 1 to 32 partitions.
 * @member {string} [status] Enumerates the possible values for the status of
 * the Event Hub. Possible values include: 'Active', 'Disabled', 'Restoring',
 * 'SendDisabled', 'ReceiveDisabled', 'Creating', 'Deleting', 'Renaming',
 * 'Unknown'
 * @member {object} [captureDescription] Properties of capture description
 * @member {boolean} [captureDescription.enabled] A value that indicates
 * whether capture description is enabled.
 * @member {string} [captureDescription.encoding] Enumerates the possible
 * values for the encoding format of capture description. Possible values
 * include: 'Avro', 'AvroDeflate'
 * @member {number} [captureDescription.intervalInSeconds] The time window
 * allows you to set the frequency with which the capture to Azure Blobs will
 * happen, value should between 60 to 900 seconds
 * @member {number} [captureDescription.sizeLimitInBytes] The size window
 * defines the amount of data built up in your Event Hub before an capture
 * operation, value should be between 10485760 and 524288000 bytes
 * @member {object} [captureDescription.destination] Properties of Destination
 * where capture will be stored. (Storage Account, Blob Names)
 * @member {string} [captureDescription.destination.name] Name for capture
 * destination
 * @member {string} [captureDescription.destination.storageAccountResourceId]
 * Resource id of the storage account to be used to create the blobs
 * @member {string} [captureDescription.destination.blobContainer] Blob
 * container Name
 * @member {string} [captureDescription.destination.archiveNameFormat] Blob
 * naming convention for archive, e.g.
 * {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}.
 * Here all the parameters (Namespace,EventHub .. etc) are mandatory
 * irrespective of order
 */
export interface Eventhub extends Resource {
  readonly partitionIds?: string[];
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  messageRetentionInDays?: number;
  partitionCount?: number;
  status?: string;
  captureDescription?: CaptureDescription;
}

/**
 * @class
 * Initializes a new instance of the ArmDisasterRecovery class.
 * @constructor
 * Single item in List or Get Alias(Disaster Recovery configuration) operation
 *
 * @member {string} [provisioningState] Provisioning state of the
 * Alias(Disaster Recovery configuration) - possible values 'Accepted' or
 * 'Succeeded' or 'Failed'. Possible values include: 'Accepted', 'Succeeded',
 * 'Failed'
 * @member {number} [pendingReplicationOperationsCount] Number of entities
 * pending to be replicated.
 * @member {string} [partnerNamespace] ARM Id of the Primary/Secondary eventhub
 * namespace name, which is part of GEO DR pairning
 * @member {string} [alternateName] Primary/Secondary eventhub namespace name,
 * which is part of GEO DR pairning
 * @member {string} [role] role of namespace in GEO DR - possible values
 * 'Primary' or 'PrimaryNotReplicating' or 'Secondary'. Possible values
 * include: 'Primary', 'PrimaryNotReplicating', 'Secondary'
 */
export interface ArmDisasterRecovery extends Resource {
  readonly provisioningState?: string;
  readonly pendingReplicationOperationsCount?: number;
  partnerNamespace?: string;
  alternateName?: string;
  readonly role?: string;
}

/**
 * @class
 * Initializes a new instance of the MigrationConfigProperties class.
 * @constructor
 * Single item in List or Get Migration Config operation
 *
 * @member {string} [provisioningState] Provisioning state of Migration
 * Configuration
 * @member {number} [pendingReplicationOperationsCount] Number of entities
 * pending to be replicated.
 * @member {string} targetNamespace Existing premium Namespace ARM Id name
 * which has no entities, will be used for migration
 * @member {string} postMigrationName Name to access Standard Namespace after
 * migration
 * @member {string} [migrationState] State in which Standard to Premium
 * Migration is, possible values : Unknown, Reverting, Completing, Initiating,
 * Syncing, Active
 */
export interface MigrationConfigProperties extends Resource {
  readonly provisioningState?: string;
  readonly pendingReplicationOperationsCount?: number;
  targetNamespace: string;
  postMigrationName: string;
  readonly migrationState?: string;
}


/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * Result of the request to list ServiceBus operations. It contains a list of
 * operations and a URL link to get the next set of results.
 *
 * @member {string} [nextLink] URL to get the next set of operation list
 * results if there are any.
 */
export interface OperationListResult extends Array<Operation> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the SBNamespaceListResult class.
 * @constructor
 * The response of the List Namespace operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of Namespaces.
 */
export interface SBNamespaceListResult extends Array<SBNamespace> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the SBAuthorizationRuleListResult class.
 * @constructor
 * The response to the List Namespace operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of Authorization Rules.
 */
export interface SBAuthorizationRuleListResult extends Array<SBAuthorizationRule> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ArmDisasterRecoveryListResult class.
 * @constructor
 * The result of the List Alias(Disaster Recovery configuration) operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of Alias(Disaster Recovery configuration)
 */
export interface ArmDisasterRecoveryListResult extends Array<ArmDisasterRecovery> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the MigrationConfigListResult class.
 * @constructor
 * The result of the List migrationConfigurations operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of migrationConfigurations
 */
export interface MigrationConfigListResult extends Array<MigrationConfigProperties> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the SBQueueListResult class.
 * @constructor
 * The response to the List Queues operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of queues.
 */
export interface SBQueueListResult extends Array<SBQueue> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the SBTopicListResult class.
 * @constructor
 * The response to the List Topics operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of topics.
 */
export interface SBTopicListResult extends Array<SBTopic> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the SBSubscriptionListResult class.
 * @constructor
 * The response to the List Subscriptions operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of subscriptions.
 */
export interface SBSubscriptionListResult extends Array<SBSubscription> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the RuleListResult class.
 * @constructor
 * The response of the List rule operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of rules
 */
export interface RuleListResult extends Array<Rule> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the PremiumMessagingRegionsListResult class.
 * @constructor
 * The response of the List PremiumMessagingRegions operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of PremiumMessagingRegions.
 */
export interface PremiumMessagingRegionsListResult extends Array<PremiumMessagingRegions> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the EventHubListResult class.
 * @constructor
 * The result of the List EventHubs operation.
 *
 * @member {string} [nextLink] Link to the next set of results. Not empty if
 * Value contains incomplete list of EventHubs.
 */
export interface EventHubListResult extends Array<Eventhub> {
  readonly nextLink?: string;
}
