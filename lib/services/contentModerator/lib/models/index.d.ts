/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as moment from "moment";


/**
 * @class
 * Initializes a new instance of the KeyValuePair class.
 * @constructor
 * The key value pair object properties.
 *
 * @member {string} [key] The key parameter.
 * @member {string} [value] The value parameter.
 */
export interface KeyValuePair {
  key?: string;
  value?: string;
}

/**
 * @class
 * Initializes a new instance of the Tag class.
 * @constructor
 * Tag details.
 *
 * @member {string} [key] The key parameter.
 * @member {string} [value] The value parameter.
 */
export interface Tag {
  key?: string;
  value?: string;
}

/**
 * @class
 * Initializes a new instance of the Frame class.
 * @constructor
 * Video frame property details.
 *
 * @member {string} [timestamp] Timestamp of the frame.
 * @member {string} [frameImage] Frame image.
 * @member {array} [metadata] Array of KeyValue.
 * @member {array} [reviewerResultTags] Reviewer result tags.
 */
export interface Frame {
  timestamp?: string;
  frameImage?: string;
  metadata?: KeyValuePair[];
  reviewerResultTags?: Tag[];
}

/**
 * @class
 * Initializes a new instance of the Frames class.
 * @constructor
 * The response for a Get Frames request.
 *
 * @member {string} [reviewId] Id of the review.
 * @member {array} [videoFrames]
 */
export interface Frames {
  reviewId?: string;
  videoFrames?: Frame[];
}

/**
 * @class
 * Initializes a new instance of the ClassificationCategory1 class.
 * @constructor
 * The category1 score details of the text. <a
 * href="https://aka.ms/textClassifyCategories">Click here</a> for more details
 * on category classification.
 *
 * @member {number} [score] The category1 score.
 */
export interface ClassificationCategory1 {
  score?: number;
}

/**
 * @class
 * Initializes a new instance of the ClassificationCategory2 class.
 * @constructor
 * The category2 score details of the text. <a
 * href="https://aka.ms/textClassifyCategories">Click here</a> for more details
 * on category classification.
 *
 * @member {number} [score] The category2 score.
 */
export interface ClassificationCategory2 {
  score?: number;
}

/**
 * @class
 * Initializes a new instance of the ClassificationCategory3 class.
 * @constructor
 * The category3 score details of the text. <a
 * href="https://aka.ms/textClassifyCategories">Click here</a> for more details
 * on category classification.
 *
 * @member {number} [score] The category3 score.
 */
export interface ClassificationCategory3 {
  score?: number;
}

/**
 * @class
 * Initializes a new instance of the Classification class.
 * @constructor
 * The classification details of the text.
 *
 * @member {object} [category1] The category1 score details of the text. <a
 * href="https://aka.ms/textClassifyCategories">Click here</a> for more details
 * on category classification.
 * @member {number} [category1.score] The category1 score.
 * @member {object} [category2] The category2 score details of the text. <a
 * href="https://aka.ms/textClassifyCategories">Click here</a> for more details
 * on category classification.
 * @member {number} [category2.score] The category2 score.
 * @member {object} [category3] The category3 score details of the text. <a
 * href="https://aka.ms/textClassifyCategories">Click here</a> for more details
 * on category classification.
 * @member {number} [category3.score] The category3 score.
 * @member {boolean} [reviewRecommended] The review recommended flag.
 */
export interface Classification {
  category1?: ClassificationCategory1;
  category2?: ClassificationCategory2;
  category3?: ClassificationCategory3;
  reviewRecommended?: boolean;
}

/**
 * @class
 * Initializes a new instance of the Status class.
 * @constructor
 * Status properties.
 *
 * @member {number} [code] Status code.
 * @member {string} [description] Status description.
 * @member {string} [exception] Exception status.
 */
export interface Status {
  code?: number;
  description?: string;
  exception?: string;
}

/**
 * @class
 * Initializes a new instance of the Email class.
 * @constructor
 * Email Address details.
 *
 * @member {string} [detected] Detected Email Address from the input text
 * content.
 * @member {string} [subType] Subtype of the detected Email Address.
 * @member {string} [text] Email Address in the input text content.
 * @member {number} [index] Index(Location) of the Email address in the input
 * text content.
 */
export interface Email {
  detected?: string;
  subType?: string;
  text?: string;
  index?: number;
}

/**
 * @class
 * Initializes a new instance of the SSN class.
 * @constructor
 * Detected SSN details.
 *
 * @member {string} [text] Detected SSN in the input text content.
 * @member {number} [index] Index(Location) of the SSN in the input text
 * content.
 */
export interface SSN {
  text?: string;
  index?: number;
}

/**
 * @class
 * Initializes a new instance of the IPA class.
 * @constructor
 * IP Address details.
 *
 * @member {string} [subType] Subtype of the detected IP Address.
 * @member {string} [text] Detected IP Address.
 * @member {number} [index] Index(Location) of the IP Address in the input text
 * content.
 */
export interface IPA {
  subType?: string;
  text?: string;
  index?: number;
}

/**
 * @class
 * Initializes a new instance of the Phone class.
 * @constructor
 * Phone Property details.
 *
 * @member {string} [countryCode] CountryCode of the detected Phone number.
 * @member {string} [text] Detected Phone number.
 * @member {number} [index] Index(Location) of the Phone number in the input
 * text content.
 */
export interface Phone {
  countryCode?: string;
  text?: string;
  index?: number;
}

/**
 * @class
 * Initializes a new instance of the Address class.
 * @constructor
 * Address details.
 *
 * @member {string} [text] Detected Address.
 * @member {number} [index] Index(Location) of the Address in the input text
 * content.
 */
export interface Address {
  text?: string;
  index?: number;
}

/**
 * @class
 * Initializes a new instance of the PII class.
 * @constructor
 * Personal Identifier Information details.
 *
 * @member {array} [email]
 * @member {array} [sSN]
 * @member {array} [iPA]
 * @member {array} [phone]
 * @member {array} [address]
 */
export interface PII {
  email?: Email[];
  sSN?: SSN[];
  iPA?: IPA[];
  phone?: Phone[];
  address?: Address[];
}

/**
 * @class
 * Initializes a new instance of the DetectedTerms class.
 * @constructor
 * Detected Terms details.
 *
 * @member {number} [index] Index(Location) of the detected profanity term in
 * the input text content.
 * @member {number} [originalIndex] Original Index(Location) of the detected
 * profanity term in the input text content.
 * @member {number} [listId] Matched Terms list Id.
 * @member {string} [term] Detected profanity term.
 */
export interface DetectedTerms {
  index?: number;
  originalIndex?: number;
  listId?: number;
  term?: string;
}

/**
 * @class
 * Initializes a new instance of the Screen class.
 * @constructor
 * The response for a Screen text request.
 *
 * @member {string} [originalText] The original text.
 * @member {string} [normalizedText] The normalized text.
 * @member {string} [autoCorrectedText] The autocorrected text
 * @member {array} [misrepresentation] The misrepresentation text.
 * @member {object} [classification] The classification details of the text.
 * @member {object} [classification.category1] The category1 score details of
 * the text. <a href="https://aka.ms/textClassifyCategories">Click here</a> for
 * more details on category classification.
 * @member {number} [classification.category1.score] The category1 score.
 * @member {object} [classification.category2] The category2 score details of
 * the text. <a href="https://aka.ms/textClassifyCategories">Click here</a> for
 * more details on category classification.
 * @member {number} [classification.category2.score] The category2 score.
 * @member {object} [classification.category3] The category3 score details of
 * the text. <a href="https://aka.ms/textClassifyCategories">Click here</a> for
 * more details on category classification.
 * @member {number} [classification.category3.score] The category3 score.
 * @member {boolean} [classification.reviewRecommended] The review recommended
 * flag.
 * @member {object} [status] The evaluate status.
 * @member {number} [status.code] Status code.
 * @member {string} [status.description] Status description.
 * @member {string} [status.exception] Exception status.
 * @member {object} [pII] Personal Identifier Information details.
 * @member {array} [pII.email]
 * @member {array} [pII.sSN]
 * @member {array} [pII.iPA]
 * @member {array} [pII.phone]
 * @member {array} [pII.address]
 * @member {string} [language] Language of the input text content.
 * @member {array} [terms]
 * @member {string} [trackingId] Unique Content Moderator transaction Id.
 */
export interface Screen {
  originalText?: string;
  normalizedText?: string;
  autoCorrectedText?: string;
  misrepresentation?: string[];
  classification?: Classification;
  status?: Status;
  pII?: PII;
  language?: string;
  terms?: DetectedTerms[];
  trackingId?: string;
}

/**
 * @class
 * Initializes a new instance of the Face class.
 * @constructor
 * Coordinates to the found face.
 *
 * @member {number} [bottom] The bottom coordinate.
 * @member {number} [left] The left coordinate.
 * @member {number} [right] The right coordinate.
 * @member {number} [top] The top coordinate.
 */
export interface Face {
  bottom?: number;
  left?: number;
  right?: number;
  top?: number;
}

/**
 * @class
 * Initializes a new instance of the FoundFaces class.
 * @constructor
 * Request object the contains found faces.
 *
 * @member {object} [status] The evaluate status
 * @member {number} [status.code] Status code.
 * @member {string} [status.description] Status description.
 * @member {string} [status.exception] Exception status.
 * @member {string} [trackingId] The tracking id.
 * @member {string} [cacheId] The cache id.
 * @member {boolean} [result] True if result was found.
 * @member {number} [count] Number of faces found.
 * @member {array} [advancedInfo] The advanced info.
 * @member {array} [faces] The list of faces.
 */
export interface FoundFaces {
  status?: Status;
  trackingId?: string;
  cacheId?: string;
  result?: boolean;
  count?: number;
  advancedInfo?: KeyValuePair[];
  faces?: Face[];
}

/**
 * @class
 * Initializes a new instance of the Candidate class.
 * @constructor
 * OCR candidate text.
 *
 * @member {string} [text] The text found.
 * @member {number} [confidence] The confidence level.
 */
export interface Candidate {
  text?: string;
  confidence?: number;
}

/**
 * @class
 * Initializes a new instance of the OCR class.
 * @constructor
 * Contains the text found in image for the language specified.
 *
 * @member {object} [status] The evaluate status
 * @member {number} [status.code] Status code.
 * @member {string} [status.description] Status description.
 * @member {string} [status.exception] Exception status.
 * @member {array} [metadata] Array of KeyValue.
 * @member {string} [trackingId] The tracking id.
 * @member {string} [cacheId] The cache id.
 * @member {string} [language] The ISO 639-3 code.
 * @member {string} [text] The found text.
 * @member {array} [candidates] The list of candidate text.
 */
export interface OCR {
  status?: Status;
  metadata?: KeyValuePair[];
  trackingId?: string;
  cacheId?: string;
  language?: string;
  text?: string;
  candidates?: Candidate[];
}

/**
 * @class
 * Initializes a new instance of the Evaluate class.
 * @constructor
 * Evaluate response object.
 *
 * @member {string} [cacheID] The cache id.
 * @member {boolean} [result] Evaluate result.
 * @member {string} [trackingId] The tracking id.
 * @member {number} [adultClassificationScore] The adult classification score.
 * @member {boolean} [isImageAdultClassified] Indicates if an image is
 * classified as adult.
 * @member {number} [racyClassificationScore] The racy classication score.
 * @member {boolean} [isImageRacyClassified] Indicates if the image is
 * classified as racy.
 * @member {array} [advancedInfo] The advanced info.
 * @member {object} [status] The evaluate status
 * @member {number} [status.code] Status code.
 * @member {string} [status.description] Status description.
 * @member {string} [status.exception] Exception status.
 */
export interface Evaluate {
  cacheID?: string;
  result?: boolean;
  trackingId?: string;
  adultClassificationScore?: number;
  isImageAdultClassified?: boolean;
  racyClassificationScore?: number;
  isImageRacyClassified?: boolean;
  advancedInfo?: KeyValuePair[];
  status?: Status;
}

/**
 * @class
 * Initializes a new instance of the Match class.
 * @constructor
 * The match details.
 *
 * @member {number} [score] Confidence score of the image match.
 * @member {number} [matchId] The match id.
 * @member {string} [source] The source.
 * @member {array} [tags] The tags for match details.
 * @member {string} [label] The label.
 */
export interface Match {
  score?: number;
  matchId?: number;
  source?: string;
  tags?: number[];
  label?: string;
}

/**
 * @class
 * Initializes a new instance of the MatchResponse class.
 * @constructor
 * The response for a Match request.
 *
 * @member {string} [trackingId] The tracking id.
 * @member {string} [cacheID] The cache id.
 * @member {boolean} [isMatch] Indicates if there is a match.
 * @member {array} [matches] The match details.
 * @member {object} [status] The evaluate status
 * @member {number} [status.code] Status code.
 * @member {string} [status.description] Status description.
 * @member {string} [status.exception] Exception status.
 */
export interface MatchResponse {
  trackingId?: string;
  cacheID?: string;
  isMatch?: boolean;
  matches?: Match[];
  status?: Status;
}

/**
 * @class
 * Initializes a new instance of the DetectedLanguage class.
 * @constructor
 * Detect language result.
 *
 * @member {string} [detectedLanguage] The detected language.
 * @member {object} [status] The detect language status
 * @member {number} [status.code] Status code.
 * @member {string} [status.description] Status description.
 * @member {string} [status.exception] Exception status.
 * @member {string} [trackingId] The tracking id.
 */
export interface DetectedLanguage {
  detectedLanguage?: string;
  status?: Status;
  trackingId?: string;
}

/**
 * @class
 * Initializes a new instance of the ImageListMetadata class.
 * @constructor
 * Image List Metadata.
 *
 * @member {string} [keyOne] Optional Key value pair to describe your list.
 * @member {string} [keyTwo] Optional Key value pair to describe your list.
 */
export interface ImageListMetadata {
  keyOne?: string;
  keyTwo?: string;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * MUST be of type "string". Due to valid TS constraints we have modeled this
   * as a union of `string | any`.
   */
  [property: string]: string | any;
}

/**
 * @class
 * Initializes a new instance of the ImageList class.
 * @constructor
 * Image List Properties.
 *
 * @member {number} [id] Image List Id.
 * @member {string} [name] Image List Name.
 * @member {string} [description] Description for image list.
 * @member {object} [metadata] Image List Metadata.
 * @member {string} [metadata.keyOne] Optional Key value pair to describe your
 * list.
 * @member {string} [metadata.keyTwo] Optional Key value pair to describe your
 * list.
 */
export interface ImageList {
  id?: number;
  name?: string;
  description?: string;
  metadata?: ImageListMetadata;
}

/**
 * @class
 * Initializes a new instance of the TermListMetadata class.
 * @constructor
 * Term list metadata.
 *
 * @member {string} [keyOne] Optional Key value pair to describe your list.
 * @member {string} [keyTwo] Optional Key value pair to describe your list.
 */
export interface TermListMetadata {
  keyOne?: string;
  keyTwo?: string;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * MUST be of type "string". Due to valid TS constraints we have modeled this
   * as a union of `string | any`.
   */
  [property: string]: string | any;
}

/**
 * @class
 * Initializes a new instance of the TermList class.
 * @constructor
 * Term List  Properties.
 *
 * @member {number} [id] Term list Id.
 * @member {string} [name] Term list name.
 * @member {string} [description] Description for term list.
 * @member {object} [metadata] Term list metadata.
 * @member {string} [metadata.keyOne] Optional Key value pair to describe your
 * list.
 * @member {string} [metadata.keyTwo] Optional Key value pair to describe your
 * list.
 */
export interface TermList {
  id?: number;
  name?: string;
  description?: string;
  metadata?: TermListMetadata;
}

/**
 * @class
 * Initializes a new instance of the RefreshIndexAdvancedInfoItem class.
 * @constructor
 * @member {string} [keyOne] Key parameter to describe advanced info.
 * @member {string} [keyTwo] Key parameter to describe advanced info.
 */
export interface RefreshIndexAdvancedInfoItem {
  keyOne?: string;
  keyTwo?: string;
}

/**
 * @class
 * Initializes a new instance of the RefreshIndex class.
 * @constructor
 * Refresh Index Response.
 *
 * @member {string} [contentSourceId] Content source Id.
 * @member {boolean} [isUpdateSuccess] Update success status.
 * @member {array} [advancedInfo] Advanced info list.
 * @member {object} [status] Refresh index status.
 * @member {number} [status.code] Status code.
 * @member {string} [status.description] Status description.
 * @member {string} [status.exception] Exception status.
 * @member {string} [trackingId] Tracking Id.
 */
export interface RefreshIndex {
  contentSourceId?: string;
  isUpdateSuccess?: boolean;
  advancedInfo?: RefreshIndexAdvancedInfoItem[];
  status?: Status;
  trackingId?: string;
}

/**
 * @class
 * Initializes a new instance of the ImageAdditionalInfoItem class.
 * @constructor
 * @member {string} [key] Key parameter.
 * @member {string} [value] Value parameter.
 */
export interface ImageAdditionalInfoItem {
  key?: string;
  value?: string;
}

/**
 * @class
 * Initializes a new instance of the Image class.
 * @constructor
 * Image Properties.
 *
 * @member {string} [contentId] Content Id.
 * @member {array} [additionalInfo] Advanced info list.
 * @member {object} [status] Status details.
 * @member {number} [status.code] Status code.
 * @member {string} [status.description] Status description.
 * @member {string} [status.exception] Exception status.
 * @member {string} [trackingId] Tracking Id.
 */
export interface Image {
  contentId?: string;
  additionalInfo?: ImageAdditionalInfoItem[];
  status?: Status;
  trackingId?: string;
}

/**
 * @class
 * Initializes a new instance of the ImageIds class.
 * @constructor
 * Image Id properties.
 *
 * @member {string} [contentSource] Source of the content.
 * @member {array} [contentIds] Id of the contents.
 * @member {object} [status] Get Image status.
 * @member {number} [status.code] Status code.
 * @member {string} [status.description] Status description.
 * @member {string} [status.exception] Exception status.
 * @member {string} [trackingId] Tracking Id.
 */
export interface ImageIds {
  contentSource?: string;
  contentIds?: number[];
  status?: Status;
  trackingId?: string;
}

/**
 * @class
 * Initializes a new instance of the TermsInList class.
 * @constructor
 * Terms in list Id passed.
 *
 * @member {string} [term] Added term details.
 */
export interface TermsInList {
  term?: string;
}

/**
 * @class
 * Initializes a new instance of the TermsData class.
 * @constructor
 * All term Id response properties.
 *
 * @member {string} [language] Language of the terms.
 * @member {array} [terms] List of terms.
 * @member {object} [status] Term Status.
 * @member {number} [status.code] Status code.
 * @member {string} [status.description] Status description.
 * @member {string} [status.exception] Exception status.
 * @member {string} [trackingId] Tracking Id.
 */
export interface TermsData {
  language?: string;
  terms?: TermsInList[];
  status?: Status;
  trackingId?: string;
}

/**
 * @class
 * Initializes a new instance of the TermsPaging class.
 * @constructor
 * Paging details.
 *
 * @member {number} [total] Total details.
 * @member {number} [limit] Limit details.
 * @member {number} [offset] Offset details.
 * @member {number} [returned] Returned text details.
 */
export interface TermsPaging {
  total?: number;
  limit?: number;
  offset?: number;
  returned?: number;
}

/**
 * @class
 * Initializes a new instance of the Terms class.
 * @constructor
 * Terms properties.
 *
 * @member {object} [data] Term data details.
 * @member {string} [data.language] Language of the terms.
 * @member {array} [data.terms] List of terms.
 * @member {object} [data.status] Term Status.
 * @member {number} [data.status.code] Status code.
 * @member {string} [data.status.description] Status description.
 * @member {string} [data.status.exception] Exception status.
 * @member {string} [data.trackingId] Tracking Id.
 * @member {object} [paging] Paging details.
 * @member {number} [paging.total] Total details.
 * @member {number} [paging.limit] Limit details.
 * @member {number} [paging.offset] Offset details.
 * @member {number} [paging.returned] Returned text details.
 */
export interface Terms {
  data?: TermsData;
  paging?: TermsPaging;
}

/**
 * @class
 * Initializes a new instance of the Review class.
 * @constructor
 * The Review object.
 *
 * @member {string} [reviewId] Id of the review.
 * @member {string} [subTeam] Name of the subteam.
 * @member {string} [status] The status string (<Pending, Complete>).
 * @member {array} [reviewerResultTags] Array of KeyValue with Reviewer set
 * Tags.
 * @member {string} [createdBy] The reviewer name.
 * @member {array} [metadata] Array of KeyValue.
 * @member {string} [type] The type of content.
 * @member {string} [content] The content value.
 * @member {string} [contentId] Id of the content.
 * @member {string} [callbackEndpoint] The callback endpoint.
 */
export interface Review {
  reviewId?: string;
  subTeam?: string;
  status?: string;
  reviewerResultTags?: KeyValuePair[];
  createdBy?: string;
  metadata?: KeyValuePair[];
  type?: string;
  content?: string;
  contentId?: string;
  callbackEndpoint?: string;
}

/**
 * @class
 * Initializes a new instance of the JobExecutionReportDetails class.
 * @constructor
 * Job Execution Report Values.
 *
 * @member {string} [ts] Time details.
 * @member {string} [msg] Message details.
 */
export interface JobExecutionReportDetails {
  ts?: string;
  msg?: string;
}

/**
 * @class
 * Initializes a new instance of the Job class.
 * @constructor
 * The Job object.
 *
 * @member {string} [id] The job id.
 * @member {string} [teamName] The team name associated with the job.
 * @member {string} [status] The status string (<Pending, Failed, Completed>).
 * @member {string} [workflowId] The Id of the workflow.
 * @member {string} [type] Type of the content.
 * @member {string} [callBackEndpoint] The callback endpoint.
 * @member {string} [reviewId] Review Id if one is created.
 * @member {array} [resultMetaData] Array of KeyValue pairs.
 * @member {array} [jobExecutionReport] Job execution report- Array of KeyValue
 * pairs object.
 */
export interface Job {
  id?: string;
  teamName?: string;
  status?: string;
  workflowId?: string;
  type?: string;
  callBackEndpoint?: string;
  reviewId?: string;
  resultMetaData?: KeyValuePair[];
  jobExecutionReport?: JobExecutionReportDetails[];
}

/**
 * @class
 * Initializes a new instance of the JobListResult class.
 * @constructor
 * The list of job ids.
 *
 * @member {array} [value] The job id.
 */
export interface JobListResult {
  value?: string[];
}

/**
 * @class
 * Initializes a new instance of the JobId class.
 * @constructor
 * @member {string} [jobId] Id of the created job.
 */
export interface JobId {
  jobId?: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorModel class.
 * @constructor
 * Error body.
 *
 * @member {string} [code]
 * @member {string} [message]
 */
export interface ErrorModel {
  code?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the APIError class.
 * @constructor
 * Error information returned by the API
 *
 * @member {object} [error]
 * @member {string} [error.code]
 * @member {string} [error.message]
 */
export interface APIError {
  error?: ErrorModel;
}

/**
 * @class
 * Initializes a new instance of the BodyMetadata class.
 * @constructor
 * Metadata of the list.
 *
 * @member {string} [keyOne] Optional key value pair to describe your list.
 * @member {string} [keyTwo] Optional key value pair to describe your list.
 */
export interface BodyMetadata {
  keyOne?: string;
  keyTwo?: string;
}

/**
 * @class
 * Initializes a new instance of the Body class.
 * @constructor
 * @member {string} [name] Name of the list.
 * @member {string} [description] Description of the list.
 * @member {object} [metadata] Metadata of the list.
 * @member {string} [metadata.keyOne] Optional key value pair to describe your
 * list.
 * @member {string} [metadata.keyTwo] Optional key value pair to describe your
 * list.
 */
export interface Body {
  name?: string;
  description?: string;
  metadata?: BodyMetadata;
}

/**
 * @class
 * Initializes a new instance of the CreateReviewBodyItemMetadataItem class.
 * @constructor
 * @member {string} key Your key parameter.
 * @member {string} value Your value parameter.
 */
export interface CreateReviewBodyItemMetadataItem {
  key: string;
  value: string;
}

/**
 * @class
 * Initializes a new instance of the CreateReviewBodyItem class.
 * @constructor
 * Schema items of the body.
 *
 * @member {string} type Type of the content. Possible values include: 'Image',
 * 'Text'
 * @member {string} content Content to review.
 * @member {string} contentId Content Identifier.
 * @member {string} [callbackEndpoint] Optional CallbackEndpoint.
 * @member {array} [metadata] Optional metadata details.
 */
export interface CreateReviewBodyItem {
  type: string;
  content: string;
  contentId: string;
  callbackEndpoint?: string;
  metadata?: CreateReviewBodyItemMetadataItem[];
}

/**
 * @class
 * Initializes a new instance of the Content class.
 * @constructor
 * @member {string} contentValue Content to evaluate for a job.
 */
export interface Content {
  contentValue: string;
}

/**
 * @class
 * Initializes a new instance of the TranscriptModerationBodyItemTermsItem class.
 * @constructor
 * @member {number} index Index of the word
 * @member {string} term Detected word.
 */
export interface TranscriptModerationBodyItemTermsItem {
  index: number;
  term: string;
}

/**
 * @class
 * Initializes a new instance of the TranscriptModerationBodyItem class.
 * @constructor
 * Schema items of the body.
 *
 * @member {string} timestamp Timestamp of the image.
 * @member {array} terms Optional metadata details.
 */
export interface TranscriptModerationBodyItem {
  timestamp: string;
  terms: TranscriptModerationBodyItemTermsItem[];
}

/**
 * @class
 * Initializes a new instance of the BodyModel class.
 * @constructor
 * @member {string} [dataRepresentation] Default value: 'URL' .
 * @member {string} [value]
 */
export interface BodyModel {
  dataRepresentation?: string;
  value?: string;
}

/**
 * @class
 * Initializes a new instance of the CreateVideoReviewsBodyItemVideoFramesItemReviewerResultTagsItem class.
 * @constructor
 * @member {string} key Your key parameter.
 * @member {string} value Your value parameter.
 */
export interface CreateVideoReviewsBodyItemVideoFramesItemReviewerResultTagsItem {
  key: string;
  value: string;
}

/**
 * @class
 * Initializes a new instance of the CreateVideoReviewsBodyItemVideoFramesItemMetadataItem class.
 * @constructor
 * @member {string} key Your key parameter.
 * @member {string} value Your value parameter.
 */
export interface CreateVideoReviewsBodyItemVideoFramesItemMetadataItem {
  key: string;
  value: string;
}

/**
 * @class
 * Initializes a new instance of the CreateVideoReviewsBodyItemVideoFramesItem class.
 * @constructor
 * @member {string} id Id of the frame.
 * @member {number} timestamp Timestamp of the frame.
 * @member {string} frameImage Frame image Url.
 * @member {array} [reviewerResultTags]
 * @member {array} [metadata] Optional metadata details.
 */
export interface CreateVideoReviewsBodyItemVideoFramesItem {
  id: string;
  timestamp: number;
  frameImage: string;
  reviewerResultTags?: CreateVideoReviewsBodyItemVideoFramesItemReviewerResultTagsItem[];
  metadata?: CreateVideoReviewsBodyItemVideoFramesItemMetadataItem[];
}

/**
 * @class
 * Initializes a new instance of the CreateVideoReviewsBodyItemMetadataItem class.
 * @constructor
 * @member {string} key Your key parameter.
 * @member {string} value Your value parameter.
 */
export interface CreateVideoReviewsBodyItemMetadataItem {
  key: string;
  value: string;
}

/**
 * @class
 * Initializes a new instance of the CreateVideoReviewsBodyItem class.
 * @constructor
 * Schema items of the body.
 *
 * @member {array} [videoFrames] Optional metadata details.
 * @member {array} [metadata] Optional metadata details.
 * @member {string} content Video content url to review.
 * @member {string} contentId Content Identifier.
 * @member {string} status Status of the video(Complete,Unpublished,Pending).
 * Possible values include: 'Complete', 'Unpublished', 'Pending'
 * @member {number} [timescale] Timescale of the video.
 * @member {string} [callbackEndpoint] Optional CallbackEndpoint.
 */
export interface CreateVideoReviewsBodyItem {
  videoFrames?: CreateVideoReviewsBodyItemVideoFramesItem[];
  metadata?: CreateVideoReviewsBodyItemMetadataItem[];
  content: string;
  contentId: string;
  status: string;
  timescale?: number;
  callbackEndpoint?: string;
}

/**
 * @class
 * Initializes a new instance of the VideoFrameBodyItemReviewerResultTagsItem class.
 * @constructor
 * @member {string} key Your key parameter.
 * @member {string} value Your value parameter.
 */
export interface VideoFrameBodyItemReviewerResultTagsItem {
  key: string;
  value: string;
}

/**
 * @class
 * Initializes a new instance of the VideoFrameBodyItemMetadataItem class.
 * @constructor
 * @member {string} key Your key parameter.
 * @member {string} value Your value parameter.
 */
export interface VideoFrameBodyItemMetadataItem {
  key: string;
  value: string;
}

/**
 * @class
 * Initializes a new instance of the VideoFrameBodyItem class.
 * @constructor
 * Schema items of the body.
 *
 * @member {string} timestamp Timestamp of the frame.
 * @member {string} frameImage Content to review.
 * @member {array} [reviewerResultTags]
 * @member {array} [metadata] Optional metadata details.
 */
export interface VideoFrameBodyItem {
  timestamp: string;
  frameImage: string;
  reviewerResultTags?: VideoFrameBodyItemReviewerResultTagsItem[];
  metadata?: VideoFrameBodyItemMetadataItem[];
}
