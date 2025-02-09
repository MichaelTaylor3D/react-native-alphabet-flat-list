"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_native_1 = require("react-native");
const SectionListItem_1 = require("./SectionListItem");
const react_native_simple_toast_1 = require("react-native-simple-toast");
const initState = {
    selectAlphabet: "",
    itemHeight: 0,
};
class AlphabetListView extends react_1.PureComponent {
    constructor(props) {
        super(props);
        this.onTouchChange = (e, gestureState) => {
            const itemHeight = this.props.contentHeight / this.props.titles.length;
            const event = e.nativeEvent || {};
            const index = Math.floor((event.pageY - this.props.pageY) / itemHeight);
            if (index >= 0 && index <= this.props.titles.length - 1) {
                this.props.onSelect && this.props.onSelect(index);
                this.updateSelectAlphabet(this.props.titles[index]);
                react_native_simple_toast_1.default.showWithGravity(this.props.titles[index], react_native_simple_toast_1.default.SHORT, react_native_simple_toast_1.default.CENTER);
            }
        };
        this.responder = react_native_1.PanResponder.create({
            onStartShouldSetPanResponderCapture: () => true,
            onStartShouldSetPanResponder: () => true,
            onPanResponderTerminationRequest: () => true,
            onPanResponderGrant: this.onTouchChange,
            onPanResponderMove: this.onTouchChange,
        });
        this.state = initState;
    }
    componentDidMount() {
        this.initData(this.props);
    }
    componentWillReceiveProps(props) {
        this.initData(props);
    }
    updateSelectAlphabet(selectAlphabet) {
        this.setState({
            selectAlphabet: selectAlphabet,
        });
    }
    initData({ titles, contentHeight }) {
        this.setState({
            selectAlphabet: this.state.selectAlphabet || titles[0],
            itemHeight: contentHeight / titles.length,
        });
    }
    render() {
        const { selectAlphabet, itemHeight } = this.state;
        if (itemHeight < 13) {
            return null;
        }
        const { topPosition, contentHeight, titles } = this.props;
        return (<react_native_1.View style={{
                position: "absolute",
                top: topPosition,
                right: 5,
                zIndex: 10,
                height: contentHeight,
            }} {...this.responder.panHandlers}>
        {titles.map((title) => (<SectionListItem_1.default key={title} height={itemHeight} title={title} active={selectAlphabet === title}/>))}
      </react_native_1.View>);
    }
}
exports.default = AlphabetListView;
//# sourceMappingURL=AlphabetListView.js.map