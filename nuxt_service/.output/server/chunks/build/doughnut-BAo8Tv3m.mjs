import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createTextVNode, toDisplayString, createCommentVNode, createElementVNode, normalizeStyle, useSSRContext, ref, watch, mergeProps } from 'vue';
import { G as makeInner, H as __extends, I as getSectorCornerRadius, J as initProps, K as updateProps$1, L as saveOldStyle, M as setStatesStylesFromModel, N as toggleHoverEmphasis, O as setLabelStyle, P as getLabelStatesModels, Q as removeElementWithFadeOut, R as ChartView, S as makeSeriesEncodeForNameBased, T as getPercentSeats, U as defaultEmphasis, V as SeriesModel, W as ComponentModel, X as createTextStyle, Y as windowOpen, Z as getECData, $ as getLayoutRect, a0 as ComponentView, a1 as isNameSpecified, a2 as Model, a3 as enableHoverEmphasis, a4 as setTooltipConfig, a5 as box, a6 as createOrUpdatePatternFromDecal, a7 as createSymbol, a8 as getLayoutParams, a9 as inheritDefaultOption, aa as mergeLayoutParam, ab as createIcon, c as buildProps, d as definePropType, g as useNamespace, w as withInstall, ac as DISPLAY_STATES, ad as SPECIAL_STATES, ae as parsePercent, af as prepareSeriesDataSchema, ag as SeriesData, ah as normalizeCssArray, v as _export_sfc, ai as use, aj as install$5, ak as install$6, _ as _export_sfc$1, al as createLegacyDataSelectAction, am as linearMap, an as shiftLayoutOnY, ao as prepareLayoutList, ap as shiftLayoutOnX, aq as hideOverlap, ar as isElementRemoved, as as labelInner, at as animateLabelValue } from './server.mjs';
import { _ as __nuxt_component_7 } from './client-only-DO9VxlB2.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import * as zrUtil from 'zrender/lib/core/util.js';
import { extend, retrieve3, retrieve2, defaults, each as each$1, isNumber, isArray, curry as curry$1, isFunction, keys, filter, indexOf } from 'zrender/lib/core/util.js';
import PathProxy, { normalizeArcAngles } from 'zrender/lib/core/PathProxy.js';
import { normalizeRadian } from 'zrender/lib/contain/util.js';
import { quadraticProjectPoint, cubicProjectPoint } from 'zrender/lib/core/curve.js';
import { invert } from 'zrender/lib/core/matrix.js';
import * as vec2 from 'zrender/lib/core/vector.js';
import Point from 'zrender/lib/core/Point.js';
import Polyline from 'zrender/lib/graphic/shape/Polyline.js';
import Path from 'zrender/lib/graphic/Path.js';
import ZRText from 'zrender/lib/graphic/Text.js';
import Sector from 'zrender/lib/graphic/shape/Sector.js';
import Rect from 'zrender/lib/graphic/shape/Rect.js';
import { parse, stringify } from 'zrender/lib/tool/color.js';
import Group$2 from 'zrender/lib/graphic/Group.js';
import Transformable from 'zrender/lib/core/Transformable.js';
import BoundingRect from 'zrender/lib/core/BoundingRect.js';

var PI2$1 = Math.PI * 2;
var CMD = PathProxy.CMD;
var DEFAULT_SEARCH_SPACE = ["top", "right", "bottom", "left"];
function getCandidateAnchor(pos, distance, rect, outPt, outDir) {
  var width = rect.width;
  var height = rect.height;
  switch (pos) {
    case "top":
      outPt.set(rect.x + width / 2, rect.y - distance);
      outDir.set(0, -1);
      break;
    case "bottom":
      outPt.set(rect.x + width / 2, rect.y + height + distance);
      outDir.set(0, 1);
      break;
    case "left":
      outPt.set(rect.x - distance, rect.y + height / 2);
      outDir.set(-1, 0);
      break;
    case "right":
      outPt.set(rect.x + width + distance, rect.y + height / 2);
      outDir.set(1, 0);
      break;
  }
}
function projectPointToArc(cx, cy, r, startAngle, endAngle, anticlockwise, x, y, out) {
  x -= cx;
  y -= cy;
  var d = Math.sqrt(x * x + y * y);
  x /= d;
  y /= d;
  var ox = x * r + cx;
  var oy = y * r + cy;
  if (Math.abs(startAngle - endAngle) % PI2$1 < 1e-4) {
    out[0] = ox;
    out[1] = oy;
    return d - r;
  }
  if (anticlockwise) {
    var tmp = startAngle;
    startAngle = normalizeRadian(endAngle);
    endAngle = normalizeRadian(tmp);
  } else {
    startAngle = normalizeRadian(startAngle);
    endAngle = normalizeRadian(endAngle);
  }
  if (startAngle > endAngle) {
    endAngle += PI2$1;
  }
  var angle = Math.atan2(y, x);
  if (angle < 0) {
    angle += PI2$1;
  }
  if (angle >= startAngle && angle <= endAngle || angle + PI2$1 >= startAngle && angle + PI2$1 <= endAngle) {
    out[0] = ox;
    out[1] = oy;
    return d - r;
  }
  var x1 = r * Math.cos(startAngle) + cx;
  var y1 = r * Math.sin(startAngle) + cy;
  var x2 = r * Math.cos(endAngle) + cx;
  var y2 = r * Math.sin(endAngle) + cy;
  var d1 = (x1 - x) * (x1 - x) + (y1 - y) * (y1 - y);
  var d2 = (x2 - x) * (x2 - x) + (y2 - y) * (y2 - y);
  if (d1 < d2) {
    out[0] = x1;
    out[1] = y1;
    return Math.sqrt(d1);
  } else {
    out[0] = x2;
    out[1] = y2;
    return Math.sqrt(d2);
  }
}
function projectPointToLine(x1, y1, x2, y2, x, y, out, limitToEnds) {
  var dx = x - x1;
  var dy = y - y1;
  var dx1 = x2 - x1;
  var dy1 = y2 - y1;
  var lineLen = Math.sqrt(dx1 * dx1 + dy1 * dy1);
  dx1 /= lineLen;
  dy1 /= lineLen;
  var projectedLen = dx * dx1 + dy * dy1;
  var t = projectedLen / lineLen;
  if (limitToEnds) {
    t = Math.min(Math.max(t, 0), 1);
  }
  t *= lineLen;
  var ox = out[0] = x1 + t * dx1;
  var oy = out[1] = y1 + t * dy1;
  return Math.sqrt((ox - x) * (ox - x) + (oy - y) * (oy - y));
}
function projectPointToRect(x1, y1, width, height, x, y, out) {
  if (width < 0) {
    x1 = x1 + width;
    width = -width;
  }
  if (height < 0) {
    y1 = y1 + height;
    height = -height;
  }
  var x2 = x1 + width;
  var y2 = y1 + height;
  var ox = out[0] = Math.min(Math.max(x, x1), x2);
  var oy = out[1] = Math.min(Math.max(y, y1), y2);
  return Math.sqrt((ox - x) * (ox - x) + (oy - y) * (oy - y));
}
var tmpPt = [];
function nearestPointOnRect(pt, rect, out) {
  var dist = projectPointToRect(rect.x, rect.y, rect.width, rect.height, pt.x, pt.y, tmpPt);
  out.set(tmpPt[0], tmpPt[1]);
  return dist;
}
function nearestPointOnPath(pt, path, out) {
  var xi = 0;
  var yi = 0;
  var x0 = 0;
  var y0 = 0;
  var x1;
  var y1;
  var minDist = Infinity;
  var data = path.data;
  var x = pt.x;
  var y = pt.y;
  for (var i = 0; i < data.length; ) {
    var cmd = data[i++];
    if (i === 1) {
      xi = data[i];
      yi = data[i + 1];
      x0 = xi;
      y0 = yi;
    }
    var d = minDist;
    switch (cmd) {
      case CMD.M:
        x0 = data[i++];
        y0 = data[i++];
        xi = x0;
        yi = y0;
        break;
      case CMD.L:
        d = projectPointToLine(xi, yi, data[i], data[i + 1], x, y, tmpPt, true);
        xi = data[i++];
        yi = data[i++];
        break;
      case CMD.C:
        d = cubicProjectPoint(xi, yi, data[i++], data[i++], data[i++], data[i++], data[i], data[i + 1], x, y, tmpPt);
        xi = data[i++];
        yi = data[i++];
        break;
      case CMD.Q:
        d = quadraticProjectPoint(xi, yi, data[i++], data[i++], data[i], data[i + 1], x, y, tmpPt);
        xi = data[i++];
        yi = data[i++];
        break;
      case CMD.A:
        var cx = data[i++];
        var cy = data[i++];
        var rx = data[i++];
        var ry = data[i++];
        var theta = data[i++];
        var dTheta = data[i++];
        i += 1;
        var anticlockwise = !!(1 - data[i++]);
        x1 = Math.cos(theta) * rx + cx;
        y1 = Math.sin(theta) * ry + cy;
        if (i <= 1) {
          x0 = x1;
          y0 = y1;
        }
        var _x = (x - cx) * ry / rx + cx;
        d = projectPointToArc(cx, cy, ry, theta, theta + dTheta, anticlockwise, _x, y, tmpPt);
        xi = Math.cos(theta + dTheta) * rx + cx;
        yi = Math.sin(theta + dTheta) * ry + cy;
        break;
      case CMD.R:
        x0 = xi = data[i++];
        y0 = yi = data[i++];
        var width = data[i++];
        var height = data[i++];
        d = projectPointToRect(x0, y0, width, height, x, y, tmpPt);
        break;
      case CMD.Z:
        d = projectPointToLine(xi, yi, x0, y0, x, y, tmpPt, true);
        xi = x0;
        yi = y0;
        break;
    }
    if (d < minDist) {
      minDist = d;
      out.set(tmpPt[0], tmpPt[1]);
    }
  }
  return minDist;
}
var pt0 = new Point();
var pt1 = new Point();
var pt2 = new Point();
var dir = new Point();
var dir2 = new Point();
function updateLabelLinePoints(target, labelLineModel) {
  if (!target) {
    return;
  }
  var labelLine = target.getTextGuideLine();
  var label = target.getTextContent();
  if (!(label && labelLine)) {
    return;
  }
  var labelGuideConfig = target.textGuideLineConfig || {};
  var points = [[0, 0], [0, 0], [0, 0]];
  var searchSpace = labelGuideConfig.candidates || DEFAULT_SEARCH_SPACE;
  var labelRect = label.getBoundingRect().clone();
  labelRect.applyTransform(label.getComputedTransform());
  var minDist = Infinity;
  var anchorPoint = labelGuideConfig.anchor;
  var targetTransform = target.getComputedTransform();
  var targetInversedTransform = targetTransform && invert([], targetTransform);
  var len = labelLineModel.get("length2") || 0;
  if (anchorPoint) {
    pt2.copy(anchorPoint);
  }
  for (var i = 0; i < searchSpace.length; i++) {
    var candidate = searchSpace[i];
    getCandidateAnchor(candidate, 0, labelRect, pt0, dir);
    Point.scaleAndAdd(pt1, pt0, dir, len);
    pt1.transform(targetInversedTransform);
    var boundingRect = target.getBoundingRect();
    var dist = anchorPoint ? anchorPoint.distance(pt1) : target instanceof Path ? nearestPointOnPath(pt1, target.path, pt2) : nearestPointOnRect(pt1, boundingRect, pt2);
    if (dist < minDist) {
      minDist = dist;
      pt1.transform(targetTransform);
      pt2.transform(targetTransform);
      pt2.toArray(points[0]);
      pt1.toArray(points[1]);
      pt0.toArray(points[2]);
    }
  }
  limitTurnAngle(points, labelLineModel.get("minTurnAngle"));
  labelLine.setShape({
    points
  });
}
var tmpArr = [];
var tmpProjPoint = new Point();
function limitTurnAngle(linePoints, minTurnAngle) {
  if (!(minTurnAngle <= 180 && minTurnAngle > 0)) {
    return;
  }
  minTurnAngle = minTurnAngle / 180 * Math.PI;
  pt0.fromArray(linePoints[0]);
  pt1.fromArray(linePoints[1]);
  pt2.fromArray(linePoints[2]);
  Point.sub(dir, pt0, pt1);
  Point.sub(dir2, pt2, pt1);
  var len1 = dir.len();
  var len2 = dir2.len();
  if (len1 < 1e-3 || len2 < 1e-3) {
    return;
  }
  dir.scale(1 / len1);
  dir2.scale(1 / len2);
  var angleCos = dir.dot(dir2);
  var minTurnAngleCos = Math.cos(minTurnAngle);
  if (minTurnAngleCos < angleCos) {
    var d = projectPointToLine(pt1.x, pt1.y, pt2.x, pt2.y, pt0.x, pt0.y, tmpArr, false);
    tmpProjPoint.fromArray(tmpArr);
    tmpProjPoint.scaleAndAdd(dir2, d / Math.tan(Math.PI - minTurnAngle));
    var t = pt2.x !== pt1.x ? (tmpProjPoint.x - pt1.x) / (pt2.x - pt1.x) : (tmpProjPoint.y - pt1.y) / (pt2.y - pt1.y);
    if (isNaN(t)) {
      return;
    }
    if (t < 0) {
      Point.copy(tmpProjPoint, pt1);
    } else if (t > 1) {
      Point.copy(tmpProjPoint, pt2);
    }
    tmpProjPoint.toArray(linePoints[1]);
  }
}
function limitSurfaceAngle(linePoints, surfaceNormal, maxSurfaceAngle) {
  if (!(maxSurfaceAngle <= 180 && maxSurfaceAngle > 0)) {
    return;
  }
  maxSurfaceAngle = maxSurfaceAngle / 180 * Math.PI;
  pt0.fromArray(linePoints[0]);
  pt1.fromArray(linePoints[1]);
  pt2.fromArray(linePoints[2]);
  Point.sub(dir, pt1, pt0);
  Point.sub(dir2, pt2, pt1);
  var len1 = dir.len();
  var len2 = dir2.len();
  if (len1 < 1e-3 || len2 < 1e-3) {
    return;
  }
  dir.scale(1 / len1);
  dir2.scale(1 / len2);
  var angleCos = dir.dot(surfaceNormal);
  var maxSurfaceAngleCos = Math.cos(maxSurfaceAngle);
  if (angleCos < maxSurfaceAngleCos) {
    var d = projectPointToLine(pt1.x, pt1.y, pt2.x, pt2.y, pt0.x, pt0.y, tmpArr, false);
    tmpProjPoint.fromArray(tmpArr);
    var HALF_PI = Math.PI / 2;
    var angle2 = Math.acos(dir2.dot(surfaceNormal));
    var newAngle = HALF_PI + angle2 - maxSurfaceAngle;
    if (newAngle >= HALF_PI) {
      Point.copy(tmpProjPoint, pt2);
    } else {
      tmpProjPoint.scaleAndAdd(dir2, d / Math.tan(Math.PI / 2 - newAngle));
      var t = pt2.x !== pt1.x ? (tmpProjPoint.x - pt1.x) / (pt2.x - pt1.x) : (tmpProjPoint.y - pt1.y) / (pt2.y - pt1.y);
      if (isNaN(t)) {
        return;
      }
      if (t < 0) {
        Point.copy(tmpProjPoint, pt1);
      } else if (t > 1) {
        Point.copy(tmpProjPoint, pt2);
      }
    }
    tmpProjPoint.toArray(linePoints[1]);
  }
}
function setLabelLineState(labelLine, ignore, stateName, stateModel) {
  var isNormal = stateName === "normal";
  var stateObj = isNormal ? labelLine : labelLine.ensureState(stateName);
  stateObj.ignore = ignore;
  var smooth = stateModel.get("smooth");
  if (smooth && smooth === true) {
    smooth = 0.3;
  }
  stateObj.shape = stateObj.shape || {};
  if (smooth > 0) {
    stateObj.shape.smooth = smooth;
  }
  var styleObj = stateModel.getModel("lineStyle").getLineStyle();
  isNormal ? labelLine.useStyle(styleObj) : stateObj.style = styleObj;
}
function buildLabelLinePath(path, shape) {
  var smooth = shape.smooth;
  var points = shape.points;
  if (!points) {
    return;
  }
  path.moveTo(points[0][0], points[0][1]);
  if (smooth > 0 && points.length >= 3) {
    var len1 = vec2.dist(points[0], points[1]);
    var len2 = vec2.dist(points[1], points[2]);
    if (!len1 || !len2) {
      path.lineTo(points[1][0], points[1][1]);
      path.lineTo(points[2][0], points[2][1]);
      return;
    }
    var moveLen = Math.min(len1, len2) * smooth;
    var midPoint0 = vec2.lerp([], points[1], points[0], moveLen / len1);
    var midPoint2 = vec2.lerp([], points[1], points[2], moveLen / len2);
    var midPoint1 = vec2.lerp([], midPoint0, midPoint2, 0.5);
    path.bezierCurveTo(midPoint0[0], midPoint0[1], midPoint0[0], midPoint0[1], midPoint1[0], midPoint1[1]);
    path.bezierCurveTo(midPoint2[0], midPoint2[1], midPoint2[0], midPoint2[1], points[2][0], points[2][1]);
  } else {
    for (var i = 1; i < points.length; i++) {
      path.lineTo(points[i][0], points[i][1]);
    }
  }
}
function setLabelLineStyle(targetEl, statesModels, defaultStyle) {
  var labelLine = targetEl.getTextGuideLine();
  var label = targetEl.getTextContent();
  if (!label) {
    if (labelLine) {
      targetEl.removeTextGuideLine();
    }
    return;
  }
  var normalModel = statesModels.normal;
  var showNormal = normalModel.get("show");
  var labelIgnoreNormal = label.ignore;
  for (var i = 0; i < DISPLAY_STATES.length; i++) {
    var stateName = DISPLAY_STATES[i];
    var stateModel = statesModels[stateName];
    var isNormal = stateName === "normal";
    if (stateModel) {
      var stateShow = stateModel.get("show");
      var isLabelIgnored = isNormal ? labelIgnoreNormal : retrieve2(label.states[stateName] && label.states[stateName].ignore, labelIgnoreNormal);
      if (isLabelIgnored || !retrieve2(stateShow, showNormal)) {
        var stateObj = isNormal ? labelLine : labelLine && labelLine.states[stateName];
        if (stateObj) {
          stateObj.ignore = true;
        }
        if (!!labelLine) {
          setLabelLineState(labelLine, true, stateName, stateModel);
        }
        continue;
      }
      if (!labelLine) {
        labelLine = new Polyline();
        targetEl.setTextGuideLine(labelLine);
        if (!isNormal && (labelIgnoreNormal || !showNormal)) {
          setLabelLineState(labelLine, true, "normal", statesModels.normal);
        }
        if (targetEl.stateProxy) {
          labelLine.stateProxy = targetEl.stateProxy;
        }
      }
      setLabelLineState(labelLine, false, stateName, stateModel);
    }
  }
  if (labelLine) {
    defaults(labelLine.style, defaultStyle);
    labelLine.style.fill = null;
    var showAbove = normalModel.get("showAbove");
    var labelLineConfig = targetEl.textGuideLineConfig = targetEl.textGuideLineConfig || {};
    labelLineConfig.showAbove = showAbove || false;
    labelLine.buildPath = buildLabelLinePath;
  }
}
function getLabelLineStatesModels(itemModel, labelLineName) {
  labelLineName = labelLineName || "labelLine";
  var statesModels = {
    normal: itemModel.getModel(labelLineName)
  };
  for (var i = 0; i < SPECIAL_STATES.length; i++) {
    var stateName = SPECIAL_STATES[i];
    statesModels[stateName] = itemModel.getModel([stateName, labelLineName]);
  }
  return statesModels;
}
function cloneArr(points) {
  if (points) {
    var newPoints = [];
    for (var i = 0; i < points.length; i++) {
      newPoints.push(points[i].slice());
    }
    return newPoints;
  }
}
function prepareLayoutCallbackParams(labelItem, hostEl) {
  var label = labelItem.label;
  var labelLine = hostEl && hostEl.getTextGuideLine();
  return {
    dataIndex: labelItem.dataIndex,
    dataType: labelItem.dataType,
    seriesIndex: labelItem.seriesModel.seriesIndex,
    text: labelItem.label.style.text,
    rect: labelItem.hostRect,
    labelRect: labelItem.rect,
    // x: labelAttr.x,
    // y: labelAttr.y,
    align: label.style.align,
    verticalAlign: label.style.verticalAlign,
    labelLinePoints: cloneArr(labelLine && labelLine.shape.points)
  };
}
var LABEL_OPTION_TO_STYLE_KEYS = ["align", "verticalAlign", "width", "height", "fontSize"];
var dummyTransformable = new Transformable();
var labelLayoutInnerStore = makeInner();
var labelLineAnimationStore = makeInner();
function extendWithKeys(target, source, keys2) {
  for (var i = 0; i < keys2.length; i++) {
    var key = keys2[i];
    if (source[key] != null) {
      target[key] = source[key];
    }
  }
}
var LABEL_LAYOUT_PROPS = ["x", "y", "rotation"];
var LabelManager = (
  /** @class */
  function() {
    function LabelManager2() {
      this._labelList = [];
      this._chartViewList = [];
    }
    LabelManager2.prototype.clearLabels = function() {
      this._labelList = [];
      this._chartViewList = [];
    };
    LabelManager2.prototype._addLabel = function(dataIndex, dataType, seriesModel, label, layoutOption) {
      var labelStyle = label.style;
      var hostEl = label.__hostTarget;
      var textConfig = hostEl.textConfig || {};
      var labelTransform = label.getComputedTransform();
      var labelRect = label.getBoundingRect().plain();
      BoundingRect.applyTransform(labelRect, labelRect, labelTransform);
      if (labelTransform) {
        dummyTransformable.setLocalTransform(labelTransform);
      } else {
        dummyTransformable.x = dummyTransformable.y = dummyTransformable.rotation = dummyTransformable.originX = dummyTransformable.originY = 0;
        dummyTransformable.scaleX = dummyTransformable.scaleY = 1;
      }
      dummyTransformable.rotation = normalizeRadian(dummyTransformable.rotation);
      var host = label.__hostTarget;
      var hostRect;
      if (host) {
        hostRect = host.getBoundingRect().plain();
        var transform = host.getComputedTransform();
        BoundingRect.applyTransform(hostRect, hostRect, transform);
      }
      var labelGuide = hostRect && host.getTextGuideLine();
      this._labelList.push({
        label,
        labelLine: labelGuide,
        seriesModel,
        dataIndex,
        dataType,
        layoutOption,
        computedLayoutOption: null,
        rect: labelRect,
        hostRect,
        // Label with lower priority will be hidden when overlapped
        // Use rect size as default priority
        priority: hostRect ? hostRect.width * hostRect.height : 0,
        // Save default label attributes.
        // For restore if developers want get back to default value in callback.
        defaultAttr: {
          ignore: label.ignore,
          labelGuideIgnore: labelGuide && labelGuide.ignore,
          x: dummyTransformable.x,
          y: dummyTransformable.y,
          scaleX: dummyTransformable.scaleX,
          scaleY: dummyTransformable.scaleY,
          rotation: dummyTransformable.rotation,
          style: {
            x: labelStyle.x,
            y: labelStyle.y,
            align: labelStyle.align,
            verticalAlign: labelStyle.verticalAlign,
            width: labelStyle.width,
            height: labelStyle.height,
            fontSize: labelStyle.fontSize
          },
          cursor: label.cursor,
          attachedPos: textConfig.position,
          attachedRot: textConfig.rotation
        }
      });
    };
    LabelManager2.prototype.addLabelsOfSeries = function(chartView) {
      var _this = this;
      this._chartViewList.push(chartView);
      var seriesModel = chartView.__model;
      var layoutOption = seriesModel.get("labelLayout");
      if (!(isFunction(layoutOption) || keys(layoutOption).length)) {
        return;
      }
      chartView.group.traverse(function(child) {
        if (child.ignore) {
          return true;
        }
        var textEl = child.getTextContent();
        var ecData = getECData(child);
        if (textEl && !textEl.disableLabelLayout) {
          _this._addLabel(ecData.dataIndex, ecData.dataType, seriesModel, textEl, layoutOption);
        }
      });
    };
    LabelManager2.prototype.updateLayoutConfig = function(api) {
      var width = api.getWidth();
      var height = api.getHeight();
      function createDragHandler(el, labelLineModel) {
        return function() {
          updateLabelLinePoints(el, labelLineModel);
        };
      }
      for (var i = 0; i < this._labelList.length; i++) {
        var labelItem = this._labelList[i];
        var label = labelItem.label;
        var hostEl = label.__hostTarget;
        var defaultLabelAttr = labelItem.defaultAttr;
        var layoutOption = void 0;
        if (isFunction(labelItem.layoutOption)) {
          layoutOption = labelItem.layoutOption(prepareLayoutCallbackParams(labelItem, hostEl));
        } else {
          layoutOption = labelItem.layoutOption;
        }
        layoutOption = layoutOption || {};
        labelItem.computedLayoutOption = layoutOption;
        var degreeToRadian = Math.PI / 180;
        if (hostEl) {
          hostEl.setTextConfig({
            // Force to set local false.
            local: false,
            // Ignore position and rotation config on the host el if x or y is changed.
            position: layoutOption.x != null || layoutOption.y != null ? null : defaultLabelAttr.attachedPos,
            // Ignore rotation config on the host el if rotation is changed.
            rotation: layoutOption.rotate != null ? layoutOption.rotate * degreeToRadian : defaultLabelAttr.attachedRot,
            offset: [layoutOption.dx || 0, layoutOption.dy || 0]
          });
        }
        var needsUpdateLabelLine = false;
        if (layoutOption.x != null) {
          label.x = parsePercent(layoutOption.x, width);
          label.setStyle("x", 0);
          needsUpdateLabelLine = true;
        } else {
          label.x = defaultLabelAttr.x;
          label.setStyle("x", defaultLabelAttr.style.x);
        }
        if (layoutOption.y != null) {
          label.y = parsePercent(layoutOption.y, height);
          label.setStyle("y", 0);
          needsUpdateLabelLine = true;
        } else {
          label.y = defaultLabelAttr.y;
          label.setStyle("y", defaultLabelAttr.style.y);
        }
        if (layoutOption.labelLinePoints) {
          var guideLine = hostEl.getTextGuideLine();
          if (guideLine) {
            guideLine.setShape({
              points: layoutOption.labelLinePoints
            });
            needsUpdateLabelLine = false;
          }
        }
        var labelLayoutStore = labelLayoutInnerStore(label);
        labelLayoutStore.needsUpdateLabelLine = needsUpdateLabelLine;
        label.rotation = layoutOption.rotate != null ? layoutOption.rotate * degreeToRadian : defaultLabelAttr.rotation;
        label.scaleX = defaultLabelAttr.scaleX;
        label.scaleY = defaultLabelAttr.scaleY;
        for (var k = 0; k < LABEL_OPTION_TO_STYLE_KEYS.length; k++) {
          var key = LABEL_OPTION_TO_STYLE_KEYS[k];
          label.setStyle(key, layoutOption[key] != null ? layoutOption[key] : defaultLabelAttr.style[key]);
        }
        if (layoutOption.draggable) {
          label.draggable = true;
          label.cursor = "move";
          if (hostEl) {
            var hostModel = labelItem.seriesModel;
            if (labelItem.dataIndex != null) {
              var data = labelItem.seriesModel.getData(labelItem.dataType);
              hostModel = data.getItemModel(labelItem.dataIndex);
            }
            label.on("drag", createDragHandler(hostEl, hostModel.getModel("labelLine")));
          }
        } else {
          label.off("drag");
          label.cursor = defaultLabelAttr.cursor;
        }
      }
    };
    LabelManager2.prototype.layout = function(api) {
      var width = api.getWidth();
      var height = api.getHeight();
      var labelList = prepareLayoutList(this._labelList);
      var labelsNeedsAdjustOnX = filter(labelList, function(item) {
        return item.layoutOption.moveOverlap === "shiftX";
      });
      var labelsNeedsAdjustOnY = filter(labelList, function(item) {
        return item.layoutOption.moveOverlap === "shiftY";
      });
      shiftLayoutOnX(labelsNeedsAdjustOnX, 0, width);
      shiftLayoutOnY(labelsNeedsAdjustOnY, 0, height);
      var labelsNeedsHideOverlap = filter(labelList, function(item) {
        return item.layoutOption.hideOverlap;
      });
      hideOverlap(labelsNeedsHideOverlap);
    };
    LabelManager2.prototype.processLabelsOverall = function() {
      var _this = this;
      each$1(this._chartViewList, function(chartView) {
        var seriesModel = chartView.__model;
        var ignoreLabelLineUpdate = chartView.ignoreLabelLineUpdate;
        var animationEnabled = seriesModel.isAnimationEnabled();
        chartView.group.traverse(function(child) {
          if (child.ignore && !child.forceLabelAnimation) {
            return true;
          }
          var needsUpdateLabelLine = !ignoreLabelLineUpdate;
          var label = child.getTextContent();
          if (!needsUpdateLabelLine && label) {
            needsUpdateLabelLine = labelLayoutInnerStore(label).needsUpdateLabelLine;
          }
          if (needsUpdateLabelLine) {
            _this._updateLabelLine(child, seriesModel);
          }
          if (animationEnabled) {
            _this._animateLabels(child, seriesModel);
          }
        });
      });
    };
    LabelManager2.prototype._updateLabelLine = function(el, seriesModel) {
      var textEl = el.getTextContent();
      var ecData = getECData(el);
      var dataIndex = ecData.dataIndex;
      if (textEl && dataIndex != null) {
        var data = seriesModel.getData(ecData.dataType);
        var itemModel = data.getItemModel(dataIndex);
        var defaultStyle = {};
        var visualStyle = data.getItemVisual(dataIndex, "style");
        if (visualStyle) {
          var visualType = data.getVisual("drawType");
          defaultStyle.stroke = visualStyle[visualType];
        }
        var labelLineModel = itemModel.getModel("labelLine");
        setLabelLineStyle(el, getLabelLineStatesModels(itemModel), defaultStyle);
        updateLabelLinePoints(el, labelLineModel);
      }
    };
    LabelManager2.prototype._animateLabels = function(el, seriesModel) {
      var textEl = el.getTextContent();
      var guideLine = el.getTextGuideLine();
      if (textEl && (el.forceLabelAnimation || !textEl.ignore && !textEl.invisible && !el.disableLabelAnimation && !isElementRemoved(el))) {
        var layoutStore = labelLayoutInnerStore(textEl);
        var oldLayout = layoutStore.oldLayout;
        var ecData = getECData(el);
        var dataIndex = ecData.dataIndex;
        var newProps = {
          x: textEl.x,
          y: textEl.y,
          rotation: textEl.rotation
        };
        var data = seriesModel.getData(ecData.dataType);
        if (!oldLayout) {
          textEl.attr(newProps);
          if (!labelInner(textEl).valueAnimation) {
            var oldOpacity = retrieve2(textEl.style.opacity, 1);
            textEl.style.opacity = 0;
            initProps(textEl, {
              style: {
                opacity: oldOpacity
              }
            }, seriesModel, dataIndex);
          }
        } else {
          textEl.attr(oldLayout);
          var prevStates = el.prevStates;
          if (prevStates) {
            if (indexOf(prevStates, "select") >= 0) {
              textEl.attr(layoutStore.oldLayoutSelect);
            }
            if (indexOf(prevStates, "emphasis") >= 0) {
              textEl.attr(layoutStore.oldLayoutEmphasis);
            }
          }
          updateProps$1(textEl, newProps, seriesModel, dataIndex);
        }
        layoutStore.oldLayout = newProps;
        if (textEl.states.select) {
          var layoutSelect = layoutStore.oldLayoutSelect = {};
          extendWithKeys(layoutSelect, newProps, LABEL_LAYOUT_PROPS);
          extendWithKeys(layoutSelect, textEl.states.select, LABEL_LAYOUT_PROPS);
        }
        if (textEl.states.emphasis) {
          var layoutEmphasis = layoutStore.oldLayoutEmphasis = {};
          extendWithKeys(layoutEmphasis, newProps, LABEL_LAYOUT_PROPS);
          extendWithKeys(layoutEmphasis, textEl.states.emphasis, LABEL_LAYOUT_PROPS);
        }
        animateLabelValue(textEl, dataIndex, data, seriesModel, seriesModel);
      }
      if (guideLine && !guideLine.ignore && !guideLine.invisible) {
        var layoutStore = labelLineAnimationStore(guideLine);
        var oldLayout = layoutStore.oldLayout;
        var newLayout = {
          points: guideLine.shape.points
        };
        if (!oldLayout) {
          guideLine.setShape(newLayout);
          guideLine.style.strokePercent = 0;
          initProps(guideLine, {
            style: {
              strokePercent: 1
            }
          }, seriesModel);
        } else {
          guideLine.attr({
            shape: oldLayout
          });
          updateProps$1(guideLine, {
            shape: newLayout
          }, seriesModel);
        }
        layoutStore.oldLayout = newLayout;
      }
    };
    return LabelManager2;
  }()
);
var getLabelManager = makeInner();
function installLabelLayout(registers) {
  registers.registerUpdateLifecycle("series:beforeupdate", function(ecModel, api, params) {
    var labelManager = getLabelManager(api).labelManager;
    if (!labelManager) {
      labelManager = getLabelManager(api).labelManager = new LabelManager();
    }
    labelManager.clearLabels();
  });
  registers.registerUpdateLifecycle("series:layoutlabels", function(ecModel, api, params) {
    var labelManager = getLabelManager(api).labelManager;
    params.updatedSeries.forEach(function(series) {
      labelManager.addLabelsOfSeries(api.getViewOfSeriesModel(series));
    });
    labelManager.updateLayoutConfig(api);
    labelManager.layout(api);
    labelManager.processLabelsOverall();
  });
}
var PI2 = Math.PI * 2;
var RADIAN$1 = Math.PI / 180;
function getViewRect(seriesModel, api) {
  return getLayoutRect(seriesModel.getBoxLayoutParams(), {
    width: api.getWidth(),
    height: api.getHeight()
  });
}
function getBasicPieLayout(seriesModel, api) {
  var viewRect = getViewRect(seriesModel, api);
  var center = seriesModel.get("center");
  var radius = seriesModel.get("radius");
  if (!zrUtil.isArray(radius)) {
    radius = [0, radius];
  }
  var width = parsePercent(viewRect.width, api.getWidth());
  var height = parsePercent(viewRect.height, api.getHeight());
  var size = Math.min(width, height);
  var r0 = parsePercent(radius[0], size / 2);
  var r = parsePercent(radius[1], size / 2);
  var cx;
  var cy;
  var coordSys = seriesModel.coordinateSystem;
  if (coordSys) {
    var point = coordSys.dataToPoint(center);
    cx = point[0] || 0;
    cy = point[1] || 0;
  } else {
    if (!zrUtil.isArray(center)) {
      center = [center, center];
    }
    cx = parsePercent(center[0], width) + viewRect.x;
    cy = parsePercent(center[1], height) + viewRect.y;
  }
  return {
    cx,
    cy,
    r0,
    r
  };
}
function pieLayout(seriesType, ecModel, api) {
  ecModel.eachSeriesByType(seriesType, function(seriesModel) {
    var data = seriesModel.getData();
    var valueDim = data.mapDimension("value");
    var viewRect = getViewRect(seriesModel, api);
    var _a = getBasicPieLayout(seriesModel, api), cx = _a.cx, cy = _a.cy, r = _a.r, r0 = _a.r0;
    var startAngle = -seriesModel.get("startAngle") * RADIAN$1;
    var endAngle = seriesModel.get("endAngle");
    var padAngle = seriesModel.get("padAngle") * RADIAN$1;
    endAngle = endAngle === "auto" ? startAngle - PI2 : -endAngle * RADIAN$1;
    var minAngle = seriesModel.get("minAngle") * RADIAN$1;
    var minAndPadAngle = minAngle + padAngle;
    var validDataCount = 0;
    data.each(valueDim, function(value) {
      !isNaN(value) && validDataCount++;
    });
    var sum = data.getSum(valueDim);
    var unitRadian = Math.PI / (sum || validDataCount) * 2;
    var clockwise = seriesModel.get("clockwise");
    var roseType = seriesModel.get("roseType");
    var stillShowZeroSum = seriesModel.get("stillShowZeroSum");
    var extent = data.getDataExtent(valueDim);
    extent[0] = 0;
    var dir3 = clockwise ? 1 : -1;
    var angles = [startAngle, endAngle];
    var halfPadAngle = dir3 * padAngle / 2;
    normalizeArcAngles(angles, !clockwise);
    startAngle = angles[0], endAngle = angles[1];
    var layoutData = getSeriesLayoutData(seriesModel);
    layoutData.startAngle = startAngle;
    layoutData.endAngle = endAngle;
    layoutData.clockwise = clockwise;
    var angleRange = Math.abs(endAngle - startAngle);
    var restAngle = angleRange;
    var valueSumLargerThanMinAngle = 0;
    var currentAngle = startAngle;
    data.setLayout({
      viewRect,
      r
    });
    data.each(valueDim, function(value, idx) {
      var angle;
      if (isNaN(value)) {
        data.setItemLayout(idx, {
          angle: NaN,
          startAngle: NaN,
          endAngle: NaN,
          clockwise,
          cx,
          cy,
          r0,
          r: roseType ? NaN : r
        });
        return;
      }
      if (roseType !== "area") {
        angle = sum === 0 && stillShowZeroSum ? unitRadian : value * unitRadian;
      } else {
        angle = angleRange / validDataCount;
      }
      if (angle < minAndPadAngle) {
        angle = minAndPadAngle;
        restAngle -= minAndPadAngle;
      } else {
        valueSumLargerThanMinAngle += value;
      }
      var endAngle2 = currentAngle + dir3 * angle;
      var actualStartAngle = 0;
      var actualEndAngle = 0;
      if (padAngle > angle) {
        actualStartAngle = currentAngle + dir3 * angle / 2;
        actualEndAngle = actualStartAngle;
      } else {
        actualStartAngle = currentAngle + halfPadAngle;
        actualEndAngle = endAngle2 - halfPadAngle;
      }
      data.setItemLayout(idx, {
        angle,
        startAngle: actualStartAngle,
        endAngle: actualEndAngle,
        clockwise,
        cx,
        cy,
        r0,
        r: roseType ? linearMap(value, extent, [r0, r]) : r
      });
      currentAngle = endAngle2;
    });
    if (restAngle < PI2 && validDataCount) {
      if (restAngle <= 1e-3) {
        var angle_1 = angleRange / validDataCount;
        data.each(valueDim, function(value, idx) {
          if (!isNaN(value)) {
            var layout_1 = data.getItemLayout(idx);
            layout_1.angle = angle_1;
            var actualStartAngle = 0;
            var actualEndAngle = 0;
            if (angle_1 < padAngle) {
              actualStartAngle = startAngle + dir3 * (idx + 1 / 2) * angle_1;
              actualEndAngle = actualStartAngle;
            } else {
              actualStartAngle = startAngle + dir3 * idx * angle_1 + halfPadAngle;
              actualEndAngle = startAngle + dir3 * (idx + 1) * angle_1 - halfPadAngle;
            }
            layout_1.startAngle = actualStartAngle;
            layout_1.endAngle = actualEndAngle;
          }
        });
      } else {
        unitRadian = restAngle / valueSumLargerThanMinAngle;
        currentAngle = startAngle;
        data.each(valueDim, function(value, idx) {
          if (!isNaN(value)) {
            var layout_2 = data.getItemLayout(idx);
            var angle = layout_2.angle === minAndPadAngle ? minAndPadAngle : value * unitRadian;
            var actualStartAngle = 0;
            var actualEndAngle = 0;
            if (angle < padAngle) {
              actualStartAngle = currentAngle + dir3 * angle / 2;
              actualEndAngle = actualStartAngle;
            } else {
              actualStartAngle = currentAngle + halfPadAngle;
              actualEndAngle = currentAngle + dir3 * angle - halfPadAngle;
            }
            layout_2.startAngle = actualStartAngle;
            layout_2.endAngle = actualEndAngle;
            currentAngle += dir3 * angle;
          }
        });
      }
    }
  });
}
var getSeriesLayoutData = makeInner();
function dataFilter(seriesType) {
  return {
    seriesType,
    reset: function(seriesModel, ecModel) {
      var legendModels = ecModel.findComponents({
        mainType: "legend"
      });
      if (!legendModels || !legendModels.length) {
        return;
      }
      var data = seriesModel.getData();
      data.filterSelf(function(idx) {
        var name = data.getName(idx);
        for (var i = 0; i < legendModels.length; i++) {
          if (!legendModels[i].isSelected(name)) {
            return false;
          }
        }
        return true;
      });
    }
  };
}
var RADIAN = Math.PI / 180;
function adjustSingleSide(list, cx, cy, r, dir3, viewWidth, viewHeight, viewLeft, viewTop, farthestX) {
  if (list.length < 2) {
    return;
  }
  function recalculateXOnSemiToAlignOnEllipseCurve(semi) {
    var rB = semi.rB;
    var rB2 = rB * rB;
    for (var i2 = 0; i2 < semi.list.length; i2++) {
      var item = semi.list[i2];
      var dy = Math.abs(item.label.y - cy);
      var rA = r + item.len;
      var rA2 = rA * rA;
      var dx2 = Math.sqrt((1 - Math.abs(dy * dy / rB2)) * rA2);
      var newX = cx + (dx2 + item.len2) * dir3;
      var deltaX = newX - item.label.x;
      var newTargetWidth = item.targetTextWidth - deltaX * dir3;
      constrainTextWidth(item, newTargetWidth, true);
      item.label.x = newX;
    }
  }
  function recalculateX(items) {
    var topSemi = {
      list: [],
      maxY: 0
    };
    var bottomSemi = {
      list: [],
      maxY: 0
    };
    for (var i2 = 0; i2 < items.length; i2++) {
      if (items[i2].labelAlignTo !== "none") {
        continue;
      }
      var item = items[i2];
      var semi = item.label.y > cy ? bottomSemi : topSemi;
      var dy = Math.abs(item.label.y - cy);
      if (dy >= semi.maxY) {
        var dx2 = item.label.x - cx - item.len2 * dir3;
        var rA = r + item.len;
        var rB = Math.abs(dx2) < rA ? Math.sqrt(dy * dy / (1 - dx2 * dx2 / rA / rA)) : rA;
        semi.rB = rB;
        semi.maxY = dy;
      }
      semi.list.push(item);
    }
    recalculateXOnSemiToAlignOnEllipseCurve(topSemi);
    recalculateXOnSemiToAlignOnEllipseCurve(bottomSemi);
  }
  var len = list.length;
  for (var i = 0; i < len; i++) {
    if (list[i].position === "outer" && list[i].labelAlignTo === "labelLine") {
      var dx = list[i].label.x - farthestX;
      list[i].linePoints[1][0] += dx;
      list[i].label.x = farthestX;
    }
  }
  if (shiftLayoutOnY(list, viewTop, viewTop + viewHeight)) {
    recalculateX(list);
  }
}
function avoidOverlap(labelLayoutList, cx, cy, r, viewWidth, viewHeight, viewLeft, viewTop) {
  var leftList = [];
  var rightList = [];
  var leftmostX = Number.MAX_VALUE;
  var rightmostX = -Number.MAX_VALUE;
  for (var i = 0; i < labelLayoutList.length; i++) {
    var label = labelLayoutList[i].label;
    if (isPositionCenter(labelLayoutList[i])) {
      continue;
    }
    if (label.x < cx) {
      leftmostX = Math.min(leftmostX, label.x);
      leftList.push(labelLayoutList[i]);
    } else {
      rightmostX = Math.max(rightmostX, label.x);
      rightList.push(labelLayoutList[i]);
    }
  }
  for (var i = 0; i < labelLayoutList.length; i++) {
    var layout = labelLayoutList[i];
    if (!isPositionCenter(layout) && layout.linePoints) {
      if (layout.labelStyleWidth != null) {
        continue;
      }
      var label = layout.label;
      var linePoints = layout.linePoints;
      var targetTextWidth = void 0;
      if (layout.labelAlignTo === "edge") {
        if (label.x < cx) {
          targetTextWidth = linePoints[2][0] - layout.labelDistance - viewLeft - layout.edgeDistance;
        } else {
          targetTextWidth = viewLeft + viewWidth - layout.edgeDistance - linePoints[2][0] - layout.labelDistance;
        }
      } else if (layout.labelAlignTo === "labelLine") {
        if (label.x < cx) {
          targetTextWidth = leftmostX - viewLeft - layout.bleedMargin;
        } else {
          targetTextWidth = viewLeft + viewWidth - rightmostX - layout.bleedMargin;
        }
      } else {
        if (label.x < cx) {
          targetTextWidth = label.x - viewLeft - layout.bleedMargin;
        } else {
          targetTextWidth = viewLeft + viewWidth - label.x - layout.bleedMargin;
        }
      }
      layout.targetTextWidth = targetTextWidth;
      constrainTextWidth(layout, targetTextWidth);
    }
  }
  adjustSingleSide(rightList, cx, cy, r, 1, viewWidth, viewHeight, viewLeft, viewTop, rightmostX);
  adjustSingleSide(leftList, cx, cy, r, -1, viewWidth, viewHeight, viewLeft, viewTop, leftmostX);
  for (var i = 0; i < labelLayoutList.length; i++) {
    var layout = labelLayoutList[i];
    if (!isPositionCenter(layout) && layout.linePoints) {
      var label = layout.label;
      var linePoints = layout.linePoints;
      var isAlignToEdge = layout.labelAlignTo === "edge";
      var padding = label.style.padding;
      var paddingH = padding ? padding[1] + padding[3] : 0;
      var extraPaddingH = label.style.backgroundColor ? 0 : paddingH;
      var realTextWidth = layout.rect.width + extraPaddingH;
      var dist = linePoints[1][0] - linePoints[2][0];
      if (isAlignToEdge) {
        if (label.x < cx) {
          linePoints[2][0] = viewLeft + layout.edgeDistance + realTextWidth + layout.labelDistance;
        } else {
          linePoints[2][0] = viewLeft + viewWidth - layout.edgeDistance - realTextWidth - layout.labelDistance;
        }
      } else {
        if (label.x < cx) {
          linePoints[2][0] = label.x + layout.labelDistance;
        } else {
          linePoints[2][0] = label.x - layout.labelDistance;
        }
        linePoints[1][0] = linePoints[2][0] + dist;
      }
      linePoints[1][1] = linePoints[2][1] = label.y;
    }
  }
}
function constrainTextWidth(layout, availableWidth, forceRecalculate) {
  if (forceRecalculate === void 0) {
    forceRecalculate = false;
  }
  if (layout.labelStyleWidth != null) {
    return;
  }
  var label = layout.label;
  var style = label.style;
  var textRect = layout.rect;
  var bgColor = style.backgroundColor;
  var padding = style.padding;
  var paddingH = padding ? padding[1] + padding[3] : 0;
  var overflow = style.overflow;
  var oldOuterWidth = textRect.width + (bgColor ? 0 : paddingH);
  if (availableWidth < oldOuterWidth || forceRecalculate) {
    var oldHeight = textRect.height;
    if (overflow && overflow.match("break")) {
      label.setStyle("backgroundColor", null);
      label.setStyle("width", availableWidth - paddingH);
      var innerRect = label.getBoundingRect();
      label.setStyle("width", Math.ceil(innerRect.width));
      label.setStyle("backgroundColor", bgColor);
    } else {
      var availableInnerWidth = availableWidth - paddingH;
      var newWidth = availableWidth < oldOuterWidth ? availableInnerWidth : (
        // Current available width is enough, but the text may have
        // already been wrapped with a smaller available width.
        forceRecalculate ? availableInnerWidth > layout.unconstrainedWidth ? null : availableInnerWidth : null
      );
      label.setStyle("width", newWidth);
    }
    var newRect = label.getBoundingRect();
    textRect.width = newRect.width;
    var margin = (label.style.margin || 0) + 2.1;
    textRect.height = newRect.height + margin;
    textRect.y -= (textRect.height - oldHeight) / 2;
  }
}
function isPositionCenter(sectorShape) {
  return sectorShape.position === "center";
}
function pieLabelLayout(seriesModel) {
  var data = seriesModel.getData();
  var labelLayoutList = [];
  var cx;
  var cy;
  var hasLabelRotate = false;
  var minShowLabelRadian = (seriesModel.get("minShowLabelAngle") || 0) * RADIAN;
  var viewRect = data.getLayout("viewRect");
  var r = data.getLayout("r");
  var viewWidth = viewRect.width;
  var viewLeft = viewRect.x;
  var viewTop = viewRect.y;
  var viewHeight = viewRect.height;
  function setNotShow(el) {
    el.ignore = true;
  }
  function isLabelShown(label2) {
    if (!label2.ignore) {
      return true;
    }
    for (var key in label2.states) {
      if (label2.states[key].ignore === false) {
        return true;
      }
    }
    return false;
  }
  data.each(function(idx) {
    var sector = data.getItemGraphicEl(idx);
    var sectorShape = sector.shape;
    var label2 = sector.getTextContent();
    var labelLine2 = sector.getTextGuideLine();
    var itemModel = data.getItemModel(idx);
    var labelModel = itemModel.getModel("label");
    var labelPosition = labelModel.get("position") || itemModel.get(["emphasis", "label", "position"]);
    var labelDistance = labelModel.get("distanceToLabelLine");
    var labelAlignTo = labelModel.get("alignTo");
    var edgeDistance = parsePercent(labelModel.get("edgeDistance"), viewWidth);
    var bleedMargin = labelModel.get("bleedMargin");
    var labelLineModel = itemModel.getModel("labelLine");
    var labelLineLen = labelLineModel.get("length");
    labelLineLen = parsePercent(labelLineLen, viewWidth);
    var labelLineLen2 = labelLineModel.get("length2");
    labelLineLen2 = parsePercent(labelLineLen2, viewWidth);
    if (Math.abs(sectorShape.endAngle - sectorShape.startAngle) < minShowLabelRadian) {
      each$1(label2.states, setNotShow);
      label2.ignore = true;
      if (labelLine2) {
        each$1(labelLine2.states, setNotShow);
        labelLine2.ignore = true;
      }
      return;
    }
    if (!isLabelShown(label2)) {
      return;
    }
    var midAngle = (sectorShape.startAngle + sectorShape.endAngle) / 2;
    var nx = Math.cos(midAngle);
    var ny = Math.sin(midAngle);
    var textX;
    var textY;
    var linePoints2;
    var textAlign;
    cx = sectorShape.cx;
    cy = sectorShape.cy;
    var isLabelInside = labelPosition === "inside" || labelPosition === "inner";
    if (labelPosition === "center") {
      textX = sectorShape.cx;
      textY = sectorShape.cy;
      textAlign = "center";
    } else {
      var x1 = (isLabelInside ? (sectorShape.r + sectorShape.r0) / 2 * nx : sectorShape.r * nx) + cx;
      var y1 = (isLabelInside ? (sectorShape.r + sectorShape.r0) / 2 * ny : sectorShape.r * ny) + cy;
      textX = x1 + nx * 3;
      textY = y1 + ny * 3;
      if (!isLabelInside) {
        var x2 = x1 + nx * (labelLineLen + r - sectorShape.r);
        var y2 = y1 + ny * (labelLineLen + r - sectorShape.r);
        var x3 = x2 + (nx < 0 ? -1 : 1) * labelLineLen2;
        var y3 = y2;
        if (labelAlignTo === "edge") {
          textX = nx < 0 ? viewLeft + edgeDistance : viewLeft + viewWidth - edgeDistance;
        } else {
          textX = x3 + (nx < 0 ? -labelDistance : labelDistance);
        }
        textY = y3;
        linePoints2 = [[x1, y1], [x2, y2], [x3, y3]];
      }
      textAlign = isLabelInside ? "center" : labelAlignTo === "edge" ? nx > 0 ? "right" : "left" : nx > 0 ? "left" : "right";
    }
    var PI = Math.PI;
    var labelRotate = 0;
    var rotate = labelModel.get("rotate");
    if (isNumber(rotate)) {
      labelRotate = rotate * (PI / 180);
    } else if (labelPosition === "center") {
      labelRotate = 0;
    } else if (rotate === "radial" || rotate === true) {
      var radialAngle = nx < 0 ? -midAngle + PI : -midAngle;
      labelRotate = radialAngle;
    } else if (rotate === "tangential" && labelPosition !== "outside" && labelPosition !== "outer") {
      var rad = Math.atan2(nx, ny);
      if (rad < 0) {
        rad = PI * 2 + rad;
      }
      var isDown = ny > 0;
      if (isDown) {
        rad = PI + rad;
      }
      labelRotate = rad - PI;
    }
    hasLabelRotate = !!labelRotate;
    label2.x = textX;
    label2.y = textY;
    label2.rotation = labelRotate;
    label2.setStyle({
      verticalAlign: "middle"
    });
    if (!isLabelInside) {
      var textRect = label2.getBoundingRect().clone();
      textRect.applyTransform(label2.getComputedTransform());
      var margin = (label2.style.margin || 0) + 2.1;
      textRect.y -= margin / 2;
      textRect.height += margin;
      labelLayoutList.push({
        label: label2,
        labelLine: labelLine2,
        position: labelPosition,
        len: labelLineLen,
        len2: labelLineLen2,
        minTurnAngle: labelLineModel.get("minTurnAngle"),
        maxSurfaceAngle: labelLineModel.get("maxSurfaceAngle"),
        surfaceNormal: new Point(nx, ny),
        linePoints: linePoints2,
        textAlign,
        labelDistance,
        labelAlignTo,
        edgeDistance,
        bleedMargin,
        rect: textRect,
        unconstrainedWidth: textRect.width,
        labelStyleWidth: label2.style.width
      });
    } else {
      label2.setStyle({
        align: textAlign
      });
      var selectState2 = label2.states.select;
      if (selectState2) {
        selectState2.x += label2.x;
        selectState2.y += label2.y;
      }
    }
    sector.setTextConfig({
      inside: isLabelInside
    });
  });
  if (!hasLabelRotate && seriesModel.get("avoidLabelOverlap")) {
    avoidOverlap(labelLayoutList, cx, cy, r, viewWidth, viewHeight, viewLeft, viewTop);
  }
  for (var i = 0; i < labelLayoutList.length; i++) {
    var layout = labelLayoutList[i];
    var label = layout.label;
    var labelLine = layout.labelLine;
    var notShowLabel = isNaN(label.x) || isNaN(label.y);
    if (label) {
      label.setStyle({
        align: layout.textAlign
      });
      if (notShowLabel) {
        each$1(label.states, setNotShow);
        label.ignore = true;
      }
      var selectState = label.states.select;
      if (selectState) {
        selectState.x += label.x;
        selectState.y += label.y;
      }
    }
    if (labelLine) {
      var linePoints = layout.linePoints;
      if (notShowLabel || !linePoints) {
        each$1(labelLine.states, setNotShow);
        labelLine.ignore = true;
      } else {
        limitTurnAngle(linePoints, layout.minTurnAngle);
        limitSurfaceAngle(linePoints, layout.surfaceNormal, layout.maxSurfaceAngle);
        labelLine.setShape({
          points: linePoints
        });
        label.__hostTarget.textGuideLineConfig = {
          anchor: new Point(linePoints[0][0], linePoints[0][1])
        };
      }
    }
  }
}
var PiePiece = (
  /** @class */
  function(_super) {
    __extends(PiePiece2, _super);
    function PiePiece2(data, idx, startAngle) {
      var _this = _super.call(this) || this;
      _this.z2 = 2;
      var text = new ZRText();
      _this.setTextContent(text);
      _this.updateData(data, idx, startAngle, true);
      return _this;
    }
    PiePiece2.prototype.updateData = function(data, idx, startAngle, firstCreate) {
      var sector = this;
      var seriesModel = data.hostModel;
      var itemModel = data.getItemModel(idx);
      var emphasisModel = itemModel.getModel("emphasis");
      var layout = data.getItemLayout(idx);
      var sectorShape = extend(getSectorCornerRadius(itemModel.getModel("itemStyle"), layout, true), layout);
      if (isNaN(sectorShape.startAngle)) {
        sector.setShape(sectorShape);
        return;
      }
      if (firstCreate) {
        sector.setShape(sectorShape);
        var animationType = seriesModel.getShallow("animationType");
        if (seriesModel.ecModel.ssr) {
          initProps(sector, {
            scaleX: 0,
            scaleY: 0
          }, seriesModel, {
            dataIndex: idx,
            isFrom: true
          });
          sector.originX = sectorShape.cx;
          sector.originY = sectorShape.cy;
        } else if (animationType === "scale") {
          sector.shape.r = layout.r0;
          initProps(sector, {
            shape: {
              r: layout.r
            }
          }, seriesModel, idx);
        } else {
          if (startAngle != null) {
            sector.setShape({
              startAngle,
              endAngle: startAngle
            });
            initProps(sector, {
              shape: {
                startAngle: layout.startAngle,
                endAngle: layout.endAngle
              }
            }, seriesModel, idx);
          } else {
            sector.shape.endAngle = layout.startAngle;
            updateProps$1(sector, {
              shape: {
                endAngle: layout.endAngle
              }
            }, seriesModel, idx);
          }
        }
      } else {
        saveOldStyle(sector);
        updateProps$1(sector, {
          shape: sectorShape
        }, seriesModel, idx);
      }
      sector.useStyle(data.getItemVisual(idx, "style"));
      setStatesStylesFromModel(sector, itemModel);
      var midAngle = (layout.startAngle + layout.endAngle) / 2;
      var offset = seriesModel.get("selectedOffset");
      var dx = Math.cos(midAngle) * offset;
      var dy = Math.sin(midAngle) * offset;
      var cursorStyle = itemModel.getShallow("cursor");
      cursorStyle && sector.attr("cursor", cursorStyle);
      this._updateLabel(seriesModel, data, idx);
      sector.ensureState("emphasis").shape = extend({
        r: layout.r + (emphasisModel.get("scale") ? emphasisModel.get("scaleSize") || 0 : 0)
      }, getSectorCornerRadius(emphasisModel.getModel("itemStyle"), layout));
      extend(sector.ensureState("select"), {
        x: dx,
        y: dy,
        shape: getSectorCornerRadius(itemModel.getModel(["select", "itemStyle"]), layout)
      });
      extend(sector.ensureState("blur"), {
        shape: getSectorCornerRadius(itemModel.getModel(["blur", "itemStyle"]), layout)
      });
      var labelLine = sector.getTextGuideLine();
      var labelText = sector.getTextContent();
      labelLine && extend(labelLine.ensureState("select"), {
        x: dx,
        y: dy
      });
      extend(labelText.ensureState("select"), {
        x: dx,
        y: dy
      });
      toggleHoverEmphasis(this, emphasisModel.get("focus"), emphasisModel.get("blurScope"), emphasisModel.get("disabled"));
    };
    PiePiece2.prototype._updateLabel = function(seriesModel, data, idx) {
      var sector = this;
      var itemModel = data.getItemModel(idx);
      var labelLineModel = itemModel.getModel("labelLine");
      var style = data.getItemVisual(idx, "style");
      var visualColor = style && style.fill;
      var visualOpacity = style && style.opacity;
      setLabelStyle(sector, getLabelStatesModels(itemModel), {
        labelFetcher: data.hostModel,
        labelDataIndex: idx,
        inheritColor: visualColor,
        defaultOpacity: visualOpacity,
        defaultText: seriesModel.getFormattedLabel(idx, "normal") || data.getName(idx)
      });
      var labelText = sector.getTextContent();
      sector.setTextConfig({
        // reset position, rotation
        position: null,
        rotation: null
      });
      labelText.attr({
        z2: 10
      });
      var labelPosition = seriesModel.get(["label", "position"]);
      if (labelPosition !== "outside" && labelPosition !== "outer") {
        sector.removeTextGuideLine();
      } else {
        var polyline = this.getTextGuideLine();
        if (!polyline) {
          polyline = new Polyline();
          this.setTextGuideLine(polyline);
        }
        setLabelLineStyle(this, getLabelLineStatesModels(itemModel), {
          stroke: visualColor,
          opacity: retrieve3(labelLineModel.get(["lineStyle", "opacity"]), visualOpacity, 1)
        });
      }
    };
    return PiePiece2;
  }(Sector)
);
var PieView = (
  /** @class */
  function(_super) {
    __extends(PieView2, _super);
    function PieView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.ignoreLabelLineUpdate = true;
      return _this;
    }
    PieView2.prototype.render = function(seriesModel, ecModel, api, payload) {
      var data = seriesModel.getData();
      var oldData = this._data;
      var group = this.group;
      var startAngle;
      if (!oldData && data.count() > 0) {
        var shape = data.getItemLayout(0);
        for (var s = 1; isNaN(shape && shape.startAngle) && s < data.count(); ++s) {
          shape = data.getItemLayout(s);
        }
        if (shape) {
          startAngle = shape.startAngle;
        }
      }
      if (this._emptyCircleSector) {
        group.remove(this._emptyCircleSector);
      }
      if (data.count() === 0 && seriesModel.get("showEmptyCircle")) {
        var layoutData = getSeriesLayoutData(seriesModel);
        var sector = new Sector({
          shape: extend(getBasicPieLayout(seriesModel, api), layoutData)
        });
        sector.useStyle(seriesModel.getModel("emptyCircleStyle").getItemStyle());
        this._emptyCircleSector = sector;
        group.add(sector);
      }
      data.diff(oldData).add(function(idx) {
        var piePiece = new PiePiece(data, idx, startAngle);
        data.setItemGraphicEl(idx, piePiece);
        group.add(piePiece);
      }).update(function(newIdx, oldIdx) {
        var piePiece = oldData.getItemGraphicEl(oldIdx);
        piePiece.updateData(data, newIdx, startAngle);
        piePiece.off("click");
        group.add(piePiece);
        data.setItemGraphicEl(newIdx, piePiece);
      }).remove(function(idx) {
        var piePiece = oldData.getItemGraphicEl(idx);
        removeElementWithFadeOut(piePiece, seriesModel, idx);
      }).execute();
      pieLabelLayout(seriesModel);
      if (seriesModel.get("animationTypeUpdate") !== "expansion") {
        this._data = data;
      }
    };
    PieView2.prototype.dispose = function() {
    };
    PieView2.prototype.containPoint = function(point, seriesModel) {
      var data = seriesModel.getData();
      var itemLayout = data.getItemLayout(0);
      if (itemLayout) {
        var dx = point[0] - itemLayout.cx;
        var dy = point[1] - itemLayout.cy;
        var radius = Math.sqrt(dx * dx + dy * dy);
        return radius <= itemLayout.r && radius >= itemLayout.r0;
      }
    };
    PieView2.type = "pie";
    return PieView2;
  }(ChartView)
);
function createSeriesDataSimply(seriesModel, opt, nameList) {
  opt = isArray(opt) && {
    coordDimensions: opt
  } || extend({
    encodeDefine: seriesModel.getEncode()
  }, opt);
  var source = seriesModel.getSource();
  var dimensions = prepareSeriesDataSchema(source, opt).dimensions;
  var list = new SeriesData(dimensions, seriesModel);
  list.initData(source, nameList);
  return list;
}
var LegendVisualProvider = (
  /** @class */
  function() {
    function LegendVisualProvider2(getDataWithEncodedVisual, getRawData) {
      this._getDataWithEncodedVisual = getDataWithEncodedVisual;
      this._getRawData = getRawData;
    }
    LegendVisualProvider2.prototype.getAllNames = function() {
      var rawData = this._getRawData();
      return rawData.mapArray(rawData.getName);
    };
    LegendVisualProvider2.prototype.containName = function(name) {
      var rawData = this._getRawData();
      return rawData.indexOfName(name) >= 0;
    };
    LegendVisualProvider2.prototype.indexOfName = function(name) {
      var dataWithEncodedVisual = this._getDataWithEncodedVisual();
      return dataWithEncodedVisual.indexOfName(name);
    };
    LegendVisualProvider2.prototype.getItemVisual = function(dataIndex, key) {
      var dataWithEncodedVisual = this._getDataWithEncodedVisual();
      return dataWithEncodedVisual.getItemVisual(dataIndex, key);
    };
    return LegendVisualProvider2;
  }()
);
var innerData = makeInner();
var PieSeriesModel = (
  /** @class */
  function(_super) {
    __extends(PieSeriesModel2, _super);
    function PieSeriesModel2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    PieSeriesModel2.prototype.init = function(option) {
      _super.prototype.init.apply(this, arguments);
      this.legendVisualProvider = new LegendVisualProvider(zrUtil.bind(this.getData, this), zrUtil.bind(this.getRawData, this));
      this._defaultLabelLine(option);
    };
    PieSeriesModel2.prototype.mergeOption = function() {
      _super.prototype.mergeOption.apply(this, arguments);
    };
    PieSeriesModel2.prototype.getInitialData = function() {
      return createSeriesDataSimply(this, {
        coordDimensions: ["value"],
        encodeDefaulter: zrUtil.curry(makeSeriesEncodeForNameBased, this)
      });
    };
    PieSeriesModel2.prototype.getDataParams = function(dataIndex) {
      var data = this.getData();
      var dataInner = innerData(data);
      var seats = dataInner.seats;
      if (!seats) {
        var valueList_1 = [];
        data.each(data.mapDimension("value"), function(value) {
          valueList_1.push(value);
        });
        seats = dataInner.seats = getPercentSeats(valueList_1, data.hostModel.get("percentPrecision"));
      }
      var params = _super.prototype.getDataParams.call(this, dataIndex);
      params.percent = seats[dataIndex] || 0;
      params.$vars.push("percent");
      return params;
    };
    PieSeriesModel2.prototype._defaultLabelLine = function(option) {
      defaultEmphasis(option, "labelLine", ["show"]);
      var labelLineNormalOpt = option.labelLine;
      var labelLineEmphasisOpt = option.emphasis.labelLine;
      labelLineNormalOpt.show = labelLineNormalOpt.show && option.label.show;
      labelLineEmphasisOpt.show = labelLineEmphasisOpt.show && option.emphasis.label.show;
    };
    PieSeriesModel2.type = "series.pie";
    PieSeriesModel2.defaultOption = {
      // zlevel: 0,
      z: 2,
      legendHoverLink: true,
      colorBy: "data",
      // 默认全局居中
      center: ["50%", "50%"],
      radius: [0, "75%"],
      // 默认顺时针
      clockwise: true,
      startAngle: 90,
      endAngle: "auto",
      padAngle: 0,
      // 最小角度改为0
      minAngle: 0,
      // If the angle of a sector less than `minShowLabelAngle`,
      // the label will not be displayed.
      minShowLabelAngle: 0,
      // 选中时扇区偏移量
      selectedOffset: 10,
      // 选择模式，默认关闭，可选single，multiple
      // selectedMode: false,
      // 南丁格尔玫瑰图模式，'radius'（半径） | 'area'（面积）
      // roseType: null,
      percentPrecision: 2,
      // If still show when all data zero.
      stillShowZeroSum: true,
      // cursor: null,
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      width: null,
      height: null,
      label: {
        // color: 'inherit',
        // If rotate around circle
        rotate: 0,
        show: true,
        overflow: "truncate",
        // 'outer', 'inside', 'center'
        position: "outer",
        // 'none', 'labelLine', 'edge'. Works only when position is 'outer'
        alignTo: "none",
        // Closest distance between label and chart edge.
        // Works only position is 'outer' and alignTo is 'edge'.
        edgeDistance: "25%",
        // Works only position is 'outer' and alignTo is not 'edge'.
        bleedMargin: 10,
        // Distance between text and label line.
        distanceToLabelLine: 5
        // formatter: 标签文本格式器，同 tooltip.formatter，不支持异步回调
        // 默认使用全局文本样式，详见 textStyle
        // distance: 当position为inner时有效，为label位置到圆心的距离与圆半径(环状图为内外半径和)的比例系数
      },
      // Enabled when label.normal.position is 'outer'
      labelLine: {
        show: true,
        // 引导线两段中的第一段长度
        length: 15,
        // 引导线两段中的第二段长度
        length2: 15,
        smooth: false,
        minTurnAngle: 90,
        maxSurfaceAngle: 90,
        lineStyle: {
          // color: 各异,
          width: 1,
          type: "solid"
        }
      },
      itemStyle: {
        borderWidth: 1,
        borderJoin: "round"
      },
      showEmptyCircle: true,
      emptyCircleStyle: {
        color: "lightgray",
        opacity: 1
      },
      labelLayout: {
        // Hide the overlapped label.
        hideOverlap: true
      },
      emphasis: {
        scale: true,
        scaleSize: 5
      },
      // If use strategy to avoid label overlapping
      avoidLabelOverlap: true,
      // Animation type. Valid values: expansion, scale
      animationType: "expansion",
      animationDuration: 1e3,
      // Animation type when update. Valid values: transition, expansion
      animationTypeUpdate: "transition",
      animationEasingUpdate: "cubicInOut",
      animationDurationUpdate: 500,
      animationEasing: "cubicInOut"
    };
    return PieSeriesModel2;
  }(SeriesModel)
);
function negativeDataFilter(seriesType) {
  return {
    seriesType,
    reset: function(seriesModel, ecModel) {
      var data = seriesModel.getData();
      data.filterSelf(function(idx) {
        var valueDim = data.mapDimension("value");
        var curValue = data.get(valueDim, idx);
        if (isNumber(curValue) && !isNaN(curValue) && curValue < 0) {
          return false;
        }
        return true;
      });
    }
  };
}
function install$4(registers) {
  registers.registerChartView(PieView);
  registers.registerSeriesModel(PieSeriesModel);
  createLegacyDataSelectAction("pie", registers.registerAction);
  registers.registerLayout(curry$1(pieLayout, "pie"));
  registers.registerProcessor(dataFilter("pie"));
  registers.registerProcessor(negativeDataFilter("pie"));
}
function makeBackground(rect, componentModel) {
  var padding = normalizeCssArray(componentModel.get("padding"));
  var style = componentModel.getItemStyle(["color", "opacity"]);
  style.fill = componentModel.get("backgroundColor");
  rect = new Rect({
    shape: {
      x: rect.x - padding[3],
      y: rect.y - padding[0],
      width: rect.width + padding[1] + padding[3],
      height: rect.height + padding[0] + padding[2],
      r: componentModel.get("borderRadius")
    },
    style,
    silent: true,
    z2: -1
  });
  return rect;
}
var TitleModel = (
  /** @class */
  function(_super) {
    __extends(TitleModel2, _super);
    function TitleModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = TitleModel2.type;
      _this.layoutMode = {
        type: "box",
        ignoreSize: true
      };
      return _this;
    }
    TitleModel2.type = "title";
    TitleModel2.defaultOption = {
      // zlevel: 0,
      z: 6,
      show: true,
      text: "",
      target: "blank",
      subtext: "",
      subtarget: "blank",
      left: 0,
      top: 0,
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#464646"
      },
      subtextStyle: {
        fontSize: 12,
        color: "#6E7079"
      }
    };
    return TitleModel2;
  }(ComponentModel)
);
var TitleView = (
  /** @class */
  function(_super) {
    __extends(TitleView2, _super);
    function TitleView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = TitleView2.type;
      return _this;
    }
    TitleView2.prototype.render = function(titleModel, ecModel, api) {
      this.group.removeAll();
      if (!titleModel.get("show")) {
        return;
      }
      var group = this.group;
      var textStyleModel = titleModel.getModel("textStyle");
      var subtextStyleModel = titleModel.getModel("subtextStyle");
      var textAlign = titleModel.get("textAlign");
      var textVerticalAlign = zrUtil.retrieve2(titleModel.get("textBaseline"), titleModel.get("textVerticalAlign"));
      var textEl = new ZRText({
        style: createTextStyle(textStyleModel, {
          text: titleModel.get("text"),
          fill: textStyleModel.getTextColor()
        }, {
          disableBox: true
        }),
        z2: 10
      });
      var textRect = textEl.getBoundingRect();
      var subText = titleModel.get("subtext");
      var subTextEl = new ZRText({
        style: createTextStyle(subtextStyleModel, {
          text: subText,
          fill: subtextStyleModel.getTextColor(),
          y: textRect.height + titleModel.get("itemGap"),
          verticalAlign: "top"
        }, {
          disableBox: true
        }),
        z2: 10
      });
      var link = titleModel.get("link");
      var sublink = titleModel.get("sublink");
      var triggerEvent = titleModel.get("triggerEvent", true);
      textEl.silent = !link && !triggerEvent;
      subTextEl.silent = !sublink && !triggerEvent;
      if (link) {
        textEl.on("click", function() {
          windowOpen(link, "_" + titleModel.get("target"));
        });
      }
      if (sublink) {
        subTextEl.on("click", function() {
          windowOpen(sublink, "_" + titleModel.get("subtarget"));
        });
      }
      getECData(textEl).eventData = getECData(subTextEl).eventData = triggerEvent ? {
        componentType: "title",
        componentIndex: titleModel.componentIndex
      } : null;
      group.add(textEl);
      subText && group.add(subTextEl);
      var groupRect = group.getBoundingRect();
      var layoutOption = titleModel.getBoxLayoutParams();
      layoutOption.width = groupRect.width;
      layoutOption.height = groupRect.height;
      var layoutRect = getLayoutRect(layoutOption, {
        width: api.getWidth(),
        height: api.getHeight()
      }, titleModel.get("padding"));
      if (!textAlign) {
        textAlign = titleModel.get("left") || titleModel.get("right");
        if (textAlign === "middle") {
          textAlign = "center";
        }
        if (textAlign === "right") {
          layoutRect.x += layoutRect.width;
        } else if (textAlign === "center") {
          layoutRect.x += layoutRect.width / 2;
        }
      }
      if (!textVerticalAlign) {
        textVerticalAlign = titleModel.get("top") || titleModel.get("bottom");
        if (textVerticalAlign === "center") {
          textVerticalAlign = "middle";
        }
        if (textVerticalAlign === "bottom") {
          layoutRect.y += layoutRect.height;
        } else if (textVerticalAlign === "middle") {
          layoutRect.y += layoutRect.height / 2;
        }
        textVerticalAlign = textVerticalAlign || "top";
      }
      group.x = layoutRect.x;
      group.y = layoutRect.y;
      group.markRedraw();
      var alignStyle = {
        align: textAlign,
        verticalAlign: textVerticalAlign
      };
      textEl.setStyle(alignStyle);
      subTextEl.setStyle(alignStyle);
      groupRect = group.getBoundingRect();
      var padding = layoutRect.margin;
      var style = titleModel.getItemStyle(["color", "opacity"]);
      style.fill = titleModel.get("backgroundColor");
      var rect = new Rect({
        shape: {
          x: groupRect.x - padding[3],
          y: groupRect.y - padding[0],
          width: groupRect.width + padding[1] + padding[3],
          height: groupRect.height + padding[0] + padding[2],
          r: titleModel.get("borderRadius")
        },
        style,
        subPixelOptimize: true,
        silent: true
      });
      group.add(rect);
    };
    TitleView2.type = "title";
    return TitleView2;
  }(ComponentView)
);
function install$3(registers) {
  registers.registerComponentModel(TitleModel);
  registers.registerComponentView(TitleView);
}
var getDefaultSelectorOptions = function(ecModel, type) {
  if (type === "all") {
    return {
      type: "all",
      title: ecModel.getLocaleModel().get(["legend", "selector", "all"])
    };
  } else if (type === "inverse") {
    return {
      type: "inverse",
      title: ecModel.getLocaleModel().get(["legend", "selector", "inverse"])
    };
  }
};
var LegendModel = (
  /** @class */
  function(_super) {
    __extends(LegendModel2, _super);
    function LegendModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = LegendModel2.type;
      _this.layoutMode = {
        type: "box",
        // legend.width/height are maxWidth/maxHeight actually,
        // whereas real width/height is calculated by its content.
        // (Setting {left: 10, right: 10} does not make sense).
        // So consider the case:
        // `setOption({legend: {left: 10});`
        // then `setOption({legend: {right: 10});`
        // The previous `left` should be cleared by setting `ignoreSize`.
        ignoreSize: true
      };
      return _this;
    }
    LegendModel2.prototype.init = function(option, parentModel, ecModel) {
      this.mergeDefaultAndTheme(option, ecModel);
      option.selected = option.selected || {};
      this._updateSelector(option);
    };
    LegendModel2.prototype.mergeOption = function(option, ecModel) {
      _super.prototype.mergeOption.call(this, option, ecModel);
      this._updateSelector(option);
    };
    LegendModel2.prototype._updateSelector = function(option) {
      var selector = option.selector;
      var ecModel = this.ecModel;
      if (selector === true) {
        selector = option.selector = ["all", "inverse"];
      }
      if (zrUtil.isArray(selector)) {
        zrUtil.each(selector, function(item, index) {
          zrUtil.isString(item) && (item = {
            type: item
          });
          selector[index] = zrUtil.merge(item, getDefaultSelectorOptions(ecModel, item.type));
        });
      }
    };
    LegendModel2.prototype.optionUpdated = function() {
      this._updateData(this.ecModel);
      var legendData = this._data;
      if (legendData[0] && this.get("selectedMode") === "single") {
        var hasSelected = false;
        for (var i = 0; i < legendData.length; i++) {
          var name_1 = legendData[i].get("name");
          if (this.isSelected(name_1)) {
            this.select(name_1);
            hasSelected = true;
            break;
          }
        }
        !hasSelected && this.select(legendData[0].get("name"));
      }
    };
    LegendModel2.prototype._updateData = function(ecModel) {
      var potentialData = [];
      var availableNames = [];
      ecModel.eachRawSeries(function(seriesModel) {
        var seriesName = seriesModel.name;
        availableNames.push(seriesName);
        var isPotential;
        if (seriesModel.legendVisualProvider) {
          var provider = seriesModel.legendVisualProvider;
          var names = provider.getAllNames();
          if (!ecModel.isSeriesFiltered(seriesModel)) {
            availableNames = availableNames.concat(names);
          }
          if (names.length) {
            potentialData = potentialData.concat(names);
          } else {
            isPotential = true;
          }
        } else {
          isPotential = true;
        }
        if (isPotential && isNameSpecified(seriesModel)) {
          potentialData.push(seriesModel.name);
        }
      });
      this._availableNames = availableNames;
      var rawData = this.get("data") || potentialData;
      var legendNameMap = zrUtil.createHashMap();
      var legendData = zrUtil.map(rawData, function(dataItem) {
        if (zrUtil.isString(dataItem) || zrUtil.isNumber(dataItem)) {
          dataItem = {
            name: dataItem
          };
        }
        if (legendNameMap.get(dataItem.name)) {
          return null;
        }
        legendNameMap.set(dataItem.name, true);
        return new Model(dataItem, this, this.ecModel);
      }, this);
      this._data = zrUtil.filter(legendData, function(item) {
        return !!item;
      });
    };
    LegendModel2.prototype.getData = function() {
      return this._data;
    };
    LegendModel2.prototype.select = function(name) {
      var selected = this.option.selected;
      var selectedMode = this.get("selectedMode");
      if (selectedMode === "single") {
        var data = this._data;
        zrUtil.each(data, function(dataItem) {
          selected[dataItem.get("name")] = false;
        });
      }
      selected[name] = true;
    };
    LegendModel2.prototype.unSelect = function(name) {
      if (this.get("selectedMode") !== "single") {
        this.option.selected[name] = false;
      }
    };
    LegendModel2.prototype.toggleSelected = function(name) {
      var selected = this.option.selected;
      if (!selected.hasOwnProperty(name)) {
        selected[name] = true;
      }
      this[selected[name] ? "unSelect" : "select"](name);
    };
    LegendModel2.prototype.allSelect = function() {
      var data = this._data;
      var selected = this.option.selected;
      zrUtil.each(data, function(dataItem) {
        selected[dataItem.get("name", true)] = true;
      });
    };
    LegendModel2.prototype.inverseSelect = function() {
      var data = this._data;
      var selected = this.option.selected;
      zrUtil.each(data, function(dataItem) {
        var name = dataItem.get("name", true);
        if (!selected.hasOwnProperty(name)) {
          selected[name] = true;
        }
        selected[name] = !selected[name];
      });
    };
    LegendModel2.prototype.isSelected = function(name) {
      var selected = this.option.selected;
      return !(selected.hasOwnProperty(name) && !selected[name]) && zrUtil.indexOf(this._availableNames, name) >= 0;
    };
    LegendModel2.prototype.getOrient = function() {
      return this.get("orient") === "vertical" ? {
        index: 1,
        name: "vertical"
      } : {
        index: 0,
        name: "horizontal"
      };
    };
    LegendModel2.type = "legend.plain";
    LegendModel2.dependencies = ["series"];
    LegendModel2.defaultOption = {
      // zlevel: 0,
      z: 4,
      show: true,
      orient: "horizontal",
      left: "center",
      // right: 'center',
      top: 0,
      // bottom: null,
      align: "auto",
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      itemWidth: 25,
      itemHeight: 14,
      symbolRotate: "inherit",
      symbolKeepAspect: true,
      inactiveColor: "#ccc",
      inactiveBorderColor: "#ccc",
      inactiveBorderWidth: "auto",
      itemStyle: {
        color: "inherit",
        opacity: "inherit",
        borderColor: "inherit",
        borderWidth: "auto",
        borderCap: "inherit",
        borderJoin: "inherit",
        borderDashOffset: "inherit",
        borderMiterLimit: "inherit"
      },
      lineStyle: {
        width: "auto",
        color: "inherit",
        inactiveColor: "#ccc",
        inactiveWidth: 2,
        opacity: "inherit",
        type: "inherit",
        cap: "inherit",
        join: "inherit",
        dashOffset: "inherit",
        miterLimit: "inherit"
      },
      textStyle: {
        color: "#333"
      },
      selectedMode: true,
      selector: false,
      selectorLabel: {
        show: true,
        borderRadius: 10,
        padding: [3, 5, 3, 5],
        fontSize: 12,
        fontFamily: "sans-serif",
        color: "#666",
        borderWidth: 1,
        borderColor: "#666"
      },
      emphasis: {
        selectorLabel: {
          show: true,
          color: "#eee",
          backgroundColor: "#666"
        }
      },
      selectorPosition: "auto",
      selectorItemGap: 7,
      selectorButtonGap: 10,
      tooltip: {
        show: false
      }
    };
    return LegendModel2;
  }(ComponentModel)
);
var curry = zrUtil.curry;
var each = zrUtil.each;
var Group$1 = Group$2;
var LegendView = (
  /** @class */
  function(_super) {
    __extends(LegendView2, _super);
    function LegendView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = LegendView2.type;
      _this.newlineDisabled = false;
      return _this;
    }
    LegendView2.prototype.init = function() {
      this.group.add(this._contentGroup = new Group$1());
      this.group.add(this._selectorGroup = new Group$1());
      this._isFirstRender = true;
    };
    LegendView2.prototype.getContentGroup = function() {
      return this._contentGroup;
    };
    LegendView2.prototype.getSelectorGroup = function() {
      return this._selectorGroup;
    };
    LegendView2.prototype.render = function(legendModel, ecModel, api) {
      var isFirstRender = this._isFirstRender;
      this._isFirstRender = false;
      this.resetInner();
      if (!legendModel.get("show", true)) {
        return;
      }
      var itemAlign = legendModel.get("align");
      var orient = legendModel.get("orient");
      if (!itemAlign || itemAlign === "auto") {
        itemAlign = legendModel.get("left") === "right" && orient === "vertical" ? "right" : "left";
      }
      var selector = legendModel.get("selector", true);
      var selectorPosition = legendModel.get("selectorPosition", true);
      if (selector && (!selectorPosition || selectorPosition === "auto")) {
        selectorPosition = orient === "horizontal" ? "end" : "start";
      }
      this.renderInner(itemAlign, legendModel, ecModel, api, selector, orient, selectorPosition);
      var positionInfo = legendModel.getBoxLayoutParams();
      var viewportSize = {
        width: api.getWidth(),
        height: api.getHeight()
      };
      var padding = legendModel.get("padding");
      var maxSize = getLayoutRect(positionInfo, viewportSize, padding);
      var mainRect = this.layoutInner(legendModel, itemAlign, maxSize, isFirstRender, selector, selectorPosition);
      var layoutRect = getLayoutRect(zrUtil.defaults({
        width: mainRect.width,
        height: mainRect.height
      }, positionInfo), viewportSize, padding);
      this.group.x = layoutRect.x - mainRect.x;
      this.group.y = layoutRect.y - mainRect.y;
      this.group.markRedraw();
      this.group.add(this._backgroundEl = makeBackground(mainRect, legendModel));
    };
    LegendView2.prototype.resetInner = function() {
      this.getContentGroup().removeAll();
      this._backgroundEl && this.group.remove(this._backgroundEl);
      this.getSelectorGroup().removeAll();
    };
    LegendView2.prototype.renderInner = function(itemAlign, legendModel, ecModel, api, selector, orient, selectorPosition) {
      var contentGroup = this.getContentGroup();
      var legendDrawnMap = zrUtil.createHashMap();
      var selectMode = legendModel.get("selectedMode");
      var excludeSeriesId = [];
      ecModel.eachRawSeries(function(seriesModel) {
        !seriesModel.get("legendHoverLink") && excludeSeriesId.push(seriesModel.id);
      });
      each(legendModel.getData(), function(legendItemModel, dataIndex) {
        var name = legendItemModel.get("name");
        if (!this.newlineDisabled && (name === "" || name === "\n")) {
          var g = new Group$1();
          g.newline = true;
          contentGroup.add(g);
          return;
        }
        var seriesModel = ecModel.getSeriesByName(name)[0];
        if (legendDrawnMap.get(name)) {
          return;
        }
        if (seriesModel) {
          var data = seriesModel.getData();
          var lineVisualStyle = data.getVisual("legendLineStyle") || {};
          var legendIcon = data.getVisual("legendIcon");
          var style = data.getVisual("style");
          var itemGroup = this._createItem(seriesModel, name, dataIndex, legendItemModel, legendModel, itemAlign, lineVisualStyle, style, legendIcon, selectMode, api);
          itemGroup.on("click", curry(dispatchSelectAction, name, null, api, excludeSeriesId)).on("mouseover", curry(dispatchHighlightAction, seriesModel.name, null, api, excludeSeriesId)).on("mouseout", curry(dispatchDownplayAction, seriesModel.name, null, api, excludeSeriesId));
          if (ecModel.ssr) {
            itemGroup.eachChild(function(child) {
              var ecData = getECData(child);
              ecData.seriesIndex = seriesModel.seriesIndex;
              ecData.dataIndex = dataIndex;
              ecData.ssrType = "legend";
            });
          }
          legendDrawnMap.set(name, true);
        } else {
          ecModel.eachRawSeries(function(seriesModel2) {
            if (legendDrawnMap.get(name)) {
              return;
            }
            if (seriesModel2.legendVisualProvider) {
              var provider = seriesModel2.legendVisualProvider;
              if (!provider.containName(name)) {
                return;
              }
              var idx = provider.indexOfName(name);
              var style2 = provider.getItemVisual(idx, "style");
              var legendIcon2 = provider.getItemVisual(idx, "legendIcon");
              var colorArr = parse(style2.fill);
              if (colorArr && colorArr[3] === 0) {
                colorArr[3] = 0.2;
                style2 = zrUtil.extend(zrUtil.extend({}, style2), {
                  fill: stringify(colorArr, "rgba")
                });
              }
              var itemGroup2 = this._createItem(seriesModel2, name, dataIndex, legendItemModel, legendModel, itemAlign, {}, style2, legendIcon2, selectMode, api);
              itemGroup2.on("click", curry(dispatchSelectAction, null, name, api, excludeSeriesId)).on("mouseover", curry(dispatchHighlightAction, null, name, api, excludeSeriesId)).on("mouseout", curry(dispatchDownplayAction, null, name, api, excludeSeriesId));
              if (ecModel.ssr) {
                itemGroup2.eachChild(function(child) {
                  var ecData = getECData(child);
                  ecData.seriesIndex = seriesModel2.seriesIndex;
                  ecData.dataIndex = dataIndex;
                  ecData.ssrType = "legend";
                });
              }
              legendDrawnMap.set(name, true);
            }
          }, this);
        }
      }, this);
      if (selector) {
        this._createSelector(selector, legendModel, api, orient, selectorPosition);
      }
    };
    LegendView2.prototype._createSelector = function(selector, legendModel, api, orient, selectorPosition) {
      var selectorGroup = this.getSelectorGroup();
      each(selector, function createSelectorButton(selectorItem) {
        var type = selectorItem.type;
        var labelText = new ZRText({
          style: {
            x: 0,
            y: 0,
            align: "center",
            verticalAlign: "middle"
          },
          onclick: function() {
            api.dispatchAction({
              type: type === "all" ? "legendAllSelect" : "legendInverseSelect"
            });
          }
        });
        selectorGroup.add(labelText);
        var labelModel = legendModel.getModel("selectorLabel");
        var emphasisLabelModel = legendModel.getModel(["emphasis", "selectorLabel"]);
        setLabelStyle(labelText, {
          normal: labelModel,
          emphasis: emphasisLabelModel
        }, {
          defaultText: selectorItem.title
        });
        enableHoverEmphasis(labelText);
      });
    };
    LegendView2.prototype._createItem = function(seriesModel, name, dataIndex, legendItemModel, legendModel, itemAlign, lineVisualStyle, itemVisualStyle, legendIcon, selectMode, api) {
      var drawType = seriesModel.visualDrawType;
      var itemWidth = legendModel.get("itemWidth");
      var itemHeight = legendModel.get("itemHeight");
      var isSelected = legendModel.isSelected(name);
      var iconRotate = legendItemModel.get("symbolRotate");
      var symbolKeepAspect = legendItemModel.get("symbolKeepAspect");
      var legendIconType = legendItemModel.get("icon");
      legendIcon = legendIconType || legendIcon || "roundRect";
      var style = getLegendStyle(legendIcon, legendItemModel, lineVisualStyle, itemVisualStyle, drawType, isSelected, api);
      var itemGroup = new Group$1();
      var textStyleModel = legendItemModel.getModel("textStyle");
      if (zrUtil.isFunction(seriesModel.getLegendIcon) && (!legendIconType || legendIconType === "inherit")) {
        itemGroup.add(seriesModel.getLegendIcon({
          itemWidth,
          itemHeight,
          icon: legendIcon,
          iconRotate,
          itemStyle: style.itemStyle,
          lineStyle: style.lineStyle,
          symbolKeepAspect
        }));
      } else {
        var rotate = legendIconType === "inherit" && seriesModel.getData().getVisual("symbol") ? iconRotate === "inherit" ? seriesModel.getData().getVisual("symbolRotate") : iconRotate : 0;
        itemGroup.add(getDefaultLegendIcon({
          itemWidth,
          itemHeight,
          icon: legendIcon,
          iconRotate: rotate,
          itemStyle: style.itemStyle,
          lineStyle: style.lineStyle,
          symbolKeepAspect
        }));
      }
      var textX = itemAlign === "left" ? itemWidth + 5 : -5;
      var textAlign = itemAlign;
      var formatter = legendModel.get("formatter");
      var content = name;
      if (zrUtil.isString(formatter) && formatter) {
        content = formatter.replace("{name}", name != null ? name : "");
      } else if (zrUtil.isFunction(formatter)) {
        content = formatter(name);
      }
      var textColor = isSelected ? textStyleModel.getTextColor() : legendItemModel.get("inactiveColor");
      itemGroup.add(new ZRText({
        style: createTextStyle(textStyleModel, {
          text: content,
          x: textX,
          y: itemHeight / 2,
          fill: textColor,
          align: textAlign,
          verticalAlign: "middle"
        }, {
          inheritColor: textColor
        })
      }));
      var hitRect = new Rect({
        shape: itemGroup.getBoundingRect(),
        style: {
          // Cannot use 'invisible' because SVG SSR will miss the node
          fill: "transparent"
        }
      });
      var tooltipModel = legendItemModel.getModel("tooltip");
      if (tooltipModel.get("show")) {
        setTooltipConfig({
          el: hitRect,
          componentModel: legendModel,
          itemName: name,
          itemTooltipOption: tooltipModel.option
        });
      }
      itemGroup.add(hitRect);
      itemGroup.eachChild(function(child) {
        child.silent = true;
      });
      hitRect.silent = !selectMode;
      this.getContentGroup().add(itemGroup);
      enableHoverEmphasis(itemGroup);
      itemGroup.__legendDataIndex = dataIndex;
      return itemGroup;
    };
    LegendView2.prototype.layoutInner = function(legendModel, itemAlign, maxSize, isFirstRender, selector, selectorPosition) {
      var contentGroup = this.getContentGroup();
      var selectorGroup = this.getSelectorGroup();
      box(legendModel.get("orient"), contentGroup, legendModel.get("itemGap"), maxSize.width, maxSize.height);
      var contentRect = contentGroup.getBoundingRect();
      var contentPos = [-contentRect.x, -contentRect.y];
      selectorGroup.markRedraw();
      contentGroup.markRedraw();
      if (selector) {
        box(
          // Buttons in selectorGroup always layout horizontally
          "horizontal",
          selectorGroup,
          legendModel.get("selectorItemGap", true)
        );
        var selectorRect = selectorGroup.getBoundingRect();
        var selectorPos = [-selectorRect.x, -selectorRect.y];
        var selectorButtonGap = legendModel.get("selectorButtonGap", true);
        var orientIdx = legendModel.getOrient().index;
        var wh = orientIdx === 0 ? "width" : "height";
        var hw = orientIdx === 0 ? "height" : "width";
        var yx = orientIdx === 0 ? "y" : "x";
        if (selectorPosition === "end") {
          selectorPos[orientIdx] += contentRect[wh] + selectorButtonGap;
        } else {
          contentPos[orientIdx] += selectorRect[wh] + selectorButtonGap;
        }
        selectorPos[1 - orientIdx] += contentRect[hw] / 2 - selectorRect[hw] / 2;
        selectorGroup.x = selectorPos[0];
        selectorGroup.y = selectorPos[1];
        contentGroup.x = contentPos[0];
        contentGroup.y = contentPos[1];
        var mainRect = {
          x: 0,
          y: 0
        };
        mainRect[wh] = contentRect[wh] + selectorButtonGap + selectorRect[wh];
        mainRect[hw] = Math.max(contentRect[hw], selectorRect[hw]);
        mainRect[yx] = Math.min(0, selectorRect[yx] + selectorPos[1 - orientIdx]);
        return mainRect;
      } else {
        contentGroup.x = contentPos[0];
        contentGroup.y = contentPos[1];
        return this.group.getBoundingRect();
      }
    };
    LegendView2.prototype.remove = function() {
      this.getContentGroup().removeAll();
      this._isFirstRender = true;
    };
    LegendView2.type = "legend.plain";
    return LegendView2;
  }(ComponentView)
);
function getLegendStyle(iconType, legendItemModel, lineVisualStyle, itemVisualStyle, drawType, isSelected, api) {
  function handleCommonProps(style, visualStyle) {
    if (style.lineWidth === "auto") {
      style.lineWidth = visualStyle.lineWidth > 0 ? 2 : 0;
    }
    each(style, function(propVal, propName) {
      style[propName] === "inherit" && (style[propName] = visualStyle[propName]);
    });
  }
  var itemStyleModel = legendItemModel.getModel("itemStyle");
  var itemStyle = itemStyleModel.getItemStyle();
  var iconBrushType = iconType.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke";
  var decalStyle = itemStyleModel.getShallow("decal");
  itemStyle.decal = !decalStyle || decalStyle === "inherit" ? itemVisualStyle.decal : createOrUpdatePatternFromDecal(decalStyle, api);
  if (itemStyle.fill === "inherit") {
    itemStyle.fill = itemVisualStyle[drawType];
  }
  if (itemStyle.stroke === "inherit") {
    itemStyle.stroke = itemVisualStyle[iconBrushType];
  }
  if (itemStyle.opacity === "inherit") {
    itemStyle.opacity = (drawType === "fill" ? itemVisualStyle : lineVisualStyle).opacity;
  }
  handleCommonProps(itemStyle, itemVisualStyle);
  var legendLineModel = legendItemModel.getModel("lineStyle");
  var lineStyle = legendLineModel.getLineStyle();
  handleCommonProps(lineStyle, lineVisualStyle);
  itemStyle.fill === "auto" && (itemStyle.fill = itemVisualStyle.fill);
  itemStyle.stroke === "auto" && (itemStyle.stroke = itemVisualStyle.fill);
  lineStyle.stroke === "auto" && (lineStyle.stroke = itemVisualStyle.fill);
  if (!isSelected) {
    var borderWidth = legendItemModel.get("inactiveBorderWidth");
    var visualHasBorder = itemStyle[iconBrushType];
    itemStyle.lineWidth = borderWidth === "auto" ? itemVisualStyle.lineWidth > 0 && visualHasBorder ? 2 : 0 : itemStyle.lineWidth;
    itemStyle.fill = legendItemModel.get("inactiveColor");
    itemStyle.stroke = legendItemModel.get("inactiveBorderColor");
    lineStyle.stroke = legendLineModel.get("inactiveColor");
    lineStyle.lineWidth = legendLineModel.get("inactiveWidth");
  }
  return {
    itemStyle,
    lineStyle
  };
}
function getDefaultLegendIcon(opt) {
  var symboType = opt.icon || "roundRect";
  var icon = createSymbol(symboType, 0, 0, opt.itemWidth, opt.itemHeight, opt.itemStyle.fill, opt.symbolKeepAspect);
  icon.setStyle(opt.itemStyle);
  icon.rotation = (opt.iconRotate || 0) * Math.PI / 180;
  icon.setOrigin([opt.itemWidth / 2, opt.itemHeight / 2]);
  if (symboType.indexOf("empty") > -1) {
    icon.style.stroke = icon.style.fill;
    icon.style.fill = "#fff";
    icon.style.lineWidth = 2;
  }
  return icon;
}
function dispatchSelectAction(seriesName, dataName, api, excludeSeriesId) {
  dispatchDownplayAction(seriesName, dataName, api, excludeSeriesId);
  api.dispatchAction({
    type: "legendToggleSelect",
    name: seriesName != null ? seriesName : dataName
  });
  dispatchHighlightAction(seriesName, dataName, api, excludeSeriesId);
}
function isUseHoverLayer(api) {
  var list = api.getZr().storage.getDisplayList();
  var emphasisState;
  var i = 0;
  var len = list.length;
  while (i < len && !(emphasisState = list[i].states.emphasis)) {
    i++;
  }
  return emphasisState && emphasisState.hoverLayer;
}
function dispatchHighlightAction(seriesName, dataName, api, excludeSeriesId) {
  if (!isUseHoverLayer(api)) {
    api.dispatchAction({
      type: "highlight",
      seriesName,
      name: dataName,
      excludeSeriesId
    });
  }
}
function dispatchDownplayAction(seriesName, dataName, api, excludeSeriesId) {
  if (!isUseHoverLayer(api)) {
    api.dispatchAction({
      type: "downplay",
      seriesName,
      name: dataName,
      excludeSeriesId
    });
  }
}
function legendFilter(ecModel) {
  var legendModels = ecModel.findComponents({
    mainType: "legend"
  });
  if (legendModels && legendModels.length) {
    ecModel.filterSeries(function(series) {
      for (var i = 0; i < legendModels.length; i++) {
        if (!legendModels[i].isSelected(series.name)) {
          return false;
        }
      }
      return true;
    });
  }
}
function legendSelectActionHandler(methodName, payload, ecModel) {
  var selectedMap = {};
  var isToggleSelect = methodName === "toggleSelected";
  var isSelected;
  ecModel.eachComponent("legend", function(legendModel) {
    if (isToggleSelect && isSelected != null) {
      legendModel[isSelected ? "select" : "unSelect"](payload.name);
    } else if (methodName === "allSelect" || methodName === "inverseSelect") {
      legendModel[methodName]();
    } else {
      legendModel[methodName](payload.name);
      isSelected = legendModel.isSelected(payload.name);
    }
    var legendData = legendModel.getData();
    each$1(legendData, function(model) {
      var name = model.get("name");
      if (name === "\n" || name === "") {
        return;
      }
      var isItemSelected = legendModel.isSelected(name);
      if (selectedMap.hasOwnProperty(name)) {
        selectedMap[name] = selectedMap[name] && isItemSelected;
      } else {
        selectedMap[name] = isItemSelected;
      }
    });
  });
  return methodName === "allSelect" || methodName === "inverseSelect" ? {
    selected: selectedMap
  } : {
    name: payload.name,
    selected: selectedMap
  };
}
function installLegendAction(registers) {
  registers.registerAction("legendToggleSelect", "legendselectchanged", curry$1(legendSelectActionHandler, "toggleSelected"));
  registers.registerAction("legendAllSelect", "legendselectall", curry$1(legendSelectActionHandler, "allSelect"));
  registers.registerAction("legendInverseSelect", "legendinverseselect", curry$1(legendSelectActionHandler, "inverseSelect"));
  registers.registerAction("legendSelect", "legendselected", curry$1(legendSelectActionHandler, "select"));
  registers.registerAction("legendUnSelect", "legendunselected", curry$1(legendSelectActionHandler, "unSelect"));
}
function install$2(registers) {
  registers.registerComponentModel(LegendModel);
  registers.registerComponentView(LegendView);
  registers.registerProcessor(registers.PRIORITY.PROCESSOR.SERIES_FILTER, legendFilter);
  registers.registerSubTypeDefaulter("legend", function() {
    return "plain";
  });
  installLegendAction(registers);
}
var ScrollableLegendModel = (
  /** @class */
  function(_super) {
    __extends(ScrollableLegendModel2, _super);
    function ScrollableLegendModel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = ScrollableLegendModel2.type;
      return _this;
    }
    ScrollableLegendModel2.prototype.setScrollDataIndex = function(scrollDataIndex) {
      this.option.scrollDataIndex = scrollDataIndex;
    };
    ScrollableLegendModel2.prototype.init = function(option, parentModel, ecModel) {
      var inputPositionParams = getLayoutParams(option);
      _super.prototype.init.call(this, option, parentModel, ecModel);
      mergeAndNormalizeLayoutParams(this, option, inputPositionParams);
    };
    ScrollableLegendModel2.prototype.mergeOption = function(option, ecModel) {
      _super.prototype.mergeOption.call(this, option, ecModel);
      mergeAndNormalizeLayoutParams(this, this.option, option);
    };
    ScrollableLegendModel2.type = "legend.scroll";
    ScrollableLegendModel2.defaultOption = inheritDefaultOption(LegendModel.defaultOption, {
      scrollDataIndex: 0,
      pageButtonItemGap: 5,
      pageButtonGap: null,
      pageButtonPosition: "end",
      pageFormatter: "{current}/{total}",
      pageIcons: {
        horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
        vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
      },
      pageIconColor: "#2f4554",
      pageIconInactiveColor: "#aaa",
      pageIconSize: 15,
      pageTextStyle: {
        color: "#333"
      },
      animationDurationUpdate: 800
    });
    return ScrollableLegendModel2;
  }(LegendModel)
);
function mergeAndNormalizeLayoutParams(legendModel, target, raw) {
  var orient = legendModel.getOrient();
  var ignoreSize = [1, 1];
  ignoreSize[orient.index] = 0;
  mergeLayoutParam(target, raw, {
    type: "box",
    ignoreSize: !!ignoreSize
  });
}
var Group = Group$2;
var WH = ["width", "height"];
var XY = ["x", "y"];
var ScrollableLegendView = (
  /** @class */
  function(_super) {
    __extends(ScrollableLegendView2, _super);
    function ScrollableLegendView2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.type = ScrollableLegendView2.type;
      _this.newlineDisabled = true;
      _this._currentIndex = 0;
      return _this;
    }
    ScrollableLegendView2.prototype.init = function() {
      _super.prototype.init.call(this);
      this.group.add(this._containerGroup = new Group());
      this._containerGroup.add(this.getContentGroup());
      this.group.add(this._controllerGroup = new Group());
    };
    ScrollableLegendView2.prototype.resetInner = function() {
      _super.prototype.resetInner.call(this);
      this._controllerGroup.removeAll();
      this._containerGroup.removeClipPath();
      this._containerGroup.__rectSize = null;
    };
    ScrollableLegendView2.prototype.renderInner = function(itemAlign, legendModel, ecModel, api, selector, orient, selectorPosition) {
      var self = this;
      _super.prototype.renderInner.call(this, itemAlign, legendModel, ecModel, api, selector, orient, selectorPosition);
      var controllerGroup = this._controllerGroup;
      var pageIconSize = legendModel.get("pageIconSize", true);
      var pageIconSizeArr = zrUtil.isArray(pageIconSize) ? pageIconSize : [pageIconSize, pageIconSize];
      createPageButton("pagePrev", 0);
      var pageTextStyleModel = legendModel.getModel("pageTextStyle");
      controllerGroup.add(new ZRText({
        name: "pageText",
        style: {
          // Placeholder to calculate a proper layout.
          text: "xx/xx",
          fill: pageTextStyleModel.getTextColor(),
          font: pageTextStyleModel.getFont(),
          verticalAlign: "middle",
          align: "center"
        },
        silent: true
      }));
      createPageButton("pageNext", 1);
      function createPageButton(name, iconIdx) {
        var pageDataIndexName = name + "DataIndex";
        var icon = createIcon(legendModel.get("pageIcons", true)[legendModel.getOrient().name][iconIdx], {
          // Buttons will be created in each render, so we do not need
          // to worry about avoiding using legendModel kept in scope.
          onclick: zrUtil.bind(self._pageGo, self, pageDataIndexName, legendModel, api)
        }, {
          x: -pageIconSizeArr[0] / 2,
          y: -pageIconSizeArr[1] / 2,
          width: pageIconSizeArr[0],
          height: pageIconSizeArr[1]
        });
        icon.name = name;
        controllerGroup.add(icon);
      }
    };
    ScrollableLegendView2.prototype.layoutInner = function(legendModel, itemAlign, maxSize, isFirstRender, selector, selectorPosition) {
      var selectorGroup = this.getSelectorGroup();
      var orientIdx = legendModel.getOrient().index;
      var wh = WH[orientIdx];
      var xy = XY[orientIdx];
      var hw = WH[1 - orientIdx];
      var yx = XY[1 - orientIdx];
      selector && box(
        // Buttons in selectorGroup always layout horizontally
        "horizontal",
        selectorGroup,
        legendModel.get("selectorItemGap", true)
      );
      var selectorButtonGap = legendModel.get("selectorButtonGap", true);
      var selectorRect = selectorGroup.getBoundingRect();
      var selectorPos = [-selectorRect.x, -selectorRect.y];
      var processMaxSize = zrUtil.clone(maxSize);
      selector && (processMaxSize[wh] = maxSize[wh] - selectorRect[wh] - selectorButtonGap);
      var mainRect = this._layoutContentAndController(legendModel, isFirstRender, processMaxSize, orientIdx, wh, hw, yx, xy);
      if (selector) {
        if (selectorPosition === "end") {
          selectorPos[orientIdx] += mainRect[wh] + selectorButtonGap;
        } else {
          var offset = selectorRect[wh] + selectorButtonGap;
          selectorPos[orientIdx] -= offset;
          mainRect[xy] -= offset;
        }
        mainRect[wh] += selectorRect[wh] + selectorButtonGap;
        selectorPos[1 - orientIdx] += mainRect[yx] + mainRect[hw] / 2 - selectorRect[hw] / 2;
        mainRect[hw] = Math.max(mainRect[hw], selectorRect[hw]);
        mainRect[yx] = Math.min(mainRect[yx], selectorRect[yx] + selectorPos[1 - orientIdx]);
        selectorGroup.x = selectorPos[0];
        selectorGroup.y = selectorPos[1];
        selectorGroup.markRedraw();
      }
      return mainRect;
    };
    ScrollableLegendView2.prototype._layoutContentAndController = function(legendModel, isFirstRender, maxSize, orientIdx, wh, hw, yx, xy) {
      var contentGroup = this.getContentGroup();
      var containerGroup = this._containerGroup;
      var controllerGroup = this._controllerGroup;
      box(legendModel.get("orient"), contentGroup, legendModel.get("itemGap"), !orientIdx ? null : maxSize.width, orientIdx ? null : maxSize.height);
      box(
        // Buttons in controller are layout always horizontally.
        "horizontal",
        controllerGroup,
        legendModel.get("pageButtonItemGap", true)
      );
      var contentRect = contentGroup.getBoundingRect();
      var controllerRect = controllerGroup.getBoundingRect();
      var showController = this._showController = contentRect[wh] > maxSize[wh];
      var contentPos = [-contentRect.x, -contentRect.y];
      if (!isFirstRender) {
        contentPos[orientIdx] = contentGroup[xy];
      }
      var containerPos = [0, 0];
      var controllerPos = [-controllerRect.x, -controllerRect.y];
      var pageButtonGap = zrUtil.retrieve2(legendModel.get("pageButtonGap", true), legendModel.get("itemGap", true));
      if (showController) {
        var pageButtonPosition = legendModel.get("pageButtonPosition", true);
        if (pageButtonPosition === "end") {
          controllerPos[orientIdx] += maxSize[wh] - controllerRect[wh];
        } else {
          containerPos[orientIdx] += controllerRect[wh] + pageButtonGap;
        }
      }
      controllerPos[1 - orientIdx] += contentRect[hw] / 2 - controllerRect[hw] / 2;
      contentGroup.setPosition(contentPos);
      containerGroup.setPosition(containerPos);
      controllerGroup.setPosition(controllerPos);
      var mainRect = {
        x: 0,
        y: 0
      };
      mainRect[wh] = showController ? maxSize[wh] : contentRect[wh];
      mainRect[hw] = Math.max(contentRect[hw], controllerRect[hw]);
      mainRect[yx] = Math.min(0, controllerRect[yx] + controllerPos[1 - orientIdx]);
      containerGroup.__rectSize = maxSize[wh];
      if (showController) {
        var clipShape = {
          x: 0,
          y: 0
        };
        clipShape[wh] = Math.max(maxSize[wh] - controllerRect[wh] - pageButtonGap, 0);
        clipShape[hw] = mainRect[hw];
        containerGroup.setClipPath(new Rect({
          shape: clipShape
        }));
        containerGroup.__rectSize = clipShape[wh];
      } else {
        controllerGroup.eachChild(function(child) {
          child.attr({
            invisible: true,
            silent: true
          });
        });
      }
      var pageInfo = this._getPageInfo(legendModel);
      pageInfo.pageIndex != null && updateProps$1(
        contentGroup,
        {
          x: pageInfo.contentPosition[0],
          y: pageInfo.contentPosition[1]
        },
        // When switch from "show controller" to "not show controller", view should be
        // updated immediately without animation, otherwise causes weird effect.
        showController ? legendModel : null
      );
      this._updatePageInfoView(legendModel, pageInfo);
      return mainRect;
    };
    ScrollableLegendView2.prototype._pageGo = function(to, legendModel, api) {
      var scrollDataIndex = this._getPageInfo(legendModel)[to];
      scrollDataIndex != null && api.dispatchAction({
        type: "legendScroll",
        scrollDataIndex,
        legendId: legendModel.id
      });
    };
    ScrollableLegendView2.prototype._updatePageInfoView = function(legendModel, pageInfo) {
      var controllerGroup = this._controllerGroup;
      zrUtil.each(["pagePrev", "pageNext"], function(name) {
        var key = name + "DataIndex";
        var canJump = pageInfo[key] != null;
        var icon = controllerGroup.childOfName(name);
        if (icon) {
          icon.setStyle("fill", canJump ? legendModel.get("pageIconColor", true) : legendModel.get("pageIconInactiveColor", true));
          icon.cursor = canJump ? "pointer" : "default";
        }
      });
      var pageText = controllerGroup.childOfName("pageText");
      var pageFormatter = legendModel.get("pageFormatter");
      var pageIndex = pageInfo.pageIndex;
      var current = pageIndex != null ? pageIndex + 1 : 0;
      var total = pageInfo.pageCount;
      pageText && pageFormatter && pageText.setStyle("text", zrUtil.isString(pageFormatter) ? pageFormatter.replace("{current}", current == null ? "" : current + "").replace("{total}", total == null ? "" : total + "") : pageFormatter({
        current,
        total
      }));
    };
    ScrollableLegendView2.prototype._getPageInfo = function(legendModel) {
      var scrollDataIndex = legendModel.get("scrollDataIndex", true);
      var contentGroup = this.getContentGroup();
      var containerRectSize = this._containerGroup.__rectSize;
      var orientIdx = legendModel.getOrient().index;
      var wh = WH[orientIdx];
      var xy = XY[orientIdx];
      var targetItemIndex = this._findTargetItemIndex(scrollDataIndex);
      var children = contentGroup.children();
      var targetItem = children[targetItemIndex];
      var itemCount = children.length;
      var pCount = !itemCount ? 0 : 1;
      var result = {
        contentPosition: [contentGroup.x, contentGroup.y],
        pageCount: pCount,
        pageIndex: pCount - 1,
        pagePrevDataIndex: null,
        pageNextDataIndex: null
      };
      if (!targetItem) {
        return result;
      }
      var targetItemInfo = getItemInfo(targetItem);
      result.contentPosition[orientIdx] = -targetItemInfo.s;
      for (var i = targetItemIndex + 1, winStartItemInfo = targetItemInfo, winEndItemInfo = targetItemInfo, currItemInfo = null; i <= itemCount; ++i) {
        currItemInfo = getItemInfo(children[i]);
        if (
          // Half of the last item is out of the window.
          !currItemInfo && winEndItemInfo.e > winStartItemInfo.s + containerRectSize || currItemInfo && !intersect(currItemInfo, winStartItemInfo.s)
        ) {
          if (winEndItemInfo.i > winStartItemInfo.i) {
            winStartItemInfo = winEndItemInfo;
          } else {
            winStartItemInfo = currItemInfo;
          }
          if (winStartItemInfo) {
            if (result.pageNextDataIndex == null) {
              result.pageNextDataIndex = winStartItemInfo.i;
            }
            ++result.pageCount;
          }
        }
        winEndItemInfo = currItemInfo;
      }
      for (var i = targetItemIndex - 1, winStartItemInfo = targetItemInfo, winEndItemInfo = targetItemInfo, currItemInfo = null; i >= -1; --i) {
        currItemInfo = getItemInfo(children[i]);
        if (
          // If the the end item does not intersect with the window started
          // from the current item, a page can be settled.
          (!currItemInfo || !intersect(winEndItemInfo, currItemInfo.s)) && winStartItemInfo.i < winEndItemInfo.i
        ) {
          winEndItemInfo = winStartItemInfo;
          if (result.pagePrevDataIndex == null) {
            result.pagePrevDataIndex = winStartItemInfo.i;
          }
          ++result.pageCount;
          ++result.pageIndex;
        }
        winStartItemInfo = currItemInfo;
      }
      return result;
      function getItemInfo(el) {
        if (el) {
          var itemRect = el.getBoundingRect();
          var start = itemRect[xy] + el[xy];
          return {
            s: start,
            e: start + itemRect[wh],
            i: el.__legendDataIndex
          };
        }
      }
      function intersect(itemInfo, winStart) {
        return itemInfo.e >= winStart && itemInfo.s <= winStart + containerRectSize;
      }
    };
    ScrollableLegendView2.prototype._findTargetItemIndex = function(targetDataIndex) {
      if (!this._showController) {
        return 0;
      }
      var index;
      var contentGroup = this.getContentGroup();
      var defaultIndex;
      contentGroup.eachChild(function(child, idx) {
        var legendDataIdx = child.__legendDataIndex;
        if (defaultIndex == null && legendDataIdx != null) {
          defaultIndex = idx;
        }
        if (legendDataIdx === targetDataIndex) {
          index = idx;
        }
      });
      return index != null ? index : defaultIndex;
    };
    ScrollableLegendView2.type = "legend.scroll";
    return ScrollableLegendView2;
  }(LegendView)
);
function installScrollableLegendAction(registers) {
  registers.registerAction("legendScroll", "legendscroll", function(payload, ecModel) {
    var scrollDataIndex = payload.scrollDataIndex;
    scrollDataIndex != null && ecModel.eachComponent({
      mainType: "legend",
      subType: "scroll",
      query: payload
    }, function(legendModel) {
      legendModel.setScrollDataIndex(scrollDataIndex);
    });
  });
}
function install$1(registers) {
  use(install$2);
  registers.registerComponentModel(ScrollableLegendModel);
  registers.registerComponentView(ScrollableLegendView);
  installScrollableLegendAction(registers);
}
function install(registers) {
  use(install$2);
  use(install$1);
}
const cardProps = buildProps({
  header: {
    type: String,
    default: ""
  },
  footer: {
    type: String,
    default: ""
  },
  bodyStyle: {
    type: definePropType([String, Object, Array]),
    default: ""
  },
  bodyClass: String,
  shadow: {
    type: String,
    values: ["always", "hover", "never"],
    default: "always"
  }
});
const __default__ = defineComponent({
  name: "ElCard"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: cardProps,
  setup(__props) {
    const ns = useNamespace("card");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b(), unref(ns).is(`${_ctx.shadow}-shadow`)])
      }, [
        _ctx.$slots.header || _ctx.header ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).e("header"))
        }, [
          renderSlot(_ctx.$slots, "header", {}, () => [
            createTextVNode(toDisplayString(_ctx.header), 1)
          ])
        ], 2)) : createCommentVNode("v-if", true),
        createElementVNode("div", {
          class: normalizeClass([unref(ns).e("body"), _ctx.bodyClass]),
          style: normalizeStyle(_ctx.bodyStyle)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 6),
        _ctx.$slots.footer || _ctx.footer ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(ns).e("footer"))
        }, [
          renderSlot(_ctx.$slots, "footer", {}, () => [
            createTextVNode(toDisplayString(_ctx.footer), 1)
          ])
        ], 2)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var Card = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "card.vue"]]);
const ElCard = withInstall(Card);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "doughnut",
  __ssrInlineRender: true,
  props: {
    width: {},
    height: {},
    data: {}
  },
  setup(__props) {
    use([
      install$5,
      install$4,
      install$3,
      install$6,
      install,
      installLabelLayout
    ]);
    const props = __props;
    const option = ref({
      tooltip: { trigger: "item" },
      legend: {
        orient: "vertical",
        // 图例方向改为垂直
        right: "5%",
        // 图例位于图表右侧
        top: "center",
        // 居中对齐
        textStyle: { color: "#000000" }
        // 图例字体颜色
      },
      series: [
        {
          name: "\u5BA2\u6237\u6570",
          type: "pie",
          radius: ["40%", "70%"],
          // 外半径和内半径，形成环形图
          center: ["25%", "50%"],
          // 调整图表的中心位置，向左移动
          label: {
            show: false
            // 隐藏标签文字
          },
          labelLine: {
            show: false
            // 隐藏标签连线
          },
          itemStyle: {
            borderColor: "#ffffff",
            // 边框颜色
            borderWidth: 2
            // 边框宽度
          },
          data: props.data || []
        }
      ]
    });
    ref(props.width || "550px");
    ref(props.height || "250px");
    watch(() => props.data, (newData) => {
      option.value.series[0].data = newData;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex" }, _attrs))} data-v-0614a998>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Echart/doughnut.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-0614a998"]]);

export { ElCard as E, __nuxt_component_5 as _, install as a, installLabelLayout as b, install$3 as i };
//# sourceMappingURL=doughnut-BAo8Tv3m.mjs.map
