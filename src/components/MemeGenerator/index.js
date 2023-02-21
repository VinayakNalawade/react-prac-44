import {Component} from 'react'

import {
  Container,
  ResultContainer,
  Heading,
  Button,
  Label,
  Input,
  ResponsiveContainer,
  ContentContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    fontSize: fontSizesOptionsList.optionId,
    topText: '',
    bottomText: '',
    isGenerated: false,
  }

  onChangeImageUrl = event => this.setState({imageUrl: event.target.value})

  onChangeFontSize = event => this.setState({fontSize: event.target.value})

  onChangeTopText = event => this.setState({topText: event.target.value})

  onChangeBottomText = event => this.setState({bottomText: event.target.value})

  onClickIsGenerated = event => {
    event.preventDefault()
    this.setState({isGenerated: true})
  }

  renderMeme = () => {
    const {imageUrl, topText, bottomText, fontSize} = this.state

    return (
      <ResultContainer flexContent bgImage={imageUrl} data-testid="meme">
        <Heading as="p" textCenter color="#ffffff" fontSize={fontSize}>
          {topText}
        </Heading>
        <Heading as="p" textCenter color="#ffffff" fontSize={fontSize}>
          {bottomText}
        </Heading>
      </ResultContainer>
    )
  }

  render() {
    const {isGenerated, imageUrl, topText, bottomText, fontSize} = this.state
    return (
      <Container>
        <Heading color="#35469c" fontSize="28">
          Meme Generator
        </Heading>
        <ResponsiveContainer>
          {isGenerated && this.renderMeme()}

          <ContentContainer as="form" onSubmit={this.onClickIsGenerated}>
            <Label htmlFor="imageUrl">Image Url</Label>
            <Input
              type="input"
              id="imageUrl"
              value={imageUrl}
              onChange={this.onChangeImageUrl}
            />

            <Label htmlFor="topText">Top Text</Label>
            <Input
              type="input"
              id="topText"
              value={topText}
              onChange={this.onChangeTopText}
            />

            <Label htmlFor="bottomText">Bottom Text</Label>
            <Input
              type="input"
              id="bottomText"
              value={bottomText}
              onChange={this.onChangeBottomText}
            />

            <Label htmlFor="fontSize">Font Size</Label>
            <Input
              id="fontSize"
              as="select"
              value={fontSize}
              onChange={this.onChangeFontSize}
            >
              {fontSizesOptionsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </Input>

            <Button type="submit">Generate</Button>
          </ContentContainer>
        </ResponsiveContainer>
      </Container>
    )
  }
}

export default MemeGenerator
