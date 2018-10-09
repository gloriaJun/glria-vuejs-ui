# Slider

## Examples
### Basic
<code-pen hash='JmEQOy' :height="200"></code-pen>

### Show Step
<code-pen hash='VEPJEB' :height="200"></code-pen>

### Disabled
<code-pen hash='KGajJz' :height="200"></code-pen>

### Range
<code-pen hash='YJNoMR' :height="200"></code-pen>

## API
### Props
| Name | Type | Default | Required | Description |
| ------ | ----------- | ------ |:-----:|:-------------|
| v-model | String, Number, Array | | no | if array type, set range |
| color  | String | 'primary' | no | Color of the alert |
| min | Number | 0 | no | min value |
| max| Number | 100 | no | max value |
| step | Number | 1 | no | |
| showValue | Boolean | false | no | |
| showStep | Boolean | false | no | |
| showTooltip | Boolean | false | no | |
| disabled | Boolean | false | no | |

### Events
| Event Name | Parameters | Description |
| ------ | ----------- | ------ |
| change | - | when value is changed |
