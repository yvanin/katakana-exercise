import React, { Component } from 'react';
import './Test.css';

const KANA_TABLE = [
  ['ア', 'a'], ['イ', 'i'], ['ウ', 'u'], ['エ', 'e'], ['オ', 'o'],
  ['カ', 'ka'], ['キ', 'ki'], ['ク', 'ku'], ['ケ', 'ke'], ['コ', 'ko'],
  ['サ', 'sa'], ['シ', 'shi'], ['ス', 'su'], ['セ', 'se'], ['ソ', 'so'],
  ['タ', 'ta'], ['チ', 'chi'], ['ツ', 'tsu'], ['テ', 'te'], ['ト', 'to'],
  ['ナ', 'na'], ['ニ', 'ni'], ['ヌ', 'nu'], ['ネ', 'ne'], ['ノ', 'no'],
  ['ハ', 'ha'], ['ヒ', 'hi'], ['フ', 'fu'], ['ヘ', 'he'], ['ホ', 'ho'],
  ['マ', 'ma'], ['ミ', 'mi'], ['ム', 'mu'], ['メ', 'me'], ['モ', 'mo'],
  ['ヤ', 'ya'], ['ユ', 'yu'], ['ヨ', 'yo'],
  ['ラ', 'ra'], ['リ', 'ri'], ['ル', 'ru'], ['レ', 're'], ['ロ', 'ro'],
  ['ワ', 'wa'], ['ヲ', 'wo'], ['ン', 'n'],
  ['ガ', 'ga'], ['ザ', 'za'], ['ダ', 'da'], ['バ', 'ba'], ['パ', 'pa'],
  ['ギ', 'gi'], ['ジ', 'ji'], ['ヂ', 'dzi'], ['ビ', 'bi'], ['ピ', 'pi'],
  ['グ', 'gu'], ['ズ', 'zu'], ['ヅ', 'dzu'], ['ブ', 'bu'], ['プ', 'pu'],
  ['ゲ', 'ge'], ['ゼ', 'ze'], ['デ', 'de'], ['ベ', 'be'], ['ペ', 'pe'],
  ['ゴ', 'go'], ['ゾ', 'zo'], ['ド', 'do'], ['ボ', 'bo'], ['ポ', 'po'],
];

const KANA = 0;
const SOUND = 1;

class Test extends Component {
  constructor() {
    super();
    this.state = {
      currentTest: this.getNewTest(null),
      prevTest: null,
      testValue: '',
      className: ''
    };
  }

  getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

  getNewTest(currentTest) {
    do {
      var newTest = KANA_TABLE[this.getRandomInt(KANA_TABLE.length)];
    } while (newTest === currentTest);

    return newTest;
  }

  startNewTest() {
    this.setState({
      currentTest: this.getNewTest(this.state.currentTest),
      prevTest: this.state.currentTest,
      testValue: '',
      className: ''
    });    
  }

  submitTest(testValue) {
    if (testValue.trim().toLowerCase() === this.state.currentTest[SOUND]) {
      this.setState({
        className: 'success'
      });
      setTimeout(() => this.startNewTest(), 100);
    } else {
      this.setState({
        className: 'error'
      });
    }
  }

  handleTextChange(e) {
    if (e.target.value !== ' ') {
      this.setState({
        testValue: e.target.value
      });
    }
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.submitTest(e.target.value);
    } else if (e.key === ' ') {
      this.setState({
        className: 'error'
      });
      setTimeout(() => this.startNewTest(), 100);
    }
  }

  render() {
    return (
      <div className={ this.state.className }>
        <div className="kana">
          { this.state.currentTest[KANA] }          
        </div>
        <div className="test">
          <input type="text"
                 value={this.state.testValue}
                 onChange={this.handleTextChange.bind(this)}
                 onKeyPress={this.handleKeyPress.bind(this)} />
        </div>
        <p className="action-help">
          Press enter to check your answer, press space to skip
        </p>
      </div>
    );
  }
}

export default Test;