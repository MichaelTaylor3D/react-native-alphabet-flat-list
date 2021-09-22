"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const styles_1 = require("./styles");
const SectionListItem = function (props) {
    return (<react_native_1.View style={[styles_1.default.sectionListItemContainer, { height: props.height }]}>
      <react_native_1.View style={[styles_1.default.sectionListItemWrapper, {
                backgroundColor: props.active ? '#0ea8ff' : 'transparent',
            }]}>
        <react_native_1.Text style={[styles_1.default.sectionListItemText, {
                color: props.active ? 'white' : '#333',
            }]}>
          {props.title}
        </react_native_1.Text>
      </react_native_1.View>
    </react_native_1.View>);
};
exports.default = SectionListItem;
//# sourceMappingURL=SectionListItem.js.map