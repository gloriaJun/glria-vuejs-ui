# Tabs

## Examples
### Basic
<code-pen hash='mGGOjG'></code-pen>

### Disabled
<code-pen hash='OooWbJ'></code-pen>

### custom label
<code-pen hash='ZMMLBy'></code-pen>

### Style
<code-pen hash='oPPBYa' :height="800"></code-pen>

### Type
<code-pen hash='KxxaWN' :height="400"></code-pen>


## API
### Props
| Name | Type | Default | Required | Description |
| ------ | ----------- | ------ |:-----:|:-------------|
| type | String | 'line' | no | line, card, pills |
| align | String | 'left' | no | left, center, right |
| expanded | Boolean | false | no | whether width of tab automatically fits its container |

#### Tab Item
| Name | Type | Default | Required | Description |
| ------ | ----------- | ------ |:-----:|:-------------|
| label | String | - | no | tab label |
| name | String | - | no | tab name |
| active | Boolean | false | no | is active |
| disabled | Boolean | false | no | is disabled |

### Events
| Event Name | Parameters | Description |
| ------ | ----------- | ------ |:-----:|:-------------|
| tab-click | - | when tab clicked |
