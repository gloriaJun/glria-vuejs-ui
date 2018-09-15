# Tag

## Examples
### Basic
<code-pen hash='ZMMEze' :height="200"></code-pen>

### link 
<code-pen hash='gddOOJ' :height="150"></code-pen>

### closable
<code-pen hash='BOOaNa' :height="150"></code-pen>

### with icon
<code-pen hash='eLLYNR' :height="150"></code-pen>


## API
### Props
| Name | Type | Default | Required | Description |
| ------ | ----------- | ------ |:-----:|:-------------|
| color   | String | 'primary' | no | background color |
| round   | Boolean | false | no |  |
| outline   | Boolean | false | no |  |
| link   | Boolean | false | no |  |
| closable   | Boolean | false | no |  |

### Events
| Event Name | Parameters | Description |
| ------ | ----------- | ------ |:-----:|:-------------|
| click | - | if type is link, triggers when tag clicked |
| close | - | if closable is true, triggers when close icon clicked |
