/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

exports.ResponseBase = require('./responseBase');
exports.Identifiable = require('./identifiable');
exports.Response = require('./response');
exports.Thing = require('./thing');
exports.CreativeWork = require('./creativeWork');
exports.MediaObject = require('./mediaObject');
exports.ImageObject = require('./imageObject');
exports.VideoObject = require('./videoObject');
exports.Query = require('./query');
exports.PivotSuggestions = require('./pivotSuggestions');
exports.Answer = require('./answer');
exports.SearchResultsAnswer = require('./searchResultsAnswer');
exports.Videos = require('./videos');
exports.QueryContext = require('./queryContext');
exports.ErrorModel = require('./errorModel');
exports.ErrorResponse = require('./errorResponse');
exports.TrendingVideosTile = require('./trendingVideosTile');
exports.TrendingVideosSubcategory = require('./trendingVideosSubcategory');
exports.TrendingVideosCategory = require('./trendingVideosCategory');
exports.TrendingVideos = require('./trendingVideos');
exports.VideosModule = require('./videosModule');
exports.VideoDetails = require('./videoDetails');
exports.discriminators = {
  'ResponseBase.ImageObject' : exports.ImageObject,
  'ResponseBase.VideoObject' : exports.VideoObject,
  'ResponseBase.Videos' : exports.Videos,
  'ResponseBase.SearchResultsAnswer' : exports.SearchResultsAnswer,
  'ResponseBase.Answer' : exports.Answer,
  'ResponseBase.MediaObject' : exports.MediaObject,
  'ResponseBase.Response' : exports.Response,
  'ResponseBase.Thing' : exports.Thing,
  'ResponseBase.CreativeWork' : exports.CreativeWork,
  'ResponseBase.Identifiable' : exports.Identifiable,
  'ResponseBase.ErrorResponse' : exports.ErrorResponse,
  'ResponseBase.TrendingVideos' : exports.TrendingVideos,
  'ResponseBase.VideoDetails' : exports.VideoDetails,
  'ResponseBase' : exports.ResponseBase
};
